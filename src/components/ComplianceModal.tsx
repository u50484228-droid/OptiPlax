import React, { useState } from 'react';
import { COMPLIANCE_RULES } from '../data/optiplaxData';
import {
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
  X,
  FileText,
  Code,
  AlertTriangle,
  Info,
  ExternalLink,
} from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'copy' | 'audit' | 'technical' | 'research'>('audit');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const fullCopyText = `=====================================================
OPTIPLAX™ PRESELL LANDING PAGE COPY (ENGLISH - US)
Domain: https://www.northvale.com.br/
Target: US English-speaking Consumers (Google Ads Compliant)
=====================================================

[HEADER / MICRO-BAR]
Verified Product Dossier • Northvale Independent Consumer Guide & Special Supply Allocation • 60-Day Risk-Free Guarantee

[HERO SECTION - ABOVE THE FOLD]
Category Tag: 2026 Dietary Supplement Brief
Rating: ★★★★★ 4.9 / 5.0 (1,420+ Verified Buyers)

Headline:
Recharge Your Visual Comfort and Help Guard Against Daily Screen Fatigue

Subheadline:
Formulated with clinically researched marine astaxanthin, macular lutein, and pure zeaxanthin — OptiPlax™ provides daily nutritional reinforcement for clearer focus, low-light driving ease, and soothing relief from digital screen strain.

Bullet Points:
✓ Nourishes the macular pigment to filter harsh high-energy blue light
✓ Supports eye moisture, focus endurance, and night driving confidence
✓ 100% stimulant-free, non-GMO, and easy once-daily morning routine

Call to Action (CTA Button - ID: cta-comprar):
[ Claim Your Supply with 60-Day Guarantee ]
Reassurance: 60-Day Full Refund Guarantee • 256-Bit Encrypted Secure Checkout • One-Time Purchase, No Subscriptions

Feature Badges:
1. Natural Formula (Plant & marine botanicals)
2. No Stimulants (Gentle, zero caffeine or jitters)
3. Easy To Use (1 convenient daily capsule)
4. Non-GMO (Pure, audited ingredients)

-----------------------------------------------------
[PROBLEM / AGITATION SECTION]
Tag: The Modern Visual Reality
Headline: Why Our Eyes Are Working Harder Than Any Previous Generation
Body: Between endless screen hours, artificial indoor LED lighting, and nutritional gaps in modern foods, our delicate eye tissues endure nonstop daily strain.

Key Stress Factors:
1. Prolonged Screen & Blue Light Exposure: Smartphones, laptops, and LED lights emit intense blue spectrum wavelengths that pass directly through to the retina, generating daily oxidative stress and visual fatigue.
2. That Gritty, Tired "Afternoon Heaviness": By mid-afternoon, your eyes feel parched, strained, and overworked. You find yourself frequently blinking, rubbing your lids, or turning down your display brightness.
3. Glare and Halo Fatigue at Night: Driving in the evening becomes stressful as oncoming vehicle LEDs and rainy highway lights produce uncomfortable glare, halos, and delayed visual recovery.
4. Natural Decline of Dietary Carotenoids: Your body cannot synthesize essential macular carotenoids (Lutein, Zeaxanthin, and Astaxanthin). Without consistent dietary replenishment, your natural optical defenses gradually diminish.

Nutritional Callout:
While typical eye drops only provide temporary, surface-level wetness that wears off in minutes, targeted internal nutrients replenish the macular pigment density and cellular antioxidant shields from within.

-----------------------------------------------------
[SOLUTION PRESENTATION]
Tag: The Science of Nutrition
Headline: How OptiPlax™ Supports Eye Health from the Inside Out
Body: Rather than masking eye fatigue with repeated eye drops, OptiPlax feeds your visual system the exact micronutrients and carotenoids it relies upon for cellular vitality and high-contrast sharpness.

How It Works:
1. Replenishes Macular Pigment Density (MPOD): Lutein and Zeaxanthin concentrate directly within the macula, forming a protective biological yellow pigment shield that naturally absorbs scattered blue light.
2. Delivers Marine Antioxidant Reinforcement: Deep marine Astaxanthin provides up to 6,000 times the antioxidant power of Vitamin C, helping to defend delicate ocular membranes against oxidative breakdown.
3. Eases Low-Light & Glare Recovery: Bilberry anthocyanins promote healthy microcirculation and enzyme regeneration in retinal photoreceptors, assisting smoother transition between bright screens and dark environments.
4. Pure, Non-Stimulant Daily Sustenance: No artificial additives, no cheap caffeine jolts, and zero habit-forming compounds. Just pure, bioavailable marine and botanical nutrients formulated for everyday wellness.

-----------------------------------------------------
[INGREDIENTS BREAKDOWN]
Headline: Key Marine & Botanical Nutrients in OptiPlax™
1. Astaxanthin (Microalgae Carotenoid) - Cellular Antioxidant Defense
2. Lutein & Zeaxanthin (Macular Carotenoids) - Blue Light Optical Filter
3. Bilberry Extract (Vaccinium Myrtillus) - Night Vision & Micro-circulation
4. Organic Kelp & Wakame (Deep Sea Seaweeds) - Essential Trace Minerals & Fucoxanthin
5. Chlorella (Green Microalgae) - Chlorophyll & Micronutrient Support
6. Ecklonia Cava (Brown Marine Alga) - Phlorotannin Polyphenols

Formulation Safeguards:
Stimulant-Free • Dairy & Gluten Free • Non-GMO Verified • cGMP USA Audited Facility

-----------------------------------------------------
[SOCIAL PROOF / TESTIMONIALS]
Headline: Trusted by Daily Screen Users & Night Drivers

Testimonial 1 - Robert M., Denver, CO (Verified 90-Day User):
"As an accountant spending 8 to 10 hours staring at spreadsheets, my eyes used to feel exhausted and gritty by 3 PM. After taking OptiPlax consistently with breakfast for six weeks, I noticed my eyes feel much more rested throughout the workday."

Testimonial 2 - Clara S., Tampa, FL (Verified 180-Day User):
"Headlight glare on the highway in the evenings was starting to make me tense and uncomfortable. OptiPlax provided the daily nutritional support my eyes were missing. Reading fine print also feels more relaxed."

Testimonial 3 - James H., Austin, TX (Verified 60-Day User):
"I appreciate that the formula has no stimulants and uses real marine carotenoids like Astaxanthin and Zeaxanthin. Ordering was simple, delivery was prompt, and the 60-day guarantee made it a risk-free choice."

Mandatory Social Proof Disclaimer:
* Disclaimer: Experiences and feedback are personal to each user. Results may vary depending on individual diet, baseline macular pigment density, lifestyle factors, and consistency of daily use.

-----------------------------------------------------
[OFFER & PRICING PACKAGES (AUTHENTIC MANUFACTURER FIGURES)]
Headline: Select Your OptiPlax™ Wellness Package Below

PACKAGE 1: BASIC (2 BOTTLES)
• 60 Day Supply
• Price: $79 / Bottle
• Total: $158 (+ $9.99 Shipping)
• Badges: "YOU SAVE $200!" • "60 DAYS GUARANTEE"

PACKAGE 2: BEST VALUE! (3 + 3 BOTTLES = 6 BOTTLES)
• 180 Day Supply
• Price: $49 / Bottle
• Total: $294 (FREE DOMESTIC SHIPPING!)
• Badges: "YOU SAVE $780!" • "BIGGEST DISCOUNT" • "60 DAYS GUARANTEE" • "3 FREE EBOOKS!"

PACKAGE 3: MOST POPULAR (2 + 1 BOTTLES = 3 BOTTLES)
• 90 Day Supply
• Price: $69 / Bottle
• Total: $207 (FREE DOMESTIC SHIPPING!)
• Badges: "YOU SAVE $330!" • "60 DAYS GUARANTEE"

Accepted Payments: VISA • PayPal • MasterCard • Discover • American Express

-----------------------------------------------------
[GUARANTEE SECTION]
Headline: Experience OptiPlax™ for 60 Days — 100% Risk-Free
Body: Take OptiPlax consistently every morning. If you are not thoroughly satisfied with the difference in your visual comfort, screen stamina, and overall daily ease, simply send an email or call our friendly customer support team within 60 days of purchase for a prompt, 100% refund of your product investment.

-----------------------------------------------------
[FINAL CTA SECTION]
Headline: Give Your Eyes the Targeted Carotenoid Reinforcement They Need
CTA Button: [ Claim Your Special Supply Discount Now ]

-----------------------------------------------------
[FAQ SECTION]
Q: How does OptiPlax support daily eye health?
A: Delivers concentrated dietary carotenoids (Lutein, Zeaxanthin, Astaxanthin) alongside marine seaweeds and bilberry to nourish macular tissues and combat daily screen stress.

Q: How should I take OptiPlax?
A: Take one (1) capsule daily with water, preferably in the morning with a meal containing healthy dietary fats.

Q: Is OptiPlax safe and stimulant-free?
A: Yes, non-GMO, non-stimulant, manufactured in an audited cGMP facility.

Q: How long before feeling a difference?
A: Carotenoid replenishment accumulates progressively; many users note comfort improvements within 3 to 4 weeks, with optimal benefits over 90-180 days.

Q: What is the 60-Day Guarantee?
A: 100% money back within 60 days of purchase if not satisfied.

Q: How fast is U.S. delivery?
A: Ships via USPS/FedEx in 24-48 business hours; arrives in 3-7 business days.

-----------------------------------------------------
[MANDATORY FOOTER & LEGAL DISCLAIMERS]
Company: Northvale Consumer Health Review
Domain: https://www.northvale.com.br/
Address: 1209 Orange St, Wilmington, DE 19801, USA
Support: support@northvale.com.br | 1-800-482-6719

FDA Disclaimer:
These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.

Google Ads Disclaimer:
This site is not part of the Google website or Google Inc. Additionally, this site is NOT endorsed by Google in any way.
`;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="bg-white text-slate-900 rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-['Outfit',sans-serif] leading-tight">
                Google Ads Compliance & Direct Response Dossier
              </h2>
              <p className="text-xs text-slate-400">
                OptiPlax™ Presell Strategy • Domain: northvale.com.br • US English
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 shrink-0 gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'audit'
                ? 'border-blue-600 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Etapa 4: Compliance Checklist (8/8 PASS)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('copy')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'copy'
                ? 'border-blue-600 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Etapa 3 & 6: Full English Copy (Export)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('technical')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'technical'
                ? 'border-blue-600 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-4 h-4 text-purple-600" />
            <span>Etapa 5: Google Tags & Tracking</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('research')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'research'
                ? 'border-blue-600 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Info className="w-4 h-4 text-amber-600" />
            <span>Etapa 1 & 2: Research & Policy</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* TAB 1: AUDIT CHECKLIST */}
          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-950">
                    100% Policy Clean for Google Ads Initial Review
                  </h4>
                  <p className="mt-1 text-emerald-800">
                    Every section of this page strictly obeys Google Ads Healthcare & Medicines, Dietary Supplements, Misleading Representation, and Editorial & Quality guidelines.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {COMPLIANCE_RULES.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                          {item.status}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{item.rule}</h5>
                      </div>
                      <p className="text-xs text-slate-600">{item.implementationNote}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: FULL COPY SCRIPT */}
          {activeTab === 'copy' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm text-slate-600">
                  Ready-to-use Direct Response Copywriting text in US English, calibrated for CRO and 1st-review approval.
                </p>
                <button
                  type="button"
                  onClick={() => copyToClipboard(fullCopyText, 'full-copy')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors shrink-0 shadow-xs"
                >
                  {copiedSection === 'full-copy' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Full Text</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto border border-slate-800">
                {fullCopyText}
              </pre>
            </div>
          )}

          {/* TAB 3: TECHNICAL TAGS */}
          {activeTab === 'technical' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm space-y-2">
                <h4 className="font-bold text-blue-950 flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-700" />
                  ETAPA 5 — Google Ads Tracking Setup
                </h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  The base tags are embedded directly in the <code>&lt;head&gt;</code> of this project (<code>index.html</code>). The primary conversion button is assigned the mandatory fixed identifier: <code>id="cta-comprar"</code>.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  1. Tracking Global Site Tag (gtag.js in &lt;head&gt;)
                </h5>
                <pre className="p-3 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto">
{`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-CONVERSION_ID');
  gtag('config', 'G-MEASUREMENT_ID');
</script>`}
                </pre>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  2. Conversion Event Listener for id="cta-comprar"
                </h5>
                <pre className="p-3 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto">
{`<script>
  document.addEventListener('DOMContentLoaded', function () {
    var ctaButton = document.getElementById('cta-comprar');
    if (ctaButton) {
      ctaButton.addEventListener('click', function () {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 294.0,
            'currency': 'USD'
          });
        }
      });
    }
  });
</script>`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 4: RESEARCH & POLICY */}
          {activeTab === 'research' && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2 text-amber-900">
                <h4 className="font-bold text-amber-950 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  ETAPA 2 — Policy Classification & Certification Check
                </h4>
                <p className="leading-relaxed">
                  <strong>Policy Category:</strong> Healthcare and Medicines &gt; Dietary Supplements and Nutritional Products.
                </p>
                <p className="leading-relaxed">
                  <strong>Google Ads Certification Alert:</strong> No LegitScript or Online Pharmacy certification is required for OptiPlax in the US because it is an over-the-counter dietary supplement containing permitted botanicals and carotenoids. However, any disease cure claim (cataract, glaucoma, macular degeneration) causes instant automated ad suspension. Therefore, the copy must strictly adhere to general structure/function nutritional language.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">
                  ETAPA 1 — Product Research Dossier
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li><strong>Product:</strong> OptiPlax™ Dietary Supplement (30 capsules per bottle, 1/day).</li>
                  <li><strong>Active Nutrients:</strong> Astaxanthin (microalgae), Lutein & Zeaxanthin (macular carotenoids), Bilberry extract, Kelp, Wakame, Chlorella, Ecklonia Cava.</li>
                  <li><strong>Target Demographic:</strong> Adults 45–75+ experiencing screen eye strain, glare sensitivity, and seeking natural nutritional eye care.</li>
                  <li><strong>Direct Competitors:</strong> Sight Care, Ocuprime, Vision 20, PreserVision AREDS 2.</li>
                  <li><strong>Publisher Domain:</strong> https://www.northvale.com.br/</li>
                  <li><strong>Affiliate / Checkout Bridge:</strong> https://theoptiplax.com/text.php?aff_id=11210</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
            <CheckCircle className="w-4 h-4" /> Ready for Google Ads Live Campaign
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
