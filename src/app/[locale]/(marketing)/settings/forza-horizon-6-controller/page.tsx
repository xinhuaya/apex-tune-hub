import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Gamepad2Icon, SlidersHorizontalIcon, WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const controllerRows = [
  [
    'Steering',
    'Balanced response',
    'Avoid twitchy inputs before testing drift.',
  ],
  ['Throttle', 'Smooth exits', 'Useful for AWD and high-power builds.'],
  [
    'Braking',
    'Stable trail braking',
    'Tune braking feel with car setup notes.',
  ],
  [
    'Vibration',
    'Driver preference',
    'Keep enough feedback to notice grip loss.',
  ],
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Best Forza Horizon 6 Controller Settings - Apex Tune Hub',
    description:
      'Forza Horizon 6 controller settings guide for steering, throttle, braking, vibration, and stable driving feel.',
    locale,
    pathname: '/settings/forza-horizon-6-controller',
  });
}

export default function ForzaHorizon6ControllerSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Controller setup</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 controller settings
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Controller settings are the most accessible setup page for most
                players. Start with predictable inputs, then use tune changes to
                fix car behavior rather than masking every problem in controls.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-drift-tune-calculator">
                    Drift Tune Tool
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/settings/forza-horizon-6-wheel">
                    Wheel Settings
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <Gamepad2Icon className="size-7 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">Simple rule</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Change controls when every car feels wrong. Change the tune when
                one car feels wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_1fr_1.4fr]">
            <span>Control</span>
            <span>Goal</span>
            <span>Note</span>
          </div>
          {controllerRows.map(([control, goal, note]) => (
            <div
              key={control}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
            >
              <span className="font-semibold text-zinc-50">{control}</span>
              <span className="text-amber-200">{goal}</span>
              <span className="text-zinc-400">{note}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="forza-card p-5">
            <SlidersHorizontalIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Tuning link</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Link controller issues to tune symptoms: wheelspin, unstable
              braking, oversteer, understeer, and poor top speed.
            </p>
          </article>
          <article className="forza-card p-5">
            <WrenchIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Testing note</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Test with assists, input device, camera, and car class recorded so
              the page can become more useful over time.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
