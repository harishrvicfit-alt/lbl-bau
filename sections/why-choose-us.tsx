"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { benefits } from "@/lib/data";
import { localize, useLanguage } from "@/lib/i18n";

export function WhyChooseUsSection() {
  const { language, text } = useLanguage();

  return (
    <AnimatedSection className="bg-sand-50 py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
            {text.why.eyebrow}
          </p>
          <h2 className="text-safe mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
            {text.why.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={localize(benefit.title, language)}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-[8px] border border-anthracite-950/10 bg-white p-6 shadow-[0_18px_55px_rgba(23,23,23,0.07)] lg:col-span-2"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-sand-500" />
              <benefit.icon className="h-7 w-7 text-sand-700 transition duration-300 group-hover:scale-110" />
              <h3 className="text-safe mt-9 font-display text-2xl font-black leading-tight text-anthracite-950">
                {localize(benefit.title, language)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
