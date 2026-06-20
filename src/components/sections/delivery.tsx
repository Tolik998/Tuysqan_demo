"use client";

import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  ShieldCheck,
  Truck,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { RESTAURANT } from "@/lib/restaurant";

const STEPS = [
  { key: "order", icon: MessageCircle },
  { key: "control", icon: ShieldCheck },
  { key: "deliver", icon: Truck },
  { key: "support", icon: ClipboardCheck },
] as const;

export function Delivery() {
  const t = useTranslations("delivery");

  return (
    <section id="delivery" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ key, icon: Icon }, index) => (
            <StaggerItem key={key}>
              <div className="relative h-full rounded-[var(--radius-card)] border border-[var(--color-coffee)]/10 bg-white p-6 shadow-[var(--shadow-soft)]">
                <span className="font-display text-4xl font-bold text-[var(--color-gold)]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-forest)]/10 text-[var(--color-forest)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-coffee-dark)]">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={RESTAURANT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t("cta")}
          </a>
          <a
            href={RESTAURANT.phone.href}
            className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-coffee)]/20 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-coffee-dark)] transition-colors hover:bg-[var(--color-sand)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {t("phoneCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
