"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Coffee, Heart } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

const POINTS = [
  { key: "safe", icon: ShieldCheck },
  { key: "relax", icon: Coffee },
  { key: "family", icon: Heart },
] as const;

export function KidsZone() {
  const t = useTranslations("kidsZone");

  return (
    <section id="kids" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <FadeUp className="order-2 lg:order-1">
          <span className="inline-flex rounded-[var(--radius-pill)] bg-[var(--color-gold)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-coffee-dark)]">
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold text-[var(--color-coffee-dark)] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
            {t("description")}
          </p>

          <div className="mt-8 space-y-5">
            {POINTS.map(({ key, icon: Icon }) => (
              <div key={key} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-forest)]/10 text-[var(--color-forest)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[var(--color-coffee-dark)]">
                    {t(`points.${key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {t(`points.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="order-1 lg:order-2">
          <PhotoPlaceholder
            label="Детская игровая зона в зале Tuysqan"
            hint="Фото детской зоны из Instagram/2ГИС"
            aspect="aspect-[6/5]"
            className="w-full"
          />
        </FadeUp>
      </div>
    </section>
  );
}
