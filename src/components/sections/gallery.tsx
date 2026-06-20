"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cn } from "@/lib/utils";

const CATEGORY_KEYS = ["all", "interior", "dishes", "drinks", "kids", "family"] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[number];

const GALLERY_ITEMS: { id: string; category: Exclude<CategoryKey, "all">; label: string }[] = [
  { id: "g1", category: "interior", label: "Зал ресторана, общий план" },
  { id: "g2", category: "dishes", label: "Плов на подаче" },
  { id: "g3", category: "kids", label: "Детская игровая зона" },
  { id: "g4", category: "interior", label: "Барная зона / зона ожидания" },
  { id: "g5", category: "dishes", label: "Сет суши" },
  { id: "g6", category: "drinks", label: "Свежевыжатый сок или чай" },
  { id: "g7", category: "family", label: "Семья за столом" },
  { id: "g8", category: "interior", label: "Вечерний свет в зале" },
  { id: "g9", category: "dishes", label: "Бешбармак на большом блюде" },
];

export function Gallery() {
  const t = useTranslations("gallery");
  const [filter, setFilter] = useState<CategoryKey>("all");

  const visible = GALLERY_ITEMS.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="gallery" className="bg-[var(--color-sand)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORY_KEYS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-[var(--radius-pill)] px-4 py-2 text-sm font-semibold transition-colors",
                filter === cat
                  ? "bg-[var(--color-coffee-dark)] text-white"
                  : "bg-white text-[var(--color-coffee-dark)] hover:bg-[var(--color-gold)]/20"
              )}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  index % 5 === 0 && "sm:col-span-2 lg:col-span-2"
                )}
              >
                <PhotoPlaceholder
                  label={item.label}
                  hint="Фото из Instagram/2ГИС заведения"
                  aspect={index % 5 === 0 ? "aspect-[16/10]" : "aspect-square"}
                  className="w-full"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
