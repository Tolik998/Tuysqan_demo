"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RESTAURANT } from "@/lib/restaurant";
import { LanguageSwitcher } from "./language-switcher";

const NAV_ITEMS = [
  { href: "#menu", key: "menu" },
  { href: "#kitchen", key: "kitchen" },
  { href: "#kids", key: "kids" },
  { href: "#reviews", key: "reviews" },
  { href: "#delivery", key: "delivery" },
  { href: "#gallery", key: "gallery" },
  { href: "#contacts", key: "contacts" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-coffee)]/10 bg-[var(--color-cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-[var(--color-coffee-dark)]"
        >
          Tuysqan
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-forest)]"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={RESTAURANT.phone.href}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-forest)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {tHeader("callUs")}
          </a>
          <LanguageSwitcher />
          <a
            href={RESTAURANT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t("orderDelivery")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="rounded-full p-2 text-[var(--color-coffee-dark)] lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--color-coffee)]/10 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-sand)]"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between gap-3 px-3">
                <LanguageSwitcher />
                <a
                  href={RESTAURANT.phone.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-soft)]"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {tHeader("callUs")}
                </a>
              </div>
              <a
                href={RESTAURANT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t("orderDelivery")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
