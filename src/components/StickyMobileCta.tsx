import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-lg md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            OptiPlax™ Supply
          </span>
          <span className="text-xs font-extrabold text-blue-900">
            From $49/Bottle + Free Ship
          </span>
        </div>

        <a
          href="#pricing"
          id="cta-sticky-mobile"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-700 text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <span>Claim Discount</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
