import { Camera, Phone, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContacts = useTranslations("contacts");

  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#menu", key: "menu" },
    { href: "#kitchen", key: "kitchen" },
    { href: "#kids", key: "kids" },
    { href: "#reviews", key: "reviews" },
    { href: "#delivery", key: "delivery" },
    { href: "#gallery", key: "gallery" },
    { href: "#contacts", key: "contacts" },
  ] as const;

  return (
    <footer className="bg-[var(--color-coffee-dark)] text-[var(--color-sand)]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-bold text-white"
            >
              Tuysqan
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-sand)]/80">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white">
              {t("linksTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-sand)]/80">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[var(--color-gold)]"
                  >
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white">
              {t("contactsTitle")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-sand)]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{tContacts("address")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                <a
                  href={RESTAURANT.phone.href}
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  {RESTAURANT.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Camera className="h-4 w-4 shrink-0" aria-hidden />
                <a
                  href={RESTAURANT.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  @tuysqan.makinsk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white">
              {t("hoursTitle")}
            </h3>
            <p className="mt-4 flex items-center gap-2.5 text-sm text-[var(--color-sand)]/80">
              <Clock className="h-4 w-4 shrink-0" aria-hidden />
              {t("hoursValue")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[var(--color-sand)]/60 sm:flex-row">
          <p>
            © {year} Tuysqan — {t("rights")}
          </p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
