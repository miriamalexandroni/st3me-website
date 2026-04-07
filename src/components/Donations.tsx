import { getTranslations } from "next-intl/server";
import { DONATION_BANK } from "@/lib/content";

export default async function Donations() {
  const t = await getTranslations("donations");

  return (
    <section id="donatii" className="bg-cream-warm py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-burgundy mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-px bg-amber-gold mx-auto mb-6" />
          <p className="font-body text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Bank transfer */}
          <div className="bg-cream border border-cream-border rounded-sm p-8">
            <h3 className="font-heading text-xl font-semibold text-burgundy mb-4">
              {t("bankTitle")}
            </h3>
            <div className="w-8 h-px bg-amber-gold mb-6" />
            <dl className="space-y-4 font-body text-sm">
              <div className="flex flex-col gap-0.5">
                <dt className="text-brown-light uppercase tracking-wide text-xs">{t("beneficiaryLabel")}</dt>
                <dd className="text-brown font-medium">{DONATION_BANK.beneficiary}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-brown-light uppercase tracking-wide text-xs">{t("bankLabel")}</dt>
                <dd className="text-brown font-medium">{DONATION_BANK.bank}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-brown-light uppercase tracking-wide text-xs">{t("ibanLabel")}</dt>
                <dd className="text-brown font-semibold tracking-wider">{DONATION_BANK.iban}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-brown-light uppercase tracking-wide text-xs">{t("currencyLabel")}</dt>
                <dd className="text-brown font-medium">{DONATION_BANK.currency}</dd>
              </div>
            </dl>
          </div>

          {/* Card donation */}
          <div className="bg-cream-warm border border-cream-border rounded-sm p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold text-burgundy mb-4">
                {t("cardTitle")}
              </h3>
              <div className="w-8 h-px bg-amber-gold mb-6" />
              <p className="font-body text-brown-light text-sm leading-relaxed mb-8">
                {t("cardSubtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="inline-block text-center font-body font-semibold text-sm uppercase tracking-widest
                           bg-amber-gold text-brown px-8 py-3 rounded-sm
                           hover:bg-amber-light transition-colors duration-300"
              >
                {t("cardButton")}
              </a>
              <p className="font-body text-brown-light text-xs text-center leading-relaxed">
                {t("cardNote")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
