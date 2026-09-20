import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenCompliance: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCompliance }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - EXACT match to Image 1: "OptiPlax" in bold navy font */}
        <a href="#hero" className="flex items-center gap-1.5 focus:outline-none">
          <span className="font-extrabold text-2xl sm:text-3xl text-[#142850] tracking-tight font-['Outfit',sans-serif]">
            OptiPlax
          </span>
        </a>

        {/* Navigation items - EXACT match to Image 1: Ingredients, FREE Bonuses, FAQ, Order Now */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <a
              href="#ingredients"
              className="hover:text-blue-700 transition-colors"
            >
              Ingredients
            </a>
            <a
              href="#bonuses"
              className="hover:text-blue-700 transition-colors font-bold text-blue-900"
            >
              FREE Bonuses
            </a>
            <a
              href="#faq"
              className="hover:text-blue-700 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Compliance Inspector Trigger (Subtle pill for marketer review) */}
          <button
            type="button"
            onClick={onOpenCompliance}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/60 rounded-full px-2.5 py-1 transition-colors"
            title="Review Google Ads Compliance, Tags & Copywriting Dossier"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ads Audit</span>
          </button>

          {/* Primary Action Button - EXACT match to Image 1: Dark Navy Pill "Order Now" */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#1b3b75] hover:bg-[#142c5a] text-white text-sm sm:text-base font-bold px-6 sm:px-7 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
};
