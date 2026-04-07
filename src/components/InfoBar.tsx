import { getTranslations } from "next-intl/server";
import { FOOTER } from "@/lib/content";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Strada+Banatul+5+Timisoara+Romania";

export default async function InfoBar() {
  const t = await getTranslations("hero");

  return (
    <div className="bg-burgundy-dark border-b border-burgundy-light py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs font-body text-cream opacity-80">
        {/* Service time */}
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-amber-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {t("tagline")}
        </span>

        <span className="hidden sm:block text-burgundy-light">·</span>

        {/* Address with Google Maps link */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-amber-light transition-colors duration-200"
        >
          <svg className="w-3.5 h-3.5 text-amber-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {FOOTER.address}
        </a>
      </div>
    </div>
  );
}
