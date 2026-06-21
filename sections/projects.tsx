"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { localize, useLanguage } from "@/lib/i18n";

export function ProjectsSection() {
  const { language, text } = useLanguage();
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  const openProject = (project: (typeof projects)[number]) => {
    setSelected(project);
    setSelectedImage(project.image);
  };

  const projectGallery =
    selected && "gallery" in selected && selected.gallery ? selected.gallery : null;
  const selectedImageIndex = projectGallery
    ? Math.max(projectGallery.indexOf(selectedImage), 0)
    : 0;

  const moveToImage = (direction: -1 | 1) => {
    if (!projectGallery?.length) return;

    setSelectedImage((currentImage) => {
      const currentIndex = Math.max(projectGallery.indexOf(currentImage), 0);
      const nextIndex = (currentIndex + direction + projectGallery.length) % projectGallery.length;
      return projectGallery[nextIndex];
    });
  };

  useEffect(() => {
    if (!selected || !("gallery" in selected) || !selected.gallery?.length) return;

    const gallery = selected.gallery;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

      event.preventDefault();
      setSelectedImage((currentImage) => {
        const currentIndex = Math.max(gallery.indexOf(currentImage), 0);

        if (event.key === "Home") return gallery[0];
        if (event.key === "End") return gallery[gallery.length - 1];

        const direction = event.key === "ArrowLeft" ? -1 : 1;
        const nextIndex = (currentIndex + direction + gallery.length) % gallery.length;
        return gallery[nextIndex];
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <AnimatedSection id="projekte" className="bg-white py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
              {text.projects.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
              {text.projects.title}
            </h2>
          </div>
          <p className="max-w-sm text-anthracite-700">
            {text.projects.intro}
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.button
              key={localize(project.title, language)}
              aria-label={`${text.projects.ariaPrefix}: ${localize(project.title, language)}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              onClick={() => openProject(project)}
              className={`group relative overflow-hidden rounded-[8px] bg-anthracite-900 text-left shadow-premium outline-none focus-visible:ring-4 focus-visible:ring-sand-500/30 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 2 ? "lg:col-span-2" : ""}`}
            >
              <Image
                src={project.image}
                alt={localize(project.title, language)}
                fill
                className={`object-cover brightness-[0.96] contrast-[1.04] saturate-[0.9] transition duration-700 group-hover:scale-[1.06] ${
                  index === 0 ? "object-center" : ""
                }`}
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="rounded-full bg-sand-500 px-3 py-1 text-xs font-bold text-anthracite-950">
                  {localize(project.category, language)}
                </span>
                <h3 className="mt-4 font-display text-2xl font-black">
                  {localize(project.title, language)}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {localize(project.location, language)}
                </p>
              </div>
              <span className="absolute right-5 top-5 grid h-11 w-11 scale-90 place-items-center rounded-full bg-white/12 text-white opacity-0 backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Maximize2 className="h-5 w-5" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) {
            setSelected(null);
            setSelectedImage("");
          }
        }}
      >
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[75] grid place-items-center p-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 34, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.96 }}
                    className="premium-scrollbar max-h-[calc(100svh-32px)] w-full max-w-[920px] overscroll-contain overflow-y-auto rounded-[8px] bg-white shadow-premium"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-anthracite-950">
                      <Image
                        src={selectedImage || selected.image}
                        alt={localize(selected.title, language)}
                        fill
                        className="object-cover brightness-[0.98] contrast-[1.02] saturate-[0.92]"
                        sizes="(min-width: 1024px) 920px, 100vw"
                      />
                      {projectGallery && (
                        <>
                          <button
                            type="button"
                            onClick={() => moveToImage(-1)}
                            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-anthracite-950/75 text-white shadow-lg backdrop-blur transition hover:bg-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
                            aria-label={text.projects.previousImage}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveToImage(1)}
                            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-anthracite-950/75 text-white shadow-lg backdrop-blur transition hover:bg-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
                            aria-label={text.projects.nextImage}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>
                          <span
                            className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-anthracite-950/75 px-3 py-1 text-xs font-bold text-white backdrop-blur"
                            aria-live="polite"
                          >
                            {selectedImageIndex + 1} / {projectGallery.length}
                          </span>
                        </>
                      )}
                      <Dialog.Close asChild>
                        <button
                          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-anthracite-950/70 text-white backdrop-blur"
                          aria-label={text.projects.close}
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                    </div>
                    <div className="p-5 sm:p-7">
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-sand-700">
                        {localize(selected.category, language)} ·{" "}
                        {localize(selected.location, language)}
                      </p>
                      <Dialog.Title className="mt-3 font-display text-3xl font-black text-anthracite-950">
                        {localize(selected.title, language)}
                      </Dialog.Title>
                      <Dialog.Description className="mt-4 leading-8 text-anthracite-700">
                        {localize(selected.description, language)}
                      </Dialog.Description>
                      {"gallery" in selected && selected.gallery && (
                        <div className="mt-7">
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-anthracite-500">
                            {text.projects.gallery}
                          </p>
                          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                            {selected.gallery.map((image, index) => (
                              <button
                                key={image}
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                className={`relative aspect-[4/3] overflow-hidden rounded-[6px] border-2 transition ${
                                  selectedImage === image
                                    ? "border-ember shadow-[0_0_0_1px_rgba(224,31,45,0.2)]"
                                    : "border-transparent opacity-65 hover:opacity-100"
                                }`}
                                aria-label={`${text.projects.galleryImage} ${index + 1}`}
                                aria-pressed={selectedImage === image}
                              >
                                <Image
                                  src={image}
                                  alt={localize(selected.title, language)}
                                  fill
                                  className="object-cover brightness-[0.98] contrast-[1.03] saturate-[0.9] transition duration-300 hover:scale-105"
                                  sizes="(min-width: 640px) 160px, 30vw"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      <Button className="mt-6" variant="default" asChild>
                        <a href="#kontakt" onClick={() => setSelected(null)}>
                          {text.projects.cta}
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </AnimatedSection>
  );
}
