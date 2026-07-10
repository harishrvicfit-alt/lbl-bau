import {
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Hammer,
  Home,
  Layers3,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Users,
  WalletCards,
} from "lucide-react";

export type LocalizedText = {
  de: string;
  hr: string;
};

export const navItems = [
  { label: { de: "Home", hr: "Početna" }, href: "#home" },
  { label: { de: "Leistungen", hr: "Usluge" }, href: "#leistungen" },
  { label: { de: "Projekte", hr: "Projekti" }, href: "#projekte" },
  { label: { de: "Über uns", hr: "O nama" }, href: "#ueber-uns" },
  { label: { de: "Kontakt", hr: "Kontakt" }, href: "#kontakt" },
];

export const stats = [
  {
    displayValue: { de: "Erfahren", hr: "Iskusni" },
    label: { de: "Team mit Praxiserfahrung", hr: "Tim s praktičnim iskustvom" },
  },
  {
    displayValue: { de: "Zahlreiche", hr: "Brojni" },
    label: { de: "Erfolgreich abgeschlossene Projekte", hr: "Uspješno završeni projekti" },
  },
  { value: 95, suffix: "%", label: { de: "Weiterempfehlung", hr: "Preporuka klijenata" } },
  { value: 24, suffix: "h", label: { de: "Schnelle Rückmeldung", hr: "Brz odgovor" } },
];

export const services = [
  {
    title: { de: "Renovierungsservice", hr: "Renovacijski servis" },
    description: {
      de: "Klar abgegrenzte Modernisierungs-, Rückbau- und Vorbereitungsarbeiten mit sauberer Abstimmung.",
      hr: "Jasno dogovoreni radovi modernizacije, uklanjanja i pripreme uz urednu komunikaciju.",
    },
    icon: Hammer,
  },
  {
    title: { de: "Trockenbau-Unterstützung", hr: "Podrška kod suhe gradnje" },
    description: {
      de: "Unterstützende Trockenbauarbeiten, Montage nichttragender Trennwände und Zuarbeit im Rahmen von Partnerprojekten.",
      hr: "Pomoćni radovi suhe gradnje, montaža nenosivih pregradnih zidova i podrška u okviru partnerskih projekata.",
    },
    icon: Layers3,
  },
  {
    title: { de: "Montage & Finish", hr: "Montaža i završni radovi" },
    description: {
      de: "Ergänzende Montagearbeiten, saubere Anschlussdetails und unterstützende Abschlussarbeiten im vereinbarten Leistungsumfang.",
      hr: "Dodatni montažni radovi, uredni spojevi i pomoćni završni radovi u dogovorenom opsegu.",
    },
    icon: Ruler,
  },
  {
    title: { de: "Fassadenbegleitung", hr: "Podrška kod fasade" },
    description: {
      de: "Vorbereitende und unterstützende Arbeiten rund um Fassadenprojekte in Abstimmung mit Fachbetrieben.",
      hr: "Pripremni i pomoćni radovi oko fasadnih projekata u dogovoru sa stručnim izvođačima.",
    },
    icon: Paintbrush,
  },
  {
    title: { de: "Außenbereich-Unterstützung", hr: "Podrška za vanjske radove" },
    description: {
      de: "Zuarbeit, Vorbereitung und Unterstützung bei Außenflächen, Wegen und Baustellenlogistik.",
      hr: "Pomoć, priprema i podrška kod vanjskih površina, staza i organizacije gradilišta.",
    },
    icon: Trees,
  },
  {
    title: { de: "Neubau-Projektunterstützung", hr: "Podrška kod novogradnje" },
    description: {
      de: "Verlässliche Mitarbeit bei Neubauprojekten als ergänzender Partner vor Ort.",
      hr: "Pouzdana suradnja na projektima novogradnje kao dodatni partner na terenu.",
    },
    icon: Home,
  },
];

export const benefits = [
  { title: { de: "Termintreu", hr: "Poštivanje rokova" }, icon: CalendarCheck },
  { title: { de: "Präzise Arbeit", hr: "Precizan rad" }, icon: Ruler },
  { title: { de: "Faire Preise", hr: "Poštene cijene" }, icon: WalletCards },
  { title: { de: "Moderne Lösungen", hr: "Moderna rješenja" }, icon: Sparkles },
  { title: { de: "Zuverlässigkeit", hr: "Pouzdanost" }, icon: ShieldCheck },
  { title: { de: "Erfahrung", hr: "Iskustvo" }, icon: Award },
];

export const projects = [
  {
    title: {
      de: "Doppelhaus-Neubau – laufende Mitarbeit",
      hr: "Novogradnja dvojne kuće – radovi u tijeku",
    },
    category: { de: "Aktuelles Partnerprojekt", hr: "Aktualni partnerski projekt" },
    location: {
      de: "Unterstützende Bauarbeiten vor Ort",
      hr: "Podrška pri građevinskim radovima",
    },
    image: "/images/projects/doppelhaus-neubau-baufortschritt.webp",
    gallery: [
      "/images/projects/doppelhaus-neubau-baufortschritt.webp",
      "/images/projects/doppelhaus-geruest-aussenansicht.webp",
      "/images/projects/doppelhaus-bauphase-aussen-mauerwerk.webp",
      "/images/projects/doppelhaus-deckenbewehrung-uebersicht.webp",
      "/images/projects/doppelhaus-dachvorbereitung-abend.webp",
      "/images/projects/doppelhaus-dachflaeche-detail.webp",
      "/images/projects/doppelhaus-neubau-innenausbau.webp",
      "/images/projects/doppelhaus-neubau-raumaufteilung.webp",
      "/images/projects/doppelhaus-neubau-treppenhaus.webp",
      "/images/projects/doppelhaus-neubau-aussenansicht.webp",
      "/images/projects/doppelhaus-neubau-mauerwerk.webp",
    ],
    description: {
      de: "LBL Bau unterstützt dieses laufende Doppelhaus-Neubauprojekt als zuverlässiger Partner bei ausgewählten Arbeiten vor Ort. Die Aufnahmen dokumentieren mehrere Bauphasen von den Außenwänden über Decken- und Dachvorbereitung bis zu Raumaufteilung und Treppenhaus. Projektleitung, spezialisierte Fachgewerke und Gesamtkoordination liegen bei den jeweils verantwortlichen Partnern.",
      hr: "LBL Bau na ovoj novogradnji dvojne kuće sudjeluje kao pouzdan partner pri odabranim radovima na terenu. Fotografije prikazuju više faza gradnje, od vanjskih zidova preko pripreme stropne i krovne konstrukcije do rasporeda prostorija i stubišta. Vođenje projekta, specijalizirani stručni radovi i ukupna koordinacija pripadaju odgovornim partnerskim izvođačima.",
    },
  },
  {
    title: { de: "Wohnhaus-Renovierung", hr: "Renoviranje kuće" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Ausbauunterstützung & Modernisierung", hr: "Podrška kod unutarnjih radova i modernizacije" },
    image: "/images/project-house-renovation.jpg",
    description: {
      de: "Beispielhafter Leistungsbereich für Renovierungsservice und Ausbauunterstützung: Vorbereitung, Montage, Details und sauberes Finish im vereinbarten Umfang. Spezialisierte Fachgewerke werden mit verantwortlichen Fachbetrieben abgestimmt.",
      hr: "Primjer područja rada za renovacijski servis i podršku kod unutarnjih radova: priprema, montaža, detalji i uredan završetak u dogovorenom opsegu. Specijalizirani stručni radovi usklađuju se s odgovornim stručnim izvođačima.",
    },
  },
  {
    title: { de: "Fassadenprojekt-Unterstützung", hr: "Podrška kod fasadnog projekta" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Vorbereitung & Zuarbeit", hr: "Priprema i pomoćni radovi" },
    image: "/images/project-modern-facade.jpg",
    description: {
      de: "Unterstützende Leistungen bei Fassadenprojekten: Vorbereitung, Materiallogistik, Zuarbeit und Detailabstimmung im Zusammenspiel mit verantwortlichen Fachbetrieben.",
      hr: "Pomoćne usluge kod fasadnih projekata: priprema, logistika materijala, pomoćni radovi i usklađivanje detalja zajedno s odgovornim stručnim izvođačima.",
    },
  },
  {
    title: { de: "Ausbauunterstützung Wohnbereich", hr: "Podrška kod unutarnjih radova u stambenom prostoru" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Trockenbau- und Innenarbeiten als Unterstützung", hr: "Podrška kod suhe gradnje i unutarnjih radova" },
    image: "/images/project-interior-work.jpg",
    description: {
      de: "Leistungsbereich für Ausbauunterstützung mit unterstützenden Trockenbauarbeiten, Montage, Wand- und Deckenverkleidungen sowie sauberem Finish in Abstimmung mit Fachbetrieben.",
      hr: "Područje rada za podršku kod unutarnjih radova s pomoćnim radovima suhe gradnje, montažom, zidnim i stropnim oblogama te urednim završetkom u dogovoru sa stručnim izvođačima.",
    },
  },
  {
    title: { de: "Außenbereich-Projektunterstützung", hr: "Podrška kod vanjskih radova" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Vorbereitung & Unterstützung", hr: "Priprema i podrška" },
    image: "/images/project-driveway.jpg",
    description: {
      de: "Unterstützende und vorbereitende Arbeiten bei Außenflächen, Wegen und Baustellenumfeld. Spezialisierte Arbeiten an Wegen und Belägen werden mit verantwortlichen Fachpartnern umgesetzt.",
      hr: "Pomoćni i pripremni radovi kod vanjskih površina, staza i okruženja gradilišta. Specijalizirani vanjski radovi provode se s odgovornim partnerima.",
    },
  },
];

export const testimonials = [
  {
    name: "Thomas R.",
    place: { de: "Oberbayern", hr: "Gornja Bavarska" },
    text: {
      de: "Sehr saubere Arbeit, klare Kommunikation und der Zeitplan wurde eingehalten. Genau so stellt man sich einen zuverlässigen Baubetrieb vor.",
      hr: "Vrlo uredan rad, jasna komunikacija i poštovan dogovoreni rok. Upravo tako treba izgledati ozbiljan obrt.",
    },
    stars: 5,
  },
  {
    name: "Martina K.",
    place: { de: "Landkreis Mühldorf", hr: "Okrug Mühldorf" },
    text: {
      de: "Die Unterstützung bei unserem Umbau lief ruhig, zuverlässig und mit viel Liebe zum Detail. Das Ergebnis wirkt deutlich hochwertiger als erwartet.",
      hr: "Podrška pri našem preuređenju prošla je mirno, pouzdano i s puno pažnje prema detaljima. Rezultat izgleda kvalitetnije nego što smo očekivali.",
    },
    stars: 5,
  },
  {
    name: "Familie Berger",
    place: { de: "Bayern", hr: "Bavarska" },
    text: {
      de: "Faire Beratung, transparente Kosten und ein Team, dem man das eigene Zuhause gerne anvertraut.",
      hr: "Pošteno savjetovanje, transparentni troškovi i tim kojem se bez brige može povjeriti vlastiti dom.",
    },
    stars: 5,
  },
];

export const trustPoints = [
  { icon: BadgeCheck, label: { de: "Deutsche Qualitätsstandards", hr: "Njemački standardi kvalitete" } },
  { icon: Users, label: { de: "Persönlicher Ansprechpartner", hr: "Osobni kontakt" } },
  { icon: Building2, label: { de: "Regional in Oberbayern", hr: "Regionalno u Bavarskoj" } },
  { icon: Star, label: { de: "Saubere Umsetzung", hr: "Uredna izvedba" } },
];
