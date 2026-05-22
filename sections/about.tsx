"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";

const timeline = [
  "Persönliche Beratung und klare Projektplanung",
  "Saubere Koordination der Gewerke und Materialien",
  "Präzise Ausführung nach deutschem Qualitätsanspruch",
  "Verlässliche Übergabe mit sauberem Finish",
];

export function AboutSection() {
  return (
    <AnimatedSection id="ueber-uns" className="overflow-hidden bg-anthracite-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(227,6,19,0.16),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_28%)]" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[560px]">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="image-mask absolute left-0 top-0 h-[430px] w-[78%] overflow-hidden rounded-[8px] border border-white/12"
          >
            <Image
              src="/images/about-local-team.jpg"
              alt="Professionelles lokales Bauteam"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="absolute bottom-0 right-0 h-[320px] w-[58%] overflow-hidden rounded-[8px] border border-white/12 bg-white/10 shadow-premium backdrop-blur"
          >
            <Image
              src="/images/about-detail-construction.jpg"
              alt="Hochwertige Detailarbeit auf der Baustelle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
          </motion.div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-300">
            Über uns
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
            Lokal verwurzelt, sorgfältig geplant und hochwertig umgesetzt.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            LBL Bau ist eine kleinere, flexible Baufirma aus Bayern. Unser
            Anspruch ist nicht Masse, sondern saubere Arbeit, ehrliche
            Kommunikation und ein Ergebnis, das auch nach Jahren überzeugt.
          </p>

          <div className="mt-10 space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="flex gap-4 rounded-[8px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sand-400" />
                <span className="text-white/78">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-sand-500 pl-6">
            <p className="font-display text-2xl font-bold">
              „Wir bauen so, dass Vertrauen sichtbar wird.“
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/50">
              Geschäftsführung
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
