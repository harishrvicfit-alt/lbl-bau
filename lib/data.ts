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

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über Uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export const stats = [
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 150, suffix: "+", label: "Abgeschlossene Projekte" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 24, suffix: "h", label: "Schnelle Rückmeldung" },
];

export const services = [
  {
    title: "Renovierung",
    description:
      "Saubere Modernisierung von Wohnungen, Häusern und Gewerbeflächen mit klarer Planung.",
    icon: Hammer,
  },
  {
    title: "Innenausbau",
    description:
      "Trockenbau, Böden, Wände und detailgenaue Innenarbeiten aus einer Hand.",
    icon: Layers3,
  },
  {
    title: "Fassadenarbeiten",
    description:
      "Moderne Fassadenlösungen, Putzarbeiten und energetische Verbesserungen.",
    icon: Paintbrush,
  },
  {
    title: "Trockenbau",
    description:
      "Flexible Raumlösungen, Decken, Trennwände und präzise Ausführung.",
    icon: BrickWall,
  },
  {
    title: "Pflasterarbeiten",
    description:
      "Einfahrten, Wege und Außenbereiche mit langlebigem, hochwertigem Finish.",
    icon: Trees,
  },
  {
    title: "Hausbau",
    description:
      "Kleinere bis mittlere Bauprojekte mit verlässlicher Koordination vor Ort.",
    icon: Home,
  },
];

export const benefits = [
  { title: "Termintreu", icon: CalendarCheck },
  { title: "Präzise Arbeit", icon: Ruler },
  { title: "Faire Preise", icon: WalletCards },
  { title: "Moderne Lösungen", icon: Sparkles },
  { title: "Zuverlässigkeit", icon: ShieldCheck },
  { title: "Erfahrung", icon: Award },
];

export const projects = [
  {
    title: "Sanierung Einfamilienhaus",
    category: "Renovierung",
    location: "Waldkraiburg",
    image: "/images/project-house-renovation.jpg",
    description:
      "Komplette Modernisierung mit neuen Oberflächen, optimierter Raumwirkung und sauberer Ausführung.",
  },
  {
    title: "Moderne Fassadengestaltung",
    category: "Fassade",
    location: "Mühldorf am Inn",
    image: "/images/project-modern-facade.jpg",
    description:
      "Zeitlose Fassadenarbeiten mit warmer Materialwirkung und präzisen Anschlussdetails.",
  },
  {
    title: "Innenausbau Wohnbereich",
    category: "Innenausbau",
    location: "Ampfing",
    image: "/images/project-interior-work.jpg",
    description:
      "Eleganter Innenausbau mit Trockenbau, Lichtlinien und hochwertigem Finish.",
  },
  {
    title: "Einfahrt & Außenanlage",
    category: "Pflaster",
    location: "Kraiburg am Inn",
    image: "/images/project-driveway.jpg",
    description:
      "Robuste Pflasterarbeiten mit klaren Kanten, Entwässerung und harmonischer Außenwirkung.",
  },
];

export const testimonials = [
  {
    name: "Thomas R.",
    place: "Waldkraiburg",
    text: "Sehr saubere Arbeit, klare Kommunikation und der Zeitplan wurde eingehalten. Genau so stellt man sich einen Handwerksbetrieb vor.",
    stars: 5,
  },
  {
    name: "Martina K.",
    place: "Mühldorf am Inn",
    text: "Unsere Renovierung lief ruhig, zuverlässig und mit viel Liebe zum Detail. Das Ergebnis wirkt deutlich hochwertiger als erwartet.",
    stars: 5,
  },
  {
    name: "Familie Berger",
    place: "Ampfing",
    text: "Faire Beratung, transparente Kosten und ein Team, dem man das eigene Zuhause gerne anvertraut.",
    stars: 5,
  },
];

export const trustPoints = [
  { icon: BadgeCheck, label: "Deutsche Qualitätsstandards" },
  { icon: Users, label: "Persönlicher Ansprechpartner" },
  { icon: Building2, label: "Regional in Oberbayern" },
  { icon: Star, label: "Hochwertige Ausführung" },
];
