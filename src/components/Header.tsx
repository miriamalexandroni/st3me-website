"use client";
import { useState } from "react";
import Logo from "./Logo";
import { CHURCH_NAME, NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-cream hover:text-amber-light transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-cream hover:text-amber-gold text-sm uppercase tracking-wider border-b border-burgundy-light last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
