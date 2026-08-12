"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Foto } from "@/lib/recenze";

/**
 * Posuvné porovnání stavu před a po rekonstrukci.
 * Táhne se myší, prstem i šipkami na klávesnici.
 */
export function BeforeAfter({
  before,
  after,
  alt,
  priority = false,
}: {
  before: Foto;
  after: Foto;
  alt: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const moveTo = useCallback((clientX: number) => {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    const ratio = ((clientX - box.left) / box.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] touch-pan-y select-none overflow-hidden bg-smoke"
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        moveTo(event.clientX);
      }}
      onPointerMove={(event) => {
        if (event.buttons === 1) moveTo(event.clientX);
      }}
    >
      {/* Stav po rekonstrukci leží vespod, před ním se odkrývá stav původní */}
      <Image
        src={after.src}
        alt={`${alt} — po rekonstrukci`}
        fill
        sizes="(max-width: 1024px) 100vw, 66vw"
        placeholder="blur"
        blurDataURL={after.blurDataURL}
        priority={priority}
        className="object-cover"
      />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before.src}
          alt={`${alt} — před rekonstrukcí`}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          placeholder="blur"
          blurDataURL={before.blurDataURL}
          priority={priority}
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-6 top-6 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
        Před
      </span>
      <span className="pointer-events-none absolute right-6 top-6 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
        Po
      </span>

      {/* Dělicí čára s úchytem */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-lg">
          <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
            <path d="M10 8 6 12l4 4M14 8l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <label className="sr-only" htmlFor={`porovnani-${after.src}`}>
        Posuvník porovnání před a po
      </label>
      <input
        id={`porovnani-${after.src}`}
        type="range"
        min={0}
        max={100}
        value={Math.round(position)}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
