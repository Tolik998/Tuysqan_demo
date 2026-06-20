import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// next-intl сам делает то, что требовалось в брифе:
// - определяет язык браузера (Accept-Language) при первом визите
// - если юзер уже выбирал язык вручную, читает это из cookie NEXT_LOCALE
//   и больше не переопределяет выбор автоматически
export default createMiddleware(routing);

export const config = {
  // Применяем middleware ко всем путям, кроме статики, API и файлов Next
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
