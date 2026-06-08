"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { services } from "@/lib/data";
import { localize, useLanguage } from "@/lib/i18n";

export function ServicesSection() {
  const { language, text } = useLanguage();

  return (
    <AnimatedSection id="leistungen" className="bg-sand-50 py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
            {text.services.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
            {text.services.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={localize(service.title, language)}
              href="#kontakt"
              aria-label={`${localize(service.title, language)} ${text.services.ariaSuffix}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="group relative min-h-72 overflow-hidden rounded-[8px] border border-anthracite-950/10 bg-white p-7 shadow-[0_18px_60px_rgba(23,23,23,0.08)] outline-none transition focus-visible:ring-4 focus-visible:ring-sand-500/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-sand-500 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sand-300/20 blur-3xl transition duration-500 group-hover:bg-ember/24" />
              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-[8px] bg-anthracite-950 text-sand-300 transition duration-300 group-hover:bg-sand-500 group-hover:text-anthracite-950">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-anthracite-950/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sand-700" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-anthracite-950">
                  {localize(service.title, language)}
                </h3>
                <p className="mt-4 leading-7 text-anthracite-700">
                  {localize(service.description, language)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
