# ИНСТРУКЦИЯ ПО ЗАПУСКУ ПРОЕКТА "МОРЕ ЗОВЁТ"

## 📋 Что было сделано

Создан полнофункциональный Next.js проект с современной архитектурой:

### ✅ Реализованные компоненты:
1. **Навигация** - адаптивная с мобильным меню
2. **Hero секция** - с parallax эффектом
3. **О проекте** - с текстовым контентом и изображениями
4. **Галерея** - адаптивная masonry-сетка
5. **Расписание путешествий** - grid карточек с детальной информацией
6. **О капитане** - биография с фото
7. **FAQ** - accordion с вопросами/ответами
8. **Контакты** - с кнопками соцсетей
9. **Footer** - с юридической информацией
10. **Детальная страница путешествия** - TripDetail компонент

### 🎨 Технические особенности:
- ✅ TypeScript для type safety
- ✅ Tailwind CSS для стилизации
- ✅ Next.js App Router (latest)
- ✅ Server & Client Components
- ✅ Image optimization с Next/Image
- ✅ Адаптивная верстка (mobile-first)
- ✅ Кастомные шрифты (Google Fonts)
- ✅ SEO оптимизация
- ✅ Accessibility (семантическая разметка)

## 🚀 УСТАНОВКА И ЗАПУСК

### Шаг 1: Установка Node.js

Если Node.js не установлен, установите его:

**macOS (через Homebrew):**
```bash
# Установить Homebrew (если нет)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Установить Node.js
brew install node
```

**Или скачать с официального сайта:**
https://nodejs.org/ (рекомендуется LTS версия)

### Шаг 2: Установка зависимостей

```bash
cd /Users/nastabulygina/Desktop/sea-calls-nextjs
npm install
```

### Шаг 3: Добавить изображения (опционально)

Добавьте файл paper-texture.png в папку `public/images/`:
- Можно использовать любую текстуру бумаги
- Или оставить без текстуры (сайт будет работать)

### Шаг 4: Запуск dev-сервера

```bash
npm run dev
```

Сайт будет доступен по адресу: **http://localhost:3000**

### Шаг 5: Production build

```bash
# Сборка
npm run build

# Запуск production версии
npm start
```

## 📁 Структура проекта

```
sea-calls-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout с метаданными
│   ├── page.tsx                 # Главная страница
│   └── globals.css              # Глобальные стили
│
├── components/                   # React компоненты
│   ├── sections/                # Секции главной страницы
│   │   ├── HeroSection.tsx      # Hero с parallax
│   │   ├── AboutSection.tsx     # О проекте
│   │   ├── GallerySection.tsx   # Галерея фото
│   │   ├── TripsSection.tsx     # Карточки путешествий
│   │   ├── CaptainSection.tsx   # О капитане
│   │   ├── FAQSection.tsx       # Вопросы-ответы
│   │   └── ContactsSection.tsx  # Контакты
│   ├── FinalConcept.tsx         # Главный контейнер
│   ├── Navigation.tsx           # Навигация
│   ├── Footer.tsx              # Футер
│   └── TripDetail.tsx          # Детальная страница
│
├── lib/                         # Утилиты
│   └── utils.ts                # Helper функции (cn)
│
├── public/                      # Статические файлы
│   └── images/                 # Изображения
│
├── tailwind.config.ts          # Конфигурация Tailwind
├── tsconfig.json               # Конфигурация TypeScript
├── next.config.ts              # Конфигурация Next.js
└── package.json                # Зависимости
```

## 🎯 Архитектурные решения

### 1. Component-Based Architecture
Каждая секция - отдельный компонент для удобства поддержки

### 2. Mobile-First подход
Все стили начинаются с mobile и расширяются через breakpoints

### 3. Server & Client Components
- Server Components по умолчанию (SEO)
- Client Components где нужна интерактивность ('use client')

### 4. Type Safety
TypeScript обеспечивает безопасность типов во всем проекте

### 5. Performance Optimization
- Next/Image для оптимизации изображений
- Dynamic imports для code splitting
- Lazy loading компонентов

## 📱 Адаптивность

Breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

Используются:
- CSS Grid для layout
- Flexbox для alignment
- clamp() для адаптивных размеров шрифтов
- Tailwind responsive utilities (md:, lg:)

## 🎨 Стилизация

### Кастомные CSS переменные
```css
--font-cormorant: шрифт для заголовков
--font-manrope: основной шрифт
--font-dm-sans: шрифт для UI элементов
```

### Цветовая схема
```
Морской градиент: #1f4247 → #9ab8b0
Акценты:
- Голубой: #B8D4E8
- Золотой: #D4AF7A
- Бирюзовый: #4A9FB5
```

## 🔧 Доступные команды

```bash
npm run dev      # Запуск в режиме разработки
npm run build    # Production build
npm start        # Запуск production сервера
npm run lint     # Проверка кода с ESLint
```

## 📝 Следующие шаги

1. **Установите Node.js и зависимости**
2. **Добавьте реальные изображения** в public/images/
3. **Настройте paper-texture.png** (или удалите ссылки на него)
4. **Проверьте работу** на localhost:3000
5. **Настройте формы** обратной связи (Telegram API, email и т.д.)
6. **Добавьте аналитику** (Google Analytics, Yandex Metrika)
7. **Оптимизируйте SEO** (метатеги, sitemap.xml, robots.txt)
8. **Деплой на Vercel** или другой хостинг

## 🚀 Деплой на Vercel

```bash
# Установить Vercel CLI
npm i -g vercel

# Логин
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

## 💡 Советы по разработке

1. **Используйте ESLint**: `npm run lint`
2. **Проверяйте типы**: `npx tsc --noEmit`
3. **Тестируйте на разных устройствах**: используйте DevTools
4. **Оптимизируйте изображения**: используйте WebP формат
5. **Следите за bundle size**: используйте `npm run build` для анализа

## 📞 Поддержка

При возникновении проблем:
1. Проверьте версию Node.js: `node --version` (должна быть 18+)
2. Удалите node_modules и переустановите: `rm -rf node_modules && npm install`
3. Очистите кэш Next.js: `rm -rf .next`

## 🎓 Дополнительная информация

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

---

**Проект готов к запуску! Успехов! 🚢⚓️🌊**
