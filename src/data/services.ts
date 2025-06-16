export interface ServiceData {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  approach: string;
  benefits: string[];
  beforeAfterImages: string[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    image: string;
  }>;
  pricing: {
    startingPrice: string;
    sessionInfo: string;
    packageDeals: string;
  };
}

export const servicesData: ServiceData[] = [
  // Slimming Services
  {
    slug: 'cool-sculpting',
    name: 'Cool Sculpting',
    category: 'Slimming',
    tagline: 'Freeze Away Stubborn Fat, Permanently.',
    description: 'CoolSculpting is a revolutionary non-invasive fat reduction treatment that uses controlled cooling technology to eliminate stubborn fat cells that resist diet and exercise. This FDA-approved procedure targets specific areas of the body, crystallizing fat cells which are then naturally eliminated by your body over time. Unlike surgical procedures, CoolSculpting requires no downtime and provides natural-looking results that last.',
    approach: 'At VIVAA, our certified CoolSculpting specialists use the latest generation technology with multiple applicators designed for different body areas. We begin with a comprehensive consultation to assess your goals and create a customized treatment plan. Our medical-grade approach ensures optimal results while maintaining the highest safety standards throughout your journey.',
    benefits: [
      'Non-surgical and completely non-invasive',
      'No downtime - return to normal activities immediately',
      'Permanent fat cell elimination in treated areas',
      'Natural-looking, gradual results',
      'FDA-approved and clinically proven safe',
      'Targets stubborn fat areas resistant to diet and exercise',
      'Comfortable treatment with minimal discomfort',
      'Customizable to your specific body contours'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/cool sculpting/2.webp',
      '/images/viva-banner-images/cool sculpting/1.webp',
      '/images/viva-banner-images/cool sculpting/3.webp',
      '/images/viva-banner-images/cool sculpting/4.webp',
      '/images/viva-banner-images/cool sculpting/5.webp', 
      '/images/viva-banner-images/cool sculpting/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Assessment',
        description: 'Comprehensive evaluation of your goals and treatment areas with our certified specialists'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized treatment plan designed specifically for your body type and desired outcomes'
      },
      {
        step: 3,
        title: 'CoolSculpting Session',
        description: 'Comfortable treatment session lasting 35-60 minutes per area with controlled cooling'
      },
      {
        step: 4,
        title: 'Natural Elimination',
        description: 'Your body naturally processes and eliminates the crystallized fat cells over 2-3 months'
      },
      {
        step: 5,
        title: 'Results & Follow-up',
        description: 'Visible results appear gradually with final results typically seen at 3 months'
      }
    ],
    faqs: [
      {
        question: 'Is CoolSculpting painful?',
        answer: 'Most patients experience mild discomfort during the initial cooling phase, which subsides as the area becomes numb. The procedure is generally well-tolerated, and many patients read, work on laptops, or relax during treatment.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Most patients see significant results with 1-2 sessions per treatment area. Your specialist will recommend the optimal number based on your goals and the amount of fat in the target area.'
      },
      {
        question: 'When will I see results?',
        answer: 'Initial results may be visible as early as 3 weeks, with most dramatic results after 2-3 months as your body naturally eliminates the treated fat cells. Results continue to improve for up to 6 months.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'CoolSculpting requires no downtime. You can return to normal activities immediately after treatment. Some patients experience temporary redness, swelling, or numbness in the treated area.'
      },
      {
        question: 'Are the results permanent?',
        answer: 'Yes, the fat cells eliminated by CoolSculpting are gone permanently. However, maintaining a healthy lifestyle is important to prevent remaining fat cells from expanding.'
      },
      {
        question: 'Which areas can be treated?',
        answer: 'CoolSculpting can treat various areas including abdomen, flanks (love handles), thighs, arms, back fat, bra line, and under the chin (double chin).'
      }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        rating: 5,
        text: 'Amazing results! I lost inches from my stubborn belly fat that wouldn\'t go away despite diet and exercise. The staff was professional and the treatment was comfortable.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Rajesh Kumar',
        rating: 5,
        text: 'CoolSculpting at VIVAA exceeded my expectations. No downtime and natural-looking results. I finally got rid of my love handles!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹25,000 per area',
      sessionInfo: '1-2 sessions typically needed',
      packageDeals: 'Multi-area packages available with up to 20% savings'
    }
  },
  {
    slug: 'rf-technology',
    name: 'RF Technology',
    category: 'Slimming',
    tagline: 'Tighten, Tone, and Transform with Radio Frequency.',
    description: 'Radio Frequency (RF) technology represents the cutting edge of non-invasive body contouring and skin tightening. This advanced treatment uses controlled thermal energy to heat the deeper layers of skin, stimulating natural collagen production and tightening loose skin. RF technology is highly effective for body contouring, skin tightening, reducing cellulite appearance, and improving overall skin texture and tone.',
    approach: 'Our state-of-the-art RF systems at VIVAA deliver precise thermal energy to target areas, promoting natural collagen regeneration and skin tightening. Our trained specialists ensure optimal temperature control for maximum efficacy while maintaining your comfort and safety throughout the treatment. We customize each session based on your skin type and treatment goals.',
    benefits: [
      'Non-invasive skin tightening and body contouring',
      'Stimulates natural collagen production',
      'Reduces cellulite appearance significantly',
      'Improves skin texture and tone',
      'No surgery, needles, or incisions required',
      'Minimal to no downtime',
      'Suitable for all skin types',
      'Gradual, natural-looking results'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/Rf technology/1.webp',
      '/images/viva-banner-images/Rf technology/2.webp',
      '/images/viva-banner-images/Rf technology/3.webp',
      '/images/viva-banner-images/Rf technology/4.webp',
      '/images/viva-banner-images/Rf technology/5.webp', 
      '/images/viva-banner-images/Rf technology/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Skin Assessment',
        description: 'Thorough evaluation of your skin condition and treatment areas'
      },
      {
        step: 2,
        title: 'Treatment Preparation',
        description: 'Application of conductive gel and positioning of RF applicators'
      },
      {
        step: 3,
        title: 'RF Energy Delivery',
        description: 'Controlled thermal energy delivered to stimulate collagen production'
      },
      {
        step: 4,
        title: 'Cooling & Recovery',
        description: 'Immediate cooling and post-treatment care instructions'
      },
      {
        step: 5,
        title: 'Progressive Results',
        description: 'Gradual improvement over 3-6 months as new collagen forms'
      }
    ],
    faqs: [
      {
        question: 'How does RF technology work?',
        answer: 'RF energy heats the deeper layers of skin, causing collagen fibers to contract immediately and stimulating new collagen production over time, resulting in tighter, firmer skin and improved body contours.'
      },
      {
        question: 'Is the treatment comfortable?',
        answer: 'Most patients describe the sensation as a warm massage. The treatment is generally comfortable with adjustable intensity levels to ensure your comfort throughout the session.'
      },
      {
        question: 'How many treatments are recommended?',
        answer: 'Typically 6-8 sessions are recommended for optimal results, with treatments spaced 1-2 weeks apart. Maintenance sessions may be recommended every 6-12 months.'
      },
      {
        question: 'When will I see results?',
        answer: 'Some improvement may be visible immediately due to collagen contraction, with progressive results over 3-6 months as new collagen forms and skin continues to tighten.'
      }
    ],
    testimonials: [
      {
        name: 'Anita Reddy',
        rating: 5,
        text: 'RF treatment at VIVAA tightened my loose skin after weight loss. The results are amazing and completely natural-looking!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹8,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Package deals available with significant savings'
    }
  },
  {
    slug: 'fat-drainage',
    name: 'Fat Drainage',
    category: 'Slimming',
    tagline: 'Natural Lymphatic Drainage for Body Detox.',
    description: 'Fat drainage therapy is a specialized lymphatic drainage technique that helps eliminate toxins, reduce water retention, and improve circulation. This gentle, non-invasive treatment stimulates the lymphatic system to naturally remove waste products and excess fluids from the body, resulting in reduced bloating, improved skin tone, and enhanced overall wellness.',
    approach: 'Our certified therapists at VIVAA use advanced manual lymphatic drainage techniques combined with specialized equipment to enhance your body\'s natural detoxification process. We customize each session based on your specific needs and health goals, ensuring optimal results while maintaining complete comfort and safety.',
    benefits: [
      'Reduces water retention and bloating',
      'Improves lymphatic circulation',
      'Enhances natural detoxification',
      'Reduces appearance of cellulite',
      'Improves skin tone and texture',
      'Boosts immune system function',
      'Completely natural and non-invasive',
      'Promotes overall wellness'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/fat drainage/1.webp',
      '/images/viva-banner-images/fat drainage/2.webp',
      '/images/viva-banner-images/fat drainage/3.webp',
      '/images/viva-banner-images/fat drainage/4.webp',
      '/images/viva-banner-images/fat drainage/5.webp', 
      '/images/viva-banner-images/fat drainage/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Health Assessment',
        description: 'Comprehensive evaluation of your lymphatic system and health status'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized drainage protocol based on your specific needs'
      },
      {
        step: 3,
        title: 'Manual Drainage',
        description: 'Gentle lymphatic massage using specialized techniques'
      },
      {
        step: 4,
        title: 'Equipment Enhancement',
        description: 'Advanced drainage equipment to maximize results'
      },
      {
        step: 5,
        title: 'Post-Treatment Care',
        description: 'Hydration and lifestyle recommendations for optimal results'
      }
    ],
    faqs: [
      {
        question: 'What is lymphatic drainage?',
        answer: 'Lymphatic drainage is a gentle massage technique that stimulates the lymphatic system to remove toxins, excess fluids, and waste products from the body naturally.'
      },
      {
        question: 'How often should I get treatments?',
        answer: 'For optimal results, we recommend 2-3 sessions per week initially, then maintenance sessions once a week or as needed based on your goals.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Fat drainage is completely safe with no side effects. Some patients may experience increased urination as the body eliminates excess fluids.'
      },
      {
        question: 'Who can benefit from this treatment?',
        answer: 'Anyone looking to reduce bloating, improve circulation, detoxify their body, or enhance their overall wellness can benefit from fat drainage therapy.'
      }
    ],
    testimonials: [
      {
        name: 'Kavya Singh',
        rating: 5,
        text: 'The fat drainage sessions helped me feel lighter and less bloated. My skin looks healthier and I have more energy!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹3,500 per session',
      sessionInfo: '8-10 sessions recommended',
      packageDeals: 'Package deals available with attractive discounts'
    }
  },
  {
    slug: 'cellulite-reduction',
    name: 'Cellulite Reduction',
    category: 'Slimming',
    tagline: 'Smooth Away Cellulite for Flawless Skin.',
    description: 'Our advanced cellulite reduction treatments target the underlying causes of cellulite using a combination of cutting-edge technologies. We address the fibrous bands that create the dimpled appearance while improving circulation and skin elasticity. Our multi-modal approach ensures comprehensive treatment for smoother, firmer skin texture.',
    approach: 'VIVAA employs a combination of radiofrequency, acoustic wave therapy, and specialized massage techniques to break down cellulite and improve skin texture. Our treatment protocol is customized based on the severity of cellulite and your skin type, ensuring optimal results with minimal discomfort.',
    benefits: [
      'Significantly reduces cellulite appearance',
      'Improves skin texture and smoothness',
      'Enhances circulation and lymphatic drainage',
      'Tightens and firms skin',
      'Non-invasive with no downtime',
      'Long-lasting results with maintenance',
      'Suitable for all skin types',
      'Boosts confidence and self-esteem'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/cellulite reducation/1.webp',
      '/images/viva-banner-images/cellulite reducation/2.webp',
      '/images/viva-banner-images/cellulite reducation/3.webp',
      '/images/viva-banner-images/cellulite reducation/4.webp',
      '/images/viva-banner-images/cellulite reducation/5.webp', 
      '/images/viva-banner-images/cellulite reducation/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Cellulite Assessment',
        description: 'Detailed evaluation of cellulite grade and skin condition'
      },
      {
        step: 2,
        title: 'Treatment Protocol',
        description: 'Customized combination therapy plan for optimal results'
      },
      {
        step: 3,
        title: 'Multi-Modal Treatment',
        description: 'RF energy, acoustic waves, and massage therapy application'
      },
      {
        step: 4,
        title: 'Skin Conditioning',
        description: 'Post-treatment skin care and conditioning protocols'
      },
      {
        step: 5,
        title: 'Maintenance Plan',
        description: 'Long-term maintenance strategy for sustained results'
      }
    ],
    faqs: [
      {
        question: 'What causes cellulite?',
        answer: 'Cellulite is caused by fibrous bands pulling down on the skin while fat pushes up, creating a dimpled appearance. Factors include genetics, hormones, and lifestyle.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Most patients see improvement after 6-8 sessions, with optimal results achieved after 10-12 sessions spaced 1-2 weeks apart.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'The treatment is generally comfortable, with most patients describing it as a warm massage. Intensity can be adjusted for your comfort level.'
      },
      {
        question: 'How long do results last?',
        answer: 'Results can last 6-12 months with proper maintenance. Regular exercise and healthy lifestyle help maintain improvements longer.'
      }
    ],
    testimonials: [
      {
        name: 'Meera Patel',
        rating: 5,
        text: 'My cellulite has dramatically improved! The treatment was comfortable and the results exceeded my expectations.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹6,000 per session',
      sessionInfo: '8-12 sessions recommended',
      packageDeals: 'Cellulite reduction packages with up to 25% savings'
    }
  },
  {
    slug: 'laser-lipolysis',
    name: 'Laser Lipolysis',
    category: 'Slimming',
    tagline: 'Precision Fat Removal with Laser Technology.',
    description: 'Laser lipolysis is an advanced, minimally invasive fat reduction technique that uses laser energy to liquefy fat cells before removal. This precise method allows for targeted fat reduction in specific areas while simultaneously tightening the skin. The procedure offers superior contouring results with minimal downtime compared to traditional liposuction.',
    approach: 'At VIVAA, our skilled practitioners use state-of-the-art laser lipolysis technology with multiple wavelengths to ensure optimal fat removal and skin tightening. We employ advanced safety protocols and precise techniques to deliver exceptional results while minimizing discomfort and recovery time.',
    benefits: [
      'Precise fat removal and body contouring',
      'Simultaneous skin tightening effect',
      'Minimally invasive with small incisions',
      'Faster recovery than traditional liposuction',
      'Reduced bleeding and bruising',
      'Improved skin elasticity',
      'Long-lasting, dramatic results',
      'Suitable for various body areas'
    ],
    beforeAfterImages: [
        '/images/viva-banner-images/laser lipolylsis/1.webp',
        '/images/viva-banner-images/laser lipolylsis/2.webp',
        '/images/viva-banner-images/laser lipolylsis/3.webp',
        '/images/viva-banner-images/laser lipolylsis/4.webp',
        '/images/viva-banner-images/laser lipolylsis/5.webp', 
        '/images/viva-banner-images/laser lipolylsis/6.webp'

    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Consultation',
        description: 'Detailed assessment and treatment area marking'
      },
      {
        step: 2,
        title: 'Pre-Treatment Preparation',
        description: 'Local anesthesia and sterile field preparation'
      },
      {
        step: 3,
        title: 'Laser Application',
        description: 'Precise laser energy delivery to liquefy fat cells'
      },
      {
        step: 4,
        title: 'Fat Removal',
        description: 'Gentle suction removal of liquefied fat'
      },
      {
        step: 5,
        title: 'Recovery & Results',
        description: 'Post-procedure care and progressive result monitoring'
      }
    ],
    faqs: [
      {
        question: 'How is laser lipolysis different from regular liposuction?',
        answer: 'Laser lipolysis uses laser energy to liquefy fat before removal, resulting in less trauma, reduced bleeding, faster recovery, and additional skin tightening benefits.'
      },
      {
        question: 'What areas can be treated?',
        answer: 'Common areas include abdomen, flanks, thighs, arms, neck, and chin. We can treat most areas where excess fat is present.'
      },
      {
        question: 'How long is the recovery period?',
        answer: 'Most patients return to normal activities within 2-3 days, with full recovery typically achieved within 1-2 weeks.'
      },
      {
        question: 'Are the results permanent?',
        answer: 'Yes, the fat cells removed are permanently eliminated. However, maintaining a healthy lifestyle is important to prevent new fat accumulation.'
      }
    ],
    testimonials: [
      {
        name: 'Arjun Mehta',
        rating: 5,
        text: 'Laser lipolysis gave me the body contour I always wanted. The recovery was much easier than I expected!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹45,000 per area',
      sessionInfo: 'Single session procedure',
      packageDeals: 'Multi-area packages available with significant savings'
    }
  },
  {
    slug: 'passive-ems',
    name: 'Passive EMS',
    category: 'Slimming',
    tagline: 'Build Muscle and Burn Fat Without Exercise.',
    description: 'Passive EMS (Electrical Muscle Stimulation) technology provides intense muscle contractions equivalent to thousands of crunches or squats in a single session. This revolutionary treatment builds muscle mass, burns fat, and improves muscle tone without the need for strenuous exercise. It\'s perfect for busy individuals or those unable to perform traditional workouts.',
    approach: 'Our advanced EMS systems at VIVAA deliver high-intensity electromagnetic energy to stimulate supramaximal muscle contractions. These contractions are more intense than what can be achieved through voluntary exercise, leading to rapid muscle building and fat reduction. We customize intensity levels based on your fitness level and goals.',
    benefits: [
      'Builds muscle mass effectively',
      'Burns fat simultaneously',
      'No physical exertion required',
      'Equivalent to thousands of exercises',
      'Improves muscle tone and definition',
      'No downtime or recovery needed',
      'Suitable for all fitness levels',
      'Targets specific muscle groups'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/passive ems/1.webp',
      '/images/viva-banner-images/passive ems/2.webp',
      '/images/viva-banner-images/passive ems/3.webp',
      '/images/viva-banner-images/passive ems/4.webp',
      '/images/viva-banner-images/passive ems/5.webp',
      '/images/viva-banner-images/passive ems/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Fitness Assessment',
        description: 'Evaluation of current muscle tone and fitness goals'
      },
      {
        step: 2,
        title: 'Treatment Setup',
        description: 'Positioning of EMS applicators on target muscle groups'
      },
      {
        step: 3,
        title: 'EMS Session',
        description: '30-minute session with progressive intensity levels'
      },
      {
        step: 4,
        title: 'Cool Down',
        description: 'Gradual intensity reduction and muscle relaxation'
      },
      {
        step: 5,
        title: 'Progress Tracking',
        description: 'Regular assessment of muscle development and fat reduction'
      }
    ],
    faqs: [
      {
        question: 'How does EMS build muscle?',
        answer: 'EMS creates supramaximal muscle contractions that are more intense than voluntary exercise, forcing muscles to adapt and grow stronger.'
      },
      {
        question: 'Is EMS safe?',
        answer: 'Yes, EMS is FDA-approved and completely safe when performed by trained professionals. It\'s been used in medical rehabilitation for decades.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Most patients see initial results after 4 sessions, with optimal results achieved after 8-10 sessions over 4-5 weeks.'
      },
      {
        question: 'Can EMS replace regular exercise?',
        answer: 'While EMS is highly effective for muscle building and fat reduction, it\'s best used as a complement to a healthy lifestyle and regular exercise.'
      }
    ],
    testimonials: [
      {
        name: 'Rohit Sharma',
        rating: 5,
        text: 'EMS helped me build abs without spending hours at the gym. The results are incredible and the treatment is so convenient!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹5,000 per session',
      sessionInfo: '8-10 sessions recommended',
      packageDeals: 'EMS packages available with up to 30% savings'
    }
  },
  {
    slug: 'fat-reduction-ultrasound-treatment',
    name: 'Fat Reduction Ultrasound Treatment',
    category: 'Slimming',
    tagline: 'Ultrasonic Fat Destruction for Precise Contouring.',
    description: 'Ultrasound fat reduction uses focused ultrasonic energy to selectively target and destroy fat cells while leaving surrounding tissues unharmed. This non-invasive treatment permanently eliminates fat cells, which are then naturally processed and eliminated by the body\'s lymphatic system. It\'s ideal for stubborn fat areas that resist diet and exercise.',
    approach: 'Our advanced ultrasound systems at VIVAA deliver precise, focused energy to target fat layers at specific depths. We use real-time monitoring to ensure optimal energy delivery while maintaining patient comfort and safety. Each treatment is customized based on the area being treated and individual patient needs.',
    benefits: [
      'Non-invasive fat cell destruction',
      'Precise targeting of fat layers',
      'No damage to surrounding tissues',
      'Permanent fat cell elimination',
      'No downtime required',
      'Comfortable treatment experience',
      'Natural body elimination process',
      'Suitable for various body areas'
    ],
    beforeAfterImages: [
        '/images/viva-banner-images/fat reducation ultrasound/1.webp',
        '/images/viva-banner-images/fat reducation ultrasound/2.webp',
        '/images/viva-banner-images/fat reducation ultrasound/3.webp',
        '/images/viva-banner-images/fat reducation ultrasound/4.webp',
        '/images/viva-banner-images/fat reducation ultrasound/5.webp',
        '/images/viva-banner-images/fat reducation ultrasound/6.webp' 
    ],
    processSteps: [
      {
        step: 1,
        title: 'Area Assessment',
        description: 'Detailed evaluation of treatment areas and fat thickness'
      },
      {
        step: 2,
        title: 'Treatment Mapping',
        description: 'Precise marking and planning of ultrasound application areas'
      },
      {
        step: 3,
        title: 'Ultrasound Application',
        description: 'Focused ultrasonic energy delivery to target fat cells'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Immediate care and instructions for optimal results'
      },
      {
        step: 5,
        title: 'Natural Elimination',
        description: 'Body naturally processes and eliminates destroyed fat cells'
      }
    ],
    faqs: [
      {
        question: 'How does ultrasound destroy fat cells?',
        answer: 'Focused ultrasonic energy creates cavitation bubbles that disrupt fat cell membranes, causing them to break down and be naturally eliminated by the body.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'Most patients experience minimal discomfort, describing the sensation as a warm tingling. The treatment is generally well-tolerated.'
      },
      {
        question: 'How many treatments are needed?',
        answer: 'Typically 3-6 sessions are recommended, spaced 2-4 weeks apart, depending on the area treated and desired results.'
      },
      {
        question: 'When will I see results?',
        answer: 'Initial results may be visible after 2-3 weeks, with continued improvement over 2-3 months as the body eliminates destroyed fat cells.'
      }
    ],
    testimonials: [
      {
        name: 'Sneha Gupta',
        rating: 5,
        text: 'The ultrasound treatment was so comfortable and effective. I lost inches from my waist without any downtime!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹12,000 per session',
      sessionInfo: '3-6 sessions recommended',
      packageDeals: 'Ultrasound packages with attractive pricing available'
    }
  },
  {
    slug: 'needleless-lipo-dissolve',
    name: 'Needleless Lipo Dissolve',
    category: 'Slimming',
    tagline: 'Fat Dissolving Without Needles or Surgery.',
    description: 'Needleless lipo dissolve is an innovative fat reduction treatment that uses advanced transdermal technology to deliver fat-dissolving compounds directly into adipose tissue without needles or injections. This comfortable, non-invasive procedure breaks down fat cells naturally while tightening the skin for improved body contours.',
    approach: 'VIVAA\'s needleless lipo dissolve technology uses electroporation and iontophoresis to enhance the penetration of fat-dissolving compounds through the skin. This advanced delivery system ensures optimal absorption and effectiveness while maintaining complete patient comfort throughout the treatment process.',
    benefits: [
      'No needles or injections required',
      'Completely painless treatment',
      'Dissolves fat cells naturally',
      'Tightens skin simultaneously',
      'No downtime or recovery needed',
      'Suitable for needle-phobic patients',
      'Multiple areas can be treated',
      'Natural-looking results'
    ],
    beforeAfterImages: [
        '/images/viva-banner-images/needless lipo desolve/1.webp',
        '/images/viva-banner-images/needless lipo desolve/2.webp',
        '/images/viva-banner-images/needless lipo desolve/3.webp',
        '/images/viva-banner-images/needless lipo desolve/4.webp',
        '/images/viva-banner-images/needless lipo desolve/5.webp',  
        '/images/viva-banner-images/needless lipo desolve/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Planning',
        description: 'Assessment of treatment areas and customized protocol development'
      },
      {
        step: 2,
        title: 'Skin Preparation',
        description: 'Cleansing and preparation of treatment areas'
      },
      {
        step: 3,
        title: 'Compound Application',
        description: 'Application of specialized fat-dissolving compounds'
      },
      {
        step: 4,
        title: 'Transdermal Delivery',
        description: 'Advanced technology enhances compound penetration'
      },
      {
        step: 5,
        title: 'Post-Treatment Care',
        description: 'Aftercare instructions and follow-up scheduling'
      }
    ],
    faqs: [
      {
        question: 'How effective is needleless lipo dissolve?',
        answer: 'Needleless lipo dissolve is highly effective for reducing localized fat deposits, with results comparable to traditional injection methods but with greater comfort.'
      },
      {
        question: 'Is there any discomfort?',
        answer: 'The treatment is completely painless. Patients may feel a slight tingling sensation during the transdermal delivery process.'
      },
      {
        question: 'How many sessions are required?',
        answer: 'Most patients achieve optimal results with 6-8 sessions, spaced 1-2 weeks apart, depending on the area treated and individual response.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Side effects are minimal and may include temporary redness or mild swelling at the treatment site, which resolves within hours.'
      }
    ],
    testimonials: [
      {
        name: 'Priya Nair',
        rating: 5,
        text: 'Perfect for someone like me who hates needles! The treatment was completely comfortable and the results are fantastic.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹8,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Needleless lipo packages with up to 25% savings'
    }
  },
  // Skin Treatment Services
  {
    slug: 'peels',
    name: 'Chemical Peels',
    category: 'Skin Treatments',
    tagline: 'Reveal Your Most Radiant Skin.',
    description: 'Chemical peels are advanced cosmetic treatments that use carefully formulated acid solutions to remove damaged skin layers, revealing fresher, smoother, and more youthful skin underneath. Our comprehensive range includes light, medium, and deep peels to address various skin concerns including fine lines, wrinkles, acne scars, hyperpigmentation, and uneven skin tone. Each peel is customized to your specific skin type and concerns.',
    approach: 'At VIVAA, our dermatological experts perform thorough skin analysis using advanced diagnostic tools to determine the most appropriate peel type and strength for your skin. We use medical-grade formulations and follow strict safety protocols to ensure optimal results with minimal risk. Our post-treatment care program ensures proper healing and maximum benefits.',
    benefits: [
      'Dramatically improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Minimizes acne scars and pigmentation',
      'Stimulates cellular renewal and collagen production',
      'Enhances skin radiance and luminosity',
      'Customizable treatment depths for all skin types',
      'Addresses multiple skin concerns simultaneously',
      'Long-lasting results with proper maintenance'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/peels/1.webp' ,
      '/images/viva-banner-images/peels/2.webp',
      '/images/viva-banner-images/peels/3.webp',
      '/images/viva-banner-images/peels/4.webp',
      '/images/viva-banner-images/peels/5.webp',
      '/images/viva-banner-images/peels/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Skin Analysis',
        description: 'Detailed assessment of your skin type, concerns, and treatment goals'
      },
      {
        step: 2,
        title: 'Pre-treatment Preparation',
        description: 'Skin preparation protocol to optimize peel results and minimize risks'
      },
      {
        step: 3,
        title: 'Peel Application',
        description: 'Precise application of customized chemical peel solution'
      },
      {
        step: 4,
        title: 'Neutralization & Care',
        description: 'Professional neutralization and immediate post-treatment care'
      },
      {
        step: 5,
        title: 'Recovery & Results',
        description: 'Guided recovery process with progressive skin improvement'
      }
    ],
    faqs: [
      {
        question: 'Which peel is right for my skin?',
        answer: 'Our specialists will assess your skin type, concerns, and goals to recommend the most suitable peel, from light superficial peels for maintenance to deeper peels for significant skin concerns.'
      },
      {
        question: 'Is there downtime after a peel?',
        answer: 'Downtime varies by peel depth. Light peels may cause minimal peeling for 3-5 days, while deeper peels may require 1-2 weeks of recovery with more significant peeling.'
      },
      {
        question: 'How often can I get chemical peels?',
        answer: 'Light peels can be done every 2-4 weeks, medium peels every 3-6 months, while deeper peels are typically spaced 6-12 months apart.'
      },
      {
        question: 'Are chemical peels safe?',
        answer: 'When performed by trained professionals using appropriate formulations, chemical peels are very safe with minimal risks. We follow strict protocols to ensure your safety.'
      }
    ],
    testimonials: [
      {
        name: 'Meera Patel',
        rating: 5,
        text: 'The chemical peel at VIVAA transformed my skin! My acne scars are barely visible and my skin glows like never before.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹3,500 per session',
      sessionInfo: 'Series of 4-6 sessions recommended',
      packageDeals: 'Peel packages available with up to 25% savings'
    }
  },
  {
    slug: 'derma-roller',
    name: 'Derma Roller',
    category: 'Skin Treatments',
    tagline: 'Microneedling for Skin Renewal and Rejuvenation.',
    description: 'Derma roller treatment, also known as microneedling, uses fine needles to create controlled micro-injuries in the skin, stimulating the body\'s natural healing process and collagen production. This minimally invasive treatment effectively addresses acne scars, fine lines, enlarged pores, and uneven skin texture while improving overall skin quality and appearance.',
    approach: 'At VIVAA, we use medical-grade derma rollers with precise needle depths customized for different skin areas and concerns. Our sterile technique and post-treatment care protocols ensure optimal results while minimizing any risk of infection or complications. We often combine derma rolling with serums or PRP for enhanced benefits.',
    benefits: [
      'Stimulates natural collagen production',
      'Reduces acne scars and fine lines',
      'Minimizes enlarged pores',
      'Improves skin texture and tone',
      'Enhances product absorption',
      'Minimal downtime required',
      'Suitable for all skin types',
      'Natural skin rejuvenation process'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/derma roller/1.webp',
      '/images/viva-banner-images/derma roller/2.webp',
      '/images/viva-banner-images/derma roller/3.webp',
      '/images/viva-banner-images/derma roller/4.webp',
      '/images/viva-banner-images/derma roller/5.webp',
      '/images/viva-banner-images/derma roller/6.webp'  
    ],
    processSteps: [
      {
        step: 1,
        title: 'Skin Assessment',
        description: 'Thorough evaluation of skin condition and treatment planning'
      },
      {
        step: 2,
        title: 'Preparation & Numbing',
        description: 'Skin cleansing and topical anesthetic application'
      },
      {
        step: 3,
        title: 'Microneedling Treatment',
        description: 'Systematic derma roller application with appropriate pressure'
      },
      {
        step: 4,
        title: 'Serum Application',
        description: 'Application of healing serums or growth factors'
      },
      {
        step: 5,
        title: 'Post-Treatment Care',
        description: 'Aftercare instructions and follow-up scheduling'
      }
    ],
    faqs: [
      {
        question: 'Is derma rolling painful?',
        answer: 'We apply topical numbing cream before treatment, so most patients experience minimal discomfort. The sensation is often described as light scratching.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Most patients see improvement after 3-4 sessions, with optimal results achieved after 6-8 sessions spaced 4-6 weeks apart.'
      },
      {
        question: 'What is the recovery time?',
        answer: 'Skin may appear red for 24-48 hours post-treatment, similar to a mild sunburn. Most patients return to normal activities the next day.'
      },
      {
        question: 'Can derma rolling be combined with other treatments?',
        answer: 'Yes, we often combine derma rolling with PRP, vitamin serums, or other treatments to enhance results and accelerate healing.'
      }
    ],
    testimonials: [
      {
        name: 'Anjali Sharma',
        rating: 5,
        text: 'Derma rolling significantly improved my acne scars. My skin texture is so much smoother and my confidence has returned!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹4,500 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Microneedling packages with significant discounts available'
    }
  },
  {
    slug: 'laser-skin-resurfacing',
    name: 'Laser Skin Resurfacing',
    category: 'Skin Treatments',
    tagline: 'Advanced Laser Technology for Skin Renewal.',
    description: 'Laser skin resurfacing uses precise laser energy to remove damaged skin layers and stimulate new collagen formation. This advanced treatment effectively addresses wrinkles, age spots, acne scars, sun damage, and uneven skin texture. Our state-of-the-art laser systems provide customizable treatment depths for optimal results with minimal downtime.',
    approach: 'VIVAA employs multiple laser technologies including fractional CO2, erbium, and non-ablative lasers to address various skin concerns. Our laser specialists customize treatment parameters based on your skin type, concerns, and desired downtime. We use advanced cooling systems and post-treatment protocols to ensure comfort and optimal healing.',
    benefits: [
      'Dramatically improves skin texture and tone',
      'Reduces wrinkles and fine lines',
      'Minimizes acne scars and pigmentation',
      'Stimulates collagen production',
      'Tightens loose skin',
      'Customizable treatment intensity',
      'Long-lasting results',
      'Suitable for face and body'
    ],
    beforeAfterImages: [
     '/images/viva-banner-images/laser resurfacing/1.webp',
      '/images/viva-banner-images/laser resurfacing/2.webp',
      '/images/viva-banner-images/laser resurfacing/3.webp',
      '/images/viva-banner-images/laser resurfacing/4.webp',
      '/images/viva-banner-images/laser resurfacing/5.webp',
      '/images/viva-banner-images/laser resurfacing/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Consultation',
        description: 'Detailed skin analysis and laser treatment planning'
      },
      {
        step: 2,
        title: 'Pre-Treatment Preparation',
        description: 'Skin conditioning and safety protocols'
      },
      {
        step: 3,
        title: 'Laser Treatment',
        description: 'Precise laser energy delivery with cooling protection'
      },
      {
        step: 4,
        title: 'Immediate Post-Care',
        description: 'Cooling treatment and protective dressing application'
      },
      {
        step: 5,
        title: 'Recovery Monitoring',
        description: 'Follow-up care and healing progress assessment'
      }
    ],
    faqs: [
      {
        question: 'Which laser is best for my skin concerns?',
        answer: 'Our specialists will recommend the most appropriate laser based on your skin type, concerns, and desired downtime. We offer both ablative and non-ablative options.'
      },
      {
        question: 'How long is the recovery period?',
        answer: 'Recovery varies by laser type. Non-ablative treatments have minimal downtime, while ablative treatments may require 5-10 days of healing.'
      },
      {
        question: 'Are the results permanent?',
        answer: 'Laser resurfacing provides long-lasting results, but natural aging continues. Proper skincare and sun protection help maintain results longer.'
      },
      {
        question: 'Is laser resurfacing safe for all skin types?',
        answer: 'We have laser technologies suitable for all skin types. Our specialists will select the safest and most effective option for your specific skin.'
      }
    ],
    testimonials: [
      {
        name: 'Deepika Rao',
        rating: 5,
        text: 'Laser resurfacing completely transformed my skin! The sun damage and fine lines are gone, and my skin looks years younger.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹15,000 per session',
      sessionInfo: '1-3 sessions typically needed',
      packageDeals: 'Laser resurfacing packages with comprehensive care included'
    }
  },
  {
    slug: 'meso-lipo',
    name: 'Meso Lipo',
    category: 'Skin Treatments',
    tagline: 'Facial Contouring and Fat Reduction.',
    description: 'Meso Lipo is an advanced mesotherapy technique that uses micro-injections of fat-dissolving compounds to reduce localized fat deposits in the face and body. This minimally invasive treatment is particularly effective for double chin reduction, facial contouring, and small areas of stubborn fat that don\'t respond to diet and exercise.',
    approach: 'At VIVAA, our skilled practitioners use pharmaceutical-grade compounds delivered through precise micro-injections. We employ advanced injection techniques and customized formulations to ensure optimal fat reduction while maintaining natural facial contours. Our protocol includes comprehensive aftercare to maximize results and minimize any side effects.',
    benefits: [
      'Non-surgical fat reduction',
      'Precise facial contouring',
      'Minimal downtime required',
      'Natural-looking results',
      'Stimulates skin tightening',
      'Customizable treatment areas',
      'Long-lasting fat reduction',
      'Suitable for face and body'
    ],
    beforeAfterImages: [
     '/images/viva-banner-images/meso lipo/1.webp',
      '/images/viva-banner-images/meso lipo/2.webp',
      '/images/viva-banner-images/meso lipo/3.webp',
      '/images/viva-banner-images/meso lipo/4.webp',
      '/images/viva-banner-images/meso lipo/5.webp',
      '/images/viva-banner-images/meso lipo/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Facial Assessment',
        description: 'Detailed evaluation of fat deposits and facial anatomy'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized injection pattern and compound selection'
      },
      {
        step: 3,
        title: 'Micro-Injections',
        description: 'Precise delivery of fat-dissolving compounds'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Immediate care and swelling management'
      },
      {
        step: 5,
        title: 'Follow-Up Assessment',
        description: 'Progress evaluation and additional sessions if needed'
      }
    ],
    faqs: [
      {
        question: 'Is Meso Lipo painful?',
        answer: 'We use very fine needles and can apply topical numbing cream. Most patients experience only mild discomfort during the injection process.'
      },
      {
        question: 'How many sessions are required?',
        answer: 'Most patients achieve optimal results with 3-6 sessions, spaced 4-6 weeks apart, depending on the area treated and amount of fat.'
      },
      {
        question: 'What areas can be treated?',
        answer: 'Common areas include double chin, jowls, cheeks, and small areas of body fat such as bra bulge or knee fat.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Temporary swelling, redness, and mild bruising are common and typically resolve within a few days to a week.'
      }
    ],
    testimonials: [
      {
        name: 'Kavya Singh',
        rating: 5,
        text: 'Meso Lipo eliminated my double chin without surgery! The results look completely natural and I love my new profile.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹8,000 per session',
      sessionInfo: '3-6 sessions recommended',
      packageDeals: 'Meso Lipo packages with attractive pricing available'
    }
  },
  {
    slug: 'bb-glow',
    name: 'BB Glow',
    category: 'Skin Treatments',
    tagline: 'Semi-Permanent Foundation for Flawless Skin.',
    description: 'BB Glow is an innovative semi-permanent makeup treatment that uses microneedling to infuse color-matched serums into the skin, creating a natural foundation effect. This treatment provides even skin tone, reduces the appearance of imperfections, and gives you a flawless, makeup-free look that lasts for months.',
    approach: 'Our BB Glow specialists at VIVAA use advanced microneedling techniques combined with high-quality, skin-safe pigments matched to your natural skin tone. We customize the treatment depth and pigment intensity to achieve your desired coverage level while maintaining a natural appearance.',
    benefits: [
      'Semi-permanent foundation effect',
      'Evens skin tone naturally',
      'Reduces daily makeup routine',
      'Covers minor imperfections',
      'Stimulates collagen production',
      'Customizable coverage level',
      'Long-lasting results (6-12 months)',
      'Natural, flawless appearance'
    ],
    beforeAfterImages: [
     '/images/viva-banner-images/BB Glow/1.webp',
      '/images/viva-banner-images/BB Glow/2.webp',
      '/images/viva-banner-images/BB Glow/3.webp',
      '/images/viva-banner-images/BB Glow/4.webp',
      '/images/viva-banner-images/BB Glow/5.webp',
      '/images/viva-banner-images/BB Glow/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Color Matching',
        description: 'Precise color matching to your natural skin tone'
      },
      {
        step: 2,
        title: 'Skin Preparation',
        description: 'Cleansing and numbing cream application'
      },
      {
        step: 3,
        title: 'Microneedling Application',
        description: 'Gentle microneedling with pigment infusion'
      },
      {
        step: 4,
        title: 'Color Development',
        description: 'Allowing pigments to settle and develop'
      },
      {
        step: 5,
        title: 'Final Assessment',
        description: 'Color evaluation and touch-up if needed'
      }
    ],
    faqs: [
      {
        question: 'How long does BB Glow last?',
        answer: 'BB Glow typically lasts 6-12 months, depending on your skin type, lifestyle, and skincare routine. Touch-up sessions can extend the results.'
      },
      {
        question: 'Is BB Glow suitable for all skin types?',
        answer: 'Yes, BB Glow can be customized for all skin types and tones. We have a wide range of pigments to match any complexion.'
      },
      {
        question: 'Can I still wear makeup after BB Glow?',
        answer: 'Absolutely! BB Glow provides a perfect base for makeup application, though many clients find they need much less makeup daily.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'Minimal downtime is required. Your skin may appear slightly red for 24-48 hours, and you should avoid makeup for 24 hours post-treatment.'
      }
    ],
    testimonials: [
      {
        name: 'Riya Patel',
        rating: 5,
        text: 'BB Glow gave me the confidence to go makeup-free! My skin looks flawless and even, and I save so much time in the morning.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹12,000 per session',
      sessionInfo: '2-3 sessions recommended',
      packageDeals: 'BB Glow packages with maintenance sessions included'
    }
  },
  {
    slug: 'micro-dermabrasion',
    name: 'Micro Dermabrasion',
    category: 'Skin Treatments',
    tagline: 'Gentle Exfoliation for Smoother, Brighter Skin.',
    description: 'Microdermabrasion is a gentle, non-invasive exfoliation treatment that removes dead skin cells and stimulates cellular renewal. Using fine crystals or diamond-tip technology, this treatment improves skin texture, reduces fine lines, minimizes pores, and enhances overall skin radiance. It\'s perfect for maintaining healthy, glowing skin with no downtime.',
    approach: 'At VIVAA, we use both crystal and diamond-tip microdermabrasion systems to provide customized exfoliation based on your skin type and concerns. Our gentle yet effective approach ensures optimal results while maintaining skin comfort and safety. We often combine microdermabrasion with other treatments for enhanced benefits.',
    benefits: [
      'Gentle exfoliation and skin renewal',
      'Improves skin texture and smoothness',
      'Reduces fine lines and wrinkles',
      'Minimizes enlarged pores',
      'Enhances product absorption',
      'No downtime required',
      'Suitable for all skin types',
      'Immediate skin brightening effect'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/micro dermabrasion/1.webp',
      '/images/viva-banner-images/micro dermabrasion/2.webp',
      '/images/viva-banner-images/micro dermabrasion/3.webp',
      '/images/viva-banner-images/micro dermabrasion/4.webp',
      '/images/viva-banner-images/micro dermabrasion/5.webp',
      '/images/viva-banner-images/micro dermabrasion/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Skin Analysis',
        description: 'Assessment of skin condition and treatment customization'
      },
      {
        step: 2,
        title: 'Cleansing',
        description: 'Thorough cleansing to prepare skin for treatment'
      },
      {
        step: 3,
        title: 'Microdermabrasion',
        description: 'Gentle exfoliation using crystal or diamond-tip technology'
      },
      {
        step: 4,
        title: 'Hydration',
        description: 'Application of moisturizing and soothing serums'
      },
      {
        step: 5,
        title: 'Sun Protection',
        description: 'SPF application and aftercare instructions'
      }
    ],
    faqs: [
      {
        question: 'Is microdermabrasion painful?',
        answer: 'Microdermabrasion is generally painless. Most patients describe the sensation as a gentle scratching or vibrating feeling on the skin.'
      },
      {
        question: 'How often can I get microdermabrasion?',
        answer: 'For optimal results, we recommend treatments every 2-4 weeks. The frequency depends on your skin type and concerns.'
      },
      {
        question: 'Can I wear makeup after treatment?',
        answer: 'Yes, you can apply makeup immediately after treatment. However, we recommend waiting a few hours to allow your skin to fully settle.'
      },
      {
        question: 'Who is a good candidate for microdermabrasion?',
        answer: 'Microdermabrasion is suitable for most skin types and concerns, including dull skin, fine lines, mild acne scarring, and uneven texture.'
      }
    ],
    testimonials: [
      {
        name: 'Sunita Sharma',
        rating: 5,
        text: 'My skin feels so smooth and looks brighter after microdermabrasion! It\'s become my monthly skin maintenance treatment.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹2,500 per session',
      sessionInfo: 'Monthly sessions recommended',
      packageDeals: 'Microdermabrasion packages with significant savings available'
    }
  },
  {
    slug: 'prp-treatment',
    name: 'PRP Treatment',
    category: 'Skin Treatments',
    tagline: 'Harness Your Body\'s Natural Healing Power.',
    description: 'Platelet-Rich Plasma (PRP) treatment is a revolutionary regenerative therapy that uses your body\'s own blood platelets to stimulate healing and rejuvenation. This natural treatment promotes collagen production, improves skin texture, reduces fine lines, and addresses various skin concerns using your body\'s growth factors. PRP is completely natural and biocompatible, making it an ideal choice for those seeking organic skin rejuvenation.',
    approach: 'Our medical professionals at VIVAA use state-of-the-art centrifuge technology to extract and concentrate your platelets to therapeutic levels. The PRP is then strategically applied to treatment areas using advanced microneedling techniques or direct injection to maximize absorption and effectiveness. Our protocol ensures optimal platelet concentration for superior results.',
    benefits: [
      'Completely natural and biocompatible treatment',
      'Stimulates natural collagen and elastin production',
      'Improves overall skin tone and texture',
      'Reduces fine lines and wrinkles naturally',
      'Minimizes acne scarring and pigmentation',
      'Long-lasting, progressive results',
      'No risk of allergic reactions',
      'Suitable for all skin types and ages'
    ],
    beforeAfterImages: [
    '/images/viva-banner-images/prp treatment/1.webp',
    '/images/viva-banner-images/prp treatment/2.webp',
    '/images/viva-banner-images/prp treatment/3.webp',
    '/images/viva-banner-images/prp treatment/4.webp',
    '/images/viva-banner-images/prp treatment/5.webp',
    '/images/viva-banner-images/prp treatment/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Blood Collection',
        description: 'Small blood sample collected similar to routine blood test'
      },
      {
        step: 2,
        title: 'PRP Preparation',
        description: 'Blood processed in centrifuge to concentrate platelets'
      },
      {
        step: 3,
        title: 'Treatment Application',
        description: 'PRP applied via microneedling or injection techniques'
      },
      {
        step: 4,
        title: 'Recovery & Healing',
        description: 'Natural healing process begins immediately'
      },
      {
        step: 5,
        title: 'Progressive Results',
        description: 'Continued improvement over 3-6 months'
      }
    ],
    faqs: [
      {
        question: 'Is PRP treatment painful?',
        answer: 'Mild discomfort may be experienced during application. We use topical numbing cream to minimize any discomfort during the procedure.'
      },
      {
        question: 'How many PRP sessions do I need?',
        answer: 'Typically 3-4 sessions spaced 4-6 weeks apart are recommended for optimal results, with maintenance treatments every 6-12 months.'
      },
      {
        question: 'When will I see results from PRP?',
        answer: 'Initial improvements may be visible within 2-3 weeks, with continued improvement over 3-6 months as collagen production increases.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Since PRP uses your own blood, allergic reactions are extremely rare. Mild swelling or redness may occur temporarily at injection sites.'
      }
    ],
    testimonials: [
      {
        name: 'Kavya Singh',
        rating: 5,
        text: 'PRP treatment gave me the most natural-looking results. My skin looks younger and healthier without any artificial fillers.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹12,000 per session',
      sessionInfo: '3-4 sessions recommended',
      packageDeals: 'PRP packages available with attractive discounts'
    }
  },
  // Hair Treatment Services
  {
  slug: 'hair-prp-treatment',
  name: 'Hair PRP Treatment',
  category: 'Hair Treatments',
  tagline: 'Natural Hair Restoration with Your Own Blood.',
  description: 'Hair PRP (Platelet-Rich Plasma) treatment is a cutting-edge, non-surgical hair restoration therapy that uses your body\'s own growth factors to stimulate hair follicles and promote natural hair growth. This safe, effective treatment helps combat hair loss, increases hair density, and improves overall hair health using your body\'s natural healing mechanisms.',
  approach: 'At VIVAA, we use advanced centrifuge technology to extract and concentrate platelets from your blood to therapeutic levels. The PRP is then precisely injected into the scalp areas experiencing hair loss or thinning. Our protocol ensures optimal platelet concentration and strategic placement for maximum hair growth stimulation.',
  benefits: [
    'Stimulates natural hair growth',
    'Increases hair density and thickness',
    'Completely natural and safe treatment',
    'No risk of allergic reactions',
    'Minimal downtime required',
    'Suitable for both men and women',
    'Improves overall scalp health',
    'Can be combined with other treatments'
  ],
  beforeAfterImages: [
    '/images/viva-banner-images/Prp hair treatment/7.webp',
    '/images/viva-banner-images/Prp hair treatment/8.webp',
    '/images/viva-banner-images/Prp hair treatment/9.webp',
    '/images/viva-banner-images/Prp hair treatment/10.webp',
    '/images/viva-banner-images/Prp hair treatment/11.webp',
    '/images/viva-banner-images/Prp hair treatment/12.webp'
  ],
  processSteps: [
    {
      step: 1,
      title: 'Hair Loss Assessment',
      description: 'Comprehensive evaluation of hair loss pattern and scalp condition'
    },
    {
      step: 2,
      title: 'Blood Collection',
      description: 'Small blood sample collected for PRP preparation'
    },
    {
      step: 3,
      title: 'PRP Processing',
      description: 'Blood centrifuged to concentrate growth factors'
    },
    {
      step: 4,
      title: 'Scalp Injection',
      description: 'Precise PRP injection into affected scalp areas'
    },
    {
      step: 5,
      title: 'Follow-up Care',
      description: 'Post-treatment care and progress monitoring'
    }
  ],
  faqs: [
    {
      question: 'How effective is PRP for hair loss?',
      answer: 'PRP is highly effective for androgenetic alopecia and early-stage hair loss, with most patients seeing increased hair density and thickness after 3-4 sessions.'
    },
    {
      question: 'Is PRP hair treatment painful?',
      answer: 'We use topical numbing cream and fine needles to minimize discomfort. Most patients tolerate the treatment well with minimal pain.'
    },
    {
      question: 'How many PRP sessions are needed?',
      answer: 'Typically 4-6 sessions are recommended, spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.'
    },
    {
      question: 'When will I see hair growth results?',
      answer: 'Initial results may be visible after 2-3 months, with significant improvement typically seen after 4-6 months of completing the treatment series.'
    }
  ],
  testimonials: [
    {
      name: 'Vikram Singh',
      rating: 5,
      text: 'PRP treatment stopped my hair loss and actually regrew hair in thinning areas. The results are natural and impressive!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ],
  pricing: {
    startingPrice: '₹8,000 per session',
    sessionInfo: '4-6 sessions recommended',
    packageDeals: 'Hair PRP packages with significant savings available'
  }
},
  {
    slug: 'gfc-treatment',
    name: 'GFC Treatment',
    category: 'Hair Treatments',
    tagline: 'Growth Factor Concentrate for Hair Regeneration.',
    description: 'Growth Factor Concentrate (GFC) treatment represents the next evolution in hair restoration therapy. This advanced treatment uses highly concentrated growth factors extracted from your blood to stimulate dormant hair follicles, promote robust hair growth, and improve overall hair density naturally. GFC contains a higher concentration of growth factors compared to traditional PRP, potentially offering enhanced results for hair restoration.',
    approach: 'At VIVAA, we extract and concentrate growth factors from your blood using advanced laboratory techniques and specialized equipment. These concentrated growth factors are then strategically injected into the scalp to activate dormant hair follicles, strengthen existing hair, and improve scalp health. Our protocol ensures maximum growth factor concentration for superior results.',
    benefits: [
      'Stimulates natural hair growth and regeneration',
      'Significantly increases hair density and thickness',
      'Improves overall scalp health and circulation',
      'Completely non-surgical treatment approach',
      'Uses your body\'s natural healing factors',
      'Minimal side effects and downtime',
      'Higher concentration than traditional PRP',
      'Suitable for early to moderate hair loss'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/gfc treatment/1.webp',
      '/images/viva-banner-images/gfc treatment/2.webp',
      '/images/viva-banner-images/gfc treatment/3.webp',
      '/images/viva-banner-images/gfc treatment/4.webp',
      '/images/viva-banner-images/gfc treatment/5.webp',
      '/images/viva-banner-images/gfc treatment/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Hair & Scalp Assessment',
        description: 'Comprehensive evaluation of hair loss pattern and scalp condition'
      },
      {
        step: 2,
        title: 'Blood Collection',
        description: 'Small blood sample collected for growth factor extraction'
      },
      {
        step: 3,
        title: 'GFC Preparation',
        description: 'Advanced processing to concentrate growth factors'
      },
      {
        step: 4,
        title: 'Scalp Injection',
        description: 'Precise injection of GFC into affected scalp areas'
      },
      {
        step: 5,
        title: 'Follow-up Care',
        description: 'Regular monitoring and additional sessions as needed'
      }
    ],
    faqs: [
      {
        question: 'How is GFC different from PRP?',
        answer: 'GFC is a more concentrated form of growth factors compared to PRP, potentially offering enhanced results for hair restoration with higher concentrations of active healing components.'
      },
      {
        question: 'How many GFC sessions are needed?',
        answer: 'Typically 4-6 sessions are recommended, spaced 3-4 weeks apart, followed by maintenance treatments every 6-12 months for sustained results.'
      },
      {
        question: 'Is GFC treatment safe?',
        answer: 'Yes, GFC is very safe as it uses your own blood components, eliminating risk of allergic reactions or adverse effects from foreign substances.'
      },
      {
        question: 'When will I notice hair growth?',
        answer: 'Initial results may be visible after 2-3 sessions, with significant improvement typically seen after 4-6 months of treatment completion.'
      }
    ],
    testimonials: [
      {
        name: 'Arjun Mehta',
        rating: 5,
        text: 'GFC treatment stopped my hair loss and actually regrew hair in thinning areas. Much better results than I expected!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹15,000 per session',
      sessionInfo: '4-6 sessions recommended',
      packageDeals: 'GFC treatment packages with significant savings available'
    }
  },
  {
    slug: 'stem-cells-treatment',
    name: 'Stem Cells Treatment',
    category: 'Hair Treatments',
    tagline: 'Regenerative Medicine for Hair Restoration.',
    description: 'Stem cell therapy for hair restoration represents the pinnacle of regenerative medicine, using your body\'s own stem cells to regenerate hair follicles and promote natural hair growth. This cutting-edge treatment harnesses the power of mesenchymal stem cells to repair damaged follicles, stimulate new hair growth, and improve overall scalp health for long-lasting results.',
    approach: 'At VIVAA, we use advanced stem cell extraction and concentration techniques to harvest mesenchymal stem cells from your adipose tissue or bone marrow. These potent regenerative cells are then precisely injected into the scalp to regenerate damaged hair follicles and stimulate robust hair growth. Our protocol ensures optimal stem cell viability and therapeutic effectiveness.',
    benefits: [
      'Regenerates damaged hair follicles',
      'Stimulates new hair growth naturally',
      'Uses your body\'s own regenerative cells',
      'Long-lasting hair restoration results',
      'Improves scalp health and circulation',
      'No risk of rejection or allergic reactions',
      'Suitable for advanced hair loss cases',
      'Combines well with other treatments'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/stem cell/1.webp',
      '/images/viva-banner-images/stem cell/2.webp',
      '/images/viva-banner-images/stem cell/3.webp',
      '/images/viva-banner-images/stem cell/4.webp',
      '/images/viva-banner-images/stem cell/5.webp',
      '/images/viva-banner-images/stem cell/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Assessment',
        description: 'Detailed evaluation of hair loss and treatment planning'
      },
      {
        step: 2,
        title: 'Stem Cell Harvesting',
        description: 'Minimally invasive extraction of stem cells from adipose tissue'
      },
      {
        step: 3,
        title: 'Cell Processing',
        description: 'Advanced laboratory processing to concentrate stem cells'
      },
      {
        step: 4,
        title: 'Scalp Injection',
        description: 'Precise injection of stem cells into affected areas'
      },
      {
        step: 5,
        title: 'Regeneration Process',
        description: 'Monitoring of follicle regeneration and hair growth'
      }
    ],
    faqs: [
      {
        question: 'How effective is stem cell therapy for hair loss?',
        answer: 'Stem cell therapy shows excellent results for hair restoration, particularly in cases where other treatments have been less effective, with many patients seeing significant hair regrowth.'
      },
      {
        question: 'Is stem cell treatment safe?',
        answer: 'Yes, using your own stem cells eliminates any risk of rejection or allergic reactions. The procedure is performed under strict medical protocols for maximum safety.'
      },
      {
        question: 'How many stem cell sessions are needed?',
        answer: 'Typically 1-3 sessions are needed, spaced 3-6 months apart, depending on the extent of hair loss and individual response to treatment.'
      },
      {
        question: 'When will I see results from stem cell therapy?',
        answer: 'Initial results may be visible after 3-4 months, with significant hair growth typically seen after 6-12 months as follicles regenerate and mature.'
      }
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        rating: 5,
        text: 'Stem cell therapy gave me hope when other treatments failed. My hair is growing back stronger and thicker than ever!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹75,000 per session',
      sessionInfo: '1-3 sessions typically needed',
      packageDeals: 'Comprehensive stem cell packages with follow-up care included'
    }
  },
  {
    slug: 'micro-scalp-pigmentation',
    name: 'Micro Scalp Pigmentation',
    category: 'Hair Treatments',
    tagline: 'Instant Hair Density with Scalp Tattooing.',
    description: 'Micro Scalp Pigmentation (MSP) is a revolutionary non-surgical hair loss solution that uses specialized tattooing techniques to create the appearance of natural hair follicles on the scalp. This innovative treatment provides instant visual hair density, covers scars, and creates a natural-looking hairline for those with complete or partial hair loss.',
    approach: 'Our skilled MSP specialists at VIVAA use advanced pigmentation techniques and specialized equipment to create thousands of tiny, hair-like impressions on the scalp. We carefully match pigment colors to your natural hair color and skin tone, creating a completely natural appearance that mimics real hair follicles.',
    benefits: [
      'Instant visual hair density',
      'Non-surgical hair loss solution',
      'Covers scars and bald patches',
      'Creates natural-looking hairline',
      'No maintenance required',
      'Suitable for all types of hair loss',
      'Long-lasting results (3-5 years)',
      'Boosts confidence immediately'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/micro scalp/1.webp',
      '/images/viva-banner-images/micro scalp/2.webp',
      '/images/viva-banner-images/micro scalp/3.webp',
      '/images/viva-banner-images/micro scalp/4.webp',
      '/images/viva-banner-images/micro scalp/5.webp',
      '/images/viva-banner-images/micro scalp/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Design Consultation',
        description: 'Hairline design and pigment color matching'
      },
      {
        step: 2,
        title: 'First Session',
        description: 'Initial pigmentation to establish base coverage'
      },
      {
        step: 3,
        title: 'Second Session',
        description: 'Density building and refinement of appearance'
      },
      {
        step: 4,
        title: 'Final Session',
        description: 'Final touches and perfection of the look'
      },
      {
        step: 5,
        title: 'Maintenance',
        description: 'Optional touch-ups every 3-5 years'
      }
    ],
    faqs: [
      {
        question: 'How long does MSP last?',
        answer: 'Micro scalp pigmentation typically lasts 3-5 years before requiring touch-ups, depending on skin type, lifestyle, and sun exposure.'
      },
      {
        question: 'Is MSP painful?',
        answer: 'Most patients experience minimal discomfort. We use topical numbing agents to ensure your comfort throughout the procedure.'
      },
      {
        question: 'How many sessions are required?',
        answer: 'Typically 2-3 sessions are needed, spaced 7-14 days apart, to achieve optimal density and natural appearance.'
      },
      {
        question: 'Can MSP be removed if needed?',
        answer: 'Yes, MSP can be removed or modified using laser removal techniques if desired, though most clients are extremely satisfied with their results.'
      }
    ],
    testimonials: [
      {
        name: 'Amit Sharma',
        rating: 5,
        text: 'MSP gave me my confidence back instantly! It looks so natural that even my family couldn\'t tell it was done.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹35,000 (complete treatment)',
      sessionInfo: '2-3 sessions included',
      packageDeals: 'Complete MSP packages with touch-up guarantee available'
    }
  },
  {
    slug: 'qr-678',
    name: 'QR 678',
    category: 'Hair Treatments',
    tagline: 'Advanced Hair Growth Factor Therapy.',
    description: 'QR 678 is a revolutionary hair growth therapy that uses a proprietary blend of growth factors, peptides, and nutrients specifically formulated to combat hair loss and stimulate hair growth. This advanced treatment targets the root causes of hair loss at the cellular level, promoting healthier, thicker, and stronger hair growth naturally.',
    approach: 'At VIVAA, our specialists administer QR 678 through precise micro-injections into the scalp. This patented formulation contains a unique combination of growth factors that work synergistically to revitalize hair follicles, improve scalp circulation, and promote robust hair growth. The treatment is customized based on your specific hair loss pattern and needs.',
    benefits: [
      'Stimulates natural hair growth',
      'Reduces hair fall significantly',
      'Increases hair density and thickness',
      'Improves scalp health and circulation',
      'Non-surgical and minimally invasive',
      'Suitable for both men and women',
      'No systemic side effects',
      'Clinically proven formulation'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/QR678/1.webp',
      '/images/viva-banner-images/QR678/2.webp',
      '/images/viva-banner-images/QR678/3.webp',
      '/images/viva-banner-images/QR678/4.webp',
      '/images/viva-banner-images/QR678/5.webp',
      '/images/viva-banner-images/QR678/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Hair Loss Evaluation',
        description: 'Comprehensive assessment of hair loss pattern and scalp condition'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized QR 678 protocol based on individual needs'
      },
      {
        step: 3,
        title: 'Micro-Injections',
        description: 'Precise delivery of QR 678 formulation into scalp'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Immediate care and instructions for optimal results'
      },
      {
        step: 5,
        title: 'Progress Monitoring',
        description: 'Regular follow-up to track hair growth progress'
      }
    ],
    faqs: [
      {
        question: 'What makes QR 678 different from other treatments?',
        answer: 'QR 678 contains a unique, patented blend of growth factors and peptides specifically formulated for hair restoration, offering superior results compared to generic treatments.'
      },
      {
        question: 'How many QR 678 sessions are needed?',
        answer: 'Typically 8-10 sessions are recommended, administered weekly initially, then monthly for maintenance, depending on individual response.'
      },
      {
        question: 'Is QR 678 safe?',
        answer: 'Yes, QR 678 is completely safe with no systemic side effects. It\'s made from natural growth factors and has been clinically tested for safety and efficacy.'
      },
      {
        question: 'When will I see results from QR 678?',
        answer: 'Most patients notice reduced hair fall within 4-6 weeks, with visible hair growth typically seen after 3-4 months of treatment.'
      }
    ],
    testimonials: [
      {
        name: 'Deepak Patel',
        rating: 5,
        text: 'QR 678 stopped my hair loss completely and I\'m seeing new growth in areas that were thinning. Highly recommend this treatment!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹6,000 per session',
      sessionInfo: '8-10 sessions recommended',
      packageDeals: 'QR 678 packages with attractive pricing and follow-up care'
    }
  },
  {
    slug: 'hair-transplantation',
    name: 'Hair Transplantation',
    category: 'Hair Treatments',
    tagline: 'Restore Your Natural Hairline Permanently.',
    description: 'Hair transplantation is an advanced surgical procedure that permanently restores hair by moving healthy hair follicles from donor areas to areas experiencing hair loss. We use cutting-edge techniques like FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) to ensure natural-looking results with minimal scarring. Our expert surgeons create hairlines that complement your facial features and provide lifelong results.',
    approach: 'Our experienced hair transplant surgeons at VIVAA use the latest microsurgical techniques and state-of-the-art equipment to ensure precise follicle extraction and placement. We create natural hairlines that complement your facial features and age appropriately. Our comprehensive approach includes pre-operative planning, advanced surgical techniques, and post-operative care for optimal results.',
    benefits: [
      'Permanent, lifelong hair restoration',
      'Completely natural-looking results',
      'Minimal scarring with advanced FUE technique',
      'Uses your own healthy hair follicles',
      'Significantly boosts confidence and self-esteem',
      'Long-term cost-effective solution',
      'No ongoing maintenance required',
      'Age-appropriate hairline design'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/Hair transplantation/1.webp',
      '/images/viva-banner-images/Hair transplantation/2.webp',
      '/images/viva-banner-images/Hair transplantation/3.webp',
      '/images/viva-banner-images/Hair transplantation/4.webp',
      '/images/viva-banner-images/Hair transplantation/5.webp',
      '/images/viva-banner-images/Hair transplantation/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Consultation',
        description: 'Detailed assessment of hair loss pattern and donor area availability'
      },
      {
        step: 2,
        title: 'Surgical Planning',
        description: 'Hairline design and graft calculation for optimal results'
      },
      {
        step: 3,
        title: 'Follicle Extraction',
        description: 'Precise extraction of healthy follicles from donor area'
      },
      {
        step: 4,
        title: 'Graft Preparation',
        description: 'Careful preparation and sorting of extracted follicles'
      },
      {
        step: 5,
        title: 'Implantation',
        description: 'Strategic placement of grafts for natural hair growth pattern'
      },
      {
        step: 6,
        title: 'Recovery & Growth',
        description: 'Guided recovery with progressive hair growth over 12-18 months'
      }
    ],
    faqs: [
      {
        question: 'Am I a good candidate for hair transplantation?',
        answer: 'Good candidates have sufficient donor hair, realistic expectations, and stable hair loss patterns. A consultation will determine your eligibility and expected results.'
      },
      {
        question: 'How long does the procedure take?',
        answer: 'Depending on the number of grafts needed, the procedure typically takes 6-8 hours and is performed in one day with breaks for comfort.'
      },
      {
        question: 'When will I see final results?',
        answer: 'New hair growth begins around 3-4 months, with significant results visible at 8-12 months, and final results achieved at 12-18 months post-procedure.'
      },
      {
        question: 'Is hair transplantation permanent?',
        answer: 'Yes, transplanted hair is permanent as it comes from areas genetically resistant to hair loss. The results last a lifetime with proper care.'
      }
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        rating: 5,
        text: 'Life-changing experience! My confidence is completely restored. The doctors are highly skilled and the results look completely natural.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹40,000 (500-1000 grafts)',
      sessionInfo: 'Single session procedure',
      packageDeals: 'Comprehensive packages including post-care available'
    }
  },
  {
    slug: 'derma-roller-scalp',
    name: 'Derma Roller Scalp',
    category: 'Hair Treatments',
    tagline: 'Microneedling for Scalp Health and Hair Growth.',
    description: 'Scalp microneedling using derma roller technology stimulates blood circulation, promotes nutrient absorption, and activates dormant hair follicles. This minimally invasive treatment creates micro-channels in the scalp that enhance the absorption of hair growth serums and stimulate the scalp\'s natural healing response for improved hair growth.',
    approach: 'Our scalp microneedling specialists at VIVAA use medical-grade derma rollers with optimal needle depths for scalp treatment. We combine this with specialized hair growth serums and follow strict sterile protocols to ensure safety and effectiveness. The treatment is customized based on your scalp condition and hair loss pattern.',
    benefits: [
      'Stimulates scalp blood circulation',
      'Enhances absorption of hair growth products',
      'Activates dormant hair follicles',
      'Improves overall scalp health',
      'Minimally invasive with no downtime',
      'Can be combined with other treatments',
      'Suitable for all hair types',
      'Natural hair growth stimulation'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/Derma roller scalp/1.webp',
      '/images/viva-banner-images/Derma roller scalp/2.webp',
      '/images/viva-banner-images/Derma roller scalp/3.webp',
      '/images/viva-banner-images/Derma roller scalp/4.webp',
      '/images/viva-banner-images/Derma roller scalp/5.webp',
      '/images/viva-banner-images/Derma roller scalp/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Scalp Assessment',
        description: 'Evaluation of scalp condition and hair loss pattern'
      },
      {
        step: 2,
        title: 'Scalp Preparation',
        description: 'Cleansing and preparation of treatment area'
      },
      {
        step: 3,
        title: 'Microneedling Treatment',
        description: 'Systematic derma roller application across scalp'
      },
      {
        step: 4,
        title: 'Serum Application',
        description: 'Application of specialized hair growth serums'
      },
      {
        step: 5,
        title: 'Post-Treatment Care',
        description: 'Aftercare instructions and follow-up scheduling'
      }
    ],
    faqs: [
      {
        question: 'Is scalp microneedling painful?',
        answer: 'Most patients experience minimal discomfort. The sensation is often described as light tingling or scratching on the scalp.'
      },
      {
        question: 'How often should I get scalp microneedling?',
        answer: 'Typically once every 2-4 weeks for optimal results, with the frequency adjusted based on your scalp\'s response and hair growth goals.'
      },
      {
        question: 'Can I wash my hair after treatment?',
        answer: 'We recommend waiting 24 hours before washing your hair to allow the micro-channels to heal and maximize serum absorption.'
      },
      {
        question: 'How does scalp microneedling help hair growth?',
        answer: 'Microneedling stimulates blood flow, activates growth factors, and creates channels for better absorption of hair growth products, all promoting healthier hair growth.'
      }
    ],
    testimonials: [
      {
        name: 'Suresh Reddy',
        rating: 5,
        text: 'Scalp microneedling improved my hair thickness and reduced hair fall. It\'s a simple treatment with great results!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹3,000 per session',
      sessionInfo: 'Monthly sessions recommended',
      packageDeals: 'Scalp microneedling packages with hair growth serums included'
    }
  },
  {
    slug: 'biotin-treatment',
    name: 'Biotin Treatment',
    category: 'Hair Treatments',
    tagline: 'Vitamin Therapy for Stronger, Healthier Hair.',
    description: 'Biotin treatment involves the administration of high-dose biotin (Vitamin B7) and other essential vitamins directly to the scalp and systemically to promote hair growth, strengthen hair follicles, and improve overall hair health. This nutritional therapy addresses vitamin deficiencies that may contribute to hair loss and poor hair quality.',
    approach: 'At VIVAA, we use both topical and injectable forms of biotin along with complementary vitamins like B-complex, vitamin D, and minerals essential for hair health. Our treatment protocol includes scalp injections of biotin-rich formulations and oral supplementation to ensure comprehensive nutritional support for optimal hair growth.',
    benefits: [
      'Strengthens hair follicles naturally',
      'Improves hair texture and shine',
      'Reduces hair breakage and fall',
      'Promotes healthy hair growth',
      'Addresses nutritional deficiencies',
      'Safe and natural treatment',
      'Suitable for all hair types',
      'Enhances overall hair health'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/biotin treatment/1.webp',
      '/images/viva-banner-images/biotin treatment/2.webp',
      '/images/viva-banner-images/biotin treatment/3.webp',
      '/images/viva-banner-images/biotin treatment/4.webp',
      '/images/viva-banner-images/biotin treatment/5.webp',
      '/images/viva-banner-images/biotin treatment/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Nutritional Assessment',
        description: 'Evaluation of vitamin levels and hair health status'
      },
      {
        step: 2,
        title: 'Treatment Protocol',
        description: 'Customized biotin and vitamin supplementation plan'
      },
      {
        step: 3,
        title: 'Scalp Injections',
        description: 'Direct delivery of biotin formulation to scalp'
      },
      {
        step: 4,
        title: 'Oral Supplementation',
        description: 'Prescribed oral vitamins for systemic support'
      },
      {
        step: 5,
        title: 'Progress Monitoring',
        description: 'Regular assessment of hair improvement and vitamin levels'
      }
    ],
    faqs: [
      {
        question: 'How does biotin help hair growth?',
        answer: 'Biotin is essential for keratin production, the protein that makes up hair. It strengthens hair follicles, improves hair structure, and promotes healthy growth.'
      },
      {
        question: 'How many biotin treatments are needed?',
        answer: 'Typically 6-8 sessions are recommended, spaced 2-3 weeks apart, along with ongoing oral supplementation for sustained benefits.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Biotin treatment is very safe with minimal side effects. Some patients may experience mild scalp sensitivity at injection sites.'
      },
      {
        question: 'When will I see improvements in my hair?',
        answer: 'Most patients notice reduced hair fall within 4-6 weeks, with visible improvements in hair texture and growth after 2-3 months.'
      }
    ],
    testimonials: [
      {
        name: 'Pooja Agarwal',
        rating: 5,
        text: 'Biotin treatment made my hair so much stronger and shinier. The hair fall has reduced dramatically!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹4,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Biotin treatment packages with oral supplements included'
    }
  },
  // Laser Hair Reduction Services
  {
    slug: 'full-body-laser',
    name: 'Full Body Laser Hair Reduction',
    category: 'Laser Hair Reduction',
    tagline: 'Complete Freedom from Unwanted Hair.',
    description: 'Full body laser hair reduction offers the ultimate solution for permanent hair removal from head to toe. Using advanced laser technology with multiple wavelengths, we target hair follicles across all body areas to significantly reduce hair growth permanently. This comprehensive treatment eliminates the need for constant shaving, waxing, or other temporary hair removal methods, giving you smooth, hair-free skin year-round.',
    approach: 'Our certified laser specialists at VIVAA use medical-grade laser systems with multiple wavelengths to effectively treat all skin types and hair colors. We customize treatment parameters for each body area to ensure maximum efficacy and safety. Our comprehensive approach includes pre-treatment preparation, precise laser application, and post-treatment care for optimal results.',
    benefits: [
      'Comprehensive hair removal solution for entire body',
      'Long-lasting to permanent hair reduction',
      'Suitable for all skin types and most hair colors',
      'Significant time-saving compared to other methods',
      'Reduces ingrown hairs and skin irritation',
      'Cost-effective long-term solution',
      'Smooth, hair-free skin year-round',
      'Boosts confidence and convenience'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/full body laser removal/1.webp',
      '/images/viva-banner-images/full body laser removal/2.webp',
      '/images/viva-banner-images/full body laser removal/3.webp',
      '/images/viva-banner-images/full body laser removal/4.webp',
      '/images/viva-banner-images/full body laser removal/5.webp',
      '/images/viva-banner-images/full body laser removal/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Comprehensive Consultation',
        description: 'Full body assessment and treatment planning for all areas'
      },
      {
        step: 2,
        title: 'Pre-treatment Preparation',
        description: 'Skin preparation and safety protocols for optimal results'
      },
      {
        step: 3,
        title: 'Laser Treatment Sessions',
        description: 'Systematic treatment of all body areas with appropriate laser settings'
      },
      {
        step: 4,
        title: 'Post-treatment Care',
        description: 'Immediate care and instructions for optimal healing'
      },
      {
        step: 5,
        title: 'Progressive Results',
        description: 'Gradual hair reduction with each session over treatment course'
      }
    ],
    faqs: [
      {
        question: 'How many sessions are needed for full body?',
        answer: 'Typically 6-8 sessions are needed for optimal results, with sessions spaced 4-8 weeks apart depending on the body area and hair growth cycle.'
      },
      {
        question: 'Is full body laser hair reduction safe?',
        answer: 'Yes, when performed by trained professionals using FDA-approved equipment, laser hair reduction is very safe with minimal side effects and excellent safety profile.'
      },
      {
        question: 'Does laser hair removal work on all hair colors?',
        answer: 'Laser works best on dark hair. Light blonde, white, or gray hairs may require alternative treatments or may not respond as effectively to laser treatment.'
      },
      {
        question: 'Is the treatment painful?',
        answer: 'Most patients describe the sensation as a rubber band snapping against the skin. We use advanced cooling systems and techniques to minimize discomfort throughout treatment.'
      }
    ],
    testimonials: [
      {
        name: 'Anita Reddy',
        rating: 5,
        text: 'Best decision ever! Full body laser hair reduction freed me from constant shaving and waxing. The results are amazing and permanent.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹80,000 (complete package)',
      sessionInfo: '6-8 sessions included',
      packageDeals: 'Full body packages with up to 30% savings available'
    }
  },
  {
    slug: 'under-arm-laser',
    name: 'Under Arm Laser Hair Reduction',
    category: 'Laser Hair Reduction',
    tagline: 'Smooth, Hair-Free Underarms Forever.',
    description: 'Underarm laser hair reduction provides permanent solution for unwanted underarm hair using advanced laser technology. This treatment targets hair follicles in the delicate underarm area with precision and safety, eliminating the need for daily shaving or painful waxing. Enjoy smooth, confident underarms without irritation or ingrown hairs.',
    approach: 'Our specialists at VIVAA use gentle laser settings specifically calibrated for the sensitive underarm area. We ensure complete comfort during treatment while achieving maximum hair reduction. Our advanced cooling systems and precise technique make this one of our most popular and effective treatments.',
    benefits: [
      'Permanent underarm hair reduction',
      'No more daily shaving required',
      'Eliminates razor burn and irritation',
      'Prevents ingrown hairs',
      'Quick treatment sessions (10-15 minutes)',
      'Suitable for all skin types',
      'Long-lasting smooth results',
      'Boosts confidence in sleeveless clothing'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/under arms laser/1.webp',
      '/images/viva-banner-images/under arms laser/2.webp',
      '/images/viva-banner-images/under arms laser/3.webp',
      '/images/viva-banner-images/under arms laser/4.webp',
      '/images/viva-banner-images/under arms laser/5.webp',
      '/images/viva-banner-images/under arms laser/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Area Assessment',
        description: 'Evaluation of underarm hair density and skin sensitivity'
      },
      {
        step: 2,
        title: 'Skin Preparation',
        description: 'Cleansing and preparation of underarm area'
      },
      {
        step: 3,
        title: 'Laser Treatment',
        description: 'Precise laser application with cooling protection'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Soothing treatment and aftercare instructions'
      },
      {
        step: 5,
        title: 'Follow-up Sessions',
        description: 'Regular sessions for complete hair reduction'
      }
    ],
    faqs: [
      {
        question: 'How many sessions are needed for underarms?',
        answer: 'Typically 4-6 sessions are needed for optimal underarm hair reduction, spaced 4-6 weeks apart.'
      },
      {
        question: 'Is underarm laser treatment painful?',
        answer: 'Most patients experience minimal discomfort. We use advanced cooling systems to ensure your comfort throughout the treatment.'
      },
      {
        question: 'Can I use deodorant after treatment?',
        answer: 'We recommend avoiding deodorant for 24 hours post-treatment to allow the skin to heal properly.'
      },
      {
        question: 'How long does each session take?',
        answer: 'Underarm laser sessions typically take 10-15 minutes, making it a convenient treatment that fits into any schedule.'
      }
    ],
    testimonials: [
      {
        name: 'Shreya Patel',
        rating: 5,
        text: 'No more daily shaving! Underarm laser treatment was quick, comfortable, and the results are permanent. Love it!',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹2,500 per session',
      sessionInfo: '4-6 sessions recommended',
      packageDeals: 'Underarm packages with significant savings available'
    }
  },
  {
    slug: 'chest-and-back-laser',
    name: 'Chest and Back Laser Hair Reduction',
    category: 'Laser Hair Reduction',
    tagline: 'Smooth Chest and Back for Ultimate Confidence.',
    description: 'Chest and back laser hair reduction provides comprehensive hair removal for large body areas using advanced laser technology. This treatment is particularly popular among men seeking smooth, hair-free torsos and women dealing with unwanted chest or back hair. Our powerful laser systems efficiently treat these larger areas while ensuring complete comfort and safety.',
    approach: 'VIVAA\'s chest and back laser treatments use high-powered laser systems designed for large area coverage. Our specialists customize treatment parameters based on hair density, skin type, and individual comfort levels. We use advanced cooling systems and systematic treatment patterns to ensure complete coverage and optimal results.',
    benefits: [
      'Comprehensive chest and back hair removal',
      'Efficient treatment of large body areas',
      'Permanent hair reduction results',
      'Eliminates back shaving difficulties',
      'Reduces ingrown hairs and folliculitis',
      'Suitable for all skin types',
      'Boosts confidence and comfort',
      'Long-lasting smooth results'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/chest and body laser/1.webp',
      '/images/viva-banner-images/chest and body laser/2.webp',
      '/images/viva-banner-images/chest and body laser/3.webp',
      '/images/viva-banner-images/chest and body laser/4.webp',
      '/images/viva-banner-images/chest and body laser/5.webp',
      '/images/viva-banner-images/chest and body laser/6.webp'

    ],
    processSteps: [
      {
        step: 1,
        title: 'Area Mapping',
        description: 'Comprehensive assessment and treatment area mapping'
      },
      {
        step: 2,
        title: 'Skin Preparation',
        description: 'Thorough cleansing and preparation of treatment areas'
      },
      {
        step: 3,
        title: 'Systematic Laser Treatment',
        description: 'Methodical laser application across chest and back areas'
      },
      {
        step: 4,
        title: 'Cooling and Care',
        description: 'Post-treatment cooling and skin care application'
      },
      {
        step: 5,
        title: 'Progress Evaluation',
        description: 'Regular assessment and treatment adjustments'
      }
    ],
    faqs: [
      {
        question: 'How long does chest and back treatment take?',
        answer: 'Treatment typically takes 45-60 minutes depending on the area size and hair density. We ensure thorough coverage for optimal results.'
      },
      {
        question: 'Is it suitable for both men and women?',
        answer: 'Yes, chest and back laser hair reduction is suitable for both men and women seeking smooth, hair-free torsos.'
      },
      {
        question: 'How many sessions are required?',
        answer: 'Typically 6-8 sessions are needed for optimal results, spaced 6-8 weeks apart to target different hair growth cycles.'
      },
      {
        question: 'Will the treatment affect my ability to exercise?',
        answer: 'We recommend avoiding intense exercise for 24-48 hours post-treatment to allow the skin to heal properly.'
      }
    ],
    testimonials: [
      {
        name: 'Vikram Sharma',
        rating: 5,
        text: 'Finally got rid of my back hair! The treatment was comfortable and the results are exactly what I wanted. Highly recommend!',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹8,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Chest and back packages with attractive pricing'
    }
  },
  {
    slug: 'bikini-laser',
    name: 'Bikini Laser Hair Reduction',
    category: 'Laser Hair Reduction',
    tagline: 'Gentle, Precise Bikini Area Hair Removal.',
    description: 'Bikini laser hair reduction provides safe, effective hair removal for the intimate bikini area using gentle laser technology. Our treatment offers various options from basic bikini line to full Brazilian, all performed with the utmost privacy, comfort, and professionalism. Say goodbye to painful waxing and enjoy smooth, confident results.',
    approach: 'Our female specialists at VIVAA use gentle laser settings specifically designed for sensitive intimate areas. We prioritize your comfort and privacy throughout the treatment, using advanced cooling systems and precise techniques to ensure effective hair reduction with minimal discomfort.',
    benefits: [
      'Gentle treatment for sensitive areas',
      'Various options: bikini line to full Brazilian',
      'Eliminates painful waxing sessions',
      'Reduces ingrown hairs and irritation',
      'Long-lasting smooth results',
      'Enhanced comfort and confidence',
      'Professional, private treatment environment',
      'Suitable for all skin types'
    ],
    beforeAfterImages: [
        '/images/viva-banner-images/bikini laser removal/1.webp',
        '/images/viva-banner-images/bikini laser removal/2.webp',
        '/images/viva-banner-images/bikini laser removal/3.webp',
        '/images/viva-banner-images/bikini laser removal/4.webp',
        '/images/viva-banner-images/bikini laser removal/5.webp',
        '/images/viva-banner-images/bikini laser removal/6.webp'

    ],
    processSteps: [
      {
        step: 1,
        title: 'Private Consultation',
        description: 'Confidential discussion of treatment options and expectations'
      },
      {
        step: 2,
        title: 'Area Preparation',
        description: 'Gentle cleansing and preparation of treatment area'
      },
      {
        step: 3,
        title: 'Laser Treatment',
        description: 'Precise laser application with maximum comfort measures'
      },
      {
        step: 4,
        title: 'Soothing Care',
        description: 'Post-treatment soothing and protective care'
      },
      {
        step: 5,
        title: 'Follow-up Support',
        description: 'Ongoing care and additional sessions as needed'
      }
    ],
    faqs: [
      {
        question: 'Is bikini laser treatment painful?',
        answer: 'We use advanced cooling systems and gentle techniques to minimize discomfort. Most patients find it much more comfortable than waxing.'
      },
      {
        question: 'What bikini options are available?',
        answer: 'We offer bikini line, extended bikini, and full Brazilian options. Our specialists will discuss the best choice for your needs.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Typically 6-8 sessions are recommended for optimal results, spaced 4-6 weeks apart.'
      },
      {
        question: 'Is the treatment private and confidential?',
        answer: 'Absolutely. We ensure complete privacy and confidentiality throughout your treatment with our professional female specialists.'
      }
    ],
    testimonials: [
      {
        name: 'Priya Nair',
        rating: 5,
        text: 'So much better than waxing! The staff made me feel comfortable and the results are amazing. No more painful salon visits!',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹4,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Bikini laser packages with privacy and comfort guaranteed'
    }
  },
  {
    slug: 'legs-and-arms-laser',
    name: 'Legs and Arms Laser Hair Reduction',
    category: 'Laser Hair Reduction',
    tagline: 'Smooth Legs and Arms for Effortless Beauty.',
    description: 'Legs and arms laser hair reduction provides comprehensive hair removal for these highly visible areas using advanced laser technology. This popular treatment eliminates the need for frequent shaving and waxing, giving you smooth, hair-free legs and arms year-round. Perfect for those who want to wear shorts, skirts, and sleeveless tops with confidence.',
    approach: 'Our laser specialists at VIVAA use efficient laser systems designed for treating larger areas like legs and arms. We customize treatment parameters based on hair density and skin type, ensuring optimal results with maximum comfort. Our systematic approach ensures complete coverage and consistent results.',
    benefits: [
      'Comprehensive legs and arms hair removal',
      'Eliminates daily shaving routine',
      'Smooth skin for shorts and sleeveless wear',
      'Reduces razor burn and ingrown hairs',
      'Long-lasting hair reduction results',
      'Time-saving beauty solution',
      'Suitable for all skin types',
      'Boosts confidence in revealing clothing'
    ],
    beforeAfterImages: [
        '/images/viva-banner-images/legs and arms removal/1.webp',
        '/images/viva-banner-images/legs and arms removal/2.webp',
        '/images/viva-banner-images/legs and arms removal/3.webp',
        '/images/viva-banner-images/legs and arms removal/4.webp',
        '/images/viva-banner-images/legs and arms removal/5.webp',
        '/images/viva-banner-images/legs and arms removal/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Area Assessment',
        description: 'Comprehensive evaluation of legs and arms hair patterns'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized approach for different areas and hair types'
      },
      {
        step: 3,
        title: 'Systematic Laser Treatment',
        description: 'Methodical treatment of all areas with appropriate settings'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Cooling treatment and skin protection measures'
      },
      {
        step: 5,
        title: 'Progress Monitoring',
        description: 'Regular assessment and treatment adjustments'
      }
    ],
    faqs: [
      {
        question: 'How long does legs and arms treatment take?',
        answer: 'Full legs and arms treatment typically takes 60-90 minutes, depending on the area size and hair density.'
      },
      {
        question: 'Can I treat just legs or just arms?',
        answer: 'Yes, we offer individual treatments for legs only or arms only, as well as combination packages for both areas.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Typically 6-8 sessions are recommended for optimal results, spaced 6-8 weeks apart.'
      },
      {
        question: 'When can I resume normal activities?',
        answer: 'You can resume normal activities immediately after treatment. We recommend avoiding sun exposure and using sunscreen on treated areas.'
      }
    ],
    testimonials: [
      {
        name: 'Kavya Reddy',
        rating: 5,
        text: 'Love my smooth legs and arms! No more time wasted shaving every day. The treatment was comfortable and results are fantastic!',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹12,000 per session',
      sessionInfo: '6-8 sessions recommended',
      packageDeals: 'Legs and arms packages with significant savings available'
    }
  },
  {
    slug: 'beard-shaping',
    name: 'Beard Shaping',
    category: 'Laser Hair Reduction',
    tagline: 'Precision Beard Contouring and Shaping.',
    description: 'Beard shaping using laser technology provides precise contouring and permanent hair removal for unwanted facial hair areas. This treatment is perfect for men who want to maintain clean beard lines, remove neck hair, or create specific beard styles. Our precision laser technique ensures sharp, well-defined beard boundaries that require minimal maintenance.',
    approach: 'Our male grooming specialists at VIVAA use precise laser settings to create clean, sharp beard lines and remove unwanted facial hair. We work with you to design the perfect beard shape that complements your facial features and personal style. Our technique ensures natural-looking results with permanent hair reduction in unwanted areas.',
    benefits: [
      'Precise beard line definition',
      'Permanent removal of unwanted neck hair',
      'Creates clean, sharp beard boundaries',
      'Reduces daily grooming time',
      'Customizable beard styling options',
      'Eliminates razor burn and irritation',
      'Professional, masculine results',
      'Long-lasting beard maintenance solution'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/beard shapping/1.webp',
      '/images/viva-banner-images/beard shapping/2.webp',
      '/images/viva-banner-images/beard shapping/3.webp',
      '/images/viva-banner-images/beard shapping/4.webp',
      '/images/viva-banner-images/beard shapping/5.webp',
      '/images/viva-banner-images/beard shapping/6.webp'
      
    ],
    processSteps: [
      {
        step: 1,
        title: 'Beard Design Consultation',
        description: 'Discussion of desired beard style and facial analysis'
      },
      {
        step: 2,
        title: 'Precision Mapping',
        description: 'Detailed marking of beard lines and removal areas'
      },
      {
        step: 3,
        title: 'Laser Contouring',
        description: 'Precise laser application for beard shaping'
      },
      {
        step: 4,
        title: 'Line Refinement',
        description: 'Fine-tuning of beard boundaries and edges'
      },
      {
        step: 5,
        title: 'Maintenance Planning',
        description: 'Follow-up sessions for perfect beard maintenance'
      }
    ],
    faqs: [
      {
        question: 'Can I choose my beard style?',
        answer: 'Absolutely! We work with you to design the perfect beard style that complements your facial features and personal preferences.'
      },
      {
        question: 'Will it look natural?',
        answer: 'Yes, our precision technique ensures natural-looking beard lines that appear as if they grow that way naturally.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Typically 4-6 sessions are needed for optimal beard shaping results, spaced 4-6 weeks apart.'
      },
      {
        question: 'Can I still grow my beard longer?',
        answer: 'Yes, beard shaping only removes hair from unwanted areas while preserving your ability to grow your beard in the desired areas.'
      }
    ],
    testimonials: [
      {
        name: 'Arun Kumar',
        rating: 5,
        text: 'Perfect beard lines every day! No more struggling with razors to get clean edges. The laser shaping looks completely natural.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹3,500 per session',
      sessionInfo: '4-6 sessions recommended',
      packageDeals: 'Beard shaping packages with precision guarantee'
    }
  },
  {
    slug: 'facial-hair-removal',
    name: 'Facial Hair Removal',
    category: 'Laser Hair Reduction',
    tagline: 'Smooth, Hair-Free Facial Skin.',
    description: 'Facial laser hair removal provides precise and permanent reduction of unwanted facial hair using gentle laser technology specifically calibrated for delicate facial skin. Our advanced systems target hair follicles while protecting the surrounding skin, ensuring effective treatment without irritation. This treatment is ideal for removing hair from upper lip, chin, cheeks, sideburns, and other facial areas.',
    approach: 'VIVAA\'s facial laser treatments use specialized settings appropriate for facial skin sensitivity and precision. Our specialists carefully map treatment areas and adjust laser parameters to achieve optimal results while protecting sensitive facial skin. We use the latest cooling technology to ensure comfort throughout the treatment process.',
    benefits: [
      'Permanent facial hair reduction',
      'Precision targeting of unwanted hair',
      'Gentle treatment for sensitive facial skin',
      'No more daily shaving or painful waxing',
      'Reduces razor burn and skin irritation',
      'Boosts confidence and self-esteem',
      'Quick treatment sessions',
      'Long-lasting smooth results'
    ],
    beforeAfterImages: [
     '/images/viva-banner-images/facial hair removal/1.webp',
      '/images/viva-banner-images/facial hair removal/2.webp',
      '/images/viva-banner-images/facial hair removal/3.webp',
      '/images/viva-banner-images/facial hair removal/4.webp',
      '/images/viva-banner-images/facial hair removal/5.webp',
      '/images/viva-banner-images/facial hair removal/6.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Facial Assessment',
        description: 'Detailed evaluation of facial hair pattern and skin sensitivity'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized approach for different facial areas and hair types'
      },
      {
        step: 3,
        title: 'Laser Application',
        description: 'Precise laser treatment with appropriate settings for facial skin'
      },
      {
        step: 4,
        title: 'Immediate Care',
        description: 'Post-treatment cooling and protective care for facial skin'
      },
      {
        step: 5,
        title: 'Follow-up Sessions',
        description: 'Regular sessions for complete hair reduction and maintenance'
      }
    ],
    faqs: [
      {
        question: 'Which facial areas can be treated?',
        answer: 'We can safely treat upper lip, chin, cheeks, sideburns, jawline, and other facial areas while carefully avoiding the delicate eye area for safety.'
      },
      {
        question: 'How many facial treatments are needed?',
        answer: 'Typically 4-6 sessions are needed for facial hair, spaced 4-6 weeks apart, as facial hair tends to respond well to laser treatment.'
      },
      {
        question: 'Will laser damage my facial skin?',
        answer: 'No, our advanced laser systems are designed to target hair follicles specifically while protecting and preserving the surrounding facial skin.'
      },
      {
        question: 'Can I wear makeup after treatment?',
        answer: 'You should avoid makeup for 24 hours post-treatment to allow skin to heal properly. After that, normal makeup application can resume.'
      }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        rating: 5,
        text: 'Facial hair removal at VIVAA was gentle and effective. No more embarrassing upper lip hair and my skin looks flawless!',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹3,000 per session',
      sessionInfo: '4-6 sessions typically needed',
      packageDeals: 'Facial hair removal packages with attractive discounts'
    }
  },
  {
    slug: 'ear-lobe',
    name: 'Ear Lobe Hair Removal',
    category: 'Laser Hair Reduction',
    tagline: 'Precise Hair Removal for Clean Ear Appearance.',
    description: 'Ear lobe laser hair removal provides precise, safe removal of unwanted hair from the ear area using specialized laser technology. This treatment addresses hair growth on ear lobes, around the ears, and other ear-adjacent areas that can be difficult to manage with traditional hair removal methods. Our gentle approach ensures effective results while maintaining complete safety.',
    approach: 'Our specialists at VIVAA use precise, low-intensity laser settings specifically designed for the delicate ear area. We employ careful positioning and protective measures to ensure complete safety while effectively targeting unwanted ear hair. This specialized treatment requires expert technique and attention to detail.',
    benefits: [
      'Precise removal of ear area hair',
      'Safe treatment for delicate ear region',
      'Eliminates difficult-to-reach hair',
      'Professional, hygienic approach',
      'Quick treatment sessions',
      'Long-lasting smooth results',
      'Boosts grooming confidence',
      'Suitable for both men and women'
    ],
    beforeAfterImages: [
      '/images/viva-banner-images/ear lo be removal/1.webp',
      '/images/viva-banner-images/ear lo be removal/2.webp',
      '/images/viva-banner-images/ear lo be removal/3.webp',
      '/images/viva-banner-images/ear lo be removal/4.webp',
      '/images/viva-banner-images/ear lo be removal/5.webp',
      '/images/viva-banner-images/ear lo be removal/6.webp' 

    ],
    processSteps: [
      {
        step: 1,
        title: 'Ear Area Assessment',
        description: 'Careful evaluation of ear hair pattern and skin sensitivity'
      },
      {
        step: 2,
        title: 'Safety Preparation',
        description: 'Protective measures and positioning for safe treatment'
      },
      {
        step: 3,
        title: 'Precision Laser Treatment',
        description: 'Careful laser application with specialized settings'
      },
      {
        step: 4,
        title: 'Post-Treatment Care',
        description: 'Gentle aftercare and protection of treated area'
      },
      {
        step: 5,
        title: 'Follow-up Assessment',
        description: 'Progress evaluation and additional sessions if needed'
      }
    ],
    faqs: [
      {
        question: 'Is ear lobe laser treatment safe?',
        answer: 'Yes, when performed by trained specialists using appropriate protective measures and specialized settings, ear lobe laser treatment is completely safe.'
      },
      {
        question: 'How many sessions are typically needed?',
        answer: 'Usually 3-5 sessions are sufficient for ear lobe hair removal, spaced 4-6 weeks apart.'
      },
      {
        question: 'Is the treatment uncomfortable?',
        answer: 'Most patients experience minimal discomfort due to the gentle settings used for this delicate area.'
      },
      {
        question: 'Can both men and women get this treatment?',
        answer: 'Yes, ear lobe hair removal is suitable for both men and women who want to eliminate unwanted ear area hair.'
      }
    ],
    testimonials: [
      {
        name: 'Suresh Patel',
        rating: 5,
        text: 'Finally got rid of those annoying ear hairs! The treatment was quick, safe, and the results are exactly what I wanted.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ],
    pricing: {
      startingPrice: '₹1,500 per session',
      sessionInfo: '3-5 sessions typically needed',
      packageDeals: 'Ear lobe treatment packages with precision guarantee'
    }
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};