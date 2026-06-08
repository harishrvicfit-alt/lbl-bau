"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { LocalizedText } from "@/lib/data";

export type Language = "de" | "hr";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: (typeof copy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const copy = {
  de: {
    langLabel: "Deutsch",
    loading: "Qualität wird geladen",
    headerTagline: "Bau & Renovierung",
    cta: {
      request: "Angebot anfragen",
      call: "Jetzt anrufen",
      closeMenu: "Menü schließen",
      openMenu: "Menü öffnen",
      home: "Zur Startseite",
    },
    hero: {
      badge: "Premium Baupartner: LBL Bau",
      headline: "LBL Bau. Modern. Präzise. Zuverlässig.",
      intro:
        "Hochwertige Renovierungen, Innenausbau, Fassaden und kleinere bis mittlere Bauprojekte mit sauberer Planung und präziser Ausführung.",
      primary: "Angebot anfragen",
      secondary: "Projekte ansehen",
      consulting: "Beratung",
      fastPersonal: "Schnell & persönlich",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Hochwertige Bauleistungen für moderne Wohn- und Arbeitsräume.",
      ariaSuffix: "anfragen",
    },
    about: {
      eyebrow: "Über uns",
      title: "Lokal verwurzelt, sorgfältig geplant und hochwertig umgesetzt.",
      intro:
        "LBL Bau ist eine kleinere, flexible Baufirma aus Bayern. Unser Anspruch ist nicht Masse, sondern saubere Arbeit, ehrliche Kommunikation und ein Ergebnis, das auch nach Jahren überzeugt.",
      quote: "„Wir bauen so, dass Vertrauen sichtbar wird.“",
      signature: "Geschäftsführung",
      timeline: [
        "Persönliche Beratung und klare Projektplanung",
        "Saubere Koordination der Gewerke und Materialien",
        "Präzise Ausführung nach deutschem Qualitätsanspruch",
        "Verlässliche Übergabe mit sauberem Finish",
      ],
    },
    projects: {
      eyebrow: "Projekte",
      title: "Projektbereiche mit ruhiger, hochwertiger Wirkung.",
      intro: "Beispielhafte Leistungsbereiche bis echte Referenzbilder und Projekttexte ergänzt werden.",
      ariaPrefix: "Projekt ansehen",
      close: "Projektfenster schließen",
      cta: "Ähnliches Projekt anfragen",
    },
    why: {
      eyebrow: "Warum wir",
      title: "Ein Baupartner, der Klarheit, Tempo und Qualität zusammenbringt.",
    },
    serviceArea: {
      eyebrow: "Regional vor Ort",
      title: "Bauleistungen in Heldenstein, Waldkraiburg und Umgebung.",
      intro:
        "LBL Bau unterstützt private und gewerbliche Kunden in der Region mit Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und kleineren bis mittleren Bauprojekten. Kurze Wege, klare Abstimmung und eine zuverlässige Ausführung stehen dabei im Mittelpunkt.",
      call: "Direkt anrufen",
      location: "Standort",
      areas: ["Heldenstein", "Waldkraiburg", "Mühldorf am Inn", "Ampfing", "Kraiburg am Inn", "Landkreis Mühldorf"],
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Ruhige Abläufe, saubere Arbeit und Ergebnisse, die Vertrauen schaffen.",
      stars: "Sterne",
    },
    finalCta: {
      eyebrow: "Nächstes Projekt",
      title:
        "Starten Sie Ihr nächstes Bauprojekt mit einem Team, das sauber denkt und präzise arbeitet.",
      primary: "Projekt besprechen",
      call: "Jetzt anrufen",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Erzählen Sie uns kurz von Ihrem Projekt.",
      intro:
        "Wir melden uns schnell zurück, besprechen den Umfang und geben eine realistische Einschätzung für Ablauf, Kosten und Zeitplan.",
      phoneAria: "LBL Bau anrufen",
      mailAria: "LBL Bau per E-Mail kontaktieren",
      mapAria: "LBL Bau Adresse in Google Maps öffnen",
      name: "Name",
      contactMethod: "Telefon oder E-Mail",
      projectType: "Projektart",
      projectPlaceholder: "Renovierung, Fassade, Innenausbau ...",
      message: "Nachricht",
      sending: "Wird gesendet ...",
      submit: "Anfrage senden",
      error: "Die Anfrage konnte nicht gesendet werden.",
      success: "Danke. Ihre Anfrage wurde gesendet.",
      mapTitle: "Karte anzeigen",
      mapText: "Die Karte wird erst nach Ihrer Aktivierung von Google Maps geladen.",
      mapButton: "Google Maps laden",
      route: "Route extern öffnen",
    },
    footer: {
      tagline: "Premium Bau & Renovierung",
      intro:
        "Moderne Bauleistungen, Renovierungen und hochwertige Ausführung für private und gewerbliche Projekte in Bayern.",
      quickLinks: "Quick Links",
      contact: "Kontakt",
      call: "Anrufen",
      route: "Route",
      routeAria: "Adresse in Google Maps öffnen",
      rights: "Alle Rechte vorbehalten.",
      websiteBy: "Website by",
    },
  },
  hr: {
    langLabel: "Hrvatski",
    loading: "Kvaliteta se učitava",
    headerTagline: "Gradnja i renoviranje",
    cta: {
      request: "Zatraži ponudu",
      call: "Nazovi sada",
      closeMenu: "Zatvori izbornik",
      openMenu: "Otvori izbornik",
      home: "Na početnu",
    },
    hero: {
      badge: "Premium građevinski partner: LBL Bau",
      headline: "LBL Bau. Moderno. Precizno. Pouzdano.",
      intro:
        "Kvalitetna renoviranja, unutarnji radovi, fasade i manji do srednji građevinski projekti uz uredno planiranje i preciznu izvedbu.",
      primary: "Zatraži ponudu",
      secondary: "Pogledaj projekte",
      consulting: "Savjetovanje",
      fastPersonal: "Brzo i osobno",
    },
    services: {
      eyebrow: "Usluge",
      title: "Kvalitetne građevinske usluge za moderne stambene i poslovne prostore.",
      ariaSuffix: "zatraži",
    },
    about: {
      eyebrow: "O nama",
      title: "Lokalno prisutni, pažljivo planirani i kvalitetno izvedeni radovi.",
      intro:
        "LBL Bau je manja i fleksibilna građevinska firma iz Bavarske. Naš cilj nije masovnost, nego uredan rad, iskrena komunikacija i rezultat koji uvjerava i nakon mnogo godina.",
      quote: "„Gradimo tako da se povjerenje vidi u svakom detalju.“",
      signature: "Vodstvo firme",
      timeline: [
        "Osobno savjetovanje i jasno planiranje projekta",
        "Uredna koordinacija radova i materijala",
        "Precizna izvedba prema njemačkim standardima kvalitete",
        "Pouzdana predaja s čistim završetkom",
      ],
    },
    projects: {
      eyebrow: "Projekti",
      title: "Područja rada s mirnim, kvalitetnim i profesionalnim dojmom.",
      intro: "Primjeri područja rada dok se ne dodaju stvarne reference, slike i opisi projekata.",
      ariaPrefix: "Pogledaj projekt",
      close: "Zatvori projekt",
      cta: "Zatraži sličan projekt",
    },
    why: {
      eyebrow: "Zašto mi",
      title: "Građevinski partner koji spaja jasnoću, brzinu i kvalitetu.",
    },
    serviceArea: {
      eyebrow: "Regionalno na terenu",
      title: "Građevinske usluge u Heldensteinu, Waldkraiburgu i okolini.",
      intro:
        "LBL Bau podržava privatne i poslovne klijente u regiji kroz renoviranje, unutarnje radove, fasade, suhu gradnju, popločavanje i manje do srednje građevinske projekte. Kratki putevi, jasni dogovori i pouzdana izvedba su u središtu našeg rada.",
      call: "Direktno nazovi",
      location: "Lokacija",
      areas: ["Heldenstein", "Waldkraiburg", "Mühldorf am Inn", "Ampfing", "Kraiburg am Inn", "Okrug Mühldorf"],
    },
    testimonials: {
      eyebrow: "Iskustva klijenata",
      title: "Mirni procesi, uredan rad i rezultati koji stvaraju povjerenje.",
      stars: "zvjezdica",
    },
    finalCta: {
      eyebrow: "Sljedeći projekt",
      title: "Pokrenite svoj sljedeći građevinski projekt s timom koji razmišlja čisto i radi precizno.",
      primary: "Razgovarajmo o projektu",
      call: "Nazovi sada",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Recite nam ukratko o svom projektu.",
      intro:
        "Javit ćemo se brzo, razgovarati o obimu radova i dati realnu procjenu za tijek, troškove i rokove.",
      phoneAria: "Nazovi LBL Bau",
      mailAria: "Kontaktiraj LBL Bau e-mailom",
      mapAria: "Otvori adresu LBL Bau na Google Maps",
      name: "Ime",
      contactMethod: "Telefon ili e-mail",
      projectType: "Vrsta projekta",
      projectPlaceholder: "Renoviranje, fasada, unutarnji radovi ...",
      message: "Poruka",
      sending: "Šalje se ...",
      submit: "Pošalji upit",
      error: "Upit se trenutno ne može poslati.",
      success: "Hvala. Vaš upit je poslan.",
      mapTitle: "Prikaži kartu",
      mapText: "Karta se učitava tek nakon vaše aktivacije Google Maps.",
      mapButton: "Učitaj Google Maps",
      route: "Otvori rutu izvana",
    },
    footer: {
      tagline: "Premium gradnja i renoviranje",
      intro:
        "Moderne građevinske usluge, renoviranja i kvalitetna izvedba za privatne i poslovne projekte u Bavarskoj.",
      quickLinks: "Brzi linkovi",
      contact: "Kontakt",
      call: "Nazovi",
      route: "Ruta",
      routeAria: "Otvori adresu na Google Maps",
      rights: "Sva prava pridržana.",
      websiteBy: "Izrada stranice",
    },
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem("lbl-bau-language");
    if (stored === "hr" || stored === "de") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("lbl-bau-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "hr" ? "hr" : "de";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      text: copy[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function localize(value: LocalizedText, language: Language) {
  return value[language];
}
