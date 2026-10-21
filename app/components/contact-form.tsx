'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type Topic = 'web' | 'data' | 'ine';

const topicOptions: { value: Topic; label: string; placeholder: string }[] = [
  {
    value: 'web',
    label: 'Tvorba webu',
    placeholder:
      'Napríklad: máme penzión pri horách a chceme nový web s fotografiami, cenami a kontaktom. Fotografie a texty máme.',
  },
  {
    value: 'data',
    label: 'Firemné nástroje a dáta',
    placeholder:
      'Napríklad: máme export skladu, výdajov a objednávok. Chceme vedieť, čo chýba, čo je kritické a čo sa dlhodobo nehýbe.',
  },
  {
    value: 'ine',
    label: 'Iné',
    placeholder: 'Napíšte, s čím vám môžem pomôcť.',
  },
];

const inputClassName =
  'w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30';

export function ContactForm() {
  const [topic, setTopic] = useState<Topic | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  // Po odoslaní sa formulár nahradí potvrdením – presunúť naň fokus,
  // aby ho čítačka obrazovky oznámila
  useEffect(() => {
    if (status === 'success') {
      successRef.current?.focus();
    }
  }, [status]);

  // Odkazy typu /kontakt?tema=web#formular predvyberú tému správy
  useEffect(() => {
    const requestedTopic = new URLSearchParams(window.location.search).get('tema');

    if (topicOptions.some((option) => option.value === requestedTopic)) {
      setTopic(requestedTopic as Topic);
    }
  }, []);

  const placeholder =
    topicOptions.find((option) => option.value === topic)?.placeholder ??
    'Napíšte pár viet o tom, s čím vám môžem pomôcť: nový web alebo prevádzkový problém s dátami.';

  function validate(): FieldErrors {
    const errors: FieldErrors = {};

    if (name.trim().length < 2) {
      errors.name = 'Zadajte meno.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      errors.email = 'Zadajte platný e-mail.';
    }

    if (message.trim().length < 10) {
      errors.message = 'Napíšte aspoň pár viet, aby som vedel, o čo ide.';
    }

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validate();
    const errorKeys = Object.keys(errors);

    if (errorKeys.length > 0) {
      // Vykresliť chyby hneď, aby sa dal fokus presunúť na prvé chybné pole
      flushSync(() => setFieldErrors(errors));
      document.getElementById(`contact-${errorKeys[0]}`)?.focus();
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
      setTopic('');
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
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 leading-7 text-emerald-100 outline-none"
      >
        <div className="text-lg font-semibold">Správa je odoslaná.</div>
        <p className="mt-2 text-emerald-100/85">
          Ozvem sa čo najskôr, zvyčajne do jedného pracovného dňa. Ak je to súrne,
          zavolajte na +421 948 684 756.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      {/* Honeypot proti spamu — pre ľudí neviditeľné */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Nechajte toto pole prázdne</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-slate-300">
          Čoho sa správa týka? <span className="text-slate-400">(nepovinné)</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {topicOptions.map((option) => (
            <label
              key={option.value}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-200 transition hover:border-blue-400/50 has-checked:border-blue-400 has-checked:bg-blue-500/10 has-checked:text-white"
            >
              <input
                type="radio"
                name="topic"
                value={option.value}
                checked={topic === option.value}
                onChange={() => setTopic(option.value)}
                className="h-4 w-4 accent-blue-500"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
          Meno
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
          className={`mt-2 ${inputClassName}`}
        />
        {fieldErrors.name ? (
          <p id="contact-name-error" className="mt-2 text-sm text-rose-300">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
          E-mail
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
          className={`mt-2 ${inputClassName}`}
        />
        {fieldErrors.email ? (
          <p id="contact-email-error" className="mt-2 text-sm text-rose-300">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
          Správa
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder={placeholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
          className={`mt-2 ${inputClassName}`}
        />
        {fieldErrors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-rose-300">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {status === 'error' && serverError ? (
        <div
          role="alert"
          className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-sm leading-6 text-rose-100"
        >
          {serverError}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium shadow-lg shadow-blue-900/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Odosielam…' : 'Odoslať správu'}
        </button>
        <p className="text-xs leading-5 text-slate-400">
          Odoslaním súhlasíte so spracovaním údajov na účely odpovede podľa{' '}
          <a href="/ochrana-osobnych-udajov" className="underline hover:text-slate-300">
            podmienok ochrany osobných údajov
          </a>
          .
        </p>
      </div>
    </form>
  );
}
