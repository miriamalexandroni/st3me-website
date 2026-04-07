"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Logo from "./Logo";
import { CHURCH_NAME, NAV_LINKS, LOCALES } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-burgundy shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <Logo size={40} />
          <span className="font-heading text-xl font-semibold text-amber-gold tracking-wide">
            {CHURCH_NAME}
          </span>
        </a>

        {/* Desktop nav + language switcher */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="font-body text-cream hover:text-amber-light transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {t(link.key as Parameters<typeof t>[0])}
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 border-l border-burgundy-light pl-6">
            {LOCALES.map((l) => (
              <a
                key={l.code}
                href={l.href}
                className={`font-body text-xs font-semibold px-2 py-1 rounded-sm transition-colors duration-200 ${
                  locale === l.code
                    ? "bg-amber-gold text-brown"
                    : "text-cream opacity-60 hover:opacity-100"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Deschide meniu"
        >
          <span className="block w-6 h-0.5 bg-cream" />
          <span className="block w-6 h-0.5 bg-cream" />
          <span className="block w-6 h-0.5 bg-cream" />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-burgundy-dark border-t border-burgundy-light px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-cream hover:text-amber-gold text-sm uppercase tracking-wider border-b border-burgundy-light last:border-0"
            >
              {t(link.key as Parameters<typeof t>[0])}
            </a>
          ))}
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-4">
            {LOCALES.map((l) => (
              <a
                key={l.code}
                href={l.href}
                className={`font-body text-xs font-semibold px-2 py-1 rounded-sm transition-colors duration-200 ${
                  locale === l.code
                    ? "bg-amber-gold text-brown"
                    : "text-cream opacity-60 hover:opacity-100"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
