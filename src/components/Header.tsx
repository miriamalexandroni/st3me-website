"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Logo from "./Logo";
import { CHURCH_NAME, NAV_LINKS, LOCALES } from "@/lib/content";

function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 font-body text-xs font-semibold text-cream opacity-80
                   hover:opacity-100 hover:text-amber-light transition-all duration-200 px-2 py-1"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        {current.label}
        {/* Chevron */}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-24 bg-burgundy-dark border border-burgundy-light rounded-sm shadow-lg z-50">
          {LOCALES.map((l) => (
            <a
              key={l.code}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 font-body text-xs font-semibold transition-colors duration-150
                          ${l.code === locale
                            ? "text-amber-gold bg-burgundy"
                            : "text-cream opacity-70 hover:opacity-100 hover:bg-burgundy"
                          }`}
            >
              <span>{l.flag}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-burgundy shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href={`/${locale}`} className="flex items-center gap-3">
          <Logo size={40} />
          <span className="font-heading text-xl font-semibold text-amber-gold tracking-wide">
            {CHURCH_NAME}
          </span>
        </a>

        {/* Desktop nav + language dropdown */}
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

          <div className="border-l border-burgundy-light pl-4">
            <LanguageDropdown />
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
          {/* Mobile language dropdown */}
          <div className="pt-4">
            <LanguageDropdown />
          </div>
        </nav>
      )}
    </header>
  );
}
