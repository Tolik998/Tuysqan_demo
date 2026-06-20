"use client";

import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Baby,
  UtensilsCrossed,
  Coffee,
  Truck,
  Sparkles,
  HeartHandshake,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const ITEMS = [
  { key: "halal", icon: ShieldCheck },
  { key: "kidsZone", icon: Baby },
  { key: "bigMenu", icon: UtensilsCrossed },
  { key: "breakfast", icon: Coffee },
  { key: "delivery", icon: Truck },
  { key: "atmosphere", icon: Sparkles },
  { key: "staff", icon: HeartHandshake },
  { key: "groups", icon: Users },
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section id="why-us" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ key, icon: Icon }) => (
            <StaggerItem key={key}>
              <div className="group h-full rounded-[var(--radius-card)] border border-[var(--color-coffee)]/10 bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-warm)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-forest)]/10 text-[var(--color-forest)] transition-colors group-hover:bg-[var(--color-forest)] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--color-coffee-dark)]">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
