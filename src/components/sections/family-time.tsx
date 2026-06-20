"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

const POINT_KEYS = ["tables", "calm", "everyone"] as const;

export function FamilyTime() {
  const t = useTranslations("familyTime");

  return (
    <section className="bg-[var(--color-forest)]/[0.06] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <FadeUp>
          <PhotoPlaceholder
            label="Семья за большим столом в зале Tuysqan"
            hint="Фото семейного застолья из Instagram"
            aspect="aspect-[6/5]"
            className="w-full"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <span className="inline-flex rounded-[var(--radius-pill)] bg-[var(--color-forest)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-forest-dark)]">
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold text-[var(--color-coffee-dark)] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
            {t("description")}
          </p>
          <ul className="mt-6 space-y-3">
            {POINT_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-forest)]"
                  aria-hidden
                />
                <span className="text-[var(--color-ink-soft)]">
                  {t(`points.${key}`)}
                </span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
