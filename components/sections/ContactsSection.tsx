"use client";

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="pt-24 md:pt-28 pb-16 md:pb-16 px-5 md:px-6 relative"
    >
      {/* Paper texture overlay */}
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block">
            <h2
              className="font-cormorant font-light tracking-wide"
              style={{ fontSize: "clamp(38px, 8vw, 52px)" }}
            >
              КОНТАКТЫ
            </h2>
            <div
              className="mt-2"
              style={{
                width: "100%",
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)",
              }}
            ></div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8 md:mb-10">
          <a
            href="https://t.me/nastyabulygina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A9FB5] hover:bg-[#5AAFC5] text-white px-10 md:px-14 py-4 md:py-5 rounded-lg transition-all shadow-xl hover:shadow-2xl font-manrope font-normal tracking-wider"
            style={{ fontSize: "clamp(15px, 3.5vw, 16px)" }}
          >
            Написать в Telegram
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://t.me/sea_calls_me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 rounded-lg transition-colors border border-white/20 w-full sm:w-auto font-manrope font-normal tracking-wider"
            style={{ fontSize: "clamp(14px, 3vw, 14px)" }}
          >
            Telegram-канал
          </a>
          <a
            href="https://instagram.com/nastya.bulygina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 rounded-lg transition-colors border border-white/20 w-full sm:w-auto font-manrope font-normal tracking-wider"
            style={{ fontSize: "clamp(14px, 3vw, 14px)" }}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
