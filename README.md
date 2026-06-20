# Tuysqan — сайт ресторана в Макинске

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion +
next-intl. Полностью двуязычный сайт (русский / қазақша) для семейного
халяль-ресторана.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте http://localhost:3000 — middleware автоматически определит язык
браузера и перенаправит на `/ru` или `/kk`.

Сборка для продакшена:

```bash
npm run build
npm start
```

---

## ⚠️ Что обязательно нужно сделать перед запуском в продакшен

### 1. Заменить фото-плейсхолдеры на реальные фото

**В проекте нет ни одной AI-сгенерированной или стоковой фотографии под
видом настоящей.** Вместо реальных фото заведения (которые не удалось
скачать с Instagram/2ГИС — оба сервиса блокируют автоматический доступ
для ботов) везде стоит компонент `<PhotoPlaceholder />` — честная, явно
подписанная заглушка с описанием, какое именно фото должно быть на этом
месте.

Как заменить:

1. Сохраните нужные фото из `https://www.instagram.com/tuysqan.makinsk`
   и `https://go.2gis.com/xWn5i` себе на компьютер.
2. Оптимизируйте и положите их в соответствующую папку:
   - `public/images/hero/` — фасад или зал для главного экрана
   - `public/images/dishes/` — фото блюд (плов, бешбармак, том ям и т.д.)
   - `public/images/interior/` — интерьер
   - `public/images/kids/` — детская игровая зона
   - `public/images/gallery/` — для секции "Галерея"
   - `public/images/og-cover.jpg` — обложка для соцсетей (1200×630)
3. В коде каждый `<PhotoPlaceholder label="..." hint="..." />` замените на:

```tsx
import Image from "next/image";

<div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
  <Image
    src="/images/dishes/plov.jpg"
    alt="Плов Ташкентский в ресторане Tuysqan"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

Файлы, где встречаются плейсхолдеры (ищите `PhotoPlaceholder`):
`hero.tsx`, `popular-dishes.tsx`, `cuisines.tsx`, `family-time.tsx`,
`kids-zone.tsx`, `gallery.tsx`, `instagram-feed.tsx`.

### 2. Указать реальные контактные данные

Все контакты собраны в одном файле — **`src/lib/restaurant.ts`**:

- `phone` — реальный номер телефона ресторана
- `whatsapp.number` — номер WhatsApp в формате `7XXXXXXXXXX`
- `coordinates` — точные lat/lng с Google Maps или 2ГИС (сейчас стоят
  примерные координаты центра Макинска)
- `links.dgis` — уже заполнено вашей ссылкой `https://go.2gis.com/xWn5i`
- `links.instagram` — уже заполнено `https://www.instagram.com/tuysqan.makinsk`

### 3. Проверить домен в метаданных

В `src/app/[locale]/layout.tsx`, `src/app/sitemap.ts` и `src/app/robots.ts`
сейчас указан условный домен `https://tuysqan-makinsk.kz` — замените на
реальный домен после покупки/настройки.

---

## Структура проекта

```
src/
  app/
    [locale]/
      layout.tsx       — шрифты, SEO-метаданные, JSON-LD схемы
      page.tsx          — сборка всех секций
    layout.tsx           — корневой layout (почти пустой)
    sitemap.ts           — sitemap.xml для двух языков
    robots.ts            — robots.txt
    globals.css           — design tokens (цвета, шрифты, анимации)
  components/
    layout/               — Header, Footer, переключатель языка
    sections/              — все секции сайта (Hero, меню, отзывы и т.д.)
    ui/                    — переиспользуемые: SectionHeading, motion-обёртки,
                              PhotoPlaceholder
  i18n/
    routing.ts             — список локалей, дефолтная локаль
    navigation.ts          — локализованные Link/usePathname/useRouter
    request.ts             — загрузка messages/*.json по локали
  lib/
    restaurant.ts          — контакты, телефон, координаты, соцсети
    utils.ts                — утилита cn() для классов
  middleware.ts             — определение языка браузера + сохранение выбора
messages/
  ru.json                   — все тексты на русском (193 ключа)
  kk.json                   — все тексты на казахском (193 ключа, литературный перевод)
```

## Мультиязычность

- Используется `next-intl` с роутингом `/ru` и `/kk` (App Router).
- При первом визите язык определяется по `Accept-Language` браузера.
- При ручном переключении (кнопки "Рус | Қаз" в хедере) выбор сохраняется
  в cookie `NEXT_LOCALE` и используется при следующих визитах.
- Переключение происходит без полной перезагрузки страницы.
- Чтобы добавить/изменить текст — редактируйте оба файла
  `messages/ru.json` и `messages/kk.json` с одинаковой структурой ключей.

## SEO

- `generateMetadata` в `[locale]/layout.tsx` формирует title/description/
  keywords/OpenGraph/Twitter Card отдельно для каждого языка.
- `alternates.languages` отдаёт `hreflang` для `ru`, `kk` и `x-default`.
- JSON-LD: схемы `Restaurant` и `LocalBusiness` (адрес, телефон, часы
  работы, координаты, соцсети) — подставляются из `restaurant.ts`.
- `sitemap.ts` и `robots.ts` генерируются автоматически Next.js.

## Дизайн

Палитра и шрифты зафиксированы в брифе и не менялись:
- Sand `#F5E9D6`, Warm Cream `#FFF8F0`, Coffee `#7B5B45`,
  Forest Green `#5B7A57`, акцент Gold `#D4A373`
- Playfair Display (заголовки) + Inter (текст), Google Fonts,
  подключены через `next/font/google` (автоматическая оптимизация,
  self-hosting шрифтов без раннего layout shift)

Все цвета и радиусы вынесены в CSS-переменные в `globals.css`
(`@theme inline` — синтаксис Tailwind v4), поэтому смена акцентного
цвета или радиуса делается в одном месте.

## Анимации

Framer Motion: fade-up при скролле (`<FadeUp>`), stagger для списков
карточек (`<Stagger>` + `<StaggerItem>`), parallax-фон в Hero,
плавные переходы между табами кухонь и фильтрами отзывов/галереи.
Анимации отключаются автоматически при `prefers-reduced-motion: reduce`
(см. `globals.css`).

## Известные ограничения текущей версии

- Форма бронирования стола не имеет backend — она формирует готовое
  сообщение и открывает WhatsApp с этим текстом. Для интеграции с CRM
  или почтой нужен отдельный API-роут.
- Карта встроена через `iframe` Google Maps по координатам — для точного
  отображения нужны реальные координаты заведения (см. пункт 2 выше).
- Lighthouse-метрики (Performance/Accessibility/SEO 95+) не были измерены
  в этой среде разработки, так как нет доступа к реальному браузерному
  раннеру/деплою. Код написан по best practices (next/image, next/font,
  lazy loading, семантическая разметка, видимый focus-ring), но финальные
  цифры нужно проверить на реальном деплое (Vercel Speed Insights или
  PageSpeed Insights).
