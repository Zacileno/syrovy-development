"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Poptávkový formulář.
 *
 * Posílá data na /api/poptavka, odkud jdou přes Resend e-mailem. Potvrzení se
 * ukáže, až když server odeslání opravdu potvrdí.
 */

type Stav = "idle" | "sending" | "sent" | "error";

const fieldClasses =
  "w-full border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand";

const labelClasses = "block text-[13px] font-semibold uppercase tracking-[0.1em] text-ink";

export function ContactForm() {
  const [stav, setStav] = useState<Stav>("idle");

  async function odeslat(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formular = event.currentTarget;
    setStav("sending");

    try {
      const odpoved = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formular))),
      });
      if (!odpoved.ok) throw new Error(`HTTP ${odpoved.status}`);
      formular.reset();
      setStav("sent");
    } catch {
      setStav("error");
    }
  }

  return (
    <form noValidate={false} onSubmit={odeslat} className="space-y-6">
      {/* Past na roboty: člověk toto pole nevidí a nevyplní. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClasses}>
            Jméno a příjmení
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className={labelClasses}>
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClasses} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses}>
            E-mail
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className={labelClasses}>
            Co potřebujete
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClasses}>
            <option value="" disabled>
              Vyberte službu
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="jine">Něco jiného</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses}>
          Popište nám projekt
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Např. rekonstrukce bytu 3+1 v Pardubicích, panelák, plánujeme na jaro…"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn-primary" disabled={stav === "sending"}>
          {stav === "sending" ? "Odesílám…" : "Odeslat poptávku"}
        </button>
        <p className="text-[13px] leading-relaxed text-body">
          Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení poptávky.
        </p>
      </div>

      {stav === "sent" && (
        <p
          role="status"
          className="border-l-2 border-brand bg-brand-light px-5 py-4 text-[15px] leading-relaxed text-ink"
        >
          <strong>Děkujeme, poptávka dorazila.</strong> Brzy se vám ozveme.
        </p>
      )}

      {stav === "error" && (
        <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-5 py-4 text-[15px] leading-relaxed text-ink">
          <strong>Odeslání se nepovedlo.</strong> Zkuste to prosím znovu, nebo nám zavolejte na{" "}
          <a href={site.phoneHref} className="underline">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
