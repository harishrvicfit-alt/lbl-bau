import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { company } from "@/lib/company";
import { Footer } from "@/sections/footer";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Kontaktangaben fuer LBL Bau.",
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
            Zurueck zur Startseite
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
              Rechtliches
            </p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl">
              Impressum
            </h1>
            <p className="mt-6 max-w-2xl leading-8 text-anthracite-700">
              Vorlaeufige Angaben fuer die Website der geplanten Bau- und
              Renovierungsfirma. Der finale Firmenname, die Rechtsform und weitere
              Pflichtangaben werden nach Freigabe ersetzt.
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
                Telefon: {company.phoneDisplay}
                <br />
                Fax: {company.faxDisplay}
                <br />
                E-Mail: {company.email}
                <br />
                Website: {company.website}
              </p>
            </LegalBlock>

            <LegalBlock title="Erreichbarkeit">
              <p>{company.officeHours}</p>
            </LegalBlock>

            <LegalBlock title="Hinweis zu Platzhalterdaten">
              <p>
                Die Kontaktdaten basieren auf vorhandenen Inhaber- und Adressdaten.
                Der Name der bisherigen Einrichtung wird bewusst nicht als Marke,
                Firmenname oder E-Mail-Domain der Bauwebsite verwendet.
              </p>
            </LegalBlock>

            <LegalBlock title="Haftung fuer Inhalte">
              <p>
                Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Fuer
                Richtigkeit, Vollstaendigkeit und Aktualitaet kann dennoch keine
                Gewaehr uebernommen werden. Verbindliche Angebote und
                Projektinformationen erhalten Sie direkt nach persoenlicher
                Abstimmung.
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
