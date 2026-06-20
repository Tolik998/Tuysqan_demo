"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

const DISHES = [
  { key: "plov", hint: "Фото плова из меню или Instagram" },
  { key: "kazanKebab", hint: "Фото казан-кебаба из меню или Instagram" },
  { key: "beshbarmak", hint: "Фото бешбармака из меню или Instagram" },
  { key: "tomYam", hint: "Фото том-яма из меню или Instagram" },
  { key: "salmonPasta", hint: "Фото пасты с сёмгой из меню" },
  { key: "ribeye", hint: "Фото стейка рибай из меню" },
  { key: "sushiSet", hint: "Фото сета суши из меню" },
  { key: "kazyPizza", hint: "Фото авторской пиццы с казы" },
] as const;

export function PopularDishes() {
  const t = useTranslations("popularDishes");

  return (
    <section id="menu" className="bg-[var(--color-sand)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((dish) => (
            <StaggerItem key={dish.key}>
              <article className="group h-full overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-warm)]">
                <div className="relative overflow-hidden">
                  <PhotoPlaceholder
                    label={t(`items.${dish.key}.name`)}
                    hint={dish.hint}
                    className="rounded-none border-none transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-[var(--radius-pill)] bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-coffee-dark)]">
                    {t(`items.${dish.key}.tag`)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-coffee-dark)]">
                    {t(`items.${dish.key}.name`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {t(`items.${dish.key}.description`)}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
