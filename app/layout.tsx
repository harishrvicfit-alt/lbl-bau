import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";
import { LanguageProvider } from "@/lib/i18n";

const siteUrl = company.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LBL Bau | Renovierung, Trockenbau & Projektunterstützung",
    template: "%s | LBL Bau",
  },
  description:
    "LBL Bau in Heldenstein: Renovierungsservice, Trockenbau, Innenausbau und unterstützende Bauarbeiten bei Partnerprojekten in Waldkraiburg und Mühldorf.",
  keywords: [
    "LBL Bau",
    "LBL Bau Heldenstein",
    "Bauunternehmen Heldenstein",
    "Baufirma Heldenstein",
    "Baufirma Waldkraiburg",
    "Bauunternehmen Waldkraiburg",
    "Baufirma Mühldorf am Inn",
    "Renovierung Heldenstein",
    "Renovierung Waldkraiburg",
    "Innenausbau Heldenstein",
    "Trockenbau Heldenstein",
    "Bauhelfer Heldenstein",
    "Projektunterstützung Bau Waldkraiburg",
    "Baufirma Bayern",
    "Renovierung Bayern",
    "Innenausbau Bayern",
    "Trockenbau",
    "Bauprojekt Unterstützung",
    "Ausbauarbeiten",
  ],
  authors: [{ name: company.brandName, url: siteUrl }],
  creator: company.brandName,
  publisher: company.brandName,
  applicationName: company.brandName,
  category: "construction",
  openGraph: {
    title: "LBL Bau | Baupartner in Heldenstein",
    description:
      "Qualität am Bau. Modern. Präzise. Zuverlässig. Ihr Partner für Renovierungsservice, Trockenbau, Innenausbau und unterstützende Bauarbeiten in Heldenstein, Waldkraiburg und Mühldorf am Inn.",
    url: siteUrl,
    siteName: "LBL Bau",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "LBL Bau Logo und moderner Bauauftritt",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "LBL Bau | Renovierung, Trockenbau & Projektunterstützung",
    description:
      "Regionaler Baupartner für Renovierungsservice, Trockenbau, Innenausbau und unterstützende Arbeiten bei Bauprojekten in Heldenstein und Umgebung.",
    images: ["/images/og-cover.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
