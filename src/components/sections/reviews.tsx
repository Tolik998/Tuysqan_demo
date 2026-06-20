"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const REVIEW_KEYS = [
  "review1",
  "review2",
  "review3",
  "review4",
  "review5",
  "review6",
] as const;

const CATEGORY_KEYS = ["taste", "atmosphere", "family", "kids", "service"] as const;

type CategoryKey = (typeof CATEGORY_KEYS)[number];

export function Reviews() {
  const t = useTranslations("reviews");
  const [filter, setFilter] = useState<CategoryKey | "all">("all");

  // Категория каждого отзыва берётся из словаря (review.category),
  // поэтому единственный источник правды — messages/*.json
  const reviewCategoryMap: Record<string, CategoryKey> = {
    review1: "family",
    review2: "taste",
    review3: "atmosphere",
    review4: "kids",
    review5: "service",
    review6: "taste",
  };

  const visibleReviews = REVIEW_KEYS.filter(
    (key) => filter === "all" || reviewCategoryMap[key] === filter
  );

  return (
    <section id="reviews" className="bg-[var(--color-sand)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-[var(--radius-pill)] px-4 py-2 text-sm font-semibold transition-colors",
              filter === "all"
                ? "bg-[var(--color-coffee-dark)] text-white"
                : "bg-white text-[var(--color-coffee-dark)] hover:bg-[var(--color-gold)]/20"
            )}
          >
            Все
          </button>
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
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((key) => (
              <motion.article
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-soft)]"
              >
                <Quote
                  className="h-7 w-7 text-[var(--color-gold)]"
                  aria-hidden
                />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {t(`items.${key}.text`)}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--color-coffee)]/10 pt-4">
                  <span className="font-display text-sm font-semibold text-[var(--color-coffee-dark)]">
                    {t(`items.${key}.author`)}
                  </span>
                  <span className="rounded-[var(--radius-pill)] bg-[var(--color-forest)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-forest-dark)]">
                    {t(`categories.${reviewCategoryMap[key]}`)}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
