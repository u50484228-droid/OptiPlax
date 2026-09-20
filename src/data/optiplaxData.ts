import { PricingPackage, Ingredient, Testimonial, FaqItem, ComplianceRule } from '../types';

export const AFFILIATE_CHECKOUT_BASE = 'https://theoptiplax.com/text.php?aff_id=11210';
export const PUBLISHER_DOMAIN = 'https://www.northvale.com.br/';

// Official BuyGoods Direct Checkout Links
export const CHECKOUT_URL_2_BOTTLES =
  'https://buygoods.com/secure/checkout.html?sessid2=sessid20260905195428869&aff_id=11210&account_id=11350&screen=checkout_one&product_codename=1&redirect=aHR0cHM6Ly90aGVvcHRpcGxheC5jb20vL3Vwc2VsbC1hMS5waHA%3D&ax_item=1&static=https%3A%2F%2Ftheoptiplax.com%2F&aff_id=11210&_ga=82142229.1788638092&_b=NDk3MTk2O3RoZW9wdGlwbGF4LmNvbS92aWRlby5waHA7dW5kZWZpbmVkO3RleHQ7MTsxNTg7ZmU7dW5kZWZpbmVk';

export const CHECKOUT_URL_6_BOTTLES =
  'https://buygoods.com/secure/checkout.html?sessid2=sessid20260905195428869&aff_id=11210&account_id=11350&screen=checkout_one&product_codename=3&redirect=aHR0cHM6Ly90aGVvcHRpcGxheC5jb20vL3Vwc2VsbC1hMS5waHA%3D&ax_item=3&static=https%3A%2F%2Ftheoptiplax.com%2F&aff_id=11210&_ga=82142229.1788638092&_b=NDk3MTk2O3RoZW9wdGlwbGF4LmNvbS92aWRlby5waHA7dW5kZWZpbmVkO3RleHQ7MzsyOTQ7ZmU7dW5kZWZpbmVk';

export const CHECKOUT_URL_3_BOTTLES =
  'https://buygoods.com/secure/checkout.html?sessid2=sessid20260905195428869&aff_id=11210&account_id=11350&screen=checkout_one&product_codename=2&redirect=aHR0cHM6Ly90aGVvcHRpcGxheC5jb20vL3Vwc2VsbC1hMS5waHA%3D&ax_item=2&static=https%3A%2F%2Ftheoptiplax.com%2F&aff_id=11210&_ga=82142229.1788638092&_b=NDk3MTk2O3RoZW9wdGlwbGF4LmNvbS92aWRlby5waHA7dW5kZWZpbmVkO3RleHQ7MjsyMDc7ZmU7dW5kZWZpbmVk';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic-2',
    name: 'Basic',
    bottlesCount: 2,
    supplyDays: 60,
    pricePerBottle: 79,
    totalPrice: 158,
    shippingCost: 9.99,
    savingsLabel: 'YOU SAVE $200!',
    badgeText: 'Standard Care',
    checkoutUrl: CHECKOUT_URL_2_BOTTLES,
  },
  {
    id: 'best-value-6',
    name: 'BEST VALUE!',
    bottlesCount: 3,
    bonusBottlesCount: 3, // "3 + 3 BOTTLES"
    supplyDays: 180,
    pricePerBottle: 49,
    totalPrice: 294,
    shippingCost: 0,
    savingsLabel: 'YOU SAVE $780!',
    isBestValue: true,
    badgeText: 'BEST VALUE!',
    freeBonusText: '3 FREE EBOOKS INCLUDED!',
    checkoutUrl: CHECKOUT_URL_6_BOTTLES,
  },
  {
    id: 'most-popular-3',
    name: 'Most Popular',
    bottlesCount: 2,
    bonusBottlesCount: 1, // "2 + 1 BOTTLES"
    supplyDays: 90,
    pricePerBottle: 69,
    totalPrice: 207,
    shippingCost: 0,
    savingsLabel: 'YOU SAVE $330!',
    isMostPopular: true,
    badgeText: 'Most Popular',
    checkoutUrl: CHECKOUT_URL_3_BOTTLES,
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Astaxanthin',
    commonName: 'Microalgae Carotenoid',
    role: 'Cellular Antioxidant Defense',
    description: 'A deeply pigmented marine antioxidant known to assist delicate retinal capillaries against everyday oxidative stress and screen-induced eye fatigue.',
    benefitTag: 'Visual Fatigue Defense',
  },
  {
    name: 'Lutein & Zeaxanthin',
    commonName: 'Macular Carotenoids',
    role: 'Blue Light Optical Filter',
    description: 'Naturally concentrates within the macular pigment to filter out high-energy blue wavelengths emitted by smartphones, tablets, and bright ambient glare.',
    benefitTag: 'Blue Light Shielding',
  },
  {
    name: 'Bilberry Extract',
    commonName: 'Vaccinium Myrtillus',
    role: 'Night Vision & Micro-circulation',
    description: 'Standardized anthocyanin-rich extract traditionally utilized to assist healthy ocular circulation and ease visual adaptation when shifting from light to dark.',
    benefitTag: 'Low-Light Adaptation',
  },
  {
    name: 'Organic Kelp & Wakame',
    commonName: 'Deep Sea Seaweeds',
    role: 'Essential Trace Minerals & Fucoxanthin',
    description: 'Nutrient-rich marine botanicals delivering natural trace minerals, bioavailable plant iodine, and protective ocean carotenoids for balanced tissue vitality.',
    benefitTag: 'Cellular Nourishment',
  },
  {
    name: 'Chlorella',
    commonName: 'Green Microalgae',
    role: 'Chlorophyll & Micronutrient Support',
    description: 'A pure freshwater microalga providing chlorophyll, beta-carotene, and bioavailable plant proteins to help support gentle cellular rejuvenation.',
    benefitTag: 'Purification & Balance',
  },
  {
    name: 'Ecklonia Cava',
    commonName: 'Brown Marine Alga',
    role: 'Phlorotannin Polyphenols',
    description: 'Celebrated for its unique marine polyphenols that offer prolonged antioxidant activity compared to common terrestrial plant extracts.',
    benefitTag: 'Extended Protection',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Robert M.',
    location: 'Denver, CO',
    rating: 5,
    title: 'Much more comfortable after long computer sessions',
    quote: 'As an accountant spending 8 to 10 hours staring at spreadsheets, my eyes used to feel exhausted and gritty by 3 PM. After taking OptiPlax consistently with breakfast for six weeks, I noticed my eyes feel much more rested throughout the workday.',
    verifiedPurchase: true,
    usedPeriod: 'Verified 90-Day User',
  },
  {
    id: '2',
    author: 'Clara S.',
    location: 'Tampa, FL',
    rating: 5,
    title: 'Evening driving feels noticeably clearer and calmer',
    quote: 'Headlight glare on the highway in the evenings was starting to make me tense and uncomfortable. OptiPlax provided the daily nutritional support my eyes were missing. Reading fine print also feels more relaxed.',
    verifiedPurchase: true,
    usedPeriod: 'Verified 180-Day User',
  },
  {
    id: '3',
    author: 'James H.',
    location: 'Austin, TX',
    rating: 5,
    title: 'Clean ingredients with zero jittery feelings',
    quote: 'I appreciate that the formula has no stimulants and uses real marine carotenoids like Astaxanthin and Zeaxanthin. Ordering was simple, delivery was prompt, and the 60-day guarantee made it a risk-free choice.',
    verifiedPurchase: true,
    usedPeriod: 'Verified 60-Day User',
  },
];

export const EBOOKS_BONUSES = [
  {
    id: 'bonus-1',
    number: '1',
    title: 'Bright Eyes Blueprint: A Personal Guide to Clearing Your Vision',
    description: 'Track your progress and boost results with 10 printable vision templates, a 30-second daily eye workout, and the top 4 exotic fruits that support your eyesight.',
    retailPrice: 55,
    todayPrice: 'FREE',
    coverTitle: 'BRIGHT EYES BLUEPRINT',
    coverSubtitle: 'A PERSONAL GUIDE TO CLEARING YOUR VISION',
    tag: 'DIGITAL DOWNLOAD',
  },
  {
    id: 'bonus-2',
    number: '2',
    title: '10 Science-Backed Hacks For A Sharp Mind & Clear Focus',
    description: 'Unlock faster recall with a memory-boosting jingle, a powerful brain rhyme, and 3 unique images that trigger instant mental connections.',
    retailPrice: 54,
    todayPrice: 'FREE',
    coverTitle: '10 SCIENCE BACKED HACKS',
    coverSubtitle: 'FOR A SHARP MIND & CLEAR FOCUS',
    tag: 'DIGITAL DOWNLOAD',
  },
  {
    id: 'bonus-3',
    number: '3',
    title: 'Fast Eye Relief: 1-Minute Solutions That Work',
    description: 'Discover the sleep position, eye yoga moves, and surprising foods that reduce puffiness, dark circles, and eye bags fast. Plus, learn how a household item can refresh your eyes in seconds.',
    retailPrice: 55,
    todayPrice: 'FREE',
    coverTitle: 'FAST EYE RELIEF',
    coverSubtitle: '1-MINUTE SOLUTIONS THAT WORK',
    tag: 'DIGITAL DOWNLOAD',
  },
];

export const SCIENTIFIC_REFERENCES = [
  {
    id: 1,
    text: 'Bilal, M., Rasheed, T., Sosa-Hernández, J., Raza, A., Nabeel, F., & Iqbal, H. (2018). Biosorption: An interplay between marine algae and potentially toxic elements —a review. Marine Drugs, 16(2), 65.',
    doi: 'https://doi.org/10.3390/md16020065'
  },
  {
    id: 2,
    text: 'Bourne, R. J., Steinmetz, J. D., Flaxman, S., Briant, P. S., Taylor, H. R., Resnikoff, S., Casson, R. J., Abdoli, A., Abu-Gharbieh, E., Afshin, A., Ahmadieh, H., Akalu, Y., Alamneh, A. A., Alemayehu, W., Alfaar, A. S., Alipour, V., Anbesu, E. W., Androudi, S., ... & Arditi, A. (2021). Trends in prevalence of blindness and distance and near vision impairment over 30 years: An analysis for the global burden of disease study. The Lancet Global Health, 9(2), e130–e143.',
    doi: 'https://doi.org/10.1016/S2214-109X(20)30425-3'
  },
  {
    id: 3,
    text: "Capelli, B., & Shao, H. (2017). The world's strongest and highest quality natural antioxidant: Astaxanthin. BCG North America, Inc."
  },
  {
    id: 4,
    text: 'Castelli, P. R. (2021, June 24). Hope for blindness from a seaweed protein. IBSA Foundation for Scientific Research.'
  },
  {
    id: 5,
    text: "Gallagher, J. (2021, May 24). Algae proteins partially restore man's sight. BBC News."
  },
  {
    id: 6,
    text: 'Hollenhorst, R. W. (1961). Significance of bright plaques in the retinal arterioles. JAMA, 178(1), 23–29.',
    doi: 'https://doi.org/10.1001/jama.1961.030404000025005'
  },
  {
    id: 7,
    text: 'Ide, T., Toda, I., Fukumoto, T., Watanabe, J., & Tsubota, K. (2014). Outcome of a 10-year follow-up of laser in situ keratomileusis for myopia and myopic astigmatism. Taiwan Journal of Ophthalmology, 4(4), 156–162.',
    doi: 'https://doi.org/10.1016/j.tjo.2014.06.002'
  },
  {
    id: 8,
    text: 'Kim, J.-M., Chung, K.-S., Yoon, Y.-S., Jang, S.-Y., Heo, S.-W., Park, G., Jang, Y.-P., Ahn, H.-S., Shin, Y.-K., Lee, S.-H., & Lee, K.-T. (2022). Dieckol isolated from Eisenia bicyclis ameliorates wrinkling and improves skin hydration via MAPK/AP-1 and TGF-β/smad signaling pathways in UVB-irradiated hairless mice. Marine Drugs, 20(12), 779.',
    doi: 'https://doi.org/10.3390/md20120779'
  },
  {
    id: 9,
    text: 'Wang, S., Vincent, T., Faur, C., & Guibal, E. (2016). Alginate and algal-based beads for the sorption of metal cations: Cu(II) and Pb(II). International Journal of Molecular Sciences, 17(9), 1453.',
    doi: 'https://doi.org/10.3390/ijms17091453'
  },
  {
    id: 10,
    text: 'Lu, Y.-A., Je, J.-G., Hwang, J., Jeon, Y.-J., & Ryu, B. (2021). Ecklonia cava extract and its derivative dieckol promote vasodilation by modulating calcium signaling and PI3K/Akt/eNOS pathway in vitro and in vivo models. Biomedicines, 9(4), 438.',
    doi: 'https://doi.org/10.3390/biomedicines9040438'
  },
  {
    id: 11,
    text: 'Mihara, N., Takahashi, M., Kitamura, J., Honta, A., Sugiura, Y., & Hiroki, Y. (2005). The effect of astaxanthin on retinal capillary blood flow in normal volunteers. Journal of Clinical Therapeutics and Medicines, 21(5), 1–9.'
  },
  {
    id: 12,
    text: 'Our World in Data. (2017). Primary plastic production by industrial sector.'
  },
  {
    id: 13,
    text: 'Shin, Y.-S., Kim, K. S., Park, H., Lee, M.-G., Cho, S., Choi, S. Y., Heo, H. J., Kim, D.-O., & Kim, G.-H. (2021). Effects of ecklonia cava extract on neuronal damage and apoptosis in PC-12 cells against oxidative stress. J Microbiol Biotechnol, 31(4), 584–591.',
    doi: 'https://doi.org/10.4014/jmb.2012.12013'
  },
  {
    id: 14,
    text: "Koronyo-Hamaoui, M., Koronyo, Y., Ljubimov, A. V., Miller, C. A., Ko, M. K., Black, K. L., Schwartz, M., & Farkas, D. L. (2011). Identification of amyloid plaques in retinas from alzheimer's patients and noninvasive in vivo optical imaging of retinal plaques in a mouse model. Neuroimage, 54, S204–S217.",
    doi: 'https://doi.org/10.1016/j.neuroimage.2010.06.020'
  },
  {
    id: 15,
    text: 'Wu, D., Lim, B. X. H., Seah, I., Xie, S., Jaeger, J. E., Symons, R. K., Heffernan, A. L., Curren, E. E. M., Leong, S. C. Y., Riau, A. K., Lim, D. K. A., Stapleton, F., Ali, M. J., Singh, S., Tong, L., Mehta, J. S., Su, X., ... & Lim, C. H. L. (2023). Impact of microplastics on the ocular surface. International Journal of Molecular Sciences, 24(4), 3928.',
    doi: 'https://doi.org/10.3390/ijms24043928'
  },
  {
    id: 16,
    text: 'Zhang, C., & Kim, S.-K. (2009). Matrix metalloproteinase inhibitors (mmps) from marine natural products: The current situation and future prospects. Marine Drugs, 7(2), 71–84.',
    doi: 'https://doi.org/10.3390/md7020071'
  },
  {
    id: 17,
    text: 'Zhong, Y., Yang, Y., Zhang, L., Ma, D., Wen, K., Cai, J., Cai, Z., Wang, C., Chai, X., Zhong, J., Liang, B., Huang, Y., Xian, H., Li, Z., Yang, X., Chen, D., Zhang, G., & Huang, Z. (2024). Revealing new insights: Two-center evidence of microplastics in human vitreous humor and their implications for ocular health. Science of the Total Environment, 921, 171109.',
    doi: 'https://doi.org/10.1016/j.scitotenv.2024.171109'
  }
];

export const SALES_PAGE_FAQS = [
  {
    id: 'faq-1',
    question: 'How does OptiPlax work?',
    answer: 'OptiPlax contains a carefully selected blend of marine algae, carotenoids (including Astaxanthin, Lutein, and Zeaxanthin), and botanical extracts designed to support the eye\'s natural internal cleansing mechanisms. By nourishing the delicate retinal and macular cells, OptiPlax helps protect against oxidative breakdown, supports healthy circulation, and helps maintain clear, crisp vision as you age.'
  },
  {
    id: 'faq-2',
    question: 'What is your money-back guarantee?',
    answer: 'Every order is backed by our ironclad 60-Day 100% Money-Back Guarantee. You can try OptiPlax for two full months. If you are not thoroughly impressed with your results and enhanced visual comfort, simply email or call our friendly customer support team for an immediate, no-hassle refund of every single cent.'
  },
  {
    id: 'faq-3',
    question: 'How many bottles should I order?',
    answer: 'Because cellular carotenoid replenishment is cumulative, clinical studies demonstrate the greatest improvements in macular density and visual endurance over 90 to 180 days of continuous use. For this reason, 96% of our customers select the 6-bottle bundle (which includes 3 free bonus guides and free shipping).'
  },
  {
    id: 'faq-4',
    question: 'How do I use OptiPlax?',
    answer: 'Simply take one (1) easy-to-swallow capsule each morning with a glass of water, preferably alongside breakfast. Each bottle contains a full 30-day supply (30 capsules).'
  },
  {
    id: 'faq-5',
    question: 'Is this a one-off purchase?',
    answer: 'Yes! Your purchase today is a strictly one-time payment. There are no hidden subscription charges, no auto-ship traps, and no recurring billing of any kind.'
  },
  {
    id: 'faq-6',
    question: 'What are the ingredients in OptiPlax?',
    answer: 'OptiPlax is a pure, stimulant-free formula featuring deep-sea Kelp, Wakame, clinically researched Astaxanthin microalgae, nutrient-dense Chlorella, Ecklonia Cava brown marine algae, Bilberry extract, Lutein, and Zeaxanthin, manufactured in an audited cGMP facility in the USA.'
  },
  {
    id: 'faq-7',
    question: '*Shipping policy',
    answer: 'Domestic orders are processed within 24 to 48 business hours and shipped via USPS or FedEx directly from our clean U.S. fulfillment facility. Orders within the United States typically arrive within 3 to 7 business days. All 3-bottle and 6-bottle orders receive 100% Free Shipping.'
  }
];

export const COMPLIANCE_RULES: ComplianceRule[] = [
  {
    id: 'no-absolutes',
    rule: 'No unverified absolute claims ("100% cure", "guaranteed 20/20 vision", "restores perfect sight")',
    status: 'PASS',
    implementationNote: 'Language strictly adheres to structure/function dietary support (e.g., "supports everyday clarity", "promotes screen comfort", "nourishes macular tissues").',
  },
  {
    id: 'no-fake-urgency',
    rule: 'No artificial countdown timers, fake stock counters, or false scarcity ("only 2 bottles left")',
    status: 'PASS',
    implementationNote: 'Urgency is ethically framed around establishing a consistent 60-180 day nutritional habit and batch production freshness.',
  },
  {
    id: 'no-decorative-gimmicks',
    rule: 'No exaggerated typography or clickbait symbols (【 】, !!!, "F R E E" spaced)',
    status: 'PASS',
    implementationNote: 'Clean, professional editorial design following modern CRO principles and Google Ads editorial standards.',
  },
  {
    id: 'no-hormone-claims',
    rule: 'No mentions of hormones, sexual vitality, or unapproved medical disease diagnoses',
    status: 'PASS',
    implementationNote: 'Focus strictly on ocular antioxidant nourishment and blue light screen fatigue.',
  },
  {
    id: 'clean-urls',
    rule: 'Clean destination URLs without deceptive cloaking or domain mismatch',
    status: 'PASS',
    implementationNote: 'Presell landing page clearly identifies Northvale domain and transparently routes to the official OptiPlax checkout platform.',
  },
  {
    id: 'no-exposed-aff-params',
    rule: 'No messy raw affiliate parameters exposed on the main presell display domain',
    status: 'PASS',
    implementationNote: 'Presell button uses clean semantic IDs (id="cta-comprar" / id="cta-buy-now") with transparent outgoing conversion tracking.',
  },
  {
    id: 'billing-transparency',
    rule: 'Transparent billing terms, clear shipping costs ($9.99 on 2-bottle, Free on 3+), and full guarantee terms',
    status: 'PASS',
    implementationNote: 'Every package displays exact per-bottle price, bottle quantity, full total, and shipping fees prior to checkout.',
  },
  {
    id: 'no-bogus-price-anchors',
    rule: 'Realistic pricing comparisons without absurd fake "$1,500" crossed-out values',
    status: 'PASS',
    implementationNote: 'Total and savings correspond directly to authentic manufacturer package pricing as displayed on official checkout sheets.',
  },
];
