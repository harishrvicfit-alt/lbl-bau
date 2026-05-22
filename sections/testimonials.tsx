"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="overflow-hidden bg-anthracite-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(227,6,19,0.16),transparent_28%)]" />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-300">
            Kundenstimmen
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
            Ruhige Abläufe, saubere Arbeit und Ergebnisse, die Vertrauen schaffen.
          </h2>
        </div>

        <div className="no-scrollbar mt-14 flex gap-5 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="min-w-[310px] flex-1 rounded-[8px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl md:min-w-[380px]"
            >
              <div className="flex gap-1 text-sand-400" aria-label={`${testimonial.stars} Sterne`}>
                {Array.from({ length: testimonial.stars }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 leading-8 text-white/74">“{testimonial.text}”</p>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sand-500 font-bold text-anthracite-950">
                  {testimonial.name.slice(0, 1)}
                </span>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.place}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
