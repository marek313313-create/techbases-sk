// Úvod (/) a realizácie (/realizacie/…): obsah v štýloch .v2. Hlavička, pätička,
// písmo a v2.css sú v koreňovom layoute, rovnaké pre všetky stránky.
export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="v2">{children}</div>;
}
