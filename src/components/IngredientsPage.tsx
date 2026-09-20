import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface IngredientsPageProps {
  onBack: () => void;
}

export const IngredientsPage: React.FC<IngredientsPageProps> = ({ onBack }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; content: string[] }> = {
    contact: {
      title: 'Contact Support',
      content: [
        'Our dedicated OptiPlax™ care specialists are available 24/7 to answer your questions, coordinate logistics, or provide guarantee assistance.',
        'Product Inquiries & Manufacturer Assistance: contact@optiplax-product.com',
        'Official Order & Fulfillment Portal: BuyGoods Customer Support Desk (available 24 hours a day, 7 days a week).',
        'Toll-Free U.S. Phone Support: 1-800-482-6719 (Monday through Friday, 9:00 AM – 5:00 PM EST).',
        'Corporate Facility: 285 Northeast Ave, Tallmadge, OH 44278, United States.',
      ],
    },
    terms: {
      title: 'Terms Of Use',
      content: [
        'By accessing this website, you agree to comply with and be bound by all applicable terms of use and local laws.',
        'The content on this website is for informational and educational purposes only and is not intended to replace professional medical consultations.',
        'Prices, bundle promotions, and bonuses are subject to stock availability and may be updated without prior notice.',
      ],
    },
    disclaimer: {
      title: 'Health & Advertising Disclaimer',
      content: [
        'Statements on this website have not been evaluated by the Food and Drug Administration (FDA).',
        'Products are not intended to diagnose, treat, cure, or prevent any disease.',
        'Results may vary. The information provided is not a substitute for advice from a licensed medical healthcare provider.',
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      content: [
        'We value and respect your privacy. We implement 256-bit SSL encryption across all data transfer points.',
        'We do not sell, rent, or trade your personal data with unaffiliated third parties.',
      ],
    },
    shipping: {
      title: 'Shipping Policy',
      content: [
        'Domestic U.S. orders are processed within 24 to 48 business hours and shipped via USPS or FedEx directly from our clean U.S. fulfillment facility.',
        'Orders within the United States typically arrive within 3 to 7 business days.',
        'All 3-bottle and 6-bottle orders receive 100% Free Shipping.',
      ],
    },
    refund: {
      title: 'Refund Policy & 60-Day Guarantee',
      content: [
        'OptiPlax comes with a 100% money-back guarantee for a full 60 days.',
        'If you are not thoroughly satisfied for any reason, simply contact our support team within 60 days of purchase for an immediate refund of your purchase price.',
      ],
    },
  };
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top sticky return bar for easy navigation */}
      <div className="bg-slate-900 text-white py-2.5 px-4 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:text-amber-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to OptiPlax Offer</span>
        </button>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Official Formulation &amp; Scientific Dossier
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        
        {/* Main Header - Exact match to Image 1 */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-[#1b3b75] font-['Outfit',sans-serif] tracking-tight">
            OptiPlax
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 mt-2">
            Scientific References
          </h2>
        </div>

        {/* Scientific References List - Exact verbatim text from Images 1, 2, 3 */}
        <div className="space-y-6 text-xs sm:text-[13px] text-slate-800 leading-relaxed font-sans">
          
          <p>
            Bilal, M., Rasheed, T., Sosa-Hernández, J., Raza, A., Nabeel, F., &amp; Iqbal, H. (2018). Biosorption: An interplay between marine algae and potentially toxic elements---a review. <em>Marine Drugs</em>, 16(2), 65.{' '}
            <a
              href="https://doi.org/10.3390/md16020065"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/md16020065
            </a>
          </p>

          <p>
            Bourne, R., Steinmetz, J. D., Flaxman, S., Briant, P. S., Taylor, H. R., Resnikoff, S., Casson, R. J., Abdoli, A., Abu-Gharbieh, E., Afshin, A., Ahmadieh, H., Akalu, Y., Alamneh, A. A., Alemayehu, W., Alfaar, A. S., Alipour, V., Anbesu, E. W., Androudi, S., Arabloo, J., ... &amp; Arditi, A. (2021). Trends in prevalence of blindness and distance and near vision impairment over 30 years: An analysis for the global burden of disease study. <em>The Lancet Global Health</em>, 9(2), e130--e143.{' '}
            <a
              href="https://doi.org/10.1016/S2214-109X(20)30425-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.1016/S2214-109X(20)30425-3
            </a>
          </p>

          <p>
            Capelli, B., &amp; Shao, H. (2017). The world&apos;s strongest and highest quality natural antioxidant: Astaxanthin. BGG North America, Inc.
          </p>

          <p>
            Castelli, P. R. (2021, June 24). Hope for blindness from a seaweed protein. IBSA Foundation for Scientific Research.
          </p>

          <p>
            Gallagher, J. (2021, May 24). Algae proteins partially restore man&apos;s sight. BBC News.
          </p>

          <p>
            Hollenhorst, R. W. (1961). Significance of bright plaques in the retinal arterioles. <em>JAMA</em>, 178(1), 23--29.{' '}
            <a
              href="https://doi.org/10.1001/jama.1961.030404000025005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.1001/jama.1961.030404000025005
            </a>
          </p>

          <p>
            Ide, T., Toda, I., Fukumoto, T., Watanabe, J., &amp; Tsubota, K. (2014). Outcome of a 10-year follow-up of laser in situ laser keratomileusis for myopia and myopic astigmatism. <em>Taiwan Journal of Ophthalmology</em>, 4(4), 156--162.{' '}
            <a
              href="https://doi.org/10.1016/j.tjo.2014.06.002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.1016/j.tjo.2014.06.002
            </a>
          </p>

          <p>
            Kim, J.-M., Chung, K.-S., Yoon, Y.-S., Jang, S.-Y., Heo, S.-W., Park, G., Jang, Y.-P., Ahn, H.-S., Shin, Y.-K., Lee, S.-H., &amp; Lee, K.-T. (2022). Dieckol isolated from eisenia bicyclis ameliorates wrinkling and improves skin hydration via MAPK/AP-1 and tgf-β/smad signaling pathways in uvb-irradiated hairless mice. <em>Marine Drugs</em>, 20(12), 779--779.{' '}
            <a
              href="https://doi.org/10.3390/md20120779"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/md20120779
            </a>
          </p>

          <p>
            Koronyo-Hamaoui, M., Koronyo, Y., Ljubimov, A. V., Miller, C. A., Ko, M. K., Black, K. L., Schwartz, M., &amp; Farkas, D. L. (2011). Identification of amyloid plaques in retinas from alzheimer&apos;s patients and noninvasive in vivo optical imaging of retinal plaques in a mouse model. <em>NeuroImage</em>, 54, S204--S217.{' '}
            <a
              href="https://doi.org/10.1016/j.neuroimage.2010.06.020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.1016/j.neuroimage.2010.06.020
            </a>
          </p>

          <p>
            Lu, Y.-A., Je, J.-G., Hwang, J., Jeon, Y.-J., &amp; Ryu, B. (2021). Ecklonia cava extract and its derivative dieckol promote vasodilation by modulating calcium signaling and pi3k/akt/enos pathway in in vitro and in vivo models. <em>Biomedicines</em>, 9(4), 438.{' '}
            <a
              href="https://doi.org/10.3390/biomedicines9040438"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/biomedicines9040438
            </a>
          </p>

          <p>
            Mihara, N., Takahashi, M., Kitamura, J., Horita, A., Sugiura, Y., &amp; Hiroki, Y. (2005). The effect of astaxanthin on retinal capillary blood flow in normal volunteers. <em>Journal of Clinical Therapeutics and Medicines</em>, 21(5), 1--9.
          </p>

          <p>
            Our World in Data. (2017). Primary plastic production by industrial sector.
          </p>

          <p>
            Shin, Y.-S., Kim, K. S., Park, H., Lee, M.-G., Cho, S., Choi, S. Y., Heo, H. J., Kim, D.-O., &amp; Kim, G.-H. (2021). Effects of ecklonia cava extract on neuronal damage and apoptosis in PC-12 cells against oxidative stress. <em>J Microbiol Biotechnol</em>, 31(4), 584--591.{' '}
            <a
              href="https://doi.org/10.4014/jmb.2012.12013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.4014/jmb.2012.12013
            </a>
          </p>

          <p>
            Wang, S., Vincent, T., Faur, C., &amp; Guibal, E. (2016). Alginate and algal-based beads for the sorption of metal cations: Cu(II) and pb(ii). <em>International Journal of Molecular Sciences</em>, 17(9), 1453.{' '}
            <a
              href="https://doi.org/10.3390/ijms17091453"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/ijms17091453
            </a>
          </p>

          <p>
            Wu, D., Lim, B. X. H., Seah, I., Xie, S., Jaeger, J. E., Symons, R. K., Heffernan, A. L., Curren, E. E. M., Leong, S. C. Y., Riau, A. K., Lim, D. K. A., Stapleton, F., Ali, M. J., Singh, S., Tong, L., Mehta, J. S., Su, X., ... &amp; Lim, C. H. L. (2023). Impact of microplastics on the ocular surface. <em>International Journal of Molecular Sciences</em>, 24(4), 3928.{' '}
            <a
              href="https://doi.org/10.3390/ijms24043928"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/ijms24043928
            </a>
          </p>

          <p>
            Zhang, C., &amp; Kim, S.-K. (2009). Matrix metalloproteinase inhibitors (mmpis) from marine natural products: The current situation and future prospects. <em>Marine Drugs</em>, 7(2), 71--84.{' '}
            <a
              href="https://doi.org/10.3390/md7020071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.3390/md7020071
            </a>
          </p>

          <p>
            Zhong, Y., Yang, Y., Zhang, L., Ma, D., Wen, K., Cai, J., Cai, Z., Wang, C., Chai, X., Zhong, J., Liang, B., Huang, Y., Xian, H., Li, Z., Yang, X., Chen, D., Zhang, G., &amp; Huang, Z. (2024). Revealing new insights: Two-center evidence of microplastics in human vitreous humor and their implications for ocular health. <em>Science of The Total Environment</em>, 921, 171109--171109.{' '}
            <a
              href="https://doi.org/10.1016/j.scitotenv.2024.171109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              https://doi.org/10.1016/j.scitotenv.2024.171109
            </a>
          </p>

        </div>

        {/* OptiPlax Label Section - Exact match to Image 4 */}
        <div className="mt-20 sm:mt-24 pt-12 border-t-2 border-slate-100">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit',sans-serif]">
              OptiPlax Label
            </h2>
          </div>

          {/* Unfolded Complete Bottle Label Mockup (3-Panel layout) */}
          <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Panel: Suggested Use, Cautions, FDA Box, Badges (Col span 4) */}
              <div className="md:col-span-4 bg-[#628ea8] text-white p-4 sm:p-5 flex flex-col justify-between text-[10px] leading-tight space-y-3 font-sans">
                <div>
                  <p className="font-bold tracking-tight uppercase">
                    SUGGESTED USE:
                  </p>
                  <p className="mt-0.5 text-white/95 text-[9.5px]">
                    As a dietary supplement, adults take one (1) capsule daily. For best results, take with 6-8 oz of water or as directed by a healthcare professional.
                  </p>
                </div>

                <div>
                  <p className="font-bold tracking-tight uppercase">
                    CAUTION:
                  </p>
                  <p className="mt-0.5 text-white/95 text-[9.5px]">
                    Do not exceed recommended dose. Pregnant or nursing mothers, children under the age of 18, and individuals with a known medical condition should consult a physician before using this or any dietary supplement.
                  </p>
                </div>

                <div>
                  <p className="font-extrabold uppercase tracking-tight text-[9.5px]">
                    KEEP OUT OF THE REACH OF CHILDREN. DO NOT USE IF SAFETY SEAL IS DAMAGED OR MISSING. STORE IN A COOL, DRY PLACE.
                  </p>
                </div>

                {/* White FDA Disclaimer Box */}
                <div className="bg-white text-slate-950 p-2 rounded-xs border border-slate-900 text-[8.5px] font-bold leading-snug">
                  THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD &amp; DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE. †
                </div>

                {/* Seal Icons Row */}
                <div className="flex items-center justify-between pt-1 border-t border-white/20">
                  <span className="text-[8px] text-white/60 font-mono">&lt; V 1.1 &gt;</span>
                  <div className="flex items-center gap-2">
                    {/* GMP */}
                    <div className="w-7 h-7 rounded-full border border-white/80 flex flex-col items-center justify-center text-[6px] font-black uppercase text-center leading-none">
                      <span>GMP</span>
                      <span className="text-[4px] text-white/80">CERTIFIED</span>
                    </div>
                    {/* USA */}
                    <div className="text-center">
                      <div className="text-[6px] text-white/70">MADE IN THE</div>
                      <div className="text-[9px] font-black tracking-wider leading-none">USA</div>
                      <div className="text-[4px] text-white/70">US &amp; IMPORTED</div>
                    </div>
                    {/* FDA */}
                    <div className="text-center">
                      <div className="text-[5.5px] text-white/70">MANUFACTURED IN AN</div>
                      <div className="text-[8px] font-black tracking-wider leading-none">FDA-REGISTERED</div>
                      <div className="text-[5.5px] text-white/70">FACILITY</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Panel: Brand Logo, Benefit list, 30 Capsules (Col span 4) */}
              <div className="md:col-span-4 flex flex-col justify-between border-x border-slate-200">
                {/* Top Half: White with Logo and Researched claim */}
                <div className="bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center flex-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1b3b75] font-['Outfit',sans-serif] tracking-tight">
                    OptiPlax
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
                    Clinically Researched Ingredients
                  </p>
                </div>

                {/* Triple Color Band: Yellow, Orange, Magenta */}
                <div className="h-2.5 flex w-full">
                  <div className="h-full w-1/3 bg-[#facc15]" />
                  <div className="h-full w-1/3 bg-[#f97316]" />
                  <div className="h-full w-1/3 bg-[#db2777]" />
                </div>

                {/* Bottom Half: Solid Deep Navy Blue */}
                <div className="bg-[#1b2e59] text-white p-5 flex flex-col justify-between">
                  <div className="space-y-1.5 py-2">
                    <div className="text-xs font-black tracking-wider uppercase">
                      VISION SUPPORT†
                    </div>
                    <div className="text-xs font-black tracking-wider uppercase">
                      CLARITY &amp; FOCUS†
                    </div>
                    <div className="text-xs font-black tracking-wider uppercase">
                      EYE HEALTH AID†
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[11px]">
                    <div>
                      <span className="text-sm font-black">30</span>
                      <span className="block text-[8px] tracking-wider uppercase text-slate-300">
                        CAPSULES
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-bold tracking-wider uppercase text-slate-200">
                        DIETARY SUPPLEMENT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Official Supplement Facts Box (Col span 4) */}
              <div className="md:col-span-4 bg-white p-4 sm:p-5 flex flex-col justify-between text-slate-900 text-[10px] leading-tight font-sans">
                <div>
                  {/* Supplement Facts Header */}
                  <div className="border-2 border-slate-950 p-2.5 bg-white">
                    <h4 className="text-base font-black tracking-tight font-sans text-slate-950 leading-none">
                      Supplement Facts
                    </h4>
                    <p className="text-[9px] text-slate-700 mt-0.5">
                      Serving Size: 1 Capsule
                    </p>
                    <p className="text-[9px] text-slate-700">
                      Servings Per Container: 30
                    </p>

                    <div className="w-full h-1 bg-slate-950 my-1" />

                    <div className="flex justify-between font-bold text-[9px] pb-0.5 border-b border-slate-950">
                      <span>Amount Per Serving</span>
                      <span>%DV</span>
                    </div>

                    <div className="py-1">
                      <div className="flex justify-between font-bold text-[9.5px]">
                        <span>Proprietary Blend</span>
                        <span>500 mg **</span>
                      </div>
                      <p className="text-[8px] text-slate-800 leading-snug mt-0.5">
                        Kelp Powder (leaf), Wakame Extract (leaf), Astaxanthin 2% (<em>Haematococcus pluvialis</em>) (algae), Chlorella Powder, <em>Ecklonia cava</em> Brown Seaweed Extract, Kelp Extract (<em>Laminaria japonica</em>)(std. to 10% fucoxanthin), Nori yaki Powder, Spirulina Powder (<em>Arthrospira platensis</em>)(whole plant), Sea Buckthorn Oil
                      </p>
                    </div>

                    <div className="w-full h-0.5 bg-slate-950 my-1" />

                    <p className="text-[8px] text-slate-700">
                      ** Daily Value (DV) not established.
                    </p>
                  </div>

                  {/* Other Ingredients */}
                  <p className="text-[8.5px] text-slate-700 mt-2 leading-tight">
                    <strong className="text-slate-900">Other Ingredients:</strong> Gelatin (capsule), Brown Rice Flour, Silicon Dioxide
                  </p>
                </div>

                {/* Manufacturer & Distributor Info */}
                <div className="pt-4 text-center sm:text-right text-[8.5px] text-slate-700 leading-tight">
                  <p className="font-bold text-slate-900">Distributed By: OptiPlax</p>
                  <p>285 Northeast Ave, Tallmadge,</p>
                  <p>OH 44278, United States</p>
                  <p className="text-blue-700">contact@optiplax-product.com</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer Navigation Bar - Exact match to Image 4 & 5 */}
      <div className="bg-[#142850] text-white py-4 px-4 border-t border-blue-900">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold">
          <button type="button" onClick={() => setActiveLegalModal('contact')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Contact
          </button>
          <span className="text-blue-300/40">|</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-blue-300 transition-colors cursor-pointer"
          >
            References
          </button>
          <span className="text-blue-300/40">|</span>
          <button type="button" onClick={() => setActiveLegalModal('terms')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Terms Of Use
          </button>
          <span className="text-blue-300/40">|</span>
          <button type="button" onClick={() => setActiveLegalModal('disclaimer')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Disclaimer
          </button>
          <span className="text-blue-300/40">|</span>
          <button type="button" onClick={() => setActiveLegalModal('privacy')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <span className="text-blue-300/40">|</span>
          <button type="button" onClick={() => setActiveLegalModal('shipping')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Shipping Policy
          </button>
          <span className="text-blue-300/40">|</span>
          <button type="button" onClick={() => setActiveLegalModal('refund')} className="hover:text-blue-300 transition-colors cursor-pointer">
            Refund Policy
          </button>
        </div>
      </div>

      {/* Legal Disclaimers & BuyGoods Badge - Exact match to Image 5 */}
      <div className="bg-[#f3f4f6] text-slate-600 text-[11px] py-10 px-4 sm:px-6 leading-relaxed border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* Support Links */}
          <div className="text-center text-xs space-y-1 mb-6">
            <p>
              For Product Support, please contact the vendor{' '}
              <button
                type="button"
                onClick={() => setActiveLegalModal('contact')}
                className="text-blue-700 underline hover:text-blue-900 cursor-pointer"
              >
                here
              </button>
            </p>
            <p>
              For Order Support, please contact BuyGoods{' '}
              <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
                here
              </a>
            </p>
          </div>

          <p>
            Please note that the information we provide is not intended to replace consultation with a qualified medical professional. We encourage you to inform your physician of changes you make to your lifestyle and discuss these with him or her. For questions or concerns about any medical conditions you may have, please contact your doctor.
          </p>

          <p>
            Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
          </p>

          <p>
            The website&apos;s content and the product for sale is based upon the author&apos;s opinion and is provided solely on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues and always review the information carefully with your professional health care provider before using any of the protocols presented on this website and/or in the product sold here. Neither BuyGoods nor the author are engaged in rendering medical or similar professional services or advice via this website or in the product, and the information provided is not intended to replace medical advice offered by a physician or other licensed healthcare provider. You should not construe BuyGoods&apos;s sale of this product as an endorsement by BuyGoods of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, treatment, action, or application of advice made by the author of the product.
          </p>

          <p>
            Testimonials, case studies, and examples found on this page are results that have been forwarded to us by users of OptiPlax products and related products, and may not reflect the typical purchaser&apos;s experience, may not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results.
          </p>

          <p className="text-[10px] text-slate-500">
            *For international shipping (outside of the United States), shipping fees will apply. Read more here.
          </p>

          {/* BuyGoods Official Retailer Gray Border Box - Exact match to Image 5 */}
          <div className="mt-6 border border-slate-300 bg-white/70 p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl sm:text-3xl font-black lowercase tracking-tight text-slate-500 font-sans">
                buygoods<sup className="text-xs font-normal">®</sup>
              </span>
            </div>
            <p className="text-[10px] leading-normal text-slate-500">
              BuyGoods is the retailer of this product. BuyGoods is a registered trademark of BuyGoods, a Delaware corporation located at 1201 N Orange Street Suite #7223, Wilmington, DE, 19801, USA and used by permission. BuyGoods role as retailer does not constitute an endorsement, approval or review of this product or any claim, statement or opinion used in promotion of this product. Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright Bar - Exact match to Image 5 bottom */}
      <div className="bg-[#e5e7eb] text-slate-600 text-center py-4 text-xs font-medium border-t border-slate-300">
        Copyright © 2025 <strong className="text-slate-900">OptiPlax</strong> | All Rights Reserved
      </div>

      {/* Informational Policy Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Outfit',sans-serif]">
                {legalContent[activeLegalModal]?.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalContent[activeLegalModal]?.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 bg-[#142850] text-white text-xs font-bold rounded-lg hover:bg-blue-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
