import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BrowserFrame, PhoneFrame } from '../../components/device-frames';
import { getProject, projects } from '../../projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) {
    return {};
  }

  return {
    title: {
      absolute: `${project.name} – realizácia | TechBases.sk (návrh V2)`,
    },
    description: project.summary,
    alternates: {
      canonical: `/v2/realizacie/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = getProject((await params).slug);

  if (!project) {
    notFound();
  }

  const isWebProject = project.slug !== 'prevadzkove-prehlady';
  const [firstShot, ...otherShots] = project.desktopShots;

  return (
    <main id="v2-obsah" className="v2-main" tabIndex={-1}>
      <section className="v2-dark v2-hero">
        <div className="v2-container">
          <Link href="/v2#realizacie" className="v2-link v2-small">
            ← Späť na realizácie
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="v2-label-caps">
              {project.kind} · {project.category}
            </span>
            <span className="v2-badge">
              <span
                className={
                  project.statusDone
                    ? 'v2-badge-dot'
                    : 'v2-badge-dot v2-badge-dot-neutral'
                }
                aria-hidden="true"
              />
              {project.status}
            </span>
          </div>
          <h1 className="v2-display mt-5">{project.name}</h1>
          <p className="v2-lead mt-6 max-w-3xl">{project.summary}</p>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-secondary mt-8"
            >
              Otvoriť {project.liveLabel}
              <span className="sr-only"> (otvorí sa nové okno)</span>
            </a>
          ) : null}

          <div className="mt-14">
            <BrowserFrame {...firstShot} url={project.frameUrl} priority />
            <p className="v2-muted v2-small mt-3">{firstShot.caption}</p>
          </div>
        </div>
      </section>

      <section className="v2-paper v2-section">
        <div className="v2-container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div className="grid gap-10">
            <div>
              <h2 className="v2-label-caps">{project.briefLabel}</h2>
              <p className="v2-lead v2-lead-strong mt-3">{project.brief}</p>
            </div>
            <div>
              <h2 className="v2-label-caps">Riešenie</h2>
              <p className="v2-lead mt-3">{project.solution}</p>
            </div>
            <div>
              <h2 className="v2-label-caps">Výsledok</h2>
              <p className="v2-lead v2-lead-strong mt-3">{project.result}</p>
              {project.note ? <p className="v2-muted mt-3">{project.note}</p> : null}
            </div>
          </div>
          <div className="v2-form-card self-start">
            <h2 className="v2-h4">
              {isWebProject ? 'Dodané funkcie' : 'Čo prehľady ukazujú'}
            </h2>
            <ul className="v2-list mt-4">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="v2-white v2-section">
        <div className="v2-container">
          <h2 className="v2-h2">Ukážky</h2>
          <p className="v2-muted mt-3">{project.shotsSource}</p>

          {otherShots.length > 0 ? (
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              {otherShots.map((shot, index) => (
                <figure
                  key={shot.src}
                  className={
                    otherShots.length % 2 === 1 && index === otherShots.length - 1
                      ? 'lg:col-span-2'
                      : undefined
                  }
                >
                  <BrowserFrame {...shot} url={project.frameUrl} />
                  <figcaption className="v2-muted v2-small mt-3">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}

          {project.mobileShots.length > 0 ? (
            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:max-w-4xl">
              {project.mobileShots.map((shot) => (
                <figure key={shot.src}>
                  <PhoneFrame {...shot} />
                  <figcaption className="v2-muted v2-small mt-3">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="v2-dark v2-section">
        <div className="v2-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="v2-h2">
              {isWebProject
                ? 'Chcete podobne spracovaný web?'
                : 'Riešite podobný problém?'}
            </h2>
            <p className="v2-lead mt-4">
              {isWebProject
                ? 'Napíšte mi pár viet o vašej firme. Ozvem sa vám a navrhnem ďalší postup aj orientačnú cenu.'
                : 'Pošlite krátky opis problému alebo anonymizovanú ukážku exportu. Prvý rozhovor ukáže, či má zmysel overiť pilot.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={isWebProject ? '/v2#dopyt' : '/kontakt?tema=data#formular'}
              className="v2-btn v2-btn-primary"
            >
              {isWebProject ? 'Nezáväzne naceniť web' : 'Opísať problém'}
            </Link>
            <Link
              href={isWebProject ? '/v2#realizacie' : '/sluzby'}
              className="v2-btn v2-btn-secondary"
            >
              {isWebProject ? 'Ďalšie realizácie' : 'Firemné nástroje a dáta'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
