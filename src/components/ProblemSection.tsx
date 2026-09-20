import React from 'react';
import { EyeOff, Monitor, Moon, Clock, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Monitor,
      title: 'Prolonged Screen & Blue Light Exposure',
      desc: 'Smartphones, laptops, and LED lights emit intense blue spectrum wavelengths that pass directly through to the retina, generating daily oxidative stress and visual fatigue.',
    },
    {
      icon: EyeOff,
      title: 'That Gritty, Tired "Afternoon Heaviness"',
      desc: 'By mid-afternoon, your eyes feel parched, strained, and overworked. You find yourself frequently blinking, rubbing your lids, or turning down your display brightness.',
    },
    {
      icon: Moon,
      title: 'Glare and Halo Fatigue at Night',
      desc: 'Driving in the evening becomes stressful as oncoming vehicle LEDs and rainy highway lights produce uncomfortable glare, halos, and delayed visual recovery.',
    },
    {
      icon: Clock,
      title: 'Natural Decline of Dietary Carotenoids',
      desc: 'Your body cannot synthesize essential macular carotenoids (Lutein, Zeaxanthin, and Astaxanthin). Without consistent dietary replenishment, your natural optical defenses gradually diminish.',
    },
  ];

  return (
    <section id="problem" className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            The Modern Visual Reality
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 font-['Outfit',sans-serif] tracking-tight">
            Why Our Eyes Are Working Harder Than Any Previous Generation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Between endless screen hours, artificial indoor LED lighting, and nutritional gaps in modern foods, our delicate eye tissues endure nonstop daily strain.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/20 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance-safe Medical Distinction Callout */}
        <div className="mt-10 p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-amber-950">Nutritional Note:</strong> While typical eye drops only provide temporary, surface-level wetness that wears off in minutes, targeted internal nutrients replenish the macular pigment density and cellular antioxidant shields from within.
          </p>
        </div>
      </div>
    </section>
  );
};
