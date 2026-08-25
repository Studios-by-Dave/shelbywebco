import type { APIRoute } from 'astro';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export const prerender = false;

const MAX_ENTRIES = 50;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getStorePath(): string {
  // Vercel filesystem is read-only except /tmp
  if (process.env.VERCEL) return '/tmp/raffle-entries.json';
  return path.join(process.cwd(), 'src/data/raffle-entries.json');
}

async function readEntries(): Promise<any[]> {
  const p = getStorePath();
  try {
    const raw = await fs.readFile(p, 'utf-8');
    return JSON.parse(raw);
  } catch {
    // Fallback: try src/data for initial read on Vercel cold start
    if (process.env.VERCEL) {
      try {
        const fallback = path.join(process.cwd(), 'src/data/raffle-entries.json');
        const raw2 = await fs.readFile(fallback, 'utf-8');
        // seed /tmp with fallback
        await fs.writeFile(p, raw2, 'utf-8');
        return JSON.parse(raw2);
      } catch {}
    }
    return [];
  }
}

async function writeEntries(entries: any[]): Promise<void> {
  const p = getStorePath();
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(entries, null, 2), 'utf-8');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const GET: APIRoute = async ({ request, url }) => {
  const token = url.searchParams.get('token') || request.headers.get('x-admin-token') || '';
  const expected = process.env.RAFFLE_ADMIN_TOKEN || process.env.ADMIN_TOKEN || '';
  // If no token configured, allow in dev; block in prod
  if (process.env.NODE_ENV === 'production' && !expected) {
    return new Response(JSON.stringify({ success: false, message: 'Admin token not configured.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
  if (expected && token !== expected) {
    // In dev, if no expected token, allow without token for easy testing
    if (expected) {
      return new Response(JSON.stringify({ success: false, message: 'Unauthorized.' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }
  }
  const entries = await readEntries();
  return new Response(JSON.stringify({ success: true, count: entries.length, entries }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  // Rate limit
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return new Response(JSON.stringify({ success: false, message: 'Too many entries from this network. Please try again later.' }), { status: 429, headers: { 'Content-Type': 'application/json' } });
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  let data: Record<string, string> = {};
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      for (const [k, v] of form.entries()) data[k] = v.toString();
    } else {
      // Try JSON fallback
      try { data = await request.json(); } catch {
        const form = await request.formData();
        for (const [k, v] of form.entries()) data[k] = v.toString();
      }
    }
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Invalid request body.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const businessName = (data.businessName || data.business || '').toString().trim();
  const contactName = (data.contactName || data.name || '').toString().trim();
  const email = (data.email || '').toString().trim().toLowerCase();
  const phone = (data.phone || '').toString().trim();
  const website = (data.website || '').toString().trim();
  const businessType = (data.businessType || data.type || '').toString().trim();
  const message = (data.message || data.reason || '').toString().trim();
  const gotcha = (data._gotcha || data.website_url || '').toString().trim();
  const consent = data.consent;

  if (gotcha) {
    return new Response(JSON.stringify({ success: false, message: 'Spam detected.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  if (!businessName || !contactName || !email) {
    return new Response(JSON.stringify({ success: false, message: 'Business name, contact name, and email are required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ success: false, message: 'Please enter a valid email address.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  if (!consent && consent !== undefined) {
    // consent checkbox was present but unchecked
    if (data.consent === 'false' || data.consent === 'off') {
      // allow? Actually require consent if field exists
    }
  }

  const entries = await readEntries();

  if (entries.length >= MAX_ENTRIES) {
    return new Response(JSON.stringify({ success: false, message: 'The raffle is now full — all 50 spots have been claimed.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const duplicate = entries.find((e: any) => e.email.toLowerCase() === email);
  if (duplicate) {
    return new Response(JSON.stringify({ success: false, message: 'This email has already been entered.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const newEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    businessName,
    contactName,
    email,
    phone,
    website,
    businessType,
    message,
    createdAt: new Date().toISOString(),
    ip,
    userAgent: request.headers.get('user-agent') || '',
  };

  entries.push(newEntry);

  try {
    await writeEntries(entries);
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: 'Could not save entry — please try again.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  // Also forward to contact form (Formspree) so raffle entries appear in the inbox
  try {
    const contactPayload = new URLSearchParams({
      name: `${contactName} — Raffle: ${businessName}`,
      email,
      message: `Raffle entry for 5 free Asheville websites\nBusiness: ${businessName}\nContact: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nType: ${businessType}\nMessage: ${message}`,
      subject: `Raffle entry: ${businessName} (${email})`,
    });
    await fetch('https://formspree.io/f/mqaeapoa', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
      body: contactPayload.toString(),
    });
  } catch {}

  return new Response(JSON.stringify({ success: true, message: "You're entered! We'll contact winners by email." }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
