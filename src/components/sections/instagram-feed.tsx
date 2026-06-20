"use client";

import { useTranslations } from "next-intl";
import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { RESTAURANT } from "@/lib/restaurant";

const FEED_ITEMS = Array.from({ length: 6 }, (_, i) => i);

export function InstagramFeed() {
  const t = useTranslations("instagramFeed");

  return (
    <section className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Stagger className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {FEED_ITEMS.map((i) => (
            <StaggerItem key={i}>
              <a
                href={RESTAURANT.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl"
              >
                <PhotoPlaceholder
                  label="Пост из Instagram"
                  aspect="aspect-square"
                  className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-coffee-dark)]/0 transition-colors group-hover:bg-[var(--color-coffee-dark)]/40">
                  <Camera className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <a
            href={RESTAURANT.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-coffee)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <Camera className="h-4 w-4" aria-hidden />
            {t("followButton")}
          </a>
        </div>
      </div>
    </section>
  );
}
