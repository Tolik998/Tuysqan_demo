"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeUp } from "@/components/ui/motion";
import { RESTAURANT } from "@/lib/restaurant";
import { BookingForm } from "./booking-form";

export function Contacts() {
  const t = useTranslations("contacts");
  const tMap = useTranslations("map");

  return (
    <section id="contacts" className="bg-[var(--color-sand)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <FadeUp className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <MapPin className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-coffee-dark)]">
                  {t("addressTitle")}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  {t("address")}
                </p>
              </div>

              <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <Phone className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-coffee-dark)]">
                  {t("phoneTitle")}
                </h3>
                <a
                  href={RESTAURANT.phone.href}
                  className="mt-1 block text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-forest)]"
                >
                  {RESTAURANT.phone.display}
                </a>
              </div>

              <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <Clock className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-coffee-dark)]">
                  {t("hoursTitle")}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  {t("hoursValue")}
                </p>
              </div>

              <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <MessageCircle className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-coffee-dark)]">
                  {t("whatsappTitle")}
                </h3>
                <a
                  href={RESTAURANT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-forest)]"
                >
                  {t("whatsappCta")}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
              <iframe
                title={tMap("title")}
                src={`https://www.google.com/maps?q=${RESTAURANT.coordinates.lat},${RESTAURANT.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
              <div className="flex items-center justify-between gap-3 bg-white p-4">
                <span className="text-sm font-medium text-[var(--color-coffee-dark)]">
                  {tMap("title")}
                </span>
                <div className="flex gap-3 text-sm">
                  <a
                    href={RESTAURANT.links.dgis}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[var(--color-forest)] hover:underline"
                  >
                    {tMap("openIn2gis")}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <BookingForm />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
