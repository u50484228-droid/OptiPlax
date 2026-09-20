import React from 'react';
import { EBOOKS_BONUSES } from '../data/optiplaxData';
import bonus1Img from '../assets/images/bonus_bright_eyes_1789905605625.jpg';
import bonus2Img from '../assets/images/bonus_mind_focus_1789905624511.jpg';
import bonus3Img from '../assets/images/bonus_eye_relief_1789905638358.jpg';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses" className="relative">
      {/* Top Free Shipping Banner - Exact match to user spec */}
      <div className="bg-[#152e59] text-white py-4 px-4 border-b border-blue-900/60 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 text-center">
          {/* Circular Truck Badge */}
          <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex-shrink-0 flex flex-col items-center justify-center p-1 border-2 border-slate-300 shadow">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-slate-900" fill="none" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span className="text-[6px] font-black uppercase tracking-tighter leading-none mt-0.5">FREE &amp; FAST</span>
          </div>

          <div className="text-left">
            <p className="text-sm sm:text-base md:text-lg font-bold">
              Every 6 Bottles Order Gets <span className="underline decoration-2 font-black">FREE Shipping</span> Too!
            </p>
            <p className="text-xs sm:text-sm text-blue-200 font-medium">
              *96% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>
      </div>

      {/* Main Royal Blue Bonuses Section - Exact match to user images */}
      <div className="bg-[#1b4cb3] py-14 sm:py-20 px-4 sm:px-6 text-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-['Outfit',sans-serif]">
              Order 6 Bottles and <span className="underline decoration-3 decoration-white">Get 3 FREE Bonuses!</span>
            </h2>
          </div>

          {/* 3 Bonus White Cards - Exact match to user images 1, 2, 3 */}
          <div className="space-y-8 sm:space-y-10">
            {/* BONUS #1 */}
            <div className="bg-white text-slate-900 shadow-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                
                {/* Left Info Column */}
                <div className="md:col-span-7 flex flex-col items-start">
                  <span className="inline-block bg-[#1b3b75] text-white text-sm sm:text-base font-extrabold uppercase px-6 py-2 tracking-wider mb-4">
                    BONUS #1
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-slate-900 leading-tight font-['Outfit',sans-serif]">
                    {EBOOKS_BONUSES[0].title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {EBOOKS_BONUSES[0].description}
                  </p>

                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <span className="text-lg sm:text-xl font-bold text-slate-900">
                      Retail Price – <span className="relative inline-block font-extrabold text-slate-900">
                        ${EBOOKS_BONUSES[0].retailPrice}
                        <span className="absolute left-0 top-1/2 w-full h-[2.5px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span>
                      </span>
                    </span>
                    <span className="bg-[#e9ecef] text-slate-900 text-base sm:text-lg px-4 py-1.5 font-normal">
                      Today: <span className="font-extrabold text-slate-950">FREE</span>
                    </span>
                  </div>
                </div>

                {/* Right Book Photo Mockup Column - Matching user image 1 */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] aspect-[4/3] overflow-hidden rounded shadow-lg border border-slate-200 bg-slate-100 group">
                    <img
                      src={bonus1Img}
                      alt="Bright Eyes Blueprint Book"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* BONUS #2 (Reversed layout matching user image 2) */}
            <div className="bg-white text-slate-900 shadow-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                
                {/* Left Book Photo Mockup Column - Matching user image 2 */}
                <div className="order-2 md:order-1 md:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] aspect-[4/3] overflow-hidden rounded shadow-lg border border-slate-200 bg-slate-100 group">
                    <img
                      src={bonus2Img}
                      alt="10 Science-Backed Hacks Book"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Right Info Column */}
                <div className="order-1 md:order-2 md:col-span-7 flex flex-col items-start">
                  <span className="inline-block bg-[#1b3b75] text-white text-sm sm:text-base font-extrabold uppercase px-6 py-2 tracking-wider mb-4">
                    BONUS #2
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-slate-900 leading-tight font-['Outfit',sans-serif]">
                    {EBOOKS_BONUSES[1].title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {EBOOKS_BONUSES[1].description}
                  </p>

                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <span className="text-lg sm:text-xl font-bold text-slate-900">
                      Retail Price – <span className="relative inline-block font-extrabold text-slate-900">
                        ${EBOOKS_BONUSES[1].retailPrice}
                        <span className="absolute left-0 top-1/2 w-full h-[2.5px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span>
                      </span>
                    </span>
                    <span className="bg-[#e9ecef] text-slate-900 text-base sm:text-lg px-4 py-1.5 font-normal">
                      Today: <span className="font-extrabold text-slate-950">FREE</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* BONUS #3 (Matching user image 3) */}
            <div className="bg-white text-slate-900 shadow-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                
                {/* Left Info Column */}
                <div className="md:col-span-7 flex flex-col items-start">
                  <span className="inline-block bg-[#1b3b75] text-white text-sm sm:text-base font-extrabold uppercase px-6 py-2 tracking-wider mb-4">
                    BONUS #3
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-slate-900 leading-tight font-['Outfit',sans-serif]">
                    {EBOOKS_BONUSES[2].title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {EBOOKS_BONUSES[2].description}
                  </p>

                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <span className="text-lg sm:text-xl font-bold text-slate-900">
                      Retail Price – <span className="relative inline-block font-extrabold text-slate-900">
                        ${EBOOKS_BONUSES[2].retailPrice}
                        <span className="absolute left-0 top-1/2 w-full h-[2.5px] bg-red-600 -rotate-12 transform -translate-y-1/2 pointer-events-none"></span>
                      </span>
                    </span>
                    <span className="bg-[#e9ecef] text-slate-900 text-base sm:text-lg px-4 py-1.5 font-normal">
                      Today: <span className="font-extrabold text-slate-950">FREE</span>
                    </span>
                  </div>
                </div>

                {/* Right Book Photo Mockup Column - Matching user image 3 */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[360px] aspect-[4/3] overflow-hidden rounded shadow-lg border border-slate-200 bg-slate-100 group">
                    <img
                      src={bonus3Img}
                      alt="Fast Eye Relief Book"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Quick anchor scroll button to order */}
          <div className="mt-12 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-white text-[#1b3b75] hover:bg-slate-100 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95"
            >
              Claim All 3 Free Bonuses With 6 Bottles
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
