import { getTranslations } from "next-intl/server";
import Logo from "./Logo";
import { CHURCH_NAME } from "@/lib/content";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="acasa"
      className="relative min-h-screen bg-gradient-to-b from-burgundy via-burgundy-dark to-[#3D1020]
                 flex flex-col items-center justify-center text-center px-4 py-20"
    >
      <Logo size={110} className="mb-8 opacity-90" />

      <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream tracking-wide mb-4">
        {CHURCH_NAME}
      </h1>

      <div className="w-24 h-px bg-amber-gold mx-auto mb-6" />

      <p className="font-body text-cream-warm text-lg md:text-xl max-w-xl mb-10 opacity-90 leading-relaxed">
        {t("tagline")}
      </p>

      <a
        href="#viziune"
        className="inline-block font-body font-semibold text-sm uppercase tracking-widest
                   bg-amber-gold text-brown px-8 py-3 rounded-sm
                   hover:bg-amber-light transition-colors duration-300"
      >
        {t("cta")}
      </a>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-cream opacity-30">
        <span className="text-xs uppercase tracking-widest font-body">Scroll</span>
        <div className="w-px h-8 bg-cream" />
      </div>
    </section>
  );
}
