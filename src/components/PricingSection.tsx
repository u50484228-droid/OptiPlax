import React from 'react';
import { BundleDisplay, SatisfactionBadge, FiveSealsRow } from './OptiPlaxGraphics';
import { PRICING_PACKAGES } from '../data/optiplaxData';
import { Star, ShoppingCart } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage?: (pkgId: string) => void;
}

const PaymentIconsRow: React.FC<{ opacity?: string }> = ({ opacity = 'opacity-90' }) => (
  <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 ${opacity} select-none`}>
    {/* VISA */}
    <span className="text-[10px] font-black italic bg-white text-[#1a1f71] px-2 py-0.5 rounded border border-slate-300 shadow-2xs tracking-tighter">
      VISA
    </span>
    {/* PayPal */}
    <span className="text-[10px] font-bold bg-white text-[#003087] px-2 py-0.5 rounded border border-slate-300 shadow-2xs tracking-tight">
      <span className="font-black text-[#003087]">Pay</span><span className="font-black text-[#0079C1]">Pal</span>
    </span>
    {/* MasterCard */}
    <span className="text-[10px] font-bold bg-white text-slate-800 px-2 py-0.5 rounded border border-slate-300 shadow-2xs flex items-center gap-1">
      <span className="inline-flex -space-x-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] inline-block opacity-90"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] inline-block opacity-90"></span>
      </span>
      <span className="text-[9px] font-extrabold text-slate-700">MasterCard</span>
    </span>
    {/* Discover */}
    <span className="text-[10px] font-extrabold bg-white text-[#f76b1c] px-2 py-0.5 rounded border border-slate-300 shadow-2xs tracking-tight">
      Discover
    </span>
    {/* AMEX */}
    <span className="text-[10px] font-black bg-white text-[#006fcf] px-2 py-0.5 rounded border border-slate-300 shadow-2xs tracking-tight">
      AMEX
    </span>
  </div>
);

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const handleBuyClick = () => {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }
  };

  return (
    <section id="pricing" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Headline - Exact match to user spec */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Claim Your Discounted OptiPlax Below While Stocks Last!
          </h2>
        </div>

        {/* 3 Pricing Cards Grid - Exact match to user Image 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* PACKAGE 1: Basic (2 Bottles) */}
          <div className="rounded-2xl border-2 border-slate-300 bg-white shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
            {/* Top Navy Header */}
            <div className="bg-[#1b3b75] text-white text-center py-2.5 px-4 font-bold text-base tracking-wide rounded-t-[14px]">
              Basic
            </div>

            <div className="p-6 flex-1 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit',sans-serif] tracking-tight">
                2 BOTTLES
              </h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                60 Day Supply
              </p>

              {/* Bottle Graphic */}
              <div className="my-2 w-full">
                <BundleDisplay type="2btl" />
              </div>

              {/* Price per bottle */}
              <div className="my-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  $79
                </span>
                <span className="text-sm font-bold text-slate-600 ml-1">
                  / Bottle
                </span>
              </div>

              {/* Savings & Guarantee Badges */}
              <div className="space-y-1.5 w-full max-w-[220px] my-3">
                <div className="bg-[#f59e0b] text-slate-950 text-xs font-black py-1.5 px-3 rounded uppercase tracking-wide shadow-2xs">
                  YOU SAVE $200!
                </div>
                <div className="bg-[#1b3b75] text-white text-xs font-bold py-1.5 px-3 rounded uppercase tracking-wide">
                  60 DAYS GUARANTEE
                </div>
              </div>

              {/* BUY NOW Button */}
              <a
                href={PRICING_PACKAGES[0].checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-comprar-2btl"
                data-aff-track="true"
                data-button-name="OptiPlax 2 Bottles Buy Now"
                onClick={handleBuyClick}
                className="w-full mt-4 bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] hover:from-[#fde047] hover:to-[#b45309] text-slate-950 font-black text-lg py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border border-amber-500/80 cursor-pointer select-none text-center"
              >
                <ShoppingCart className="w-5 h-5 text-slate-900" />
                <span>BUY NOW</span>
              </a>

              {/* Total Price & Shipping */}
              <div className="mt-4 text-center">
                <p className="text-sm font-black text-slate-900">
                  TOTAL: <span className="relative inline-block font-extrabold text-red-600 mx-1">$358<span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span></span> $158
                </p>
                <p className="text-xs font-bold text-slate-600 mt-1 uppercase">
                  + 9.99 SHIPPING
                </p>
              </div>

              {/* 5 Payment Icons */}
              <PaymentIconsRow opacity="opacity-85" />
            </div>
          </div>

          {/* PACKAGE 2: BEST VALUE! (3 + 3 Bottles) - Featured Center Card matching user Image 4 */}
          <div className="rounded-2xl border-[3.5px] border-[#1b3b75] bg-white shadow-2xl overflow-hidden flex flex-col justify-between relative transform lg:-translate-y-3 z-10">
            {/* Top Featured Header */}
            <div className="bg-[#1b3b75] text-white text-center py-3 px-4 font-black text-lg tracking-wider uppercase rounded-t-[12px] flex items-center justify-center gap-1">
              <span>BEST VALUE!</span>
            </div>

            <div className="p-6 flex-1 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit',sans-serif] tracking-tight">
                3 + 3 BOTTLES
              </h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                180 Day Supply
              </p>

              {/* Bottle Graphic with 6 bottles & Ebooks */}
              <div className="my-2 w-full">
                <BundleDisplay type="6btl" />
              </div>

              {/* Price per bottle */}
              <div className="my-2">
                <span className="text-5xl sm:text-6xl font-black text-slate-900">
                  $49
                </span>
                <span className="text-sm font-bold text-slate-600 ml-1">
                  / Bottle
                </span>
              </div>

              {/* Badges Stack */}
              <div className="space-y-1.5 w-full max-w-[240px] my-3">
                <div className="bg-[#f59e0b] text-slate-950 text-xs font-black py-1.5 px-3 rounded uppercase tracking-wide shadow-xs">
                  YOU SAVE $780!
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-[#1b3b75] text-white text-[11px] font-bold py-1.5 px-2 rounded uppercase tracking-tight text-center">
                    BIGGEST DISCOUNT
                  </div>
                  <div className="bg-[#1b3b75] text-white text-[11px] font-bold py-1.5 px-2 rounded uppercase tracking-tight text-center">
                    60 DAYS GUARANTEE
                  </div>
                </div>
                <div className="bg-[#1b3b75] text-white text-xs font-black py-1.5 px-3 rounded uppercase tracking-wide text-center">
                  3 FREE EBOOKS!
                </div>
              </div>

              {/* BUY NOW Button */}
              <a
                href={PRICING_PACKAGES[1].checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-comprar-6btl"
                data-aff-track="true"
                data-button-name="OptiPlax 6 Bottles Best Value Buy Now"
                onClick={handleBuyClick}
                className="w-full mt-3 bg-gradient-to-b from-[#fcd34d] via-[#fbbf24] to-[#f59e0b] hover:from-[#fde047] hover:to-[#d97706] text-slate-950 font-black text-xl py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 border-2 border-amber-500 cursor-pointer select-none text-center"
              >
                <ShoppingCart className="w-6 h-6 text-slate-900" />
                <span>BUY NOW</span>
              </a>

              {/* Total Price & FREE SHIPPING */}
              <div className="mt-4 text-center">
                <p className="text-base font-black text-slate-900">
                  TOTAL: <span className="relative inline-block font-extrabold text-red-600 mx-1">$1074<span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span></span> $294
                </p>
                <p className="text-sm font-black text-emerald-600 mt-1 uppercase tracking-wide">
                  FREE SHIPPING!
                </p>
              </div>

              {/* 5 Payment Icons */}
              <PaymentIconsRow opacity="opacity-95" />
            </div>
          </div>

          {/* PACKAGE 3: Most Popular (2 + 1 Bottles) */}
          <div className="rounded-2xl border-2 border-slate-300 bg-white shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
            {/* Top Navy Header */}
            <div className="bg-[#1b3b75] text-white text-center py-2.5 px-4 font-bold text-base tracking-wide rounded-t-[14px]">
              Most Popular
            </div>

            <div className="p-6 flex-1 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit',sans-serif] tracking-tight">
                2 + 1 BOTTLES
              </h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                90 Day Supply
              </p>

              {/* Bottle Graphic */}
              <div className="my-2 w-full">
                <BundleDisplay type="3btl" />
              </div>

              {/* Price per bottle */}
              <div className="my-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  $69
                </span>
                <span className="text-sm font-bold text-slate-600 ml-1">
                  / Bottle
                </span>
              </div>

              {/* Badges Stack */}
              <div className="space-y-1.5 w-full max-w-[220px] my-3">
                <div className="bg-[#f59e0b] text-slate-950 text-xs font-black py-1.5 px-3 rounded uppercase tracking-wide shadow-2xs">
                  YOU SAVE $330!
                </div>
                <div className="bg-[#1b3b75] text-white text-xs font-bold py-1.5 px-3 rounded uppercase tracking-wide">
                  60 DAYS GUARANTEE
                </div>
              </div>

              {/* BUY NOW Button */}
              <a
                href={PRICING_PACKAGES[2].checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-comprar-3btl"
                data-aff-track="true"
                data-button-name="OptiPlax 3 Bottles Most Popular Buy Now"
                onClick={handleBuyClick}
                className="w-full mt-4 bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] hover:from-[#fde047] hover:to-[#b45309] text-slate-950 font-black text-lg py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border border-amber-500/80 cursor-pointer select-none text-center"
              >
                <ShoppingCart className="w-5 h-5 text-slate-900" />
                <span>BUY NOW</span>
              </a>

              {/* Total Price & FREE SHIPPING */}
              <div className="mt-4 text-center">
                <p className="text-sm font-black text-slate-900">
                  TOTAL: <span className="relative inline-block font-extrabold text-red-600 mx-1">$537<span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span></span> $207
                </p>
                <p className="text-xs sm:text-sm font-black text-emerald-600 mt-1 uppercase tracking-wide">
                  FREE SHIPPING!
                </p>
              </div>

              {/* 5 Payment Icons */}
              <PaymentIconsRow opacity="opacity-85" />
            </div>
          </div>

        </div>

        {/* Customer Reviews Bar - Exact match to user spec */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-800">
          <span className="text-sm sm:text-base font-bold">Our Customers say</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-[#1b3b75] rounded-xs flex items-center justify-center text-white">
                <Star className="w-3.5 h-3.5 fill-white" />
              </div>
            ))}
          </div>
          <span className="text-sm sm:text-base font-extrabold text-slate-900">
            based on 11,369 reviews!
          </span>
        </div>

        {/* 100% Satisfaction 60-Day Money Back Guarantee Box - Exact match to user spec */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Guarantee Circular Stamp */}
            <div className="flex-shrink-0">
              <SatisfactionBadge />
            </div>

            {/* Guarantee Copy */}
            <div className="text-center sm:text-left flex-1">
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit',sans-serif]">
                100% Satisfaction 60-Day Money Back Guarantee
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                OptiPlax comes with a 100% money back guarantee for a full 60 days! That means if you don&rsquo;t get the results we promise or you change your mind for any reason at all, just call or email our support team within the next 2 months and quickly get every penny back. What do you have to lose?
              </p>
            </div>
          </div>
        </div>

        {/* Navy Trust Badges Bar */}
        <div className="mt-8 bg-[#1b3b75] rounded-xl py-6 px-4 shadow-md">
          <FiveSealsRow inverted={true} />
        </div>

      </div>
    </section>
  );
};

