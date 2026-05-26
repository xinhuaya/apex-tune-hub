import { NewsletterForm } from '@/components/newsletter/newsletter-form';
import { Button } from '@/components/ui/button';
import { websiteConfig } from '@/config/website';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRightIcon, RadioTowerIcon } from 'lucide-react';

type ApexNewsletterCtaProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function ApexNewsletterCta({
  title = 'Get the next FH6 tune drop',
  description = 'New presets, tested car notes, weekly playlist routes, and setup fixes when the FH6 library changes.',
  eyebrow = 'FH6 tuning drops',
}: ApexNewsletterCtaProps) {
  if (!websiteConfig.newsletter.enable) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden border border-cyan-300/20 bg-zinc-950 px-5 py-8 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:px-8 lg:px-10">
        <div className="forza-hero-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="forza-chip">
              <RadioTowerIcon className="size-4" />
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold text-zinc-50 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-md">
                <LocaleLink href="/waitlist">
                  View drop list
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </Button>
              <Button asChild variant="ghost" className="rounded-md">
                <LocaleLink href="/games/forza-horizon-6/weekly-playlist">
                  Weekly playlist
                </LocaleLink>
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
            <NewsletterForm />
            <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
              No spam. Just new presets, tested car notes, and weekly route
              updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
