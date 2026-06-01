import { ExternalLinkIcon, PlayCircleIcon } from 'lucide-react';

type GuideMediaSource = {
  type: 'video' | 'article';
  title: string;
  sourceName: string;
  sourceUrl: string;
  embedUrl?: string;
  note: string;
};

type GuideMediaSourcesProps = {
  sources: GuideMediaSource[];
};

function isAllowedEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === 'www.youtube.com' ||
      parsed.hostname === 'youtube.com' ||
      parsed.hostname === 'www.youtube-nocookie.com'
    );
  } catch {
    return false;
  }
}

export function ForzaHorizon6GuideMediaSources({
  sources,
}: GuideMediaSourcesProps) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <section className="forza-panel mt-6 p-5">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          Referenced media
        </p>
        <h2 className="mt-3 text-xl font-semibold text-zinc-50">
          Sources used for this page
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Videos and community references are embedded or linked from the
          original publisher and credited here. Apex Tune Hub uses them as
          reference material; screenshots and diagrams on this page should
          remain original unless we have permission to reuse footage.
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {sources.map((source) => {
          const canEmbed =
            source.type === 'video' &&
            source.embedUrl &&
            isAllowedEmbedUrl(source.embedUrl);

          return (
            <article
              className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]"
              key={`${source.sourceName}-${source.sourceUrl}`}
            >
              {canEmbed ? (
                <div className="aspect-video bg-black">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={source.embedUrl}
                    title={source.title}
                  />
                </div>
              ) : source.type === 'video' ? (
                <div className="flex aspect-video items-center justify-center bg-black/40">
                  <PlayCircleIcon className="size-12 text-cyan-200" />
                </div>
              ) : (
                <div className="flex aspect-video flex-col justify-end bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.22),transparent_34%),linear-gradient(135deg,rgba(9,9,11,0.94),rgba(24,24,27,0.86))] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Community reference
                  </p>
                  <p className="mt-3 max-w-sm text-lg font-semibold leading-7 text-zinc-50">
                    {source.title}
                  </p>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-base font-semibold text-zinc-100">
                  {source.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {source.note}
                </p>
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  href={source.sourceUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source: {source.sourceName}
                  <ExternalLinkIcon className="size-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
