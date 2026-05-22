import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/company";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { CtaSection } from "@/sections/cta";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { ServicesSection } from "@/sections/services";
import { StatsSection } from "@/sections/stats";
import { TestimonialsSection } from "@/sections/testimonials";
import { WhyChooseUsSection } from "@/sections/why-choose-us";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    image: `${company.website}/images/og-cover.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.postalCode,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "DE",
    },
    areaServed: ["Bayern", "Waldkraiburg", "Mühldorf am Inn", "Ampfing"],
    description:
      "Regionaler Baupartner für Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und Hausbau.",
    founder: company.owner,
    telephone: company.phoneDisplay,
    email: company.email,
    priceRange: "$$",
    url: company.website,
  };

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
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </SiteShell>
  );
}
