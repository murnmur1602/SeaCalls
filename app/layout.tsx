import type { Metadata } from 'next';
import { Cormorant, Manrope, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Море Зовёт | Парусные путешествия по всему миру',
  description:
    'Яхтенные путешествия с капитаном по самым красивым местам планеты. Таиланд, Сейшелы, Турция, Черногория и другие направления.',
  keywords: 'яхтинг, парусные путешествия, море, яхта, круизы, приключения',
  authors: [{ name: 'Море Зовёт' }],
  openGraph: {
    title: 'Море Зовёт | Парусные путешествия',
    description: 'Яхтенные путешествия с капитаном по всему миру',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
