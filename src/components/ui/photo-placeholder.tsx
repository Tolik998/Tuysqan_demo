import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * PhotoPlaceholder
 *
 * Используется ВЕЗДЕ, где по брифу должна стоять реальная фотография
 * заведения (фасад, интерьер, блюда, детская зона, напитки и т.д.).
 *
 * Мы намеренно не подставляем сюда:
 *  - AI-сгенерированные изображения,
 *  - сток-фото "похожих" блюд под видом настоящих,
 *  - случайные плейсхолдеры (picsum, lorem-image и т.п.)
 *
 * потому что выдавать это за реальные фото ресторана будет введением
 * посетителей сайта в заблуждение.
 *
 * Что нужно сделать дальше: сохранить нужное фото из Instagram
 * (@tuysqan.makinsk) или 2ГИС в /public/images/... и заменить
 * <PhotoPlaceholder label="..."/> на:
 *
 *   <Image src="/images/dishes/plov.jpg" alt="..." fill className="object-cover" />
 *
 * `label` — что должно быть на фото (на русском, видно только в коде/UI placeholder).
 * `hint`  — короткая подсказка, где именно искать такое фото у заказчика.
 */
export function PhotoPlaceholder({
  label,
  hint,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  hint?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Фото: ${label} (временный плейсхолдер, ожидает реального фото)`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-coffee)]/15 bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-gold-light)]/40 p-6 text-center",
        aspect,
        className
      )}
    >
      <ImageIcon
        className="h-8 w-8 text-[var(--color-coffee)]/50"
        strokeWidth={1.5}
        aria-hidden
      />
      <p className="font-display text-sm text-[var(--color-coffee)]/70">
        {label}
      </p>
      {hint && (
        <p className="max-w-[80%] text-xs text-[var(--color-coffee)]/45">
          {hint}
        </p>
      )}
    </div>
  );
}
