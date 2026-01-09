# Архитектура страниц путешествий

## Обзор

Рефакторинг страницы "О путешествии" выполнен согласно best practices Next.js 15 и принципам clean architecture.

## Структура

```
├── app/
│   ├── page.tsx                    # Главная страница
│   └── trips/
│       └── [slug]/
│           └── page.tsx            # Динамический роут для путешествий
├── components/
│   ├── FinalConcept.tsx            # Главный компонент (упрощен)
│   ├── TripDetailPage.tsx          # Переиспользуемый компонент страницы путешествия
│   └── sections/
│       └── TripsSection.tsx        # Секция со списком путешествий
└── lib/
    ├── types.ts                    # TypeScript типы
    └── trips-data.ts               # Централизованные данные путешествий
```

## Ключевые улучшения

### 1. **Динамическая маршрутизация Next.js**

- Использован file-based routing: `/trips/[slug]`
- SSG (Static Site Generation) для всех путешествий
- Функция `generateStaticParams()` для pre-rendering
- Правильная навигация через `next/link`

### 2. **Разделение ответственности**

- **`trips-data.ts`** - единый источник данных
- **`types.ts`** - TypeScript интерфейсы
- **`TripDetailPage.tsx`** - переиспользуемый UI компонент
- **`app/trips/[slug]/page.tsx`** - роут + data fetching

### 3. **Типобезопасность**

```typescript
interface Trip {
  id: number;
  slug: string; // для URL
  image: string;
  country: string;
  region: string;
  dates: string;
  price: string;
  format: string;
  description: string;
  customButton?: string;
  // Детальная информация
  duration?: string;
  spotsLeft?: number;
  totalSpots?: string;
  distance?: string;
  route?: string;
  fullDescription?: string[];
}
```

### 4. **Переиспользуемость**

Компонент `TripDetailPage` принимает данные через props:

```tsx
<TripDetailPage trip={trip} />
```

Это позволяет:

- Легко добавлять новые путешествия
- Изменять данные в одном месте
- Использовать компонент для preview/тестирования

### 5. **SEO оптимизация**

- Статическая генерация всех страниц при билде
- Правильные URL: `/trips/thailand`, `/trips/seychelles`
- Возможность добавить metadata для каждой страницы

## Как добавить новое путешествие

1. Добавьте объект в массив `trips` в `lib/trips-data.ts`:

```typescript
{
  id: 10,
  slug: 'new-trip',  // используется в URL
  country: 'Новая страна',
  region: 'Регион',
  // ... остальные поля
  fullDescription: [
    'Первый параграф описания',
    'Второй параграф',
  ]
}
```

2. Пересоберите проект:

```bash
npm run build
```

Страница автоматически сгенерируется по адресу `/trips/new-trip`

## Навигация

### Главная → Путешествие

```tsx
<Link href={`/trips/${trip.slug}`}>Подробнее</Link>
```

### Путешествие → Главная

```tsx
<Link href="/#trips">Назад к путешествиям</Link>
```

### Путешествие → Секция главной

```tsx
<Link href="/#contacts">Написать капитану</Link>
```

## Производительность

- **SSG**: все страницы генерируются на этапе сборки
- **Code splitting**: автоматическое разделение кода Next.js
- **Image optimization**: использование `next/image`
- **Prefetching**: автоматический prefetch при hover на Link

## Преимущества новой архитектуры

✅ **Масштабируемость** - легко добавлять новые путешествия
✅ **Maintainability** - данные в одном месте
✅ **Type Safety** - полная типизация TypeScript
✅ **SEO friendly** - правильные URL и SSG
✅ **Performance** - оптимальная загрузка
✅ **Developer Experience** - понятная структура
✅ **Code Reusability** - переиспользуемые компоненты

## Что было исправлено

❌ **Было**: захардкоженные данные в компоненте
✅ **Стало**: централизованные данные в `trips-data.ts`

❌ **Было**: условный рендеринг в `FinalConcept`
✅ **Стало**: отдельный роут `/trips/[slug]`

❌ **Было**: кнопка "Назад" через callback
✅ **Стало**: нативная навигация через `Link`

❌ **Было**: работала только для одного путешествия (id === 1)
✅ **Стало**: работает для всех 9 путешествий

❌ **Было**: нет SEO-оптимизации
✅ **Стало**: каждая страница имеет уникальный URL
