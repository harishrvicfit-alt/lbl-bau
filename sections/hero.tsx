"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { trustPoints } from "@/lib/data";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-anthracite-950 text-white"
    >
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image
          src="/images/hero-modern-renovation.jpg"
          alt="LBL Bau Renovierung und Innenausbau"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.92)_0%,rgba(8,8,7,0.72)_45%,rgba(8,8,7,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(227,6,19,0.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-sand-100/40"
            style={{
              left: `${8 + ((index * 17) % 88)}%`,
              top: `${12 + ((index * 23) % 72)}%`,
            }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 4.5 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            }}
          />
        ))}
      </div>

      <div className="section-shell relative z-10 grid min-h-[100svh] items-center gap-8 pb-16 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:pb-14 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sand-100 backdrop-blur-2xl"
          >
            <BadgeCheck className="h-4 w-4 text-sand-400" />
            Premium Baupartner: LBL Bau
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            LBL Bau. Modern. Präzise. Zuverlässig.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/76"
          >
            Hochwertige Renovierungen, Innenausbau, Fassaden und kleinere bis
            mittlere Bauprojekte mit sauberer Planung und präziser Ausführung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" size="lg" className="magnetic-shine" asChild>
              <a href="#kontakt">
                Angebot anfragen
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projekte">Projekte ansehen</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-7"
          >
            {trustPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl"
              >
                <item.icon className="mb-3 h-5 w-5 text-sand-400" />
                <p className="text-xs leading-5 text-white/76">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="image-mask relative aspect-[0.86] max-h-[520px] overflow-hidden rounded-[8px] border border-white/12 bg-white/10 shadow-premium backdrop-blur">
            <Image
              src="/images/hero-detail-work.jpg"
              alt="Detailarbeit bei moderner Renovierung"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <a
            href={`tel:${company.phoneHref}`}
            className="absolute -bottom-4 -left-6 rounded-[8px] border border-white/12 bg-white/12 p-5 shadow-premium backdrop-blur-2xl outline-none transition hover:-translate-y-1 hover:border-sand-300/60 focus-visible:ring-4 focus-visible:ring-sand-500/30"
            aria-label="LBL Bau telefonisch kontaktieren"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sand-500 text-anthracite-950">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sand-100/80">
                  Beratung
                </p>
                <p className="font-display text-lg font-bold">Schnell & persönlich</p>
              </div>
            </div>
          </a>
          <div className="absolute -right-4 top-8 rounded-[8px] border border-white/12 bg-anthracite-950/64 p-4 shadow-glow backdrop-blur-2xl">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-sand-400" />
              Bayern
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
