export const DEFAULT_CONTACT_EMAIL = 'dave@shelbywebco.com';

function sanitizeText(value) {
  return (typeof value === 'string' ? value : value == null ? '' : String(value)).trim();
}

function buildSubject(data) {
  const formType = sanitizeText(data.form_type || data.formType || 'Contact Form');
  if (formType && formType !== 'Contact Form') {
    return `${formType} — Shelby Web Co`;
  }
  return 'New Contact Form Submission from Shelby Web Co';
}

const SERVICE_LABELS = {
  'website-seo': 'Website + SEO',
  'website': 'Website only',
  'unsure': 'Not sure yet',
};

// Maps the fixed set of allowed values to labels. Anything else is ignored
// rather than echoed, since this endpoint also accepts arbitrary JSON.
function normalizeService(value) {
  const key = sanitizeText(value).toLowerCase();
  return SERVICE_LABELS[key] ? key : '';
}

function buildMessage(data) {
  const name = sanitizeText(data.name);
  const email = sanitizeText(data.email);
  const phone = sanitizeText(data.phone);
  const business = sanitizeText(data.business);
  const industry = sanitizeText(data.industry);
  const town = sanitizeText(data.town);
  const website = sanitizeText(data.website);
  const challenge = sanitizeText(data.challenge);
  const budget = sanitizeText(data.budget);
  const service = normalizeService(data.service);
  const story = sanitizeText(data.story || data.message || data.details);

  const lines = [];

  if (name) lines.push(`Name: ${name}`);
  if (email) lines.push(`Email: ${email}`);
  if (phone) lines.push(`Phone: ${phone}`);
  if (business) lines.push(`Business: ${business}`);
  if (industry) lines.push(`Industry: ${industry}`);
  if (town) lines.push(`Town: ${town}`);
  if (website) lines.push(`Website: ${website}`);
  if (service) lines.push(`Interested in: ${SERVICE_LABELS[service]}`);
  if (challenge) lines.push(`SEO challenge: ${challenge}`);
  if (budget) lines.push(`Budget: ${budget}`);
  if (story) lines.push(`Details:\n${story}`);

  if (lines.length === 0) {
    return 'No details were provided.';
  }

  return lines.join('\n\n');
}

export function normalizeContactSubmission(raw = {}) {
  const formType = sanitizeText(raw.form_type || raw.formType || 'Contact Form');
  const name = sanitizeText(raw.name);
  const email = sanitizeText(raw.email);
  const subject = sanitizeText(raw.subject) || buildSubject({ form_type: formType });

  return {
    to: DEFAULT_CONTACT_EMAIL,
    name,
    email,
    phone: sanitizeText(raw.phone),
    business: sanitizeText(raw.business),
    industry: sanitizeText(raw.industry),
    town: sanitizeText(raw.town),
    website: sanitizeText(raw.website),
    service: normalizeService(raw.service),
    challenge: sanitizeText(raw.challenge),
    budget: sanitizeText(raw.budget),
    form_type: formType,
    subject,
    message: buildMessage(raw),
  };
}

export function buildFormspreePayload(raw = {}) {
  const submission = normalizeContactSubmission(raw);
  const params = new URLSearchParams();

  params.set('name', submission.name || 'Website inquiry');
  params.set('email', submission.email || DEFAULT_CONTACT_EMAIL);
  params.set('message', submission.message);
  params.set('subject', submission.subject);
  params.set('_subject', submission.subject);
  params.set('_replyto', submission.email || DEFAULT_CONTACT_EMAIL);
  params.set('to', submission.to);

  if (submission.business) params.set('business', submission.business);
  if (submission.phone) params.set('phone', submission.phone);
  if (submission.website) params.set('website', submission.website);
  if (submission.service) params.set('service', SERVICE_LABELS[submission.service]);
  if (submission.industry) params.set('industry', submission.industry);
  if (submission.town) params.set('town', submission.town);
  if (submission.challenge) params.set('challenge', submission.challenge);
  if (submission.budget) params.set('budget', submission.budget);
  if (submission.form_type) params.set('form_type', submission.form_type);

  return params;
}
