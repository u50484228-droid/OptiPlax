/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IngredientsSection } from './components/IngredientsSection';
import { OptiPlaxMidBanner } from './components/OptiPlaxMidBanner';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ScientificReferencesSection } from './components/ScientificReferencesSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { IngredientsPage } from './components/IngredientsPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'ingredients'>('home');

  // Sync with window location if user arrives with #ingredients-page or similar
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#ingredients-page' || window.location.hash === '#scientific-references-label') {
        setCurrentView('ingredients');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenIngredientsPage = () => {
    setCurrentView('ingredients');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'ingredients') {
    return (
      <IngredientsPage onBack={handleBackToHome} />
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header - Exact match to Image 1 */}
      <Navbar />

      {/* Main Presell Sales Stream matching the real reference photos */}
      <main className="flex-1">
        {/* Photo 1: Hero Section with headline, 5 seals, botanical leaves, bottle & sub-hero strip */}
        <Hero />

        {/* Photos 2, 3, 4: Ingredients with 5 alternating photo cards & modal */}
        <IngredientsSection onOpenAllIngredients={handleOpenIngredientsPage} />

        {/* Photo 4 Bottom: Mid-Page Periwinkle Showcase with floating spheres & 4 seals */}
        <OptiPlaxMidBanner />

        {/* Photos 5, 6: Bonuses Section with Free Shipping top bar & 3 eBook mockup cards */}
        <BonusesSection />

        {/* Photos 7, 8, 10: Pricing Table (2 btls, 6 btls Best Value, 3 btls Most Popular) + Guarantee & Reviews */}
        <PricingSection />

        {/* Photos 8 bottom, 9: Frequently Asked Questions accordion */}
        <FaqSection />

        {/* Photo 11 top: Scientific References with media logos & 17 peer-reviewed citations */}
        <ScientificReferencesSection />
      </main>

      {/* Photo 11 bottom: Legal Footer with Contact, Terms, Disclaimer, Privacy, Shipping, Refund & FDA Notice */}
      <Footer onOpenReferences={handleOpenIngredientsPage} />

      {/* Sticky Mobile CRO Conversion Bar */}
      <StickyMobileCta />
    </div>
  );
}
