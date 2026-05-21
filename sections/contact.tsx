"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company, fullAddress } from "@/lib/company";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <AnimatedSection id="kontakt" className="bg-sand-50 py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
            Kontakt
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
            Erzählen Sie uns kurz von Ihrem Projekt.
          </h2>
          <p className="mt-6 leading-8 text-anthracite-700">
            Wir melden uns schnell zurück, besprechen den Umfang und geben eine
            realistische Einschätzung für Ablauf, Kosten und Zeitplan.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: Phone, label: company.phoneDisplay },
              { icon: Mail, label: company.email },
              { icon: MapPin, label: fullAddress },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-[8px] bg-white p-4 shadow-[0_16px_45px_rgba(23,23,23,0.06)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-anthracite-950 text-sand-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-anthracite-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] bg-white shadow-premium">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <form onSubmit={onSubmit} className="space-y-5 p-6 sm:p-8">
              <FloatingField label="Name">
                <Input required placeholder="Name" />
              </FloatingField>
              <FloatingField label="Telefon oder E-Mail">
                <Input required placeholder="Telefon oder E-Mail" />
              </FloatingField>
              <FloatingField label="Projektart">
                <Input placeholder="Renovierung, Fassade, Innenausbau ..." />
              </FloatingField>
              <FloatingField label="Nachricht">
                <Textarea required placeholder="Nachricht" />
              </FloatingField>
              <Button variant="gold" className="w-full" type="submit">
                Anfrage senden
                <Send className="h-4 w-4" />
              </Button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[8px] bg-sand-100 p-3 text-sm font-semibold text-anthracite-900"
                >
                  Danke. Die Demo-Formularanimation funktioniert. Für echte Anfragen
                  verbinden wir später E-Mail oder ein CRM.
                </motion.p>
              )}
            </form>

            <div className="min-h-[420px] bg-anthracite-950 p-4">
              <iframe
                title="LBL Bau Karte"
                loading="lazy"
                className="h-full min-h-[390px] w-full rounded-[8px] border-0 grayscale"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.mapQuery,
                )}&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FloatingField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="relative block">
      {children}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-bold uppercase tracking-[0.14em] text-anthracite-500 transition-all peer-focus:text-sand-700">
        {label}
      </span>
    </label>
  );
}
