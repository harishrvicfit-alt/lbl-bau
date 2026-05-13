"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  return (
    <AnimatedSection id="projekte" className="bg-white py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
              Projekte
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
              Ausgewählte Arbeiten mit ruhiger, hochwertiger Wirkung.
            </h2>
          </div>
          <p className="max-w-sm text-anthracite-700">
            Realistische Platzhalter bis echte Referenzbilder und Projekttexte ergänzt
            werden.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              onClick={() => setSelected(project)}
              className={`group relative overflow-hidden rounded-[8px] bg-anthracite-900 text-left shadow-premium ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 2 ? "lg:col-span-2" : ""}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.08]"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="rounded-full bg-sand-500 px-3 py-1 text-xs font-bold text-anthracite-950">
                  {project.category}
                </span>
                <h3 className="mt-4 font-display text-2xl font-black">{project.title}</h3>
                <p className="mt-2 text-sm text-white/70">{project.location}</p>
              </div>
              <span className="absolute right-5 top-5 grid h-11 w-11 scale-90 place-items-center rounded-full bg-white/12 text-white opacity-0 backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Maximize2 className="h-5 w-5" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <AnimatePresence>
          {selected && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[70] bg-anthracite-950/78 backdrop-blur-md"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, y: 34, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  className="fixed left-1/2 top-1/2 z-[75] max-h-[88svh] w-[min(920px,calc(100%-28px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[8px] bg-white shadow-premium"
                >
                  <div className="relative h-[360px]">
                    <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                    <Dialog.Close asChild>
                      <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-anthracite-950/70 text-white backdrop-blur">
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-sand-700">
                      {selected.category} · {selected.location}
                    </p>
                    <Dialog.Title className="mt-3 font-display text-3xl font-black text-anthracite-950">
                      {selected.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-4 leading-8 text-anthracite-700">
                      {selected.description}
                    </Dialog.Description>
                    <Button className="mt-6" variant="default" asChild>
                      <a href="#kontakt">Ähnliches Projekt anfragen</a>
                    </Button>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </AnimatedSection>
  );
}
