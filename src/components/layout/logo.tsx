'use client';

import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Apex Tune Hub"
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-md border border-cyan-300/35 bg-zinc-950 shadow-[0_0_24px_rgba(6,182,212,0.24)]',
        className
      )}
    >
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className="size-6"
      >
        <defs>
          <linearGradient
            id="apex-logo-track"
            x1="5"
            x2="27"
            y1="25"
            y2="7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ef4444" />
            <stop offset="0.52" stopColor="#facc15" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M5.5 23.5C10.6 14.8 15 9.8 20.4 8.4c2.6-.7 4.8-.3 6.1.2"
          fill="none"
          stroke="url(#apex-logo-track)"
          strokeLinecap="round"
          strokeWidth="4.4"
        />
        <path
          d="M8.4 23.4h15.2"
          fill="none"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M17.1 9.7l-5.7 13.7"
          fill="none"
          stroke="#020617"
          strokeLinecap="round"
          strokeWidth="2.1"
        />
        <circle cx="22.4" cy="8.1" r="2.2" fill="#22d3ee" />
        <circle cx="10.2" cy="23.4" r="2" fill="#ef4444" />
      </svg>
    </span>
  );
}
