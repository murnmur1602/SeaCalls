"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Footer";
import Navigation from "./Navigation";
import AboutSection from "./sections/AboutSection";
import CaptainSection from "./sections/CaptainSection";
import ContactsSection from "./sections/ContactsSection";
import FAQSection from "./sections/FAQSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import TripsSection from "./sections/TripsSection";

// Dynamic import for TripDetail to optimize bundle
const TripDetail = dynamic(() => import("./TripDetail"), {
  ssr: false,
});

export default function FinalConcept() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);

  // Show trip detail page if a trip is selected
  if (selectedTrip === 1) {
    return <TripDetail onBack={() => setSelectedTrip(null)} />;
  }

  return (
    <ParallaxProvider>
      <div
        className="text-white relative font-manrope"
        style={{
          background:
            "linear-gradient(150deg, #1f4247 0%, #2d5a5f 10%, #4a7c87 20%, #6a8f91 30%, #87a8a4 40%, #9ab8b0 50%, #87a8a4 60%, #6a8f91 70%, #4a7c87 80%, #2d5a5f 90%, #1f4247 100%)",
        }}
      >
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <TripsSection setSelectedTrip={setSelectedTrip} />
        <CaptainSection />
        <FAQSection />
        <ContactsSection />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
