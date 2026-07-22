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
    headerTagline: "Bauunterstützung & Renovierung",
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
        "Hochwertiger Renovierungsservice, Projektunterstützung und unterstützende Ausbauarbeiten im Rahmen abgestimmter Partnerprojekte mit sauberer Planung und präziser Mitwirkung.",
      primary: "Angebot anfragen",
      secondary: "Projekte ansehen",
      consulting: "Beratung",
      fastPersonal: "Schnell & persönlich",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Saubere Ausbauunterstützung und verlässliche Mitwirkung bei Bauprojekten.",
      ariaSuffix: "anfragen",
    },
    about: {
      eyebrow: "Über uns",
      title: "Lokal verwurzelt, sorgfältig geplant und hochwertig umgesetzt.",
      intro:
        "LBL Bau ist ein kleinerer, flexibler Baudienstleister und Baupartner aus Bayern. Unser Anspruch ist nicht Masse, sondern saubere Arbeit, ehrliche Kommunikation und ein Ergebnis, das auch nach Jahren überzeugt.",
      quote: "„Wir unterstützen Projekte so, dass Qualität und Vertrauen sichtbar werden.“",
      signature: "Geschäftsführung",
      timeline: [
        "Persönliche Beratung und klare Projektplanung",
        "Saubere Abstimmung mit Kunden, Partnern und Fachbetrieben",
        "Präzise Mitwirkung im vereinbarten Leistungsbereich",
        "Saubere Abschlussarbeiten nach Abstimmung mit dem verantwortlichen Fachbetrieb",
      ],
    },
    projects: {
      eyebrow: "Projekte",
      title: "Aktuelle Mitarbeit und ausgewählte Projektbereiche.",
      intro: "Echte Aufnahmen aus laufender Zusammenarbeit, ergänzt durch ausgewählte Leistungsbereiche von LBL Bau.",
      ariaPrefix: "Projekt ansehen",
      close: "Projektfenster schließen",
      cta: "Ähnliches Projekt anfragen",
      gallery: "Galerie",
      galleryImage: "Projektbild anzeigen",
      previousImage: "Vorheriges Projektbild",
      nextImage: "Nächstes Projektbild",
    },
    why: {
      eyebrow: "Warum wir",
      title: "Ein Baupartner, der Klarheit, Tempo und Qualität zusammenbringt.",
    },
    serviceArea: {
      eyebrow: "Regional vor Ort",
      title: "Renovierungsservice, Ausbauunterstützung und Bauunterstützung in Neumarkt-Sankt Veit, Waldkraiburg und Umgebung.",
      intro:
        "LBL Bau unterstützt private und gewerbliche Kunden in der Region mit Renovierungsservice, unterstützenden Trockenbauarbeiten, Ausbauunterstützung sowie vorbereitenden und ergänzenden Arbeiten bei Bauprojekten. Bei zulassungspflichtigen oder spezialisierten Fachgewerken erfolgt die Ausführung ausschließlich in Zusammenarbeit mit verantwortlichen Fachbetrieben bzw. im Rahmen entsprechender Partnerprojekte.",
      call: "Direkt anrufen",
      location: "Standort",
      areas: ["Neumarkt-Sankt Veit", "Waldkraiburg", "Mühldorf am Inn", "Ampfing", "Kraiburg am Inn", "Landkreis Mühldorf"],
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Ruhige Abläufe, saubere Arbeit und Ergebnisse, die Vertrauen schaffen.",
      stars: "Sterne",
    },
    finalCta: {
      eyebrow: "Nächstes Projekt",
      title:
        "Starten Sie Ihr nächstes Bauprojekt mit einem Partner, der sauber mitdenkt und präzise unterstützt.",
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
      projectPlaceholder: "Trockenbau-Unterstützung, Renovierung, Bauunterstützung ...",
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
      tagline: "Premium Bauunterstützung & Renovierung",
      intro:
        "Moderne Ausbauunterstützung, Renovierungsservice und verlässliche Projektunterstützung für private und gewerbliche Projekte in Bayern.",
      legalNote:
        "Bei zulassungspflichtigen Gewerken erfolgt die Ausführung ausschließlich in Zusammenarbeit mit verantwortlichen Fachbetrieben bzw. im Rahmen entsprechender Partnerprojekte.",
      quickLinks: "Quick Links",
      contact: "Kontakt",
      call: "Anrufen",
      route: "Route",
      routeAria: "Adresse in Google Maps öffnen",
      instagramAria: "LBL Bau auf Instagram öffnen",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  hr: {
    langLabel: "Hrvatski",
    loading: "Kvaliteta se učitava",
    headerTagline: "Građevinska podrška i renoviranje",
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
        "Kvalitetan renovacijski servis, projektna podrška i pomoćni unutarnji radovi u okviru dogovorenih partnerskih projekata uz uredno planiranje i preciznu suradnju.",
      primary: "Zatraži ponudu",
      secondary: "Pogledaj projekte",
      consulting: "Savjetovanje",
      fastPersonal: "Brzo i osobno",
    },
    services: {
      eyebrow: "Usluge",
      title: "Uredna podrška kod unutarnjih radova i pouzdana suradnja na građevinskim projektima.",
      ariaSuffix: "zatraži",
    },
    about: {
      eyebrow: "O nama",
      title: "Lokalno prisutni, pažljivo planirani i kvalitetno izvedeni radovi.",
      intro:
        "LBL Bau je manji i fleksibilan građevinski partner iz Bavarske. Naš cilj nije masovnost, nego uredan rad, iskrena komunikacija i rezultat koji uvjerava i nakon mnogo godina.",
      quote: "„Podržavamo projekte tako da se kvaliteta i povjerenje vide u svakom detalju.“",
      signature: "Vodstvo firme",
      timeline: [
        "Osobno savjetovanje i jasno planiranje projekta",
        "Uredan dogovor s klijentima, partnerima i stručnim izvođačima",
        "Precizna suradnja u dogovorenom području rada",
        "Uredni završni radovi prema dogovoru s odgovornim stručnim izvođačem",
      ],
    },
    projects: {
      eyebrow: "Projekti",
      title: "Aktualna suradnja i odabrana područja rada.",
      intro: "Stvarne fotografije iz trenutačne suradnje, nadopunjene odabranim područjima rada LBL Bau.",
      ariaPrefix: "Pogledaj projekt",
      close: "Zatvori projekt",
      cta: "Zatraži sličan projekt",
      gallery: "Galerija",
      galleryImage: "Prikaži sliku projekta",
      previousImage: "Prethodna slika projekta",
      nextImage: "Sljedeća slika projekta",
    },
    why: {
      eyebrow: "Zašto mi",
      title: "Građevinski partner koji spaja jasnoću, brzinu i kvalitetu.",
    },
    serviceArea: {
      eyebrow: "Regionalno na terenu",
      title: "Renovacijski servis, podrška kod unutarnjih radova i građevinska podrška u Neumarkt-Sankt Veitu, Waldkraiburgu i okolini.",
      intro:
        "LBL Bau podržava privatne i poslovne klijente u regiji kroz renovacijski servis, pomoćne radove suhe gradnje, podršku kod unutarnjih radova te pripremne i dodatne radove na građevinskim projektima. Kod radova koji zahtijevaju ovlaštene stručne izvođače izvedba se odvija isključivo u suradnji s odgovornim Fachbetrieb partnerima odnosno u okviru partnerskih projekata.",
      call: "Direktno nazovi",
      location: "Lokacija",
      areas: ["Neumarkt-Sankt Veit", "Waldkraiburg", "Mühldorf am Inn", "Ampfing", "Kraiburg am Inn", "Okrug Mühldorf"],
    },
    testimonials: {
      eyebrow: "Iskustva klijenata",
      title: "Mirni procesi, uredan rad i rezultati koji stvaraju povjerenje.",
      stars: "zvjezdica",
    },
    finalCta: {
      eyebrow: "Sljedeći projekt",
      title: "Pokrenite svoj sljedeći građevinski projekt s partnerom koji jasno razmišlja i precizno podržava izvedbu.",
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
      projectPlaceholder: "Podrška kod suhe gradnje, renoviranje, građevinska podrška ...",
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
      tagline: "Premium građevinska podrška i renoviranje",
      intro:
        "Moderna podrška kod unutarnjih radova, renovacijski servis i pouzdana projektna podrška za privatne i poslovne projekte u Bavarskoj.",
      legalNote:
        "Kod radova koji zahtijevaju ovlaštene stručne izvođače izvedba se odvija isključivo u suradnji s odgovornim Fachbetrieb partnerima odnosno u okviru odgovarajućih partnerskih projekata.",
      quickLinks: "Brzi linkovi",
      contact: "Kontakt",
      call: "Nazovi",
      route: "Ruta",
      routeAria: "Otvori adresu na Google Maps",
      instagramAria: "Otvori LBL Bau na Instagramu",
      rights: "Sva prava pridržana.",
    },
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    window.localStorage.removeItem("lbl-bau-language");
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
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
