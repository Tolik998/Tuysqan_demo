"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function BookingForm() {
  const t = useTranslations("contacts.form");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // На проде здесь должен быть реальный запрос к API/CRM ресторана.
    // Сейчас отправляем готовую заявку прямо в WhatsApp заведения —
    // это не требует backend и сразу работает "из коробки".
    const text = encodeURIComponent(
      `Бронирование стола Tuysqan\nИмя: ${name}\nТелефон: ${phone}\nГостей: ${guests}\nДата: ${date}\nКомментарий: ${comment || "—"}`
    );
    window.open(`${RESTAURANT.whatsapp.href}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-warm)] sm:p-8">
      <h3 className="font-display text-xl font-bold text-[var(--color-coffee-dark)]">
        {t("title")}
      </h3>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex flex-col items-center gap-3 py-6 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-[var(--color-forest)]" />
            <p className="text-sm text-[var(--color-ink-soft)]">
              {t("success")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="booking-name"
                className="text-sm font-medium text-[var(--color-ink-soft)]"
              >
                {t("name")}
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                className="mt-1.5 w-full rounded-xl border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-forest)]"
              />
            </div>

            <div>
              <label
                htmlFor="booking-phone"
                className="text-sm font-medium text-[var(--color-ink-soft)]"
              >
                {t("phone")}
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("phonePlaceholder")}
                className="mt-1.5 w-full rounded-xl border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-forest)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="booking-guests"
                  className="text-sm font-medium text-[var(--color-ink-soft)]"
                >
                  {t("guests")}
                </label>
                <input
                  id="booking-guests"
                  type="number"
                  min={1}
                  max={30}
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-forest)]"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-date"
                  className="text-sm font-medium text-[var(--color-ink-soft)]"
                >
                  {t("date")}
                </label>
                <input
                  id="booking-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-forest)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-comment"
                className="text-sm font-medium text-[var(--color-ink-soft)]"
              >
                {t("comment")}
              </label>
              <textarea
                id="booking-comment"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t("commentPlaceholder")}
                className="mt-1.5 w-full resize-none rounded-xl border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-forest)]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-forest)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" aria-hidden />
              {t("submit")}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[var(--color-ink-soft)]/70">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              {t("viaWhatsapp")}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
