import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Поддерживаемые языки сайта
  locales: ["ru", "kk"],

  // Язык по умолчанию (если не удалось определить язык браузера)
  defaultLocale: "ru",

  // Локаль всегда присутствует в URL: /ru, /kk
  localePrefix: "always",

  // Человекочитаемые сегменты путей на разных языках (пока совпадают,
  // оставлено расширяемым на будущее — например /kk/menyu)
  pathnames: {
    "/": "/",
  },
});

export type AppLocale = (typeof routing.locales)[number];
