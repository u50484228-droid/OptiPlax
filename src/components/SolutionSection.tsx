import React from 'react';
import { ShieldCheck, Eye, Sun, Sparkles, CheckCircle } from 'lucide-react';
import { OptiPlaxBottle } from './OptiPlaxGraphics';

export const SolutionSection: React.FC = () => {
  const steps = [
    {
      icon: Eye,
      title: '1. Replenishes Macular Pigment Density (MPOD)',
      desc: 'Lutein and Zeaxanthin concentrate directly within the macula, forming a protective biological yellow pigment shield that naturally absorbs scattered blue light.',
    },
    {
      icon: ShieldCheck,
      title: '2. Delivers Marine Antioxidant Reinforcement',
      desc: 'Deep marine Astaxanthin provides up to 6,000 times the antioxidant power of Vitamin C, helping to defend delicate ocular membranes against oxidative breakdown.',
    },
    {
      icon: Sun,
      title: '3. Eases Low-Light & Glare Recovery',
      desc: 'Bilberry anthocyanins promote healthy microcirculation and enzyme regeneration in retinal photoreceptors, assisting smoother transition between bright screens and dark environments.',
    },
    {
      icon: Sparkles,
      title: '4. Pure, Non-Stimulant Daily Sustenance',
      desc: 'No artificial additives, no cheap caffeine jolts, and zero habit-forming compounds. Just pure, bioavailable marine and botanical nutrients formulated for everyday wellness.',
    },
  ];

  return (
    <section id="solution" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm text-center">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-4">
                The Targeted Nutritional Approach
              </span>

              <div className="my-3 flex justify-center">
                <OptiPlaxBottle size="lg" />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bioavailable Marine & Botanical Extracts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Formulated in an Audited cGMP US Facility</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Third-Party Tested for Quality and Purity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & How it Works */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
                The Science of Nutrition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif] tracking-tight">
                How OptiPlax™ Supports Eye Health from the Inside Out
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Rather than masking eye fatigue with repeated eye drops, OptiPlax feeds your visual system the exact micronutrients and carotenoids it relies upon for cellular vitality and high-contrast sharpness.
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-4 pt-2">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
