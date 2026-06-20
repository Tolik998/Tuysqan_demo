"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { cn } from "@/lib/utils";

const TABS = ["eastern", "breakfast", "sushi", "european"] as const;

const TAB_HINTS: Record<(typeof TABS)[number], string> = {
  eastern: "Фото казахской/узбекской кухни — плов, бешбармак, манты",
  breakfast: "Фото завтраков — омлет, баурсаки, каши",
  sushi: "Фото суши-сета или том-яма",
  european: "Фото пасты, стейка или бургера",
};

export function Cuisines() {
  const t = useTranslations("cuisines");
  const [active, setActive] = useState<(typeof TABS)[number]>("eastern");

  return (
    <section id="kitchen" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={active === tab}
              className={cn(
                "rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold transition-colors",
                active === tab
                  ? "bg-[var(--color-coffee-dark)] text-white"
                  : "bg-white text-[var(--color-coffee-dark)] hover:bg-[var(--color-sand)]"
              )}
            >
              {t(`tabs.${tab}.label`)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 grid items-center gap-10 lg:grid-cols-2"
          >
            <PhotoPlaceholder
              label={t(`tabs.${active}.title`)}
              hint={TAB_HINTS[active]}
              aspect="aspect-[5/4]"
              className="w-full"
            />
            <div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-coffee-dark)] sm:text-3xl">
                {t(`tabs.${active}.title`)}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
                {t(`tabs.${active}.description`)}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
