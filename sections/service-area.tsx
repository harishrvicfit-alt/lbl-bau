"use client";

import { Building2, MapPin, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { company, fullAddress } from "@/lib/company";
import { useLanguage } from "@/lib/i18n";

export function ServiceAreaSection() {
  const { text } = useLanguage();

  return (
    <AnimatedSection className="bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
            {text.serviceArea.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
            {text.serviceArea.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-anthracite-700">
            {text.serviceArea.intro}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[8px] border border-anthracite-950/10 bg-sand-50 p-6 shadow-[0_18px_55px_rgba(23,23,23,0.07)]">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-anthracite-950 text-sand-300">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-black text-anthracite-950">
                  {company.brandName}
                </h3>
                <p className="mt-2 leading-7 text-anthracite-700">{fullAddress}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${company.phoneHref}`}
              className="group rounded-[8px] border border-anthracite-950/10 bg-white p-5 shadow-[0_18px_55px_rgba(23,23,23,0.06)] transition hover:border-ember/30 hover:bg-sand-50"
            >
              <Phone className="h-5 w-5 text-ember" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-anthracite-500">
                {text.serviceArea.call}
              </p>
              <p className="mt-1 font-display text-2xl font-black text-anthracite-950">
                {company.phoneDisplay}
              </p>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                company.mapQuery,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[8px] border border-anthracite-950/10 bg-white p-5 shadow-[0_18px_55px_rgba(23,23,23,0.06)] transition hover:border-ember/30 hover:bg-sand-50"
            >
              <MapPin className="h-5 w-5 text-ember" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-anthracite-500">
                {text.serviceArea.location}
              </p>
              <p className="mt-1 font-display text-2xl font-black text-anthracite-950">
                {company.city}
              </p>
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {text.serviceArea.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-anthracite-950/10 bg-sand-50 px-4 py-2 text-sm font-semibold text-anthracite-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
