import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechBases.sk',
  description: 'Prehľady pre údržbu, sklad a nákup.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
