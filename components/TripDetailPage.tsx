"use client";

import { Trip } from "@/lib/types";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  MapPin,
  Menu,
  Users,
  X as XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TripDetailPageProps {
  trip: Trip;
}

export default function TripDetailPage({ trip }: TripDetailPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="text-white min-h-screen relative font-manrope"
      style={{
        background:
          "linear-gradient(150deg, #1f4247 0%, #2d5a5f 10%, #4a7c87 20%, #6a8f91 30%, #87a8a4 40%, #9ab8b0 50%, #87a8a4 60%, #6a8f91 70%, #4a7c87 80%, #2d5a5f 90%, #1f4247 100%)",
      }}
    >
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1f4247]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-6 flex md:grid md:grid-cols-3 items-center justify-between">
          <div className="flex justify-start">
            <Link
              href="/"
              className="md:pl-16 hover:opacity-70 transition-opacity font-cormorant font-normal tracking-tight"
              style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
            >
              МОРЕ ЗОВЁТ
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-10">
            <Link
              href="/#about"
              className="hover:opacity-70 transition-opacity font-dmSans text-base font-normal whitespace-nowrap"
            >
              О проекте
            </Link>
            <Link
              href="/#trips"
              className="hover:opacity-70 transition-opacity font-dmSans text-base font-normal"
            >
              Расписание
            </Link>
            <Link
              href="/#captain"
              className="hover:opacity-70 transition-opacity font-dmSans text-base font-normal"
            >
              Капитан
            </Link>
            <Link
              href="/#faq"
              className="hover:opacity-70 transition-opacity font-dmSans text-base font-normal"
            >
              FAQ
            </Link>
            <Link
              href="/#contacts"
              className="hover:opacity-70 transition-opacity font-dmSans text-base font-normal"
            >
              Контакты
            </Link>
          </div>

          <div className="hidden md:flex justify-end">
            <a
              href="https://t.me/nastyabulygina"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/50 hover:bg-white/5 px-5 rounded-full transition-all md:mr-16 font-dmSans text-base font-normal h-[34px] leading-[32px] inline-flex items-center"
            >
              Написать капитану
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#2B7A8E]/95 backdrop-blur-md py-6">
            <div className="flex flex-col gap-5 px-6">
              <Link
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B8D4E8] transition-colors text-left font-dmSans text-base font-normal"
              >
                О проекте
              </Link>
              <Link
                href="/#trips"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B8D4E8] transition-colors text-left font-dmSans text-base font-normal"
              >
                Расписание
              </Link>
              <Link
                href="/#captain"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B8D4E8] transition-colors text-left font-dmSans text-base font-normal"
              >
                Капитан
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B8D4E8] transition-colors text-left font-dmSans text-base font-normal"
              >
                FAQ
              </Link>
              <Link
                href="/#contacts"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B8D4E8] transition-colors text-left font-dmSans text-base font-normal"
              >
                Контакты
              </Link>
              <a
                href="https://t.me/nastyabulygina"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full transition-all text-center mt-2 font-dmSans text-[15px] font-normal"
              >
                Написать капитану
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed header */}
      <div className="pt-[76px] md:pt-[88px]">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src={trip.image}
            alt={trip.country}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Paper texture */}
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f4247]/95 via-[#1f4247]/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
              <Link
                href="/#trips"
                className="inline-flex items-center gap-2 text-[#B8D4E8] hover:text-white transition-colors mb-6 font-manrope"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Назад к путешествиям</span>
              </Link>
              <div className="mb-4 text-[#B8D4E8] font-manrope uppercase tracking-widest text-sm">
                {trip.format}
              </div>
              <h1
                className="mb-6 font-cormorant font-normal tracking-tight leading-tight"
                style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
              >
                {trip.country}
              </h1>
              <p
                className="text-[#B8D4E8] max-w-2xl font-manrope font-light leading-relaxed"
                style={{ fontSize: "20px" }}
              >
                {trip.region} — {trip.description.toLowerCase()}
              </p>
            </div>
          </div>
        </section>

        {/* Key Info */}
        <section className="pt-12 pb-0 relative">
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

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-[#B8D4E8] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest text-xs">
                    Даты
                  </div>
                  <div className="font-manrope text-lg font-light">
                    {trip.dates}
                  </div>
                  {trip.duration && (
                    <div className="text-white/60 mt-1 font-manrope text-sm">
                      {trip.duration}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-[#B8D4E8] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest text-xs">
                    Стоимость
                  </div>
                  <div className="text-[#D4AF7A] font-manrope text-[28px] font-light">
                    {trip.price}
                  </div>
                  <div className="text-white/60 mt-1 font-manrope text-sm">
                    На человека
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#B8D4E8] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest text-xs">
                    Группа
                  </div>
                  <div className="font-manrope text-lg font-light">
                    {trip.totalSpots || "4-6 человек"}
                  </div>
                  {trip.spotsLeft && (
                    <div className="text-white/60 mt-1 font-manrope text-sm">
                      Осталось {trip.spotsLeft}{" "}
                      {trip.spotsLeft === 1
                        ? "место"
                        : trip.spotsLeft < 5
                        ? "места"
                        : "мест"}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#B8D4E8] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#B8D4E8]/70 mb-1 font-manrope uppercase tracking-widest text-xs">
                    Маршрут
                  </div>
                  <div className="font-manrope text-lg font-light">
                    {trip.distance || "~120 миль"}
                  </div>
                  {trip.route && (
                    <div className="text-white/60 mt-1 font-manrope text-sm">
                      {trip.route}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="pt-16 md:pt-20 px-6 relative pb-16">
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

          <div className="max-w-4xl mx-auto relative z-10">
            <h2
              className="mb-8 font-manrope font-light tracking-wide"
              style={{ fontSize: "clamp(36px, 6vw, 52px)" }}
            >
              О путешествии
            </h2>
            <div
              className="space-y-5 text-white/90 font-manrope font-light leading-relaxed"
              style={{ fontSize: "17px", lineHeight: 1.8 }}
            >
              {trip.fullDescription ? (
                trip.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{trip.description}</p>
              )}
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <a
                href="https://t.me/nastyabulygina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 px-8 py-4 rounded-full transition-all font-dmSans text-lg font-normal"
              >
                {trip.customButton || "Забронировать место"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
