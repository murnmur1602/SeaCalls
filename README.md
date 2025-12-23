# Море Зовёт - Next.js Website

Современный адаптивный сайт для яхтенных путешествий, созданный на Next.js с TypeScript и Tailwind CSS.

## 🚀 Технологии

- **Next.js 15** - React-фреймворк для production
- **TypeScript** - статическая типизация
- **Tailwind CSS** - утилитарный CSS-фреймворк
- **Radix UI** - компоненты UI с accessibility
- **Lucide React** - иконки
- **React Responsive Masonry** - адаптивная галерея

## 📦 Установка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Запуск production build
npm start
```

## 🏗️ Структура проекта

```
sea-calls-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout с шрифтами
│   ├── page.tsx             # Главная страница
│   └── globals.css          # Глобальные стили
├── components/               # React компоненты
│   ├── sections/            # Секции страницы
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TripsSection.tsx
│   │   ├── CaptainSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactsSection.tsx
│   ├── Navigation.tsx       # Навигация
│   ├── Footer.tsx          # Футер
│   ├── FinalConcept.tsx    # Основной компонент
│   └── TripDetail.tsx      # Детальная страница путешествия
├── lib/                     # Утилиты
│   └── utils.ts            # Helper функции
├── public/                  # Статические файлы
│   └── images/             # Изображения
└── package.json            # Зависимости

```

## 🎨 Особенности дизайна

- **Адаптивная верстка** - Mobile-first подход с breakpoints для всех устройств
- **Кастомные шрифты** - Cormorant (serif), Manrope и DM Sans
- **Parallax эффекты** - на hero секции
- **Paper texture overlay** - уникальная текстура бумаги на фоне
- **Плавные анимации** - transition и hover эффекты
- **Масонри галерея** - адаптивная grid-галерея фотографий

## 🎯 Основные компоненты

### Navigation
Фиксированная навигация с мобильным меню-гамбургером

### Hero Section
Полноэкранная секция с parallax эффектом

### About Section
О проекте с двухколоночным layout (текст + изображение)

### Gallery Section
Адаптивная masonry-галерея фотографий

### Trips Section
Grid карточек путешествий с детальной информацией

### Captain Section
О капитане с изображением и ссылками на соцсети

### FAQ Section
Accordion с часто задаваемыми вопросами

### Contacts Section
Контактная форма и ссылки

## 📱 Адаптивность

Сайт полностью адаптирован под:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎨 Цветовая палитра

```css
/* Основной градиент */
background: linear-gradient(150deg, 
  #1f4247 0%, #2d5a5f 10%, #4a7c87 20%, 
  #6a8f91 30%, #87a8a4 40%, #9ab8b0 50%, 
  #87a8a4 60%, #6a8f91 70%, #4a7c87 80%, 
  #2d5a5f 90%, #1f4247 100%
);

/* Акцентные цвета */
--accent-blue: #B8D4E8;
--accent-gold: #D4AF7A;
--accent-teal: #4A9FB5;
```

## 🔧 Команды разработки

```bash
# Запуск в режиме разработки
npm run dev

# Проверка типов TypeScript
npx tsc --noEmit

# Линтинг
npm run lint

# Форматирование кода
npx prettier --write .
```

## 📝 TODO

- [ ] Установить Node.js и зависимости
- [ ] Добавить реальные изображения в /public/images
- [ ] Настроить переменные окружения (.env)
- [ ] Подключить аналитику
- [ ] Настроить SEO метатеги
- [ ] Добавить sitemap.xml
- [ ] Интегрировать форму обратной связи
- [ ] Оптимизировать изображения

## 🚀 Деплой

Рекомендуется деплой на Vercel:

```bash
# Установить Vercel CLI
npm i -g vercel

# Деплой
vercel
```

## 📄 Лицензия

Private project

## 👨‍💻 Автор

Разработано для проекта "Море Зовёт"
