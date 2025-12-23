'use client';

export default function Footer() {
  return (
    <footer className="pt-10 pb-8 md:pb-6 px-5 md:px-6 text-[#B8D4E8]/70 relative">
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
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-6">
          {/* Copyright */}
          <div
            className="text-center md:text-left font-manrope font-light"
            style={{ fontSize: 'clamp(12px, 3vw, 13px)' }}
          >
            2026 МОРЕ ЗОВЁТ
          </div>

          {/* Links */}
          <div
            className="flex items-center justify-center gap-6 md:gap-8 font-manrope font-light"
            style={{ fontSize: 'clamp(12px, 3vw, 13px)' }}
          >
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
          </div>

          {/* Disclaimer */}
          <div
            className="text-center md:text-right text-[#B8D4E8]/50 font-manrope font-light leading-relaxed"
            style={{ fontSize: 'clamp(9px, 2.5vw, 10px)' }}
          >
            * Instagram принадлежит компании Meta, которая признана
            <br className="hidden sm:inline" /> экстремистской организацией и
            запрещена на территории РФ
          </div>
        </div>
      </div>
    </footer>
  );
}
