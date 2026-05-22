import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { company } from "@/lib/company";
import { Footer } from "@/sections/footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise für den Webauftritt von LBL Bau.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
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
              Datenschutz
            </h1>
            <p className="mt-6 max-w-2xl leading-8 text-anthracite-700">
              Diese Datenschutzhinweise beschreiben, wie personenbezogene Daten
              auf dieser Website verarbeitet werden. Bitte vor finaler
              Veröffentlichung rechtlich prüfen lassen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 rounded-[8px] border border-anthracite-950/10 bg-white p-6 shadow-premium md:p-10">
            <LegalBlock title="Verantwortlicher">
              <p>
                <strong>{company.legalName}</strong>
                <br />
                Inhaber: {company.owner}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}, {company.country}
                <br />
                E-Mail:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
            </LegalBlock>

            <LegalBlock title="Kontaktformular">
              <p>
                Wenn Sie das Kontaktformular nutzen, verarbeiten wir Ihre Angaben
                zur Bearbeitung der Anfrage. Dazu gehören Name, Kontaktmöglichkeit,
                Projektart und Nachricht. Die Übermittlung erfolgt nur zur
                Beantwortung Ihrer Anfrage.
              </p>
            </LegalBlock>

            <LegalBlock title="Server-Logs">
              <p>
                Beim Aufruf der Website können technische Zugriffsdaten wie
                IP-Adresse, Zeitpunkt, Browsertyp und angefragte URL verarbeitet
                werden. Diese Daten dienen dem sicheren und stabilen Betrieb der
                Website.
              </p>
            </LegalBlock>

            <LegalBlock title="Google Maps">
              <p>
                Auf der Kontaktseite kann eine Karte von Google Maps eingebunden
                sein. Beim Laden der Karte können Daten an Google übertragen
                werden. Alternativ ist die Adresse auch direkt als Text angegeben.
              </p>
            </LegalBlock>

            <LegalBlock title="Ihre Rechte">
              <p>
                Sie haben im Rahmen der gesetzlichen Vorgaben Rechte auf Auskunft,
                Berichtigung, Löschung, Einschränkung der Verarbeitung und
                Widerspruch. Für Anfragen nutzen Sie bitte die oben genannten
                Kontaktdaten.
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
