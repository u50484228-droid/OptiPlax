import React from 'react';
import { FiveSealsRow, SubHeroFeaturesStrip } from './OptiPlaxGraphics';
import optiplaxHeroImg from '../assets/images/optiplax_hero_bottle_1789904014759.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-white overflow-hidden border-b border-slate-200">
      {/* Main Split Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          {/* Left Column: Copy & Seals (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            {/* Headline - Exact match to Image 1 */}
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-slate-900 leading-[1.2] tracking-tight font-['Outfit',sans-serif]">
              A Breakthrough Solution That Supports A Sharper &amp; Clearer Vision Well Into Old Age
            </h1>

            {/* Body paragraph - Exact match to Image 1 */}
            <p className="mt-5 sm:mt-6 text-slate-700 text-sm sm:text-base lg:text-[15px] leading-relaxed max-w-xl font-normal">
              OptiPlax contains a carefully crafted blend of nutrients that supports the natural cleansing processes of the eye. Over time, &ldquo;plaque&rdquo; can accumulate in the delicate tissues responsible for clear vision, leading to blurriness, straining, and visual decline. Our formula is designed to help nourish and protect these areas to support sharper and clearer eyesight at any age.
            </p>

            {/* Five Seals Row - Exact match to Image 1 */}
            <div className="mt-8 pt-4 border-t border-slate-100">
              <FiveSealsRow />
            </div>

            {/* Mobile quick CTA trigger */}
            <div className="mt-6 lg:hidden">
              <a
                href="#pricing"
                id="cta-comprar-hero"
                className="w-full inline-flex items-center justify-center bg-[#1b3b75] hover:bg-[#142c5a] text-white font-bold py-3.5 px-6 rounded-full shadow-md text-base"
              >
                Claim Your Supply Now
              </a>
            </div>
          </div>

          {/* Right Column: Exact Match to User Photo (Two-tone Split Canvas with Botanical Branches & Tilted OptiPlax Bottle) */}
          <div className="lg:col-span-5 relative bg-[#eef4fd] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-blue-100/80 group bg-white">
              <img
                src={optiplaxHeroImg}
                alt="OptiPlax Dietary Supplement - Vision Support and Eye Health Aid"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Hero Features Navy Strip - Exact match to Image 1 bottom */}
      <SubHeroFeaturesStrip />
    </section>
  );
};
