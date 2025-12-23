'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import TripsSection from './sections/TripsSection';
import CaptainSection from './sections/CaptainSection';
import FAQSection from './sections/FAQSection';
import ContactsSection from './sections/ContactsSection';
import Footer from './Footer';

// Dynamic import for TripDetail to optimize bundle
const TripDetail = dynamic(() => import('./TripDetail'), {
  ssr: false,
});

export default function FinalConcept() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show trip detail page if a trip is selected
  if (selectedTrip === 1) {
    return <TripDetail onBack={() => setSelectedTrip(null)} />;
  }

  return (
    <div
      className="text-white relative font-manrope"
      style={{
        background:
          'linear-gradient(150deg, #1f4247 0%, #2d5a5f 10%, #4a7c87 20%, #6a8f91 30%, #87a8a4 40%, #9ab8b0 50%, #87a8a4 60%, #6a8f91 70%, #4a7c87 80%, #2d5a5f 90%, #1f4247 100%)',
      }}
    >
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection scrollY={scrollY} />
      <AboutSection />
      <GallerySection />
      <TripsSection setSelectedTrip={setSelectedTrip} />
      <CaptainSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
