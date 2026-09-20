import React from 'react';
import { OptiPlaxBottle, FloatingSpheres, MidBannerSeals } from './OptiPlaxGraphics';

export const OptiPlaxMidBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#5a86ce] via-[#527ec6] to-[#4875bd] py-16 sm:py-20 overflow-hidden text-white border-y border-blue-400/30">
      {/* Floating 3D Glossy Spheres - Exact match to Image 4 */}
      <FloatingSpheres className="opacity-90" />

      {/* Center Layout Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left: OptiPlax Bottle with surrounding floating bubbles */}
          <div className="md:col-span-6 flex justify-center items-center relative">
            <div className="relative">
              {/* Soft Radial Backlight */}
              <div className="absolute inset-0 bg-white/25 rounded-full blur-2xl transform scale-110 pointer-events-none" />
              
              <OptiPlaxBottle size="hero" tilted={true} />
            </div>
          </div>

          {/* Right: OptiPlax Title & 4 Circular Feature Badges */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif] mb-8 sm:mb-10">
              OptiPlax
            </h3>

            {/* 4 Circular Seals (2x2 Grid) */}
            <div className="w-full flex justify-center md:justify-start">
              <MidBannerSeals />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
