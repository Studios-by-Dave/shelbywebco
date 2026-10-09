import test from 'node:test';
import assert from 'node:assert/strict';

import {
  normalizeContactSubmission,
  buildFormspreePayload,
  DEFAULT_CONTACT_EMAIL,
} from '../src/utils/contactSubmission.js';

test('golden ticket submissions normalize into a complete email body', () => {
  const submission = normalizeContactSubmission({
    name: 'Jamie Smith',
    email: 'jamie@example.com',
    business: 'Smith Home Services',
    industry: 'Home services & trades',
    phone: '(704) 555-0123',
    story: 'We need a better website and better leads for the next 12 months.',
    form_type: 'The Golden Ticket',
  });

  assert.equal(submission.email, 'jamie@example.com');
  assert.equal(submission.to, DEFAULT_CONTACT_EMAIL);
  assert.match(submission.message, /Smith Home Services/i);
  assert.match(submission.message, /Home services & trades/i);
  assert.match(submission.subject, /The Golden Ticket/i);
});

test('formspree payload keeps the sender email and routes the inbox to the team address', () => {
  const payload = buildFormspreePayload({
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    message: 'Looking for a new website and SEO strategy.',
    subject: 'New Contact Form Submission from Shelby Web Co',
  });

  assert.equal(payload.get('email'), 'jordan@example.com');
  assert.equal(payload.get('to'), DEFAULT_CONTACT_EMAIL);
  assert.equal(payload.get('subject'), 'New Contact Form Submission from Shelby Web Co');
  assert.equal(payload.get('name'), 'Jordan Lee');
});
