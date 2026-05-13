import { SiteShell } from "@/components/site-shell";
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
    name: "Bauunternehmen Waldkraiburg",
    image: "https://bauunternehmen-waldkraiburg.de/images/og-cover.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waldkraiburg",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    areaServed: ["Waldkraiburg", "Mühldorf am Inn", "Ampfing", "Oberbayern"],
    description:
      "Regionaler Baupartner für Renovierung, Innenausbau, Fassadenarbeiten, Trockenbau, Pflasterarbeiten und Hausbau.",
    telephone: "+49 000 000000",
    email: "kontakt@bauunternehmen-waldkraiburg.de",
    priceRange: "$$",
    url: "https://bauunternehmen-waldkraiburg.de",
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
