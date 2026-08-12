"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { OverenaRecenze, QuoteMark } from "@/components/recenze-ui";
import type { Recenze } from "@/lib/recenze";

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <path
        d={direction === "next" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hlavní blok recenzí s posuvným porovnáním před a po, stejně jako u Koupelen Syrový. */
export function RecenzeShowcase({ items }: { items: Recenze[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={item.id} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="grid lg:grid-cols-[2fr_1fr]">
                {item.before ? (
                  <BeforeAfter
                    before={item.before}
                    after={{
                      src: item.src,
                      width: item.width,
                      height: item.height,
                      blurDataURL: item.blurDataURL,
                    }}
                    alt={item.title}
                    priority={index === 0}
                  />
                ) : null}

                <div className="flex flex-col justify-center bg-smoke p-8 lg:p-10">
                  <QuoteMark />
                  <h3 className="mt-4 text-2xl leading-tight">{item.title}</h3>
                  {item.subtitle && (
                    <p className="mt-2 font-semibold text-brand">{item.subtitle}</p>
                  )}
                  <p className="mt-4 italic leading-relaxed">{item.quote}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-ink">{item.author}</span>
                    <OverenaRecenze />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Předchozí recenze"
        className="absolute left-0 top-1/2 hidden h-24 w-14 -translate-x-full -translate-y-1/2 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand xl:flex"
      >
        <Arrow direction="prev" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Další recenze"
        className="absolute right-0 top-1/2 hidden h-24 w-14 -translate-y-1/2 translate-x-full items-center justify-center border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand xl:flex"
      >
        <Arrow direction="next" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Recenze ${index + 1}`}
            aria-current={index === selected}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1 w-16 transition-colors ${index === selected ? "bg-brand" : "bg-line"}`}
          />
        ))}
      </div>

      {/* Ovládání pro dotyk a menší obrazovky */}
      <div className="mt-6 flex justify-center gap-3 xl:hidden">
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
  );
}
