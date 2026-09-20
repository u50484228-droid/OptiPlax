import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { OptiPlaxBottle } from './OptiPlaxGraphics';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Begin Your 60-Day Visual Journey
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Outfit',sans-serif] leading-tight text-white">
            Give Your Eyes the Targeted Carotenoid Reinforcement They Need
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Don't let endless screen glare and daily visual fatigue dictate how your evenings feel. Replenish your natural macular defenses with OptiPlax™ starting today.
          </p>
        </div>

        {/* Floating bottle mini preview */}
        <div className="flex justify-center -my-2">
          <OptiPlaxBottle size="md" />
        </div>

        {/* Benefits bar */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-blue-200">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> Free U.S. Shipping on 3+ Bottles
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> 60-Day 100% Money-Back Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" /> Zero Auto-Billing or Subscriptions
          </span>
        </div>

        {/* Big Action Button */}
        <div>
          <a
            id="cta-final"
            href="#pricing"
            className="inline-flex items-center justify-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98]"
          >
            <span>Claim Your Special Supply Discount Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-slate-400 mt-2.5">
            Select your preferred package with guaranteed 60-day buyer protection.
          </p>
        </div>
      </div>
    </section>
  );
};
