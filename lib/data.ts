import {
  Award,
  BadgeCheck,
  BrickWall,
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
  { value: 10, suffix: "+", label: { de: "Jahre Erfahrung", hr: "Godina iskustva" } },
  { value: 50, suffix: "+", label: { de: "Abgeschlossene Projekte", hr: "Završenih projekata" } },
  { value: 95, suffix: "%", label: { de: "Weiterempfehlung", hr: "Preporuka klijenata" } },
  { value: 24, suffix: "h", label: { de: "Schnelle Rückmeldung", hr: "Brz odgovor" } },
];

export const services = [
  {
    title: { de: "Renovierung", hr: "Renoviranje" },
    description: {
      de: "Saubere Modernisierung von Wohnungen, Häusern und Gewerbeflächen mit klarer Planung.",
      hr: "Uredna modernizacija stanova, kuća i poslovnih prostora uz jasno planiranje.",
    },
    icon: Hammer,
  },
  {
    title: { de: "Innenausbau", hr: "Unutarnji radovi" },
    description: {
      de: "Trockenbau, Böden, Wände und detailgenaue Innenarbeiten aus einer Hand.",
      hr: "Suha gradnja, podovi, zidovi i precizni unutarnji radovi iz jedne ruke.",
    },
    icon: Layers3,
  },
  {
    title: { de: "Fassadenarbeiten", hr: "Fasadni radovi" },
    description: {
      de: "Moderne Fassadenlösungen, Putzarbeiten und energetische Verbesserungen.",
      hr: "Moderna fasadna rješenja, žbukanje i energetska poboljšanja objekata.",
    },
    icon: Paintbrush,
  },
  {
    title: { de: "Trockenbau", hr: "Suha gradnja" },
    description: {
      de: "Flexible Raumlösungen, Decken, Trennwände und präzise Ausführung.",
      hr: "Fleksibilna prostorna rješenja, stropovi, pregradni zidovi i precizna izvedba.",
    },
    icon: BrickWall,
  },
  {
    title: { de: "Pflasterarbeiten", hr: "Popločavanje" },
    description: {
      de: "Einfahrten, Wege und Außenbereiche mit langlebigem, hochwertigem Finish.",
      hr: "Prilazi, staze i vanjske površine s dugotrajnim i kvalitetnim završetkom.",
    },
    icon: Trees,
  },
  {
    title: { de: "Hausbau", hr: "Gradnja kuća" },
    description: {
      de: "Kleinere bis mittlere Bauprojekte mit verlässlicher Koordination vor Ort.",
      hr: "Manji do srednji građevinski projekti s pouzdanom koordinacijom na terenu.",
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
    image: "/images/projects/doppelhaus-neubau-aussenansicht.webp",
    gallery: [
      "/images/projects/doppelhaus-neubau-aussenansicht.webp",
      "/images/projects/doppelhaus-neubau-mauerwerk.webp",
      "/images/projects/doppelhaus-neubau-innenausbau.webp",
      "/images/projects/doppelhaus-neubau-raumaufteilung.webp",
      "/images/projects/doppelhaus-neubau-treppenhaus.webp",
      "/images/projects/doppelhaus-neubau-baufortschritt.webp",
    ],
    description: {
      de: "LBL Bau unterstützt dieses laufende Doppelhaus-Neubauprojekt als zuverlässiger Partner bei ausgewählten Bauarbeiten vor Ort. Die Aufnahmen dokumentieren den aktuellen Rohbau, das Mauerwerk, die Raumaufteilung und das Treppenhaus. Projektleitung und Gesamtleistung liegen bei den jeweils verantwortlichen Partnern.",
      hr: "LBL Bau na ovoj novogradnji dvojne kuće sudjeluje kao pouzdan partner pri odabranim građevinskim radovima. Fotografije prikazuju aktualnu fazu rohbaua, zidarske radove, raspored prostorija i stubište. Vođenje projekta i ukupna izvedba pripadaju odgovornim partnerskim izvođačima.",
    },
  },
  {
    title: { de: "Sanierung Einfamilienhaus", hr: "Sanacija obiteljske kuće" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Renovierung & Modernisierung", hr: "Renoviranje i modernizacija" },
    image: "/images/project-house-renovation.jpg",
    description: {
      de: "Beispielhafter Leistungsbereich für die Modernisierung von Wohnhäusern: Oberflächen, Details, Koordination und saubere Übergabe aus einer Hand.",
      hr: "Primjer područja rada za modernizaciju obiteljskih kuća: površine, detalji, koordinacija i uredna predaja iz jedne ruke.",
    },
  },
  {
    title: { de: "Moderne Fassadengestaltung", hr: "Moderno uređenje fasade" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Fassade & Putzarbeiten", hr: "Fasada i žbukanje" },
    image: "/images/project-modern-facade.jpg",
    description: {
      de: "Leistungsbereich für Fassadenarbeiten mit klarer Optik, langlebigen Materialien und präzisen Anschlussdetails.",
      hr: "Područje rada za fasadne radove s čistim izgledom, dugotrajnim materijalima i preciznim detaljima spojeva.",
    },
  },
  {
    title: { de: "Innenausbau Wohnbereich", hr: "Unutarnji radovi u stambenom prostoru" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Trockenbau & Innenarbeiten", hr: "Suha gradnja i unutarnji radovi" },
    image: "/images/project-interior-work.jpg",
    description: {
      de: "Leistungsbereich für hochwertigen Innenausbau mit Trockenbau, Böden, Wandflächen und sauberem Finish.",
      hr: "Područje rada za kvalitetne unutarnje radove sa suhom gradnjom, podovima, zidnim površinama i urednim završetkom.",
    },
  },
  {
    title: { de: "Einfahrt & Außenanlage", hr: "Prilaz i vanjsko uređenje" },
    category: { de: "Projektbereich", hr: "Područje rada" },
    location: { de: "Pflaster & Außenbereich", hr: "Popločavanje i vanjski prostor" },
    image: "/images/project-driveway.jpg",
    description: {
      de: "Leistungsbereich für Einfahrten, Wege und Außenflächen mit robustem Aufbau, klaren Kanten und gepflegter Gesamtwirkung.",
      hr: "Područje rada za prilaze, staze i vanjske površine s robusnom podlogom, čistim rubovima i urednim ukupnim dojmom.",
    },
  },
];

export const testimonials = [
  {
    name: "Thomas R.",
    place: { de: "Oberbayern", hr: "Gornja Bavarska" },
    text: {
      de: "Sehr saubere Arbeit, klare Kommunikation und der Zeitplan wurde eingehalten. Genau so stellt man sich einen Handwerksbetrieb vor.",
      hr: "Vrlo uredan rad, jasna komunikacija i poštovan dogovoreni rok. Upravo tako treba izgledati ozbiljan obrt.",
    },
    stars: 5,
  },
  {
    name: "Martina K.",
    place: { de: "Landkreis Mühldorf", hr: "Okrug Mühldorf" },
    text: {
      de: "Unsere Renovierung lief ruhig, zuverlässig und mit viel Liebe zum Detail. Das Ergebnis wirkt deutlich hochwertiger als erwartet.",
      hr: "Naše renoviranje prošlo je mirno, pouzdano i s puno pažnje prema detaljima. Rezultat izgleda kvalitetnije nego što smo očekivali.",
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
  { icon: Star, label: { de: "Hochwertige Ausführung", hr: "Kvalitetna izvedba" } },
];
