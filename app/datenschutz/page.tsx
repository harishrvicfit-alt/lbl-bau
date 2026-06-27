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
              Diese Datenschutzhinweise informieren darüber, wie LBL Bau
              personenbezogene Daten auf dieser Website verarbeitet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 rounded-[8px] border border-anthracite-950/10 bg-white p-6 shadow-premium md:p-10">
            <LegalBlock title="Verantwortlicher">
              <p>
                <strong>{company.legalName}</strong>
                <br />
                Rechtsform: {company.legalForm}
                <br />
                Inhaber: {company.owner}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}, {company.country}
                <br />
                Telefon:{" "}
                <a className="underline-offset-4 hover:underline" href={`tel:${company.phoneHref}`}>
                  {company.phoneDisplay}
                </a>
                <br />
                E-Mail:{" "}
                <a className="underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
            </LegalBlock>

            <LegalBlock title="Hosting und Server-Logs">
              <p>
                Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
                Website können technisch notwendige Zugriffsdaten verarbeitet
                werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
                Browsertyp, Betriebssystem, Referrer-URL und angefragte Seite.
                Die Verarbeitung erfolgt zur sicheren, stabilen und schnellen
                Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO.
              </p>
            </LegalBlock>

            <LegalBlock title="Kontaktaufnahme und Kontaktformular">
              <p>
                Wenn Sie uns per Telefon, E-Mail oder Kontaktformular
                kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten,
                insbesondere Name, Kontaktdaten, Projektart und Nachricht. Zweck
                der Verarbeitung ist die Bearbeitung Ihrer Anfrage, die
                Kommunikation mit Ihnen und gegebenenfalls die Vorbereitung eines
                Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit
                die Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen
                gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Für den technischen Versand von Formularanfragen kann ein
                E-Mail-Dienstleister eingesetzt werden. Die Daten werden nur zur
                Bearbeitung der Anfrage verwendet und gelöscht, sobald sie für
                diesen Zweck nicht mehr erforderlich sind, sofern keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </LegalBlock>

            <LegalBlock title="Google Maps">
              <p>
                Auf der Kontaktseite wird Google Maps nicht automatisch geladen.
                Erst wenn Sie die Karte aktiv öffnen, wird eine Verbindung zu
                Google hergestellt. Dabei können personenbezogene Daten wie Ihre
                IP-Adresse und technische Browserdaten an Google übermittelt
                werden. Die Nutzung der Karte erfolgt auf Grundlage Ihrer
                freiwilligen Aktivierung.
              </p>
            </LegalBlock>

            <LegalBlock title="Cookies und Analyse">
              <p>
                Diese Website verwendet derzeit keine Tracking- oder
                Marketing-Cookies und kein Webanalyse-Tool. Technisch notwendige
                Funktionen können ohne gesonderte Einwilligung bereitgestellt
                werden.
              </p>
            </LegalBlock>

            <LegalBlock title="Ihre Rechte">
              <p>
                Sie haben im Rahmen der gesetzlichen Vorgaben Rechte auf
                Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit und Widerspruch. Soweit eine Verarbeitung
                auf einer Einwilligung beruht, können Sie diese Einwilligung mit
                Wirkung für die Zukunft widerrufen.
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei einer Datenschutzaufsicht
                zu beschweren. Für Unternehmen in Bayern ist regelmäßig das
                Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
                Promenade 18, 91522 Ansbach, zuständig.
              </p>
            </LegalBlock>

            <LegalBlock title="Pflicht zur Bereitstellung">
              <p>
                Die Bereitstellung personenbezogener Daten ist für die Nutzung
                der Website grundsätzlich nicht erforderlich. Für die Bearbeitung
                einer Anfrage benötigen wir jedoch die Angaben, die zur
                Kontaktaufnahme und inhaltlichen Bearbeitung notwendig sind.
              </p>
            </LegalBlock>

            <LegalBlock title="Automatisierte Entscheidungen">
              <p>
                Eine automatisierte Entscheidungsfindung einschließlich Profiling
                findet nicht statt.
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
