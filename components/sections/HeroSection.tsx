"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [enableParallax, setEnableParallax] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnableParallax(!media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enableParallax) {
      if (bgRef.current) {
        bgRef.current.style.transform = "translate3d(0,0,0)";
      }
      return;
    }

    let target = window.scrollY;
    let current = target;
    let raf = 0;

    const onScroll = () => {
      target = window.scrollY;
    };

    const tick = () => {
      // Лёгкое сглаживание для iOS, чтобы не дёргалось при замедлении
      current += (target - current) * 0.08;
      const y = current * 0.15; // скорость параллакса
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [enableParallax]);

  const Background = ({ children }: { children: React.ReactNode }) =>
    enableParallax ? (
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        {children}
      </div>
    ) : (
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        {children}
      </div>
    );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect (disabled on mobile / reduced motion) */}
      <Background>
        <div className="relative w-full h-full">
          <picture>
            <source srcSet="/images/hero.avif" type="image/avif" />
            <source srcSet="/images/hero.webp" type="image/webp" />
            <img
              src="/images/hero.webp"
              alt="Sailing yacht at sea"
              className="w-full h-full object-cover object-[55%_center] md:object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              backgroundImage: "url(/images/paper-texture.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              opacity: 0.4,
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </Background>

      {/* Content */}
      <div
        className="relative z-10 text-center px-5 md:px-8 max-w-4xl"
        style={{ marginTop: "clamp(-80px, -10vw, -175px)" }}
      >
        <h1
          className="mb-4 md:mb-6 font-cormorant font-normal tracking-tight leading-tight"
          style={{ fontSize: "clamp(48px, 13vw, 74px)" }}
        >
          МОРЕ ЗОВЁТ
        </h1>
        <p
          className="mb-8 md:mb-12 opacity-90 px-2 font-dmSans font-normal -mt-2.5"
          style={{ fontSize: "clamp(15px, 3.5vw, 16px)" }}
        >
          Путешествия на парусных яхтах по всему миру
        </p>
        <a
          href="#trips"
          className="border border-white/30 hover:border-white/50 hover:bg-white/5 px-8 md:px-6 py-3 md:py-2.5 rounded-full transition-all inline-block font-dmSans font-normal"
          style={{ fontSize: "clamp(15px, 3vw, 16px)" }}
        >
          Выбрать путешествие
        </a>
      </div>
    </section>
  );
}
