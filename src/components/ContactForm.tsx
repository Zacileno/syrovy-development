"use client";

import { useState } from "react";
import { services } from "@/lib/content";

/**
 * Poptávkový formulář.
 *
 * POZOR — odesílání zatím NENÍ napojené. Podle domluvy s klientem se dořeší,
 * až bude známá doména a cílový e-mail (Resend nebo Formspree).
 * Formulář se proto pouze zvaliduje a zobrazí upozornění, aby si nikdo
 * nemyslel, že poptávka odešla.
 */

const fieldClasses =
  "w-full border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand";

const labelClasses = "block text-[13px] font-semibold uppercase tracking-[0.1em] text-ink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      noValidate={false}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
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
        <button type="submit" className="btn-primary">
          Odeslat poptávku
        </button>
        <p className="text-[13px] leading-relaxed text-body">
          Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení poptávky.
        </p>
      </div>

      {submitted && (
        <p
          role="status"
          className="border-l-2 border-brand bg-brand-light px-5 py-4 text-[15px] leading-relaxed text-ink"
        >
          <strong>Formulář zatím neodesílá.</strong> Napojení na e-mail dořešíme, jakmile bude
          známá doména a cílová adresa. Do té doby nám prosím zavolejte nebo napište přímo.
        </p>
      )}
    </form>
  );
}
