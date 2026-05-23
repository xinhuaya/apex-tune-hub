'use client';

import { cn } from '@/lib/utils';
import { GaugeIcon } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Apex Tune Hub"
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-md border border-amber-300/40 bg-zinc-950 text-amber-300 shadow-[0_0_24px_rgba(252,211,77,0.22)]',
        className
      )}
    >
      <GaugeIcon className="size-4" />
    </span>
  );
}
