import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const metadata_map: Record<string, Metadata> = {
  ro: {
    title: "Biserica Baptistă Sfânta Treime",
    description: "O comunitate creștină întemeiată pe credință, speranță și iubire.",
  },
  en: {
    title: "Sfânta Treime Baptist Church",
    description: "A Christian community founded on faith, hope, and love.",
  },
  fr: {
    title: "Église Baptiste Sfânta Treime",
    description: "Une communauté chrétienne fondée sur la foi, l'espérance et l'amour.",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return metadata_map[locale] ?? metadata_map.ro;
}

export function generateStaticParams() {
  return [{ locale: "ro" }, { locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
