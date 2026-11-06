import { services } from "@/lib/content";

/**
 * Příjem poptávky z formuláře na /kontakt.
 *
 * Údaje se znovu zkontrolují tady na serveru a přes Resend se pošlou jako
 * upozornění na pece@koupelny-syrovy.cz. Klíč RESEND_API_KEY je jen ve Vercelu
 * (Production), do prohlížeče se nikdy nedostane.
 */

const ODESILATEL = "Syrový Development <poptavky@syrovydevelopment.cz>";
const PRIJEMCE = "pece@koupelny-syrovy.cz";
const VZOR_EMAILU = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITY = { name: 200, phone: 40, email: 254, service: 80, message: 5000 } as const;

type Pole = keyof typeof LIMITY;
type Poptavka = Record<Pole, string>;

function precti(data: Record<string, unknown>, pole: string): string {
  const hodnota = data[pole];
  return typeof hodnota === "string" ? hodnota.trim() : "";
}

function nazevSluzby(slug: string): string {
  if (slug === "jine") return "Něco jiného";
  return services.find((service) => service.slug === slug)?.title ?? "Neuvedeno";
}

function textEmailu(poptavka: Poptavka): string {
  return [
    "Přišla poptávka z webu syrovydevelopment.cz.",
    "",
    `Jméno: ${poptavka.name}`,
    `Telefon: ${poptavka.phone}`,
    `E-mail: ${poptavka.email}`,
    `Co potřebuje: ${nazevSluzby(poptavka.service)}`,
    "",
    "Popis projektu:",
    poptavka.message || "(nevyplněno)",
    "",
    "Na zákazníka se dostanete tlačítkem Odpovědět.",
  ].join("\n");
}

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Neplatná data." }, { status: 400 });
  }

  if (typeof data !== "object" || data === null) {
    return Response.json({ error: "Neplatná data." }, { status: 400 });
  }
  const pole = data as Record<string, unknown>;

  // Past na roboty: člověk toto skryté pole nevyplní. Robotovi se tváříme, že prošel.
  if (precti(pole, "website")) {
    return Response.json({ ok: true });
  }

  const poptavka: Poptavka = {
    name: precti(pole, "name"),
    phone: precti(pole, "phone"),
    email: precti(pole, "email"),
    service: precti(pole, "service"),
    message: precti(pole, "message"),
  };

  const prekroceno = (Object.keys(LIMITY) as Pole[]).some((klic) => poptavka[klic].length > LIMITY[klic]);
  if (prekroceno || !poptavka.name || !poptavka.phone || !VZOR_EMAILU.test(poptavka.email)) {
    return Response.json({ error: "Zkontrolujte prosím vyplněné údaje." }, { status: 400 });
  }

  const klic = process.env.RESEND_API_KEY;
  if (!klic) {
    console.error("[poptavka] chybí RESEND_API_KEY");
    return Response.json({ error: "Odeslání se nepovedlo." }, { status: 500 });
  }

  const odpoved = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${klic}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: ODESILATEL,
      to: [PRIJEMCE],
      reply_to: poptavka.email,
      subject: `Přišla poptávka z webu syrovydevelopment: ${poptavka.name}`,
      text: textEmailu(poptavka),
    }),
  });

  if (!odpoved.ok) {
    console.error("[poptavka] Resend odmítl e-mail", odpoved.status, await odpoved.text());
    return Response.json({ error: "Odeslání se nepovedlo." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
