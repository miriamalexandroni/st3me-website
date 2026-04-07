import { getTranslations } from "next-intl/server";
import { SPOTIFY_EMBED_URL } from "@/lib/content";

export default async function Sermons() {
  const t = await getTranslations("sermons");

  return (
    <section id="predici" className="bg-cream-warm py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto mb-4" />
          <p className="font-body text-brown-light text-sm">{t("subtitle")}</p>
        </div>

        <div className="rounded-sm overflow-hidden border border-cream-border shadow-sm">
          <iframe
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={t("title")}
          />
        </div>
      </div>
    </section>
  );
}
