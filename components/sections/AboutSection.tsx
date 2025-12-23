'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-16 md:pt-20">
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

      <div className="max-w-5xl mx-auto px-5 md:px-6 relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-block">
            <h2
              className="font-cormorant font-light tracking-wide"
              style={{ fontSize: 'clamp(38px, 8vw, 56px)' }}
            >
              О ПРОЕКТЕ
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

        {/* Content */}
        <div
          className="space-y-6 md:space-y-7 max-w-4xl mx-auto text-white/95 font-manrope font-light leading-relaxed"
          style={{ fontSize: 'clamp(17px, 3.5vw, 19px)', lineHeight: 1.75 }}
        >
          <p>У каждого из нас есть это чувство.</p>

          <p>
            Когда ты точно знаешь:{' '}
            <em className="italic text-white/85">я должен быть там</em>. Где-то
            внутри щемит, тянет, зовёт — к новому маршруту, к горизонту, к
            ветру, к себе настоящему.
          </p>

          <p>
            Мы слышим этот зов по-разному. Кого-то он будит ночью. Кого-то
            настигает среди офисных стен. Кому-то просто становится тесно в
            собственной жизни. И вдруг ты понимаешь: тебе нужен воздух, глубина,
            движение. Тебе нужно море.
          </p>

          <p>
            «Море зовёт» — это о том, что важно откликнуться на свой внутренний
            голос. Это о свободе. О путешествии, которое начинается не на яхте —
            а внутри тебя. О выборе в пользу мечты, желания, искренности. Потому
            что если не ты — то кто исполнит твои мечты?
          </p>

          <p>
            Я создаю яхтенные путешествия, где главное — не только маршрут.
            Главное — состояние. Тот самый момент, когда ты стоишь на палубе,
            смотришь вдаль, и вдруг понимаешь: я вернулся туда, где должен быть.
          </p>
        </div>
      </div>

      {/* What awaits section */}
      <div className="max-w-7xl mx-auto px-5 md:px-6 mt-16 md:mt-32">
        <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden shadow-2xl">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
            <Image
              src="/images/aff40174b95f11457f9eda88d846205da4ebfaff.png"
              alt="Sailing yacht with full sails"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
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

          {/* Text content */}
          <div className="bg-[#42727a]/85 backdrop-blur-sm p-8 md:p-14 flex flex-col justify-center relative border border-white/10">
            {/* Paper texture overlay for text background */}
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

            <div className="relative z-10">
              <div className="mb-6 md:mb-8 inline-block">
                <h3
                  className="text-white/90 font-cormorant font-light tracking-wide"
                  style={{ fontSize: 'clamp(28px, 6vw, 32px)' }}
                >
                  ЧТО ТЕБЯ ЖДЕТ
                </h3>
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

              <div
                className="space-y-5 md:space-y-6 text-white/85 font-manrope font-light leading-relaxed"
                style={{ fontSize: 'clamp(16px, 3.5vw, 17px)', lineHeight: 1.75 }}
              >
                <p>
                  Яхта становится нашим домом на эту неделю. Здесь мы спим,
                  готовим, моемся, переходим из одной бухты в другую, живём в
                  ритме моря и погоды, учимся управляться с парусами, находим
                  новых друзей.
                </p>

                <p>
                  Это не круиз и не тур «по расписанию». Это приключение, которое
                  мы проживаем вместе как команда — с реальным бытом, общими
                  задачами, тишиной, разговорами, утренними купаниями и закатами.
                </p>

                <p>
                  Опыт управления парусной яхтой не требуется. Если есть желание
                  — я обучу вязать узлы, управлять парусами, стоять за штурвалом.
                  Но это вовсе не обязательно, ты также можешь просто отдыхать и
                  не погружаться глубоко в парусные темы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
