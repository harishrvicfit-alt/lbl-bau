import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { company } from "@/lib/company";
import { Footer } from "@/sections/footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Kontaktangaben für LBL Bau.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <>
      <main className="min-h-screen bg-sand-50 pb-20 pt-12 text-anthracite-950">
        <section className="section-shell">
          <Link
            href="/"
            className="inline-flex rounded-full border border-anthracite-950/10 bg-white px-4 py-2 text-sm font-semibold text-anthracite-700 shadow-sm transition hover:border-sand-500 hover:text-anthracite-950"
          >
            Zurück zur Startseite
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
              Rechtliches
            </p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl">
              Impressum
            </h1>
            <p className="mt-6 max-w-2xl leading-8 text-anthracite-700">
              Angaben nach § 5 Digitale-Dienste-Gesetz (DDG) für den
              Webauftritt von LBL Bau.
            </p>
          </div>

          <div className="mt-12 grid gap-6 rounded-[8px] border border-anthracite-950/10 bg-white p-6 shadow-premium md:p-10">
            <LegalBlock title="Anbieter">
              <p>
                <strong>{company.legalName}</strong>
                <br />
                Inhaber: {company.owner}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
                <br />
                {company.country}
              </p>
            </LegalBlock>

            <LegalBlock title="Kontakt">
              <p>
                Telefon:{" "}
                <a className="underline-offset-4 hover:underline" href={`tel:${company.phoneHref}`}>
                  {company.phoneDisplay}
                </a>
                <br />
                Fax: {company.faxDisplay}
                <br />
                E-Mail:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <br />
                Website:{" "}
                <a className="underline-offset-4 hover:underline" href={company.website}>
                  {company.website}
                </a>
              </p>
            </LegalBlock>

            <LegalBlock title="Erreichbarkeit">
              <p>{company.officeHours}</p>
            </LegalBlock>

            <LegalBlock title="Verantwortlich für den Inhalt">
              <p>
                Verantwortlich für die Inhalte dieser Website ist {company.owner}
                unter der oben genannten Anschrift.
              </p>
            </LegalBlock>

            <LegalBlock title="Haftung für Inhalte">
              <p>
                Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
                dennoch keine Gewähr übernommen werden. Verbindliche Angebote
                und Projektinformationen erhalten Sie direkt nach persönlicher
                Abstimmung.
              </p>
            </LegalBlock>

            <LegalBlock title="Verbraucherstreitbeilegung">
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </LegalBlock>

            <LegalBlock title="Website">
              <p>
                Webdesign und Umsetzung:{" "}
                <a
                  href={company.creditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sand-700 underline-offset-4 hover:underline"
                >
                  {company.creditName}
                </a>
              </p>
            </LegalBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-anthracite-950/10 pb-6 last:border-b-0 last:pb-0">
      <h2 className="font-display text-2xl font-black text-anthracite-950">{title}</h2>
      <div className="mt-3 space-y-3 leading-8 text-anthracite-700">{children}</div>
    </section>
  );
}
