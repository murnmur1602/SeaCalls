"use client";

import Image from "next/image";

export default function CaptainSection() {
  return (
    <section id="captain" className="pt-20 md:pt-28 relative">
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

      <div className="relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center px-5 md:px-6">
          <div className="inline-block">
            <h2
              className="font-cormorant font-light tracking-wide"
              style={{ fontSize: "clamp(38px, 8vw, 52px)" }}
            >
              КАПИТАН
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

        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden shadow-2xl">
            {/* Text Content */}
            <div className="order-2 md:order-1 bg-[#1a3940]/85 backdrop-blur-sm p-8 md:p-14 flex flex-col justify-center relative border border-white/10">
              {/* Paper texture overlay for text background */}
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

              <div
                className="space-y-5 text-white/85 relative z-10 font-manrope font-light leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 3.5vw, 17px)",
                  lineHeight: 1.75,
                }}
              >
                <p>Привет! Я Настя.</p>
                <p>
                  С того момента как я впервые оказалась на борту яхты в 2018
                  году — я тотально влюбилась. Море звало меня и я не могла не
                  откликнуться на его зов.
                </p>
                <p>
                  Поэтому я перестроила свою жизнь так, чтобы как можно больше
                  проводить времени в море и показывать мир парусов другим
                  людям. Отучилась на капитана и создаю свои парусные
                  приключения. Ушла из офиса, уехала из родного Петербурга и
                  теперь путешествую нон-стоп.
                </p>
                <p>
                  Больше всего вдохновляюсь тем, как яхтинг меняет людей. А
                  отдельная моя большая радость - когда после совместного
                  путешествия человек решает и сам стать капитаном.
                </p>
                <p>
                  За последние несколько лет капитанства я успела походить в
                  Италии, Норвегии, Черногории, Сейшелах, Греции, Турции,
                  Хорватии. Всего в моем логбуке 5000 миль. Я сертифицированный
                  шкипер с лицензией ISSA. Уделяю большое внимание безопасности:
                  проходила обучение по первой помощи и курс безопасности в
                  открытом море WS / ISAF Offshore Personal Survival.
                </p>

                <p className="pt-3">
                  Если хочешь познакомиться со мной ближе — заглядывай в мои
                  соцсети:
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://t.me/sea_calls_me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 rounded-lg transition-colors border border-white/20 font-manrope font-normal tracking-wider text-sm"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.82 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                        fill="currentColor"
                      />
                    </svg>
                    Telegram-канал
                  </a>
                  <a
                    href="https://instagram.com/nastya.bulygina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 rounded-lg transition-colors border border-white/20 font-manrope font-normal tracking-wider text-sm"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="17" cy="7" r="1" fill="currentColor" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Captain Image */}
            <div className="order-1 md:order-2 relative overflow-hidden min-h-[450px] md:min-h-[600px]">
              <Image
                src="/images/213bf474dd429393e049ac27f8ee451fa8ca1674.png"
                alt="Captain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
