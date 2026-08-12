"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { RecenzeKartaMala } from "@/components/recenze-ui";
import type { Recenze } from "@/lib/recenze";

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

export function RecenzeCarousel({ items }: { items: Recenze[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    const frame = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[48%] lg:basis-[31.5%]"
            >
              <RecenzeKartaMala item={item} priority={index < 3} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Recenze ${index + 1}`}
              aria-current={index === selected}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1 w-6 transition-colors ${index === selected ? "bg-brand" : "bg-line"}`}
            />
          ))}
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Předchozí recenze"
            className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Arrow direction="prev" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Další recenze"
            className="flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Arrow direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
