"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Realizace } from "@/lib/realizace";

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <path
        d={direction === "next" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RealizaceCarousel({ items }: { items: Realizace[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    // Embla už je v tu chvíli inicializovaná, počáteční stav si doplníme v dalším snímku.
    const frame = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">
          {items.map((item, index) => (
            <figure
              key={item.id}
              className="relative min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[38%]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 38vw"
                  placeholder="blur"
                  blurDataURL={item.blurDataURL}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Přejít na snímek">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === selected}
              aria-label={`Snímek ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1 w-6 transition-colors ${index === selected ? "bg-brand" : "bg-line"}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Předchozí realizace"
            className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
          >
            <Arrow direction="prev" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Další realizace"
            className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
          >
            <Arrow direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
