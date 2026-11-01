'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import type { InquiryTopic } from '../../site-data';

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// Texty podľa témy; API tému označí v predmete e-mailu („Tvorba webu“ / „Firemné nástroje a dáta“)
const topicTexts: Record<
  InquiryTopic,
  {
    messageLabel: string;
    placeholder: string;
    help: string;
    messageError: string;
    submit: string;
    success: string;
  }
> = {
  web: {
    messageLabel: 'Vaša firma a aký web potrebujete',
    placeholder:
      'Napríklad: Mám servis bicyklov v Žiline. Chcem web s ponukou služieb, cenníkom a kontaktom. Fotografie mám, texty treba upraviť.',
    help: 'Stačí pár viet: čím sa zaoberáte, čo má web obsahovať a či už máte doménu a podklady.',
    messageError: 'Napíšte aspoň pár viet o firme a webe.',
    submit: 'Odoslať dopyt',
    success: 'Dopyt je odoslaný.',
  },
  data: {
    messageLabel: 'Čo dnes dohľadávate ručne',
    placeholder:
      'Napríklad: máme export skladu, výdajov a objednávok. Chceme vedieť, čo chýba, čo je kritické a čo sa dlhodobo nehýbe.',
    help: 'Stačí pár viet: čo dnes hľadáte ručne a z akých exportov dáta pochádzajú. Neposielajte citlivé ani kompletné firemné dáta.',
    messageError: 'Opíšte v pár vetách, čo riešite.',
    submit: 'Odoslať opis problému',
    success: 'Správa je odoslaná.',
  },
};

// Rovnaké spracovanie ako formulár na /kontakt: /api/kontakt (Resend),
// honeypot, validácia na klientovi aj na serveri.
export function InquiryForm({ topic = 'web' }: { topic?: InquiryTopic }) {
  const texts = topicTexts[topic];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState('');
  const [sendingConfigured, setSendingConfigured] = useState<boolean | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Pravdivý stav: ak prostredie nemá nastavené odosielanie, povieme to vopred
  useEffect(() => {
    fetch('/api/kontakt', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { sending?: boolean } | null) => {
        if (typeof data?.sending === 'boolean') {
          setSendingConfigured(data.sending);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (status === 'success') {
      successRef.current?.focus();
    }
  }, [status]);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};

    if (name.trim().length < 2) {
      errors.name = 'Zadajte meno.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      errors.email = 'Zadajte platný e-mail.';
    }

    if (message.trim().length < 10) {
      errors.message = texts.messageError;
    }

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validate();
    const errorKeys = Object.keys(errors);

    if (errorKeys.length > 0) {
      flushSync(() => setFieldErrors(errors));
      document.getElementById(`dopyt-${errorKeys[0]}`)?.focus();
      return;
    }

    setFieldErrors({});
    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setServerError(
          data?.error ??
            'Správu sa nepodarilo odoslať. Skúste to znova alebo napíšte na kontakt@techbases.sk.',
        );
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setServerError(
        'Správu sa nepodarilo odoslať. Skúste to znova alebo napíšte na kontakt@techbases.sk.',
      );
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="v2-success">
        <p className="v2-h4" style={{ color: 'inherit' }}>
          {texts.success}
        </p>
        <p className="mt-2">
          Ozvem sa vám e-mailom. Ak je to súrne, zavolajte na +421 948 684 756.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {sendingConfigured === false ? (
        <p className="v2-notice">
          V tomto prostredí nie je nastavené odosielanie správ, formulár preto nič
          neodošle. Napíšte mi na kontakt@techbases.sk alebo zavolajte.
        </p>
      ) : null}

      {/* Honeypot proti spamu – pre ľudí neviditeľné */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="dopyt-website">Nechajte toto pole prázdne</label>
        <input
          id="dopyt-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dopyt-name" className="v2-label">
            Meno
          </label>
          <input
            id="dopyt-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? 'dopyt-name-error' : undefined}
            className="v2-input"
          />
          {fieldErrors.name ? (
            <p id="dopyt-name-error" className="v2-field-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="dopyt-email" className="v2-label">
            E-mail
          </label>
          <input
            id="dopyt-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? 'dopyt-email-error' : undefined}
            className="v2-input"
          />
          {fieldErrors.email ? (
            <p id="dopyt-email-error" className="v2-field-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="dopyt-message" className="v2-label">
          {texts.messageLabel}
        </label>
        <textarea
          id="dopyt-message"
          name="message"
          rows={6}
          required
          placeholder={texts.placeholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={
            fieldErrors.message
              ? 'dopyt-message-help dopyt-message-error'
              : 'dopyt-message-help'
          }
          className="v2-input"
        />
        <p id="dopyt-message-help" className="v2-muted v2-small mt-2">
          {texts.help}
        </p>
        {fieldErrors.message ? (
          <p id="dopyt-message-error" className="v2-field-error">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {status === 'error' && serverError ? (
        <div role="alert" className="v2-alert">
          {serverError}
        </div>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="v2-btn v2-btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Odosielam…' : texts.submit}
        </button>
        <p className="v2-muted v2-small">
          Odoslaním súhlasíte so spracovaním údajov na účely odpovede podľa{' '}
          <a href="/ochrana-osobnych-udajov" className="v2-link">
            zásad ochrany osobných údajov
          </a>
          .
        </p>
      </div>
    </form>
  );
}
