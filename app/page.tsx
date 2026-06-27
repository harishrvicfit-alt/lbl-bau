import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/company";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { CtaSection } from "@/sections/cta";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { ServiceAreaSection } from "@/sections/service-area";
import { ServicesSection } from "@/sections/services";
import { StatsSection } from "@/sections/stats";
import { TestimonialsSection } from "@/sections/testimonials";
import { WhyChooseUsSection } from "@/sections/why-choose-us";

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${company.website}/#business`,
      name: company.legalName,
      alternateName: company.brandName,
      image: `${company.website}/images/og-cover.svg`,
      logo: `${company.website}${company.logo}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.postalCode,
        addressLocality: company.city,
        addressRegion: company.region,
        addressCountry: "DE",
      },
      areaServed: [
        "Neumarkt-Sankt Veit",
        "Waldkraiburg",
        "Mühldorf am Inn",
        "Ampfing",
        "Kraiburg am Inn",
        "Oberbayern",
        "Bayern",
      ],
      description:
        "Regionaler Baupartner für Renovierungsservice, Trockenbau, Innenausbau und unterstützende Bauarbeiten bei Partnerprojekten in Neumarkt-Sankt Veit, Waldkraiburg und Mühldorf am Inn.",
      founder: company.owner,
      telephone: company.phoneHref,
      email: company.email,
      priceRange: "$$",
      url: company.website,
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        company.mapQuery,
      )}`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phoneHref,
        contactType: "customer service",
        areaServed: "DE-BY",
        availableLanguage: ["de"],
      },
      makesOffer: {
        "@type": "OfferCatalog",
        name: "Leistungsbereiche",
        itemListElement: [
          "Trockenbau",
          "Innenausbau",
          "Renovierungsservice",
          "Montage und Finish",
          "Fassadenbegleitung",
          "Außenbereich-Unterstützung",
          "Neubau-Projektunterstützung",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: "Neumarkt-Sankt Veit, Waldkraiburg und Mühldorf am Inn",
            provider: {
              "@id": `${company.website}/#business`,
            },
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${company.website}/#website`,
      name: company.brandName,
      url: company.website,
      inLanguage: "de-DE",
      publisher: {
        "@id": `${company.website}/#business`,
      },
    },
  ];

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </SiteShell>
  );
}
