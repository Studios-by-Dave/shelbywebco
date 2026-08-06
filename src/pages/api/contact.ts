import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';
  const gotcha = formData.get('_gotcha')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, message: 'Please complete all required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (gotcha) {
    return new Response(JSON.stringify({ success: false, message: 'Spam detected.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const payload = new URLSearchParams({
    name,
    email,
    message,
    subject: `New contact form submission from ${name}`
  });

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
