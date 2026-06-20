"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Переключатель языка RU | KZ.
 *
 * - переключение мгновенное (next-intl меняет роут на клиенте, без
 *   полной перезагрузки страницы — это App Router + next-intl middleware)
 * - выбор сохраняется в cookie NEXT_LOCALE автоматически (next-intl делает
 *   это сам внутри useRouter().replace при смене locale), так что при
 *   следующем визите язык останется тем же, что выбрал пользователь
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: "ru" | "kk") {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      role="group"
      aria-label="Переключить язык сайта"
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-coffee)]/20 bg-[var(--color-cream)] p-1 text-sm font-medium",
        className
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-pressed={locale === loc}
          className={cn(
            "rounded-[var(--radius-pill)] px-3 py-1.5 transition-colors",
            locale === loc
              ? "bg-[var(--color-forest)] text-white"
              : "text-[var(--color-coffee)] hover:bg-[var(--color-sand)]"
          )}
        >
          {loc === "ru" ? "Рус" : "Қаз"}
        </button>
      ))}
    </div>
  );
}
