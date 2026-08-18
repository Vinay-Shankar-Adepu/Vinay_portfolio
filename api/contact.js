/* global process */
const submissions = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const clean = (value, max) => String(value || '').trim().slice(0, max);
const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
}[character]));

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > MAX_REQUESTS;
};

const verifyTurnstile = async (token, ip) => {
  if (!process.env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
  });
  const result = await response.json();
  return result.success === true && (!result.action || result.action === 'portfolio_contact');
};

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });

  const ip = String(request.headers['x-forwarded-for'] || request.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (isRateLimited(ip)) return response.status(429).json({ error: 'Too many messages. Please try again later.' });

  const body = request.body || {};
  if (body.website) return response.status(200).json({ ok: true });

  const firstName = clean(body.firstName, 60);
  const lastName = clean(body.lastName, 60);
  const email = clean(body.email, 160).toLowerCase();
  const message = clean(body.message, 2000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!firstName || !validEmail || message.length < 20 || !body.permission) {
    return response.status(400).json({ error: 'Please complete all required fields and enter a message of at least 20 characters.' });
  }

  try {
    if (!(await verifyTurnstile(body.turnstileToken, ip))) {
      return response.status(400).json({ error: 'Human verification failed. Please refresh and try again.' });
    }

    if (!process.env.RESEND_API_KEY) {
      return response.status(503).json({ error: 'The contact service is not configured yet. Please email me directly.' });
    }

    const safeName = escapeHtml(`${firstName} ${lastName}`.trim());
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL || 'vinayshankar412@gmail.com'],
        reply_to: email,
        subject: `Portfolio message from ${firstName} ${lastName}`.trim(),
        html: `<h2>New portfolio message</h2><p><strong>From:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><hr><p>${safeMessage}</p>`,
      }),
    });
    const result = await resendResponse.json();
    if (!resendResponse.ok) throw new Error(result.message || 'Email provider rejected the message.');
    return response.status(200).json({ ok: true, id: result.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return response.status(500).json({ error: 'The message could not be delivered. Please try again shortly.' });
  }
}
