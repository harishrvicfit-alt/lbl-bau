import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";

const siteUrl = company.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Premium Bauunternehmen Waldkraiburg | Renovierung, Innenausbau & Hausbau",
    template: "%s | Bauunternehmen Waldkraiburg",
  },
  description:
    "Moderne, zuverlässige Baufirma aus Waldkraiburg für Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und kleinere bis mittlere Bauprojekte.",
  keywords: [
    "Bauunternehmen Waldkraiburg",
    "Baufirma Waldkraiburg",
    "Renovierung Waldkraiburg",
    "Innenausbau Bayern",
    "Fassadenarbeiten Mühldorf",
    "Trockenbau Waldkraiburg",
    "Pflasterarbeiten Oberbayern",
    "Hausbau Waldkraiburg",
  ],
  openGraph: {
    title: "Premium Bauunternehmen Waldkraiburg",
    description:
      "Qualität am Bau. Modern. Präzise. Zuverlässig. Ihr regionaler Partner für hochwertige Bau- und Renovierungsarbeiten.",
    url: siteUrl,
    siteName: "Bauunternehmen Waldkraiburg",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Modernes Bauunternehmen in Waldkraiburg",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
