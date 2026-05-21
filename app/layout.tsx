import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";

const siteUrl = company.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LBL Bau | Renovierung, Innenausbau & Hausbau",
    template: "%s | LBL Bau",
  },
  description:
    "LBL Bau ist Ihr moderner Baupartner fuer Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und kleinere bis mittlere Bauprojekte.",
  keywords: [
    "LBL Bau",
    "Baufirma Bayern",
    "Renovierung Bayern",
    "Innenausbau Bayern",
    "Fassadenarbeiten",
    "Trockenbau",
    "Pflasterarbeiten",
    "Hausbau",
  ],
  openGraph: {
    title: "LBL Bau",
    description:
      "Qualitaet am Bau. Modern. Praezise. Zuverlaessig. Ihr Partner fuer hochwertige Bau- und Renovierungsarbeiten.",
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
      <body>{children}</body>
    </html>
  );
}
