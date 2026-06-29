"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "lbl-bau-cookie-preferences";
const OPEN_EVENT = "lblbau:open-cookie-settings";

type CookiePreferences = {
  necessary: true;
  externalMedia: boolean;
  updatedAt: string;
};

const copy = {
  de: {
    title: "Cookie-Einstellungen",
    bannerTitle: "Datenschutzfreundliche Cookie-Nutzung",
    bannerText:
      "Wir verwenden technisch notwendige Speicherfunktionen für den Betrieb der Website. Externe Medien wie Google Maps werden erst nach aktiver Freigabe geladen.",
    necessary: "Notwendige Cookies",
    necessaryText:
      "Erforderlich für grundlegende Funktionen wie Cookie-Auswahl, Sicherheit und stabile Darstellung.",
    external: "Externe Medien",
    externalText:
      "Erlaubt das Laden externer Inhalte, zum Beispiel Google Maps, wenn Sie diese aktiv öffnen.",
    alwaysActive: "Immer aktiv",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    save: "Auswahl speichern",
    open: "Cookie-Einstellungen öffnen",
    close: "Cookie-Einstellungen schließen",
    legal: "Datenschutz",
  },
  hr: {
    title: "Postavke kolačića",
    bannerTitle: "Korištenje kolačića uz zaštitu privatnosti",
    bannerText:
      "Koristimo tehnički nužne postavke za rad stranice. Vanjski mediji poput Google Maps učitavaju se tek nakon vaše aktivne potvrde.",
    necessary: "Nužni kolačići",
    necessaryText:
      "Potrebni su za osnovne funkcije kao što su odabir cookie postavki, sigurnost i stabilan prikaz.",
    external: "Vanjski mediji",
    externalText:
      "Omogućuje učitavanje vanjskog sadržaja, na primjer Google Maps, kada ga aktivno otvorite.",
    alwaysActive: "Uvijek aktivno",
    acceptAll: "Prihvati sve",
    necessaryOnly: "Samo nužni",
    save: "Spremi odabir",
    open: "Otvori postavke kolačića",
    close: "Zatvori postavke kolačića",
    legal: "Privatnost",
  },
} as const;

function createPreferences(externalMedia: boolean): CookiePreferences {
  return {
    necessary: true,
    externalMedia,
    updatedAt: new Date().toISOString(),
  };
}

function readPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;

    return {
      necessary: true,
      externalMedia: Boolean(parsed.externalMedia),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function savePreferences(preferences: CookiePreferences) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("lblbau:cookie-preferences-changed", { detail: preferences }));
}

export function CookieConsent() {
  const { language } = useLanguage();
  const text = copy[language];
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = readPreferences();

    if (stored) {
      setExternalMedia(stored.externalMedia);
    } else {
      setShowBanner(true);
    }

    const openSettings = () => {
      const latest = readPreferences();
      setExternalMedia(Boolean(latest?.externalMedia));
      setShowBanner(false);
      setSettingsOpen(true);
    };

    const onHashChange = () => {
      if (window.location.hash === "#cookie-einstellungen") {
        openSettings();
      }
    };

    window.addEventListener(OPEN_EVENT, openSettings);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      window.removeEventListener(OPEN_EVENT, openSettings);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSettingsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [settingsOpen]);

  const persist = (nextExternalMedia: boolean) => {
    savePreferences(createPreferences(nextExternalMedia));
    setExternalMedia(nextExternalMedia);
    setShowBanner(false);
    setSettingsOpen(false);

    if (window.location.hash === "#cookie-einstellungen") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.aside
            role="region"
            aria-label={text.title}
            className="fixed inset-x-4 bottom-4 z-[95] mx-auto max-w-5xl overflow-hidden rounded-[8px] border border-anthracite-950/10 bg-white text-anthracite-950 shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:bottom-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <div className="flex gap-4">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember text-white">
                  <Cookie className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-black">{text.bannerTitle}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-anthracite-700">
                    {text.bannerText}
                  </p>
                  <a
                    href="/datenschutz"
                    className="mt-3 inline-flex text-sm font-bold text-ember underline-offset-4 hover:underline"
                  >
                    {text.legal}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
                <Button type="button" variant="outline" className="border-anthracite-950/15 bg-white text-anthracite-950 hover:bg-anthracite-950 hover:text-white" onClick={() => setSettingsOpen(true)}>
                  {text.title}
                </Button>
                <Button type="button" variant="default" onClick={() => persist(false)}>
                  {text.necessaryOnly}
                </Button>
                <Button type="button" variant="gold" onClick={() => persist(true)}>
                  {text.acceptAll}
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            className="fixed inset-0 z-[96] grid place-items-center bg-anthracite-950/72 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-settings-title"
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[8px] bg-white p-5 text-anthracite-950 shadow-[0_24px_90px_rgba(0,0,0,0.32)] md:p-7"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-ember">
                    {company.brandName}
                  </p>
                  <h2 id="cookie-settings-title" className="mt-2 font-display text-3xl font-black">
                    {text.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(false)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-anthracite-950 text-white transition hover:bg-ember"
                  aria-label={text.close}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-7 space-y-4">
                <CookieOption
                  title={text.necessary}
                  description={text.necessaryText}
                  badge={text.alwaysActive}
                  checked
                  disabled
                />
                <CookieOption
                  title={text.external}
                  description={text.externalText}
                  checked={externalMedia}
                  onChange={setExternalMedia}
                />
              </div>

              <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button type="button" variant="default" onClick={() => persist(false)}>
                  {text.necessaryOnly}
                </Button>
                <Button type="button" variant="gold" onClick={() => persist(externalMedia)}>
                  {text.save}
                </Button>
                <Button type="button" variant="gold" onClick={() => persist(true)}>
                  {text.acceptAll}
                </Button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CookieOption({
  title,
  description,
  checked,
  disabled,
  badge,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  badge?: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start justify-between gap-4 rounded-[8px] border border-anthracite-950/10 bg-sand-50 p-4",
        disabled && "cursor-default",
      )}
    >
      <span className="flex gap-3">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ember shadow-sm">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display text-lg font-black">{title}</span>
          <span className="mt-1 block text-sm leading-6 text-anthracite-700">{description}</span>
          {badge && (
            <span className="mt-3 inline-flex rounded-full bg-anthracite-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
              {badge}
            </span>
          )}
        </span>
      </span>
      <input
        type="checkbox"
        className="mt-2 h-5 w-5 accent-ember"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />
    </label>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
