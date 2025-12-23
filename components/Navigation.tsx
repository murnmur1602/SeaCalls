'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-6 flex md:grid md:grid-cols-3 items-center justify-between">
        {/* Logo */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="md:pl-16 font-cormorant text-[clamp(22px,4vw,26px)] font-normal tracking-tight hover:opacity-70 transition-opacity"
          >
            МОРЕ ЗОВЁТ
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-10">
          <a
            href="#about"
            className="font-dmSans text-base font-normal whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            О проекте
          </a>
          <a
            href="#trips"
            className="font-dmSans text-base font-normal hover:opacity-70 transition-opacity"
          >
            Расписание
          </a>
          <a
            href="#captain"
            className="font-dmSans text-base font-normal hover:opacity-70 transition-opacity"
          >
            Капитан
          </a>
          <a
            href="#faq"
            className="font-dmSans text-base font-normal hover:opacity-70 transition-opacity"
          >
            FAQ
          </a>
          <a
            href="#contacts"
            className="font-dmSans text-base font-normal hover:opacity-70 transition-opacity"
          >
            Контакты
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex justify-end">
          <a
            href="#contacts"
            className="border border-white/30 hover:border-white/50 hover:bg-white/5 px-5 rounded-full transition-all md:mr-16 font-dmSans text-base font-normal h-[34px] leading-[32px] inline-flex items-center"
          >
            Написать капитану
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2B7A8E]/98 backdrop-blur-md py-6 shadow-xl">
          <div className="flex flex-col gap-5 px-6">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#B8D4E8] transition-colors py-1 font-dmSans text-[17px] font-normal"
            >
              О проекте
            </a>
            <a
              href="#trips"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#B8D4E8] transition-colors py-1 font-dmSans text-[17px] font-normal"
            >
              Расписание
            </a>
            <a
              href="#captain"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#B8D4E8] transition-colors py-1 font-dmSans text-[17px] font-normal"
            >
              Капитан
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#B8D4E8] transition-colors py-1 font-dmSans text-[17px] font-normal"
            >
              FAQ
            </a>
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#B8D4E8] transition-colors py-1 font-dmSans text-[17px] font-normal"
            >
              Контакты
            </a>
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3.5 rounded-full transition-all text-center mt-3 font-dmSans text-base font-normal"
            >
              Написать капитану
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
