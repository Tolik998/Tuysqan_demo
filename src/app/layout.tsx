import type { ReactNode } from "react";

// Этот layout почти пустой: реальная разметка (html/body/шрифты) живёт
// в src/app/[locale]/layout.tsx, потому что Next.js App Router требует
// html/body ровно в одном layout — а у нас locale обязателен в URL
// и middleware всегда редиректит "/" на "/ru" или "/kk".
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
