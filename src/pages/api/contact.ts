import type { APIRoute } from 'astro';
import { buildFormspreePayload, normalizeContactSubmission } from '../../utils/contactSubmission.js';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') || '';
  const isFormSubmission = contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded') || contentType.includes('application/json');

  if (!isFormSubmission) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid form submission format.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let rawData: Record<string, unknown> = {};

  if (contentType.includes('application/json')) {
    rawData = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  } else {
    const formData = await request.formData();
    rawData = Object.fromEntries(formData.entries());
  }

  const submission = normalizeContactSubmission(rawData);
  const gotcha = String(rawData._gotcha ?? rawData.botcheck ?? '').trim();

  if (gotcha) {
    return new Response(JSON.stringify({ success: false, message: 'Spam detected.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!submission.name || !submission.email || !submission.message) {
    return new Response(JSON.stringify({ success: false, message: 'Please complete all required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const payload = buildFormspreePayload(submission);

  const body: Record<string, string> = Object.fromEntries(payload.entries());
  body._captcha = 'false';
  body._template = 'table';
  body._subject = submission.subject;
  body._replyto = submission.email;

  try {
    const response = await fetch('https://formsubmit.co/ajax/dave@shelbywebco.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://www.shelbywebco.com',
        Referer: 'https://www.shelbywebco.com/'
      },
      body: JSON.stringify(body)
    });

    const result = (await response.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    const ok = result.success === true || result.success === 'true';

    if (!response.ok || !ok) {
      throw new Error(result.message || 'The message service could not accept the submission right now.');
    }

    return new Response(JSON.stringify({ success: true, message: 'Thanks! Your message was sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error instanceof Error ? error.message : 'Unable to send message right now.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
