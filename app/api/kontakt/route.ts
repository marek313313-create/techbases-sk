import { NextResponse } from 'next/server';

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

const TOPIC_LABELS = new Map([
  ['web', 'Tvorba webu'],
  ['data', 'Firemné nástroje a dáta'],
  ['ine', 'Iné'],
]);

type ContactPayload = {
  topic?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Neplatná požiadavka.' }, { status: 400 });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const message = asTrimmedString(payload.message);
  const honeypot = asTrimmedString(payload.website);
  // Neznáma alebo chýbajúca téma nie je chyba – správa sa len neoznačí
  const topicLabel = TOPIC_LABELS.get(asTrimmedString(payload.topic)) ?? '';

  // Honeypot: botom potvrdíme úspech, ale nič neposielame
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || name.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: 'Zadajte meno.' }, { status: 400 });
  }

  if (
    email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    return NextResponse.json({ error: 'Zadajte platný e-mail.' }, { status: 400 });
  }

  if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: 'Správa musí mať aspoň 10 znakov.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey === 'RESEND_API_KEY') {
    return NextResponse.json(
      { error: 'Odosielanie správ zatiaľ nie je aktívne. Napíšte prosím na kontakt@techbases.sk.' },
      { status: 503 },
    );
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'TechBases web <web@techbases.sk>',
      to: ['kontakt@techbases.sk'],
      reply_to: email,
      subject: `${topicLabel ? `[${topicLabel}] ` : ''}Správa z webu od: ${name}`,
      text: `Téma: ${topicLabel || 'neuvedená'}\nMeno: ${name}\nE-mail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Správu sa nepodarilo odoslať. Skúste to znova alebo napíšte na kontakt@techbases.sk.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
