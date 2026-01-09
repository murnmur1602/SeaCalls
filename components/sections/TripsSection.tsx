"use client";

import { trips } from "@/lib/trips-data";
import Image from "next/image";
import Link from "next/link";

export default function TripsSection() {
  return (
    <section id="trips" className="pt-20 md:pt-28 px-5 md:px-6 relative">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-block">
            <h2
              className="font-cormorant font-light tracking-wide"
              style={{ fontSize: "clamp(38px, 8vw, 52px)" }}
            >
              РАСПИСАНИЕ
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
                  backgroundImage: "url(/images/paper-texture.png)",
                  backgroundRepeat: "repeat",
                  backgroundSize: "auto",
                  opacity: 0.4,
                  mixBlendMode: "multiply",
                }}
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a3f48]/85 via-[#2a3f48]/45 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end z-10">
                <div
                  className="mb-2 font-manrope font-light"
                  style={{ fontSize: "clamp(28px, 6vw, 32px)" }}
                >
                  {trip.country}
                </div>
                <div
                  className="mb-4 md:mb-5 text-[#B8D4E8]/90 font-manrope"
                  style={{ fontSize: "clamp(15px, 3vw, 16px)" }}
                >
                  {trip.region}
                </div>

                <div className="flex items-center justify-between mb-5 pb-4 md:pb-5 border-b border-white/20">
                  <div>
                    <div
                      className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest"
                      style={{ fontSize: "11px" }}
                    >
                      Даты
                    </div>
                    <div
                      className="font-manrope font-light"
                      style={{ fontSize: "clamp(13px, 3vw, 14px)" }}
                    >
                      {trip.dates}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest"
                      style={{ fontSize: "11px" }}
                    >
                      Стоимость
                    </div>
                    <div
                      className="text-[#D4AF7A] font-manrope font-light"
                      style={{ fontSize: "clamp(22px, 5vw, 24px)" }}
                    >
                      {trip.price}
                    </div>
                  </div>
                </div>

                <p
                  className="mb-5 md:mb-6 text-white/90 font-manrope font-light leading-relaxed"
                  style={{ fontSize: "clamp(14px, 3vw, 14px)" }}
                >
                  {trip.description}
                </p>

                <Link
                  href={`/trips/${trip.slug}`}
                  className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white py-3.5 md:py-3 rounded-full transition-colors border border-white/30 font-manrope font-normal tracking-wider text-center block"
                  style={{ fontSize: "clamp(12px, 3vw, 13px)" }}
                >
                  {trip.customButton ? trip.customButton : "ПОДРОБНЕЕ"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
