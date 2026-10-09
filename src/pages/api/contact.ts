import type { APIRoute } from 'astro';
import { buildFormspreePayload, normalizeContactSubmission } from '../../utils/contactSubmission.js';

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

  try {
    const response = await fetch('https://formspree.io/f/mqaeapoa', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payload.toString()
    });

    if (!response.ok) {
      throw new Error('The message service could not accept the submission right now.');
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
