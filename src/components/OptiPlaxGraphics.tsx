import React from 'react';
import optiplaxFrontImg from '../assets/images/optiplax_front_1789903996646.jpg';
import optiplaxBottleImg from '../assets/images/optiplax_bottle_1789903985394.jpg';
import bonus1Img from '../assets/images/bonus_bright_eyes_1789905605625.jpg';
import bonus2Img from '../assets/images/bonus_mind_focus_1789905624511.jpg';
import bonus3Img from '../assets/images/bonus_eye_relief_1789905638358.jpg';
import optiplaxTwoPackImg from '../assets/images/optiplax_two_pack_real_1789906113294.jpg';
import optiplaxSixPackImg from '../assets/images/optiplax_six_pack_real_1789906129183.jpg';
import optiplaxThreePackImg from '../assets/images/optiplax_three_pack_real_1789906147545.jpg';

interface BottleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  badge?: string;
  tilted?: boolean;
}

export const OptiPlaxBottle: React.FC<BottleProps> = ({
  className = '',
  size = 'md',
  tilted = false,
}) => {
  const sizeMap = {
    sm: 'w-20 h-28',
    md: 'w-32 h-44',
    lg: 'w-44 h-60',
    hero: 'w-60 sm:w-72 md:w-80 h-84 sm:h-96 md:h-[420px]',
  };

  const imageSrc = tilted ? optiplaxBottleImg : optiplaxFrontImg;

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Soft Ambient Radial Light */}
      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl transform scale-95 pointer-events-none" />

      {/* Real Photorealistic Product Image */}
      <img
        src={imageSrc}
        alt="OptiPlax Supplement Bottle"
        className="w-full h-full object-contain filter drop-shadow-xl mix-blend-multiply transform transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Main Stem 1 */}
    <path
      d="M180 340 C160 260 140 180 120 40"
      stroke="#CBD5E1"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Leaves Stem 1 */}
    <path d="M120 40 C110 30 95 35 98 50 C101 65 118 50 120 40 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M122 75 C100 65 85 75 92 90 C100 102 118 85 122 75 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M128 110 C150 100 165 110 158 125 C150 138 132 120 128 110 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M133 150 C110 140 95 152 104 168 C112 180 130 160 133 150 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M141 190 C165 180 180 192 172 208 C164 220 145 200 141 190 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M150 230 C125 220 110 235 120 250 C130 262 146 242 150 230 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />
    <path d="M160 270 C185 260 200 275 190 290 C180 302 165 282 160 270 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.8" />

    {/* Secondary Branch */}
    <path
      d="M100 350 C90 280 80 200 60 120"
      stroke="#CBD5E1"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path d="M60 120 C50 112 38 118 42 130 C46 142 58 130 60 120 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.7" />
    <path d="M66 160 C85 150 98 160 92 172 C85 182 72 170 66 160 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.7" />
    <path d="M73 200 C52 190 40 202 48 214 C56 224 70 210 73 200 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.7" />
    <path d="M80 240 C100 230 112 242 105 255 C98 265 85 250 80 240 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" opacity="0.7" />
  </svg>
);

export const FiveSealsRow: React.FC<{ inverted?: boolean; className?: string }> = ({
  inverted = false,
  className = '',
}) => {
  const strokeColor = inverted ? '#FFFFFF' : '#1E3A8A';
  const textColor = inverted ? '#FFFFFF' : '#1E3A8A';
  const subTextColor = inverted ? '#BFDBFE' : '#475569';

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 ${className}`}>
      {/* 1. GMP CERTIFIED */}
      <div className="flex flex-col items-center text-center">
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16">
          <circle cx="40" cy="40" r="36" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="40" cy="40" r="31" fill="none" stroke={strokeColor} strokeWidth="1.2" />
          <text x="40" y="24" textAnchor="middle" fill={subTextColor} fontSize="6" fontWeight="bold" letterSpacing="0.4">GOOD MANUFACTURING</text>
          <text x="40" y="42" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="900" letterSpacing="0.8">GMP</text>
          <text x="40" y="52" textAnchor="middle" fill={textColor} fontSize="6.5" fontWeight="bold">CERTIFIED</text>
          <text x="40" y="62" textAnchor="middle" fill={subTextColor} fontSize="5" fontWeight="bold" letterSpacing="0.4">PRACTICE</text>
        </svg>
      </div>

      {/* 2. 100% NATURAL */}
      <div className="flex flex-col items-center text-center">
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16">
          <circle cx="40" cy="40" r="36" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="40" cy="40" r="31" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
          {/* Hands holding leaves icon */}
          <path d="M40 38 C35 30 28 32 30 40 C32 46 40 48 40 48 C40 48 48 46 50 40 C52 32 45 30 40 38 Z" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M30 46 C25 48 24 54 30 56 C36 57 40 54 40 54" stroke={strokeColor} strokeWidth="1.2" fill="none" />
          <path d="M50 46 C55 48 56 54 50 56 C44 57 40 54 40 54" stroke={strokeColor} strokeWidth="1.2" fill="none" />
          <text x="40" y="22" textAnchor="middle" fill={textColor} fontSize="6.5" fontWeight="bold">100% NATURAL</text>
          <text x="40" y="66" textAnchor="middle" fill={subTextColor} fontSize="6" fontWeight="bold">INGREDIENTS</text>
        </svg>
      </div>

      {/* 3. FDA-REGISTERED FACILITY */}
      <div className="flex flex-col items-center text-center">
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16">
          <circle cx="40" cy="40" r="36" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="40" cy="40" r="31" fill="none" stroke={strokeColor} strokeWidth="1.2" />
          <text x="40" y="26" textAnchor="middle" fill={subTextColor} fontSize="4.5" fontWeight="bold">MANUFACTURED IN AN</text>
          <text x="40" y="42" textAnchor="middle" fill={textColor} fontSize="7.8" fontWeight="900" letterSpacing="0.2">FDA-REGISTERED</text>
          <text x="40" y="56" textAnchor="middle" fill={textColor} fontSize="7.5" fontWeight="900" letterSpacing="0.5">FACILITY</text>
        </svg>
      </div>

      {/* 4. MANUFACTURED IN USA */}
      <div className="flex flex-col items-center text-center">
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16">
          <circle cx="40" cy="40" r="36" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="40" cy="40" r="31" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
          <text x="40" y="23" textAnchor="middle" fill={subTextColor} fontSize="5.5" fontWeight="bold">MANUFACTURED</text>
          <text x="40" y="31" textAnchor="middle" fill={subTextColor} fontSize="5" fontWeight="bold">IN</text>
          <text x="40" y="46" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="900">USA</text>
          <text x="40" y="60" textAnchor="middle" fill={subTextColor} fontSize="5" fontWeight="bold">IMPORTED INGREDIENTS</text>
        </svg>
      </div>

      {/* 5. NON GMO */}
      <div className="flex flex-col items-center text-center">
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16">
          <circle cx="40" cy="40" r="36" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="40" cy="40" r="31" fill="none" stroke={strokeColor} strokeWidth="1.2" />
          <text x="40" y="26" textAnchor="middle" fill={subTextColor} fontSize="6" fontWeight="bold">NON</text>
          {/* DNA Helix simple line */}
          <path d="M30 40 Q35 34 40 40 T50 40" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <path d="M30 40 Q35 46 40 40 T50 40" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <line x1="33" y1="37" x2="33" y2="43" stroke={strokeColor} strokeWidth="1" />
          <line x1="40" y1="36" x2="40" y2="44" stroke={strokeColor} strokeWidth="1" />
          <line x1="47" y1="37" x2="47" y2="43" stroke={strokeColor} strokeWidth="1" />
          <text x="40" y="62" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="900">GMO</text>
        </svg>
      </div>
    </div>
  );
};

export const SubHeroFeaturesStrip: React.FC = () => (
  <div className="bg-[#1b3b75] text-white py-4 sm:py-5 border-y border-blue-900 shadow-md">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
      {/* 1. Vision Support */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="M18 17V9" />
            <path d="M13 17V5" />
            <path d="M8 17v-3" />
            <circle cx="12" cy="11" r="2" fill="white" />
          </svg>
        </div>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-extrabold tracking-wide uppercase">VISION SUPPORT</span>
        </div>
      </div>

      {/* 2. Eye Health Aid */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9v1" strokeWidth="1.5" />
            <path d="M12 2v2" strokeWidth="1.5" />
            <path d="M5 5l1.5 1.5" strokeWidth="1.5" />
            <path d="M19 5l-1.5 1.5" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-extrabold tracking-wide uppercase">EYE HEALTH AID</span>
        </div>
      </div>

      {/* 3. Clarity & Focus */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2" fill="white" />
            <path d="M9 20l3-6 3 6" />
            <path d="M6 12l6-4 6 4" />
            <path d="M12 8v6" />
            <path d="M18 6l2-2" />
            <path d="M19 8h2" />
          </svg>
        </div>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-extrabold tracking-wide uppercase">CLARITY & FOCUS</span>
        </div>
      </div>
    </div>
  </div>
);

export const FloatingSpheres: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Sphere 1 */}
    <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-900 shadow-xl opacity-90 blur-[0.5px]" />
    {/* Sphere 2 */}
    <div className="absolute top-1/2 left-20 w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-800 shadow-lg opacity-80" />
    {/* Sphere 3 */}
    <div className="absolute bottom-1/4 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 via-blue-600 to-navy-950 shadow-2xl opacity-95" />
    {/* Sphere 4 */}
    <div className="absolute top-1/3 right-12 w-9 h-9 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-900 shadow-md opacity-75" />
    {/* Sphere 5 */}
    <div className="absolute bottom-1/3 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 via-blue-500 to-indigo-900 shadow-xl opacity-85" />
  </div>
);

export const MidBannerSeals: React.FC = () => (
  <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-sm">
    {/* Natural Formula */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white/80">
        <svg viewBox="0 0 40 40" className="w-9 h-9 stroke-[#1E3A8A]" fill="none" strokeWidth="2">
          <path d="M20 18 C16 12 10 14 12 20 C14 24 20 26 20 26 C20 26 26 24 28 20 C30 14 24 12 20 18 Z" fill="#93C5FD" stroke="#1E3A8A" />
          <path d="M12 26 C8 28 8 32 14 34 C20 35 24 32 24 32" strokeWidth="1.8" />
          <path d="M28 26 C32 28 32 32 26 34 C20 35 16 32 16 32" strokeWidth="1.8" />
        </svg>
      </div>
      <span className="mt-2 text-white font-bold text-xs sm:text-sm">Natural Formula</span>
    </div>

    {/* No Stimulants */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white/80">
        <svg viewBox="0 0 40 40" className="w-9 h-9 stroke-[#1E3A8A]" fill="none" strokeWidth="2">
          <path d="M17 8 L23 8 M20 8 L20 15 L28 29 C29 31 27.5 33 25 33 L15 33 C12.5 33 11 31 12 29 L20 15" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="10" y1="30" x2="30" y2="10" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="mt-2 text-white font-bold text-xs sm:text-sm">No Stimulants</span>
    </div>

    {/* Easy To Use */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white/80">
        <svg viewBox="0 0 40 40" className="w-9 h-9 stroke-[#1E3A8A]" fill="none" strokeWidth="2">
          {/* Hand pinch/ok gesture */}
          <circle cx="16" cy="18" r="4" strokeWidth="1.8" />
          <path d="M20 18 L28 18 C30 18 31 19 31 21 L31 23 C31 25 29 26 27 26 L23 26" strokeWidth="1.8" />
          <path d="M14 22 L14 30 C14 32 16 34 18 34 L26 34 C28 34 30 32 30 30 L30 26" strokeWidth="1.8" />
          <line x1="16" y1="12" x2="16" y2="8" strokeWidth="1.8" />
        </svg>
      </div>
      <span className="mt-2 text-white font-bold text-xs sm:text-sm">Easy To Use</span>
    </div>

    {/* Non Gmo */}
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-white/80">
        <svg viewBox="0 0 40 40" className="w-9 h-9 stroke-[#1E3A8A]" fill="none" strokeWidth="2">
          <circle cx="20" cy="20" r="14" strokeWidth="1.8" />
          <line x1="10" y1="10" x2="30" y2="30" stroke="#EF4444" strokeWidth="2.5" />
          <text x="20" y="24" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontWeight="900" fontFamily="sans-serif">GMO</text>
        </svg>
      </div>
      <span className="mt-2 text-white font-bold text-xs sm:text-sm">Non Gmo</span>
    </div>
  </div>
);

export const EbookMockup: React.FC<{
  bonusNumber: string;
  title: string;
  subtitle: string;
  illustrationType: 'target' | 'brain' | 'binoculars';
}> = ({ bonusNumber: _bonusNumber, title, subtitle, illustrationType }) => {
  return (
    <div className="relative w-48 sm:w-56 h-64 sm:h-72 mx-auto select-none">
      {/* Hands holding the book realistic representation */}
      <div className="absolute inset-0 bg-slate-200/50 rounded-2xl -z-10 flex items-center justify-center">
        {/* Soft background hands mockup shadow */}
        <div className="w-full h-full rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 shadow-inner" />
      </div>

      {/* Book Cover */}
      <div className="relative w-40 sm:w-48 h-56 sm:h-64 mx-auto my-4 bg-white rounded-lg shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between">
        {/* Digital Download Ribbon */}
        <div className="absolute top-2 right-[-24px] bg-[#1d4ed8] text-white text-[8px] font-extrabold uppercase px-6 py-0.5 transform rotate-45 shadow">
          DIGITAL<br />DOWNLOAD
        </div>

        {/* Top Header on Cover */}
        <div className="pt-5 px-3 text-center bg-gradient-to-b from-blue-50 to-white">
          <h5 className="font-black text-[12px] sm:text-[13px] leading-tight text-slate-900 tracking-tight">
            {title}
          </h5>
          <p className="text-[7.5px] sm:text-[8px] font-bold text-blue-700 tracking-wider uppercase mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Center Graphic */}
        <div className="flex-1 flex items-center justify-center p-3">
          {illustrationType === 'target' && (
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="32" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
                {/* Arrow loop */}
                <path d="M25 50 A 25 25 0 0 1 75 50" fill="none" stroke="#2563EB" strokeWidth="3" markerEnd="url(#arrow)" />
                <circle cx="50" cy="50" r="16" fill="#1E3A8A" />
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">20/20</text>
              </svg>
            </div>
          )}

          {illustrationType === 'brain' && (
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M35 75 L35 60 C35 48 42 42 42 35 C42 22 58 22 58 35 C58 42 65 48 65 60 L65 75 Z" fill="#93C5FD" opacity="0.4" />
                {/* Head profile */}
                <path d="M40 80 L40 65 C38 65 30 60 30 52 C30 46 34 42 38 42 C36 30 48 20 60 25 C70 30 72 44 68 50 C72 54 70 62 65 65 L65 80" stroke="#1E3A8A" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Gear inside head */}
                <circle cx="52" cy="42" r="10" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
                <circle cx="52" cy="42" r="4" fill="white" />
              </svg>
            </div>
          )}

          {illustrationType === 'binoculars' && (
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Person holding binoculars */}
                <path d="M25 80 C25 65 35 60 50 60 C65 60 75 65 75 80" fill="#3B82F6" opacity="0.8" />
                <circle cx="50" cy="46" r="14" fill="#FDE68A" />
                {/* Binoculars */}
                <rect x="36" y="38" width="12" height="14" rx="3" fill="#1E3A8A" />
                <rect x="52" y="38" width="12" height="14" rx="3" fill="#1E3A8A" />
                <rect x="46" y="42" width="8" height="4" fill="#64748B" />
                <circle cx="42" cy="45" r="4" fill="#93C5FD" />
                <circle cx="58" cy="45" r="4" fill="#93C5FD" />
              </svg>
            </div>
          )}
        </div>

        {/* Bottom Banner on Cover */}
        <div className="py-1 px-2 bg-slate-100 border-t border-slate-200 text-center">
          <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">
            OPTIPLAX WELLNESS SERIES
          </span>
        </div>
      </div>
    </div>
  );
};

export const SatisfactionBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28">
      {/* Outer serrated or dashed circle */}
      <circle cx="60" cy="60" r="54" fill="none" stroke="#0F172A" strokeWidth="3" strokeDasharray="4 3" />
      <circle cx="60" cy="60" r="48" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      <path
        id="curveTop"
        d="M 26 60 A 34 34 0 0 1 94 60"
        fill="none"
      />
      <text fill="#0F172A" fontSize="7.5" fontWeight="900" letterSpacing="0.8">
        <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
          MONEY BACK
        </textPath>
      </text>

      {/* Center 60 DAYS */}
      <text x="60" y="58" textAnchor="middle" fill="#0F172A" fontSize="22" fontWeight="900" fontFamily="sans-serif">
        60
      </text>
      <text x="60" y="69" textAnchor="middle" fill="#0F172A" fontSize="9" fontWeight="bold">
        DAYS
      </text>

      <path
        id="curveBottom"
        d="M 94 60 A 34 34 0 0 1 26 60"
        fill="none"
      />
      <text fill="#0F172A" fontSize="7.5" fontWeight="900" letterSpacing="0.8">
        <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
          GUARANTEE
        </textPath>
      </text>
    </svg>
  </div>
);

export const BundleDisplay: React.FC<{ type: '2btl' | '6btl' | '3btl' }> = ({ type }) => {
  if (type === '2btl') {
    return (
      <div className="relative flex items-center justify-center py-2 h-44 sm:h-48 w-full select-none">
        <img
          src={optiplaxTwoPackImg}
          alt="2 Bottles OptiPlax Package"
          className="max-h-full max-w-[240px] object-contain drop-shadow-md rounded-md transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (type === '3btl') {
    return (
      <div className="relative flex items-center justify-center py-2 h-44 sm:h-48 w-full select-none">
        <img
          src={optiplaxThreePackImg}
          alt="3 Bottles OptiPlax Package"
          className="max-h-full max-w-[260px] object-contain drop-shadow-md rounded-md transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // 6 Bottles (3 + 3) + Ebooks + Circular Best Value Seal
  return (
    <div className="relative flex items-center justify-center py-2 h-48 sm:h-52 w-full select-none">
      <img
        src={optiplaxSixPackImg}
        alt="6 Bottles OptiPlax Best Value Package with 3 Free Bonuses"
        className="max-h-full max-w-[280px] object-contain drop-shadow-lg rounded-md transition-transform duration-300 hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
