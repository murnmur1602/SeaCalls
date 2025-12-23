'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Переживаю что меня будет укачивать.',
    a: 'Будет укачивать человека или нет зависит от индивидуальных особенностей организма. В нашем регионе вряд ли будут сильные волны и большую часть экипажа скорее всего не укачает. Также мы не выходим в море в случае неблагоприятной погоды.\n\nЧаще всего если человека укачивает на яхте, то это проходит само в течение 1-2 дней. Также есть специальные таблетки от укачивания. Кроме того у капитана есть несколько лайфхаков как справиться с укачиванием.',
  },
  {
    q: 'Где мы будем жить?',
    a: 'Мы будем жить, спать, готовить на яхте. На ней находится полноценный камбуз (кухня), несколько двуспальных кают, пара санузлов с душем. В первый день мы распределимся по 2 человека на каюту, девушки живут с девушками, а парни с парнями.',
  },
  {
    q: 'Как будет организован быт? Как выглядит яхта?',
    a: 'Готовим по большей части сами, иногда ходим в кафе/рестораны по желанию. Готовка, мытье посуды, помощь по лодке будут поделены по вахтам. Каждый день одна из кают отвечают за вахтенные задачи.\n\nНа яхте есть общая зона — кают-компания с полноценной кухней. Также есть еще 3-4 компактные каюты со спальным местом, рассчитанные на 2 человека. На яхте обычно 2 туалета с душами.',
  },
  {
    q: 'У меня нет опыта в яхтинге.',
    a: 'Это совсем не страшно. Не обязательно что-то уметь до поездки. Иногда во время управления яхтой может понадобиться твоя помощь, но это исключительно по желанию и капитан расскажет подробно, что нужно будет делать.\n\nА если у тебя будет желание узнать побольше про паруса и море, то у тебя будет возможность постоять за штурвалом, узнать как управлять парусами, выучить морские узлы и многое другое. Но это только если ты захочешь :)',
  },
  {
    q: 'Требуется ли специальная одежда или экипировка?',
    a: 'Специальной яхтенной одежды не требуется. Понадобятся вещи от солнца (крем SPF, кепка, лёгкая закрытая одежда), купальники, коралловые тапочки (по желанию) и лёгкая кофта или ветровка на вечер. Также нужна будет мягкая сумка вместо чемодана, так как на яхте все довольно компактно и сложно найти место для чемодана.',
  },
  {
    q: 'Хочу поехать один, но переживаю ехать с незнакомыми людьми.',
    a: 'Понимаем. Поэтому прежде чем оплачивать путешествие я созваниваюсь со всеми членами экипажа по zoom. На встрече обсуждаем все открытые вопросы, проговариваем формат поездки, а также знакомимся и понимаем, что подходим друг другу по общему настроению. Благодаря этому получится разделить путешествие именно со своими людьми и создать нужную атмосферу.\n\nПо моему опыту часто поездка заканчивалась тем, что члены экипажа становились друзьями за эту неделю и продолжали общаться и после путешествия.',
  },
];

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-20 md:pt-28 px-5 md:px-6 relative">
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="inline-block font-cormorant font-light tracking-wide"
            style={{ fontSize: 'clamp(38px, 8vw, 52px)' }}
          >
            FAQ
          </h2>
          <div
            className="mt-2 mx-auto"
            style={{
              width: '180px',
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)',
            }}
          ></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 overflow-hidden rounded-xl"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-start justify-between bg-transparent hover:bg-white/5 transition-colors text-left"
              >
                <span
                  className="font-manrope font-light leading-snug pr-3"
                  style={{ fontSize: 'clamp(15px, 3.5vw, 15px)' }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B8D4E8] transition-transform flex-shrink-0 mt-0.5 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <div
                  className="px-5 md:px-6 py-4 md:py-5 bg-white/5 text-white/70 font-manrope font-light leading-relaxed"
                  style={{ fontSize: 'clamp(14px, 3.5vw, 14px)', lineHeight: 1.7 }}
                >
                  {faq.a.split('\n').map((paragraph, i) => (
                    <p key={i} className={i > 0 ? 'mt-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
