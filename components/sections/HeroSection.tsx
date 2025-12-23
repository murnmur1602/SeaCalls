'use client';

import Image from 'next/image';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/images/412ee3ed42d4d2bed6f86e0f0d951171a52fa935.png"
          alt="Sailing yacht at sea"
          fill
          className="object-cover"
          priority
          sizes="100vw"
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
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-5 md:px-8 max-w-4xl"
        style={{ marginTop: 'clamp(-80px, -10vw, -175px)' }}
      >
        <h1
          className="mb-4 md:mb-6 font-cormorant font-normal tracking-tight leading-tight"
          style={{ fontSize: 'clamp(48px, 13vw, 74px)' }}
        >
          МОРЕ ЗОВЁТ
        </h1>
        <p
          className="mb-8 md:mb-12 opacity-90 px-2 font-dmSans font-normal -mt-2.5"
          style={{ fontSize: 'clamp(15px, 3.5vw, 16px)' }}
        >
          Путешествия на парусных яхтах по всему миру
        </p>
        <a
          href="#trips"
          className="border border-white/30 hover:border-white/50 hover:bg-white/5 px-8 md:px-6 py-3 md:py-2.5 rounded-full transition-all inline-block font-dmSans font-normal"
          style={{ fontSize: 'clamp(15px, 3vw, 16px)' }}
        >
          Выбрать путешествие
        </a>
      </div>
    </section>
  );
}
