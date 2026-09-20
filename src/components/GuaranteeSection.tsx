import React from 'react';
import { ShieldCheck, ArrowRight, RotateCcw, Clock, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500/30 shadow-md relative overflow-hidden">
          {/* Subtle accent corner */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Guarantee Badge Graphic */}
            <div className="shrink-0 text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex flex-col items-center justify-center p-3 shadow-lg border-4 border-emerald-100">
                <ShieldCheck className="w-10 h-10 mb-1 text-emerald-100" />
                <span className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] leading-tight">
                  60 DAYS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 leading-none">
                  100% Money Back
                </span>
                <span className="text-[9px] font-medium text-emerald-200 mt-0.5">
                  Guarantee
                </span>
              </div>
            </div>

            {/* Guarantee Terms & Narrative */}
            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Zero Risk Commitment
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
                Experience OptiPlax™ for 60 Days — 100% Risk-Free
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe in the science behind our marine carotenoids and botanical extracts. That is why every bottle is backed by our full <strong className="text-slate-900 font-semibold">60-Day Money-Back Guarantee</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Take OptiPlax consistently every morning. If you are not thoroughly satisfied with the difference in your visual comfort, screen stamina, and overall daily ease, simply send an email or call our friendly customer support team within 60 days of purchase for a prompt, 100% refund of your product investment.
              </p>

              {/* Bullet checks */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>No hassle return instructions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Dedicated U.S. support team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
