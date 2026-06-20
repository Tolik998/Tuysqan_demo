import { setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { Hero } from "@/components/sections/hero";
import { WhyUs } from "@/components/sections/why-us";
import { PopularDishes } from "@/components/sections/popular-dishes";
import { Cuisines } from "@/components/sections/cuisines";
import { FamilyTime } from "@/components/sections/family-time";
import { KidsZone } from "@/components/sections/kids-zone";
import { Reviews } from "@/components/sections/reviews";
import { Delivery } from "@/components/sections/delivery";
import { Gallery } from "@/components/sections/gallery";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contacts } from "@/components/sections/contacts";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as AppLocale);

  return (
    <>
      <Hero />
      <WhyUs />
      <PopularDishes />
      <Cuisines />
      <FamilyTime />
      <KidsZone />
      <Reviews />
      <Delivery />
      <Gallery />
      <InstagramFeed />
      <Contacts />
    </>
  );
}
