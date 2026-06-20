import { cn } from "@/lib/utils";
import { FadeUp } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <FadeUp
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left ml-0",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-gold)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-coffee-dark)]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance font-display text-3xl font-bold text-[var(--color-coffee-dark)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-[var(--color-ink-soft)]">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
