'use client';

import { useEffect, useState } from 'react';

// Video sa vloží do DOM (a teda sťahuje) až po overení, že používateľ
// nemá zapnuté prefers-reduced-motion. Panel má vlastné tmavé pozadie
// s gradientom, takže bez videa zostáva statický vizuál.
export function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setShowVideo(!mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  if (!showVideo) {
    return null;
  }

  return (
    <video
      className="hero-video"
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      poster="/techbase-logo-v2.webp"
      aria-label="Animovaný vizuál značky TechBases"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
