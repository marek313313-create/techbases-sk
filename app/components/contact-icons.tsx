type ContactIconProps = {
  className?: string;
};

export function MailIcon({ className = 'h-4 w-4' }: ContactIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-4 w-4' }: ContactIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.67a16 16 0 0 0 6.24 6.24l1.19-1.19a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-4 w-4' }: ContactIconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2.2 22l5.14-1.31A9.92 9.92 0 1 0 12.04 2Zm0 1.8a8.12 8.12 0 0 1 6.9 12.42 8.07 8.07 0 0 1-9.3 3.11l-.31-.12-3.94 1.01 1.03-3.83-.16-.33A8.1 8.1 0 0 1 12.04 3.8Zm-3.38 3.9c-.18 0-.47.07-.72.34-.25.28-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.9 3.05 4.71 4.15 2.33.92 2.81.74 3.32.69.51-.05 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.27-.73.9-.89 1.08-.16.18-.33.21-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.49.14-.16.18-.28.27-.46.1-.19.05-.35-.02-.49-.07-.14-.63-1.53-.87-2.09-.22-.54-.45-.46-.63-.47h-.53Z" />
    </svg>
  );
}

