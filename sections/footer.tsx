"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, fullAddress } from "@/lib/company";
import { navItems } from "@/lib/data";
import { localize, useLanguage } from "@/lib/i18n";

export function Footer() {
  const { language, text } = useLanguage();
  const footerNavItems = navItems.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));

  const quickContactLinks = [
    {
      href: `tel:${company.phoneHref}`,
      label: text.footer.call,
      aria: text.contact.phoneAria,
      icon: Phone,
    },
    {
      href: `mailto:${company.email}`,
      label: "E-Mail",
      aria: text.contact.mailAria,
      icon: Mail,
    },
    {
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        company.mapQuery,
      )}`,
      label: text.footer.route,
      aria: text.footer.routeAria,
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <footer className="bg-anthracite-950 py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-36 overflow-hidden rounded-[8px] bg-white p-2">
                <Image
                  src={company.logo}
                  alt={`${company.brandName} Logo`}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </span>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em]">
                  {company.brandName}
                </p>
                <p className="text-sm text-white/50">{text.footer.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              {text.footer.intro}
            </p>
          </div>

          <div>
            <p className="mb-4 font-display font-bold">{text.footer.quickLinks}</p>
            <div className="space-y-3">
              {footerNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white/60 hover:text-sand-300"
                >
                  {localize(item.label, language)}
                </a>
              ))}
              <a href="/impressum" className="block text-sm text-white/60 hover:text-sand-300">
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="block text-sm text-white/60 hover:text-sand-300"
              >
                Datenschutz
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-display font-bold">{text.footer.contact}</p>
            <div className="space-y-3 text-sm text-white/60">
              <p>{fullAddress}</p>
              <p>{company.phoneDisplay}</p>
              <p>{company.email}</p>
              <p>{company.officeHours}</p>
            </div>
            <div className="mt-6 flex gap-3">
              {quickContactLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 hover:border-sand-400 hover:text-sand-300"
                  aria-label={item.aria}
                  title={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {company.brandName}. {text.footer.rights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/impressum" className="transition hover:text-white">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </a>
            <a href={`mailto:${company.email}`} className="transition hover:text-white">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
