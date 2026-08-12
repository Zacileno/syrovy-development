import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-content py-32 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">Chyba 404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Tuhle stránku jsme nenašli</h1>
      <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed">
        Možná jsme ji přesunuli, nebo v adrese chybí písmenko. Zkuste to od začátku.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Zpět na úvod
        </Link>
        <Link href="/kontakt" className="btn-outline">
          Napsat nám
        </Link>
      </div>
    </section>
  );
}
