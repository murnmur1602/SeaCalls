'use client';

import Image from 'next/image';

interface TripsSectionProps {
  setSelectedTrip: (id: number | null) => void;
}

const trips = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1654528420969-001d8041b3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Таиланд',
    region: 'Пхукет и острова',
    dates: '14-21 марта 2026',
    price: '1800 EUR',
    format: 'Открытое путешествие',
    description: 'Тропический рай, бирюзовые лагуны и невероятные закаты.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1731285534506-6d1c65cfa6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Сейшелы',
    region: 'Внутренние острова',
    dates: '28 марта - 4 апреля 2026',
    price: '1900 EUR',
    format: 'Только девочки',
    description: 'Райские пляжи с белым песком и гранитные скалы в океане.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1571205350653-8e908c22c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Турция',
    region: 'Разведка чартер Мармарис',
    dates: '18-25 апреля 2026',
    price: '1100 EUR',
    format: 'Открытое путешествие',
    description: 'Скрытые бухты, древние руины и тёплое Средиземное море.',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1571205350653-8e908c22c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Турция',
    region: 'Средиземноморье',
    dates: '30 мая - 6 июня 2026',
    price: '1300 EUR',
    format: 'Открытое путешествие',
    description: 'Скрытые бухты, древние руины и тёплое Средиземное море.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1600945193297-91742f3cd29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Черногория',
    region: 'Бока-Которская бухта',
    dates: '13-20 июня 2026',
    price: '1400 EUR',
    format: 'Открытое путешествие',
    description: 'Адриатические фьорды и средневековые крепости у воды.',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1682639265597-52ab6a5a0988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Азорские острова',
    region: 'Португалия',
    dates: '11-18 июля и 18-25 июля 2026',
    price: '1450 EUR',
    format: 'Только девочки',
    description: 'Вулканические пейзажи, киты и океанская мощь Атлантики.',
    customButton: 'Мест нет, записаться в лист ожидания',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1651833170175-688b98dabd00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Липарские острова',
    region: 'Сицилия',
    dates: '5-12 сентября 2026',
    price: '1500 EUR',
    format: 'Открытое путешествие',
    description: 'Вулканы, термальные источники и итальянская культура del mare.',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1571205350653-8e908c22c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Турция',
    region: 'Средиземноморье',
    dates: 'Октябрь 2026',
    price: '1400 EUR',
    format: 'Открытое путешествие',
    description: 'Скрытые бухты, древние руины и тёплое Средиземное море.',
    customButton: 'Маршрут в разработке',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1645189965761-a2d2aedbbcaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Маврикий',
    region: 'Индийский океан',
    dates: 'Октябрь 2026',
    price: '2300 EUR',
    format: 'Открытое путешествие',
    description:
      'Тропический остров с белоснежными пляжами и коралловыми рифами.',
    customButton: 'Маршрут в разработке',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1731285534506-6d1c65cfa6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    country: 'Сейшелы',
    region: 'Внутренние острова',
    dates: 'Ноябрь 2026',
    price: '2000 EUR',
    format: 'Только девочки',
    description: 'Райские пляжи с белым песком и гранитные скалы в океане.',
  },
];

export default function TripsSection({ setSelectedTrip }: TripsSectionProps) {
  return (
    <section id="trips" className="pt-20 md:pt-28 px-5 md:px-6 relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'url(/images/paper-texture.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.4,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-block">
            <h2
              className="font-cormorant font-light tracking-wide"
              style={{ fontSize: 'clamp(38px, 8vw, 52px)' }}
            >
              РАСПИСАНИЕ
            </h2>
            <div
              className="mt-2"
              style={{
                width: '100%',
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)',
              }}
            ></div>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="relative min-h-[520px] overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_rgba(77,138,168,0.3)] transition-all duration-500 group"
            >
              {/* Background image */}
              <Image
                src={trip.image}
                alt={trip.country}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Paper texture overlay */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  backgroundImage: 'url(/images/paper-texture.png)',
                  backgroundRepeat: 'repeat',
                  backgroundSize: 'auto',
                  opacity: 0.4,
                  mixBlendMode: 'multiply',
                }}
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a3f48]/85 via-[#2a3f48]/45 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end z-10">
                <div
                  className="mb-2 font-manrope font-light"
                  style={{ fontSize: 'clamp(28px, 6vw, 32px)' }}
                >
                  {trip.country}
                </div>
                <div
                  className="mb-4 md:mb-5 text-[#B8D4E8]/90 font-manrope"
                  style={{ fontSize: 'clamp(15px, 3vw, 16px)' }}
                >
                  {trip.region}
                </div>

                <div className="flex items-center justify-between mb-5 pb-4 md:pb-5 border-b border-white/20">
                  <div>
                    <div
                      className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest"
                      style={{ fontSize: '11px' }}
                    >
                      Даты
                    </div>
                    <div
                      className="font-manrope font-light"
                      style={{ fontSize: 'clamp(13px, 3vw, 14px)' }}
                    >
                      {trip.dates}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest"
                      style={{ fontSize: '11px' }}
                    >
                      Стоимость
                    </div>
                    <div
                      className="text-[#D4AF7A] font-manrope font-light"
                      style={{ fontSize: 'clamp(22px, 5vw, 24px)' }}
                    >
                      {trip.price}
                    </div>
                  </div>
                </div>

                <p
                  className="mb-5 md:mb-6 text-white/90 font-manrope font-light leading-relaxed"
                  style={{ fontSize: 'clamp(14px, 3vw, 14px)' }}
                >
                  {trip.description}
                </p>

                <button
                  onClick={() => (trip.id === 1 ? setSelectedTrip(1) : null)}
                  className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white py-3.5 md:py-3 rounded-full transition-colors border border-white/30 font-manrope font-normal tracking-wider"
                  style={{ fontSize: 'clamp(12px, 3vw, 13px)' }}
                >
                  {trip.customButton ? trip.customButton : 'ПОДРОБНЕЕ'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
