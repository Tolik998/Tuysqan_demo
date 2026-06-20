"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, MessageCircle, UtensilsCrossed } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Параллакс: фон уезжает медленнее, чем скроллится страница —
  // премиальный приём вместо статичной картинки
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-coffee-dark)]"
    >
      {/* Фоновый слой — место для премиальной фотографии уютного зала
          с тёплым светом (фасад/интерьер из Instagram @tuysqan.makinsk) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          label="Фото фасада или зала Tuysqan, тёплый вечерний свет"
          hint="Instagram @tuysqan.makinsk — выберите самое атмосферное фото зала"
          aspect="aspect-auto"
          className="h-[130%] w-full rounded-none border-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-coffee-dark)] via-[var(--color-coffee-dark)]/70 to-[var(--color-coffee-dark)]/30" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-gold)]/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-light)] backdrop-blur-sm"
        >
          <UtensilsCrossed className="h-3.5 w-3.5" aria-hidden />
          {t("eyebrow")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/85"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#menu"
            className="rounded-[var(--radius-pill)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-coffee-dark)] shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.03]"
          >
            {t("ctaMenu")}
          </a>
          <a
            href="#delivery"
            className="rounded-[var(--radius-pill)] border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {t("ctaDelivery")}
          </a>
          <a
            href={RESTAURANT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-forest)] bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t("ctaWhatsapp")}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#why-us"
        aria-label={t("scrollHint")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
