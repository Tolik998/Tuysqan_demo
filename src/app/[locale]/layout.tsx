import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { RESTAURANT } from "@/lib/restaurant";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const ogLocale = locale === "kk" ? "kk_KZ" : "ru_KZ";
  const url = `https://tuysqan-makinsk.kz/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://tuysqan-makinsk.kz"),
    alternates: {
      canonical: url,
      languages: {
        ru: "https://tuysqan-makinsk.kz/ru",
        kk: "https://tuysqan-makinsk.kz/kk",
        "x-default": "https://tuysqan-makinsk.kz/ru",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: t("siteName"),
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/images/og-cover.jpg",
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-cover.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  // Включаем статический рендеринг страниц для этой локали
  setRequestLocale(locale);

  const messages = await getMessages();

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    servesCuisine: [
      "Kazakh",
      "Uzbek",
      "Pan-Asian",
      "Japanese",
      "European",
    ],
    priceRange: "$$",
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      addressLocality: RESTAURANT.city,
      addressRegion: RESTAURANT.region,
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.coordinates.lat,
      longitude: RESTAURANT.coordinates.lng,
    },
    telephone: RESTAURANT.phone.href.replace("tel:", ""),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: RESTAURANT.hours.from,
      closes: RESTAURANT.hours.to,
    },
    sameAs: [RESTAURANT.links.instagram],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: RESTAURANT.name,
    image: "/images/og-cover.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: RESTAURANT.city,
      addressRegion: RESTAURANT.region,
      addressCountry: "KZ",
    },
    telephone: RESTAURANT.phone.href.replace("tel:", ""),
    priceRange: "$$",
  };

  return (
    <html lang={locale}>
      <body
        className={`${playfair.variable} ${inter.variable} bg-[var(--color-cream)] font-sans text-[var(--color-ink)] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-forest)] focus:px-4 focus:py-2 focus:text-white"
          >
            Перейти к содержанию
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
