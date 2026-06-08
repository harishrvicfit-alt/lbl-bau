"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { useLanguage } from "@/lib/i18n";

export function CtaSection() {
  const { text } = useLanguage();

  return (
    <AnimatedSection className="bg-white py-24">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[8px] bg-anthracite-950 px-6 py-16 text-white shadow-premium sm:px-12 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(227,6,19,0.24),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.16),transparent_30%)]" />
          <motion.div
            className="absolute right-10 top-10 h-40 w-40 rounded-full border border-sand-300/20"
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-300">
              {text.finalCta.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
              {text.finalCta.title}
            </h2>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <a href="#kontakt">
                  {text.finalCta.primary}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${company.phoneHref}`}>
                  <Phone className="h-5 w-5" />
                  {text.finalCta.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
