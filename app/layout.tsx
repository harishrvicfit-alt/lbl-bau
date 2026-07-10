import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";
import { LanguageProvider } from "@/lib/i18n";
import { CookieConsent } from "@/components/cookie-consent";

const siteUrl = company.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LBL Bau | Renovierungsservice & Bauunterstützung",
    template: "%s | LBL Bau",
  },
  description:
    "LBL Bau in Neumarkt-Sankt Veit: Renovierungsservice, Bauunterstützung, unterstützende Trockenbauarbeiten und Ausbauunterstützung im Rahmen von Partnerprojekten in Waldkraiburg und Mühldorf.",
  keywords: [
    "LBL Bau",
    "LBL Bau Neumarkt-Sankt Veit",
    "Projektunterstützung Neumarkt-Sankt Veit",
    "Baupartner Neumarkt-Sankt Veit",
    "Bauunterstützung Waldkraiburg",
    "Bauunterstützung Mühldorf am Inn",
    "Baupartner Mühldorf am Inn",
    "Renovierung Neumarkt-Sankt Veit",
    "Renovierung Waldkraiburg",
    "Ausbauunterstützung Neumarkt-Sankt Veit",
    "Trockenbau Unterstützung Neumarkt-Sankt Veit",
    "Bauhelfer Neumarkt-Sankt Veit",
    "Projektunterstützung Bau Waldkraiburg",
    "Baupartner Bayern",
    "Renovierung Bayern",
    "Ausbauunterstützung Bayern",
    "Trockenbau Unterstützung",
    "Bauprojekt Unterstützung",
    "unterstützende Ausbauarbeiten",
  ],
  authors: [{ name: company.brandName, url: siteUrl }],
  creator: company.brandName,
  publisher: company.brandName,
  applicationName: company.brandName,
  category: "construction",
  openGraph: {
    title: "LBL Bau | Baupartner in Neumarkt-Sankt Veit",
    description:
      "Qualität am Bau. Modern. Präzise. Zuverlässig. Ihr Partner für Renovierungsservice, Bauunterstützung, Ausbauunterstützung und Mitwirkung bei Partnerprojekten in Neumarkt-Sankt Veit, Waldkraiburg und Mühldorf am Inn.",
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
    title: "LBL Bau | Renovierungsservice & Bauunterstützung",
    description:
      "Regionaler Baupartner für Renovierungsservice, unterstützende Trockenbauarbeiten, Ausbauunterstützung und Projektunterstützung in Neumarkt-Sankt Veit und Umgebung.",
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
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
