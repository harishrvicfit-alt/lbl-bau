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
    "LBL Bau in Heldenstein: Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und Hausbau in Waldkraiburg und Mühldorf.",
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
    "Fassadenarbeiten Heldenstein",
    "Pflasterarbeiten Mühldorf am Inn",
    "Baufirma Bayern",
    "Renovierung Bayern",
    "Innenausbau Bayern",
    "Fassadenarbeiten",
    "Trockenbau",
    "Pflasterarbeiten",
    "Hausbau",
  ],
  authors: [{ name: company.brandName, url: siteUrl }],
  creator: company.brandName,
  publisher: company.brandName,
  applicationName: company.brandName,
  category: "construction",
  openGraph: {
    title: "LBL Bau | Bauunternehmen in Heldenstein",
    description:
      "Qualität am Bau. Modern. Präzise. Zuverlässig. Ihr Partner für hochwertige Bau- und Renovierungsarbeiten in Heldenstein, Waldkraiburg und Mühldorf am Inn.",
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
    title: "LBL Bau | Renovierung, Innenausbau & Hausbau",
    description:
      "Regionaler Baupartner für hochwertige Renovierung, Innenausbau, Fassadenarbeiten und Pflasterarbeiten in Heldenstein und Umgebung.",
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
      <body>{children}</body>
    </html>
  );
}
