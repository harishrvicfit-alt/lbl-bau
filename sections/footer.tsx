import { Facebook, Instagram, Linkedin } from "lucide-react";

import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-anthracite-950 py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-sand-500 font-black text-anthracite-950">
                BW
              </span>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em]">
                  Bauwerk Waldkraiburg
                </p>
                <p className="text-sm text-white/50">Premium Bau & Renovierung</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              Moderne Bauleistungen für Waldkraiburg und Umgebung. Platzhaltername
              und Kontaktdaten werden später durch die echte Firma ersetzt.
            </p>
          </div>

          <div>
            <p className="mb-4 font-display font-bold">Quick Links</p>
            <div className="space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-sm text-white/60 hover:text-sand-300">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display font-bold">Kontakt</p>
            <div className="space-y-3 text-sm text-white/60">
              <p>Waldkraiburg, Bayern</p>
              <p>+49 000 000000</p>
              <p>kontakt@bauunternehmen-waldkraiburg.de</p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#home"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 hover:border-sand-400 hover:text-sand-300"
                  aria-label="Social Profil"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          © 2026 Bauwerk Waldkraiburg. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
