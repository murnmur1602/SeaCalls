# ТЕХНИЧЕСКИЕ ДЕТАЛИ ПРОЕКТА

## 🏗️ Архитектура

### Next.js App Router
Проект использует новый App Router (Next.js 13+):
- `app/layout.tsx` - корневой layout
- `app/page.tsx` - главная страница
- Automatic code splitting
- Server Components по умолчанию

### Компонентная структура

#### Server Components (без 'use client')
- `app/layout.tsx` - SEO, метаданные, шрифты
- `app/page.tsx` - точка входа

#### Client Components (с 'use client')
Все интерактивные компоненты:
- `FinalConcept.tsx` - главный контейнер со state
- `Navigation.tsx` - мобильное меню
- `TripDetail.tsx` - детальная страница
- Все секции с интерактивностью (FAQ, Gallery)

## 📦 Зависимости

### Production
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "next": "^15.1.0",
  "lucide-react": "^0.487.0",           // Иконки
  "react-responsive-masonry": "^2.3.0", // Галерея
  "@radix-ui/*": "^1.x",                // UI компоненты
  "tailwind-merge": "^2.5.5",           // Утилита для классов
  "clsx": "^2.1.1"                      // Условные классы
}
```

### DevDependencies
```json
{
  "typescript": "^5.7.2",
  "tailwindcss": "^3.4.17",
  "postcss": "^8.4.49",
  "eslint": "^9.17.0",
  "@types/*": "latest"
}
```

## 🎨 Стилизация

### Tailwind CSS Configuration

#### Кастомные шрифты
```typescript
fontFamily: {
  cormorant: ['var(--font-cormorant)', 'serif'],
  manrope: ['var(--font-manrope)', 'sans-serif'],
  dmSans: ['var(--font-dm-sans)', 'sans-serif'],
}
```

#### Использование в компонентах
```tsx
<h1 className="font-cormorant">Заголовок</h1>
<p className="font-manrope">Основной текст</p>
<button className="font-dmSans">UI элемент</button>
```

### Адаптивные размеры

#### clamp() для fluid typography
```css
fontSize: 'clamp(48px, 13vw, 74px)'  // min, preferred, max
```

#### Tailwind breakpoints
```tsx
<div className="px-5 md:px-8 lg:px-12">
  // 5 на mobile, 8 на tablet, 12 на desktop
</div>
```

## 🖼️ Оптимизация изображений

### Next/Image Component
```tsx
<Image
  src="https://..."
  alt="Description"
  fill                    // Заполняет родительский контейнер
  className="object-cover" // Cover без искажений
  priority                 // Загрузка с высоким приоритетом
  sizes="(max-width: 768px) 100vw, 50vw" // Responsive
/>
```

### Remote Patterns
В `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

## 🔄 State Management

### Local State (useState)
```tsx
const [menuOpen, setMenuOpen] = useState(false);
const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
const [scrollY, setScrollY] = useState(0);
```

### Effects (useEffect)
```tsx
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 🎯 SEO Оптимизация

### Metadata в layout.tsx
```typescript
export const metadata: Metadata = {
  title: 'Море Зовёт | Парусные путешествия',
  description: 'Яхтенные путешествия с капитаном...',
  keywords: 'яхтинг, парусные путешествия...',
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
  },
}
```

### Semantic HTML
- `<nav>` для навигации
- `<section>` для секций с `id`
- `<footer>` для футера
- `<h1>`, `<h2>` иерархия заголовков
- `alt` для всех изображений
- `aria-label` для кнопок без текста

## 📱 Адаптивность

### Mobile-First CSS
```css
/* Base (mobile) */
.element { padding: 1rem; }

/* Tablet и выше */
@media (min-width: 768px) {
  .element { padding: 2rem; }
}
```

### Tailwind Responsive Classes
```tsx
<div className="
  grid 
  grid-cols-1         // mobile: 1 колонка
  md:grid-cols-2      // tablet: 2 колонки
  lg:grid-cols-3      // desktop: 3 колонки
  xl:grid-cols-4      // large: 4 колонки
">
```

## ⚡ Performance

### Code Splitting
```tsx
// Dynamic import для больших компонентов
const TripDetail = dynamic(() => import('./TripDetail'), {
  ssr: false,  // Отключить SSR для client-only компонента
});
```

### Image Optimization
- Автоматическая оптимизация с Next/Image
- WebP формат автоматически
- Lazy loading по умолчанию
- Responsive images с sizes

### Font Optimization
```tsx
import { Cormorant, Manrope, DM_Sans } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',  // Font display strategy
  variable: '--font-cormorant',
});
```

## 🔧 Utility Functions

### cn() helper
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Использование:
```tsx
<div className={cn(
  "base-class",
  isActive && "active-class",
  className  // props className
)}>
```

## 🎨 UI Patterns

### Gradient Background
```typescript
style={{
  background: 'linear-gradient(150deg, 
    #1f4247 0%, #2d5a5f 10%, #4a7c87 20%, 
    #6a8f91 30%, #87a8a4 40%, #9ab8b0 50%, 
    #87a8a4 60%, #6a8f91 70%, #4a7c87 80%, 
    #2d5a5f 90%, #1f4247 100%
  )'
}}
```

### Paper Texture Overlay
```tsx
<div 
  className="absolute inset-0 pointer-events-none" 
  style={{ 
    backgroundImage: 'url(/images/paper-texture.png)',
    backgroundRepeat: 'repeat',
    opacity: 0.4,
    mixBlendMode: 'multiply'
  }}
/>
```

### Parallax Effect
```tsx
<div style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
  {/* Контент с parallax */}
</div>
```

## 🔐 Type Safety

### TypeScript Interfaces
```typescript
interface TripDetailProps {
  onBack: () => void;
}

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
```

### Type-safe Components
```tsx
export default function Navigation({ 
  menuOpen, 
  setMenuOpen 
}: NavigationProps) {
  // TypeScript проверяет типы props
}
```

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
```

Output:
- `.next/` - compiled app
- Автоматическая оптимизация
- Minification
- Tree shaking
- Code splitting

### Vercel Deploy
```bash
vercel --prod
```

Features:
- Автоматический SSL
- CDN
- Edge functions
- Analytics
- Preview deployments

## 📊 Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

В `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Запуск:
```bash
ANALYZE=true npm run build
```

## 🧪 Testing (рекомендации)

### Unit Tests
```bash
npm install --save-dev jest @testing-library/react
```

### E2E Tests
```bash
npm install --save-dev playwright
```

### Lighthouse CI
Для проверки performance, accessibility, SEO

---

**Все технические детали для масштабирования и поддержки проекта! 🚀**
