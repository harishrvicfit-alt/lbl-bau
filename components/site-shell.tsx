"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollToPlugin);

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900);
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: event.clientX - 10,
        y: event.clientY - 10,
        duration: 0.22,
        ease: "power3.out",
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    if (!document.querySelector(href)) {
      window.location.href = `/${href}`;
      return;
    }

    gsap.to(window, {
      duration: 0.85,
      scrollTo: { y: href, offsetY: 88 },
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-anthracite-950 text-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-5 h-16 w-32 overflow-hidden rounded-[8px] bg-white p-2 shadow-glow">
                <Image
                  src={company.logo}
                  alt={`${company.brandName} Logo`}
                  fill
                  sizes="128px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="font-display text-sm uppercase tracking-[0.34em] text-sand-100">
                LBL Bau
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 origin-left bg-sand-500"
        style={{ scaleX, width: "100%" }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-5 w-5 rounded-full border border-sand-500/70 mix-blend-difference lg:block"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-anthracite-950/72 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent",
        )}
      >
        <nav className="section-shell flex h-20 items-center justify-between">
          <button
            onClick={() => goTo("#home")}
            className="flex items-center gap-3 text-left text-white"
            aria-label="Zur Startseite"
          >
            <span className="relative h-12 w-24 overflow-hidden rounded-[8px] border border-white/20 bg-white p-2 shadow-[0_14px_35px_rgba(0,0,0,0.18)] sm:w-32">
              <Image
                src={company.logo}
                alt={`${company.brandName} Logo`}
                fill
                sizes="128px"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-sm font-bold uppercase tracking-[0.2em]">
                {company.brandName}
              </span>
              <span className="block text-xs text-sand-100/80">Bau & Renovierung</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className="group relative text-sm font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-sand-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="gold" asChild>
              <a
                href="#kontakt"
                onClick={(event) => {
                  event.preventDefault();
                  goTo("#kontakt");
                }}
              >
                Angebot anfragen
              </a>
            </Button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Menü schließen Overlay"
              className="fixed inset-0 z-40 bg-anthracite-950/78 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="fixed inset-x-4 top-24 z-50 rounded-[8px] border border-white/10 bg-anthracite-950 p-4 text-white shadow-premium lg:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className="block w-full rounded-[8px] px-4 py-4 text-left text-sm font-semibold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-300"
                >
                  {item.label}
                </button>
              ))}
              <Button className="mt-3 w-full" variant="gold" asChild>
                <a href={`tel:${company.phoneHref}`}>Jetzt anrufen</a>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>{children}</main>
    </>
  );
}
