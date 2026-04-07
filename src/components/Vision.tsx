import { getTranslations } from "next-intl/server";
import { CORE_VALUE_ICONS } from "@/lib/content";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section id="viziune" className="bg-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto mb-6" />
          <p className="font-body text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t("statement")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUE_ICONS.map(({ key, icon }) => (
            <div
              key={key}
              className="bg-cream-warm border border-cream-border rounded-sm p-6
                         hover:border-amber-muted hover:shadow-sm
                         transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-heading text-xl font-semibold text-burgundy mb-2">
                {t(`values.${key}.title` as Parameters<typeof t>[0])}
              </h3>
              <div className="w-8 h-px bg-amber-gold mx-auto mb-3" />
              <p className="font-body text-brown-light text-sm leading-relaxed">
                {t(`values.${key}.description` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
