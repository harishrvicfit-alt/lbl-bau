"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company, fullAddress } from "@/lib/company";
import { useLanguage } from "@/lib/i18n";

export function ContactSection() {
  const { text } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [mapEnabled, setMapEnabled] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(text.contact.error);
      }

      setStatus("sent");
      setMessage(text.contact.success);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : text.contact.error,
      );
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: company.phoneDisplay,
      href: `tel:${company.phoneHref}`,
      aria: text.contact.phoneAria,
    },
    {
      icon: Mail,
      label: company.email,
      href: `mailto:${company.email}`,
      aria: text.contact.mailAria,
    },
    {
      icon: MapPin,
      label: fullAddress,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        company.mapQuery,
      )}`,
      aria: text.contact.mapAria,
      external: true,
    },
  ];

  return (
    <AnimatedSection id="kontakt" className="bg-sand-50 py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand-700">
            {text.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-anthracite-950 sm:text-5xl">
            {text.contact.title}
          </h2>
          <p className="mt-6 leading-8 text-anthracite-700">
            {text.contact.intro}
          </p>

          <div className="mt-10 space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.aria}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-[8px] bg-white p-4 shadow-[0_16px_45px_rgba(23,23,23,0.06)] outline-none transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(227,6,19,0.12)] focus-visible:ring-4 focus-visible:ring-sand-500/25"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-anthracite-950 text-sand-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-safe font-semibold text-anthracite-800">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] bg-white shadow-premium">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <form onSubmit={onSubmit} className="space-y-5 p-6 sm:p-8">
              <FloatingField id="contact-name" label={text.contact.name}>
                <Input
                  id="contact-name"
                  required
                  name="name"
                  autoComplete="name"
                  placeholder={text.contact.name}
                />
              </FloatingField>
              <FloatingField id="contact-method" label={text.contact.contactMethod}>
                <Input
                  id="contact-method"
                  required
                  name="contact"
                  autoComplete="email"
                  placeholder={text.contact.contactMethod}
                />
              </FloatingField>
              <FloatingField id="contact-project-type" label={text.contact.projectType}>
                <Input
                  id="contact-project-type"
                  name="projectType"
                  autoComplete="off"
                  placeholder={text.contact.projectPlaceholder}
                />
              </FloatingField>
              <FloatingField id="contact-message" label={text.contact.message}>
                <Textarea
                  id="contact-message"
                  required
                  name="message"
                  placeholder={text.contact.message}
                />
              </FloatingField>
              <Button
                variant="gold"
                className="w-full"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? text.contact.sending : text.contact.submit}
                <Send className="h-4 w-4" />
              </Button>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-[8px] p-3 text-sm font-semibold ${
                    status === "sent"
                      ? "bg-sand-100 text-anthracite-900"
                      : "bg-red-50 text-red-900"
                  }`}
                  role={status === "error" ? "alert" : "status"}
                >
                  {message}
                </motion.p>
              )}
            </form>

            <div className="min-h-[420px] bg-anthracite-950 p-4">
              {mapEnabled ? (
                <iframe
                  title="Standort LBL Bau"
                  loading="lazy"
                  className="h-full min-h-[390px] w-full rounded-[8px] border-0 grayscale"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    company.mapQuery,
                  )}&output=embed`}
                />
              ) : (
                <div className="grid h-full min-h-[390px] place-items-center rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(227,6,19,0.18),transparent_34%),#10100f] p-6 text-center text-white">
                  <div className="max-w-sm">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ember text-white">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-black">
                      {text.contact.mapTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      {text.contact.mapText}
                    </p>
                    <Button
                      type="button"
                      variant="gold"
                      className="mt-6"
                      onClick={() => setMapEnabled(true)}
                    >
                      {text.contact.mapButton}
                    </Button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        company.mapQuery,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 block text-sm font-semibold text-sand-200 underline-offset-4 hover:underline"
                    >
                      {text.contact.route}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FloatingField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative block">
      {children}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-bold uppercase tracking-[0.14em] text-anthracite-500 transition-all peer-focus:text-sand-700"
      >
        {label}
      </label>
    </div>
  );
}
