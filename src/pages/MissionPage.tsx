import React, { useState } from 'react';
import { PageType } from '../components/Navbar';
import { Sparkles, Brain, Heart, Activity, CheckCircle, ArrowRight, BookOpen, Compass, Play, User, Baby, Users, Globe2, HeartHandshake, MapPin, Landmark, Mountain } from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface MissionPageProps {
  onNavigate: (page: PageType) => void;
  onOpenGetStarted: () => void;
  onOpenVideo?: () => void;
}

// TODO: replace with the Zeffy donation link once shared by Ravi Sir
const DONATE_URL = 'https://www.zeffy.com/';

export const MissionPage: React.FC<MissionPageProps> = ({ onNavigate, onOpenGetStarted, onOpenVideo }) => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeImpact, setActiveImpact] = useState<number>(0);

  const impacts = [
    {
      id: 'individuals',
      label: 'Individuals',
      icon: User,
      headline: 'From reaction to calm awareness',
      points: [
        'SKY Yoga offers a holistic path toward physical well-being, mental clarity, emotional balance, and inner peace. Through Simplified Physical Exercises, Meditation, Kayakalpa Yoga, and Introspection, individuals learn to better understand the connection between the body, mind, and life force.',
        'Regular practice encourages greater self-awareness and helps individuals respond to everyday challenges with calmness rather than reaction. Through meditation and introspection, practitioners learn to recognize and gradually transform patterns of stress, anger, fear, and excessive desire. Over time, this journey nurtures resilience, clarity of thought, compassion, and a deeper sense of purpose.',
        'The ultimate goal is simple yet profound: to help each person live a healthier, more peaceful, and harmonious life — within themselves, within their families, and with the world around them.',
      ],
    },
    {
      id: 'kids',
      label: 'Kids',
      icon: Baby,
      headline: 'Calm, focused, kind young minds',
      points: [
        'Children today are growing up in a world filled with constant stimulation, academic pressures, technology, and rapidly changing social environments. SKY Yoga introduces children and youth to age-appropriate practices that encourage calmness, concentration, self-awareness, physical well-being, and positive values.',
        'By learning simple exercises, relaxation, meditation, and principles of mindful living, children can develop tools to better understand their thoughts and emotions and respond thoughtfully to challenging situations.',
        'Beyond helping children become more focused and resilient, SKY Yoga seeks to nurture qualities such as kindness, gratitude, respect, responsibility, and compassion. When these values are cultivated early in life, they can provide a strong foundation for becoming confident, thoughtful, and socially responsible adults.',
      ],
    },
    {
      id: 'communities',
      label: 'Communities',
      icon: Users,
      headline: 'Peaceful communities begin with peaceful individuals',
      points: [
        'When people develop greater self-awareness, patience, compassion, and respect for others, those qualities naturally influence their families, workplaces, neighborhoods, and communities. SKY Yoga brings people together through group meditation, educational programs, community activities, and opportunities for service.',
        'Through Introspection and the practice of blessing others, participants are encouraged to move beyond differences, reduce conflict, and build relationships based on understanding and mutual respect.',
        'As local SKY Yoga groups grow across North America and around the world, they create communities where people from diverse backgrounds can come together with a shared aspiration: to live consciously, serve selflessly, and contribute to the well-being of all.',
      ],
    },
    {
      id: 'world',
      label: 'The World',
      icon: Globe2,
      headline: 'World Peace Through Individual Peace',
      points: [
        'Vethathiri Maharishi envisioned World Peace Through Individual Peace.',
        'His vision begins not with governments or institutions, but with the transformation of each human being. When individuals learn to understand themselves, regulate their emotions, respect others, and recognize the interconnectedness of life, the foundation for lasting peace becomes stronger.',
        'SKY Yoga carries this vision forward by making practices for physical health, meditation, introspection, and harmonious living accessible to people around the world. Each individual who becomes more peaceful can positively influence a family. Peaceful families strengthen communities. Harmonious communities contribute to peaceful nations. In this way, personal transformation becomes a pathway toward global transformation.',
      ],
    },
  ];

  const peaceChain = [
    { label: 'Peace within the individual', icon: User },
    { label: 'Harmony within the family', icon: Heart },
    { label: 'Unity within the community', icon: Users },
    { label: 'Peace throughout the world', icon: Globe2 },
  ];

  const timeline = [
    { year: '1911', title: 'A Weaver’s Son Is Born', text: 'Vethathiri Maharishi is born in a humble family of weavers in South India.' },
    { year: '1958', title: 'WCSC Founded', text: 'He founds the World Community Service Center to make yogic science accessible to everyone.' },
    { year: 'Decades', title: 'A Global Family', text: 'Centers and practitioners grow across India and around the world.' },
    { year: 'Today', title: 'SKY North America', text: 'Local groups across the U.S. and Canada bring SKY Yoga to families and communities.' },
    { year: 'Tomorrow', title: 'U.S. Temple of Consciousness', text: 'A sanctuary for learning, healing, research, youth development, and global outreach.' },
  ];

  const pillars = [
    {
      id: 'exercises',
      title: 'Simplified Physical Exercises',
      tagline: 'Harmonize the flow of blood, heat, air, and bio-magnetism',
      description:
        'Synthesized from ancient Siddha traditions, this gentle 35-minute sequence of 7 postures stimulates neuro-muscular vitality without bodily strain. It clears blockages in the meridians and keeps joints and organs in optimum condition.',
      points: [
        'Hand & Arm Exercises: Regulates heart and respiratory circulation',
        'Leg Exercises: Tones the nervous system and pelvic vitality',
        'Breathing / Pranayama: Cleanses bronchial pathways and enhances lung capacity',
        'Eye Exercises: Relieves digital eye strain and stimulates optic nerves',
        'Kapalabhati & Makarasana: Strengthens the spine, digestive organs, and abdominal muscles',
        'Massage & Acupressure: Equalizes peripheral bio-magnetic distribution',
      ],
    },
    {
      id: 'meditation',
      title: 'Kundalini Meditation',
      tagline: 'Gentle, teacher-guided awakening of the life-force',
      description:
        'Unlike forceful breathing methods, SKY Kundalini Yoga employs gentle touch initiation by a certified master to raise the dormant spiritual life-force from the Mooladhara chakra directly to the Agna (third eye) chakra, instantly reducing mental agitation.',
      points: [
        'Agna Meditation: Calms thoughts; shifts brainwaves into peaceful Alpha frequencies (8–13 Hz)',
        'Shanti Meditation: Stabilizes and grounds physical bio-magnetic current in the lower abdomen',
        'Thuriya Meditation: Elevates consciousness to the crown (Sahasrara) for deep cosmic awareness',
        'Thuriyatheetha: Merges personal consciousness with primordial universal consciousness',
        'Nine Center Meditation: Purifies endocrine glands and vital psychic nodes',
      ],
    },
    {
      id: 'kayakalpa',
      title: 'Kaya Kalpa Yoga',
      tagline: 'Cellular rejuvenation & anti-aging life science',
      description:
        'Kaya means body, and Kalpa means immortal or transformed. Rediscovered by Maharishi from ancient Tamil Siddha masters, Kaya Kalpa is a daily 3-minute physical practice that transmutes sexual vital fluid into radiant bio-magnetic energy.',
      points: [
        'Postpones biological aging and maintains immune resilience',
        'Recycles metabolic waste fluids into vibrant cellular energy',
        'Fortifies the spinal cord and autonomic nervous system',
        'Balances hormonal secretion across pineal, pituitary, and reproductive glands',
        'Suitable for all adults aged 14 and above, requiring only minutes each morning and evening',
      ],
    },
    {
      id: 'introspection',
      title: 'Systematic Introspection',
      tagline: 'Sublimation of subconscious imprints and emotional mastery',
      description:
        'Physical exercise and meditation quiet the system; Introspection cleanses the subconscious archives of accumulated genetic and behavioral imprints. Maharishi provides systematic step-by-step techniques to resolve mental conflicts.',
      points: [
        'Analysis of Thoughts: Trace thoughts to their root triggers and eliminate harmful impulses',
        'Moralization of Desires: Evaluate desires through wisdom and practical social harmony',
        'Neutralization of Anger: Dissolve reactive frustration before it turns into chronic resentment',
        'Eradication of Worries: Categorize worries into actionable and imaginary, freeing mental bandwidth',
        'Who Am I? (Self-Realization): Contemplate the nature of consciousness and oneness with the cosmos',
      ],
    },
  ];

  return (
    <div className="w-full pt-[90px] pb-20">
      {/* Hero Banner with Maharishi's image and hero tag */}
      <section className="px-5 md:px-12 max-w-[1300px] mx-auto mb-16">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[440px] md:min-h-[520px] flex items-end md:items-center shadow-xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt0tgSzQpqTNcpyAacX0GBBT0P4wJKWRFOAT6PHOhDSIQp-e2rlmlBSjcpj9UZ2rdJdqaRbtuBzO-7oDAYOel1rotORcO6SEq4Fjd7GCk4hmhEvFjXhY58cZiQrpE3TVTOIhJP28GIJ2sFVTrbXJz_qSf3wymG4pJi8HDnjqWNBHfKwCAHpIo-CmRpXSDUxlmZvnb4Ds_-jsXztBRZKZdCddFOMzsxxtbFqCpAAKhTRdMOzfPiwXoR"
            alt="Yogiraj Vethathiri Maharishi"
            className="absolute inset-0 w-full h-full object-cover scale-105 animate-float-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#2D2825]/95 via-[#2D2825]/70 md:via-[#2D2825]/60 to-[#2D2825]/30 md:to-transparent" />
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-[#D27D56]/40 ripple-ring" />
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-[#D27D56]/30 ripple-ring" style={{ animationDelay: '2s' }} />
          <div className="relative z-10 p-8 md:p-16 max-w-2xl text-left animate-fade-in">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F0C9B3] font-semibold mb-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> Our Mission &amp; Vision
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
              World Peace Begins with <span className="text-[#E9A783]">Individual Peace</span>
            </h1>
            <p className="text-base md:text-lg text-stone-200 leading-relaxed mb-8">
              Bringing the complete, scientific teachings of Yogiraj Vethathiri Maharishi to North America — harmonizing body,
              mind, and soul for peaceful living in a fast-paced world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenGetStarted} className="px-6 py-3 text-center bg-[#D27D56] text-white text-sm font-semibold rounded-lg hover:bg-[#b8653f] transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer">
                Begin Your Journey
              </button>
              <a href="#donate" className="px-6 py-3 text-center bg-white/10 backdrop-blur text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all">
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKY NA Mission / Vision */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-20">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#D27D56] font-semibold">Our Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2825] leading-tight">
                A world that lives with clarity, compassion, and conscious awareness.
              </h2>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Our vision is to create a world where every individual lives with clarity, compassion, and conscious awareness — in harmony with themselves, with others, with nature, and with the larger cosmic order. We envision a future where inner peace becomes a practical foundation for outer peace, where scientific spirituality guides personal and societal transformation, and where safe, accessible practices empower people of all ages to elevate their consciousness and live meaningful, balanced lives.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Through meditation, introspection, holistic well-being, and service to humanity, SKY NA strives to nurture communities rooted in kindness, responsibility, and collective growth.
              </p>
              <div className="p-6 rounded-2xl bg-[#FDFBF7] border-l-4 border-[#D27D56] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D27D56] mb-2">
                  <Landmark className="w-4 h-4" /> The U.S. Temple of Consciousness
                </div>
                <p className="text-sm text-[#2D2825] leading-relaxed">
                  As part of this vision, we are committed to establishing the U.S. Temple of Consciousness — a sanctuary for learning, healing, research, youth development, and global outreach. This center will serve as a beacon for conscious living and a hub for cultivating peace that radiates across families, communities, and society.
                </p>
              </div>
              <p className="text-base text-[#2D2825] font-medium italic leading-relaxed">
                We aspire to a future where conscious living is not an exception, but a way of life — accessible to all, grounded in science, enriched by spirituality, and guided by the universal principle that world peace begins with individual peace.
              </p>
            </div>

            {/* Video placeholder (Murali Sir) */}
            <div className="lg:col-span-5">
              <button
                onClick={onOpenVideo}
                aria-label="Play vision message video"
                className="group relative w-full aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D2825] via-[#4a3a31] to-[#D27D56] shadow-xl cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-24 h-24 rounded-full bg-white/20 ripple-ring" />
                  <span className="relative w-20 h-20 rounded-full bg-white/95 text-[#D27D56] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 text-left bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-xs uppercase tracking-wider text-[#F0C9B3] font-semibold">Vision Message</p>
                  <p className="text-white font-semibold">A message from Murali Sir</p>
                  <p className="text-[11px] text-stone-300">Video coming soon</p>
                </div>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Philosophy & Maharishi Spotlight */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-20">
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#2D2825]/10 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md border border-stone-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt0tgSzQpqTNcpyAacX0GBBT0P4wJKWRFOAT6PHOhDSIQp-e2rlmlBSjcpj9UZ2rdJdqaRbtuBzO-7oDAYOel1rotORcO6SEq4Fjd7GCk4hmhEvFjXhY58cZiQrpE3TVTOIhJP28GIJ2sFVTrbXJz_qSf3wymG4pJi8HDnjqWNBHfKwCAHpIo-CmRpXSDUxlmZvnb4Ds_-jsXztBRZKZdCddFOMzsxxtbFqCpAAKhTRdMOzfPiwXoR"
                alt="Meditation & Yoga practice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-wider text-[#D27D56] font-bold mb-1">Founder & Visionary</p>
                  <p className="text-xl font-bold">Yogiraj Vethathiri Maharishi</p>
                  <p className="text-xs text-stone-300">1911 – 2006 • Founder of WCSC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 space-y-5 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D27D56] uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>A Practical Universal Synthesis</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2825] leading-snug">
              "Individual Peace Precedes World Peace."
            </h2>
            <p className="text-base text-[#6E6E73] leading-relaxed">
              Born into a humble family of weavers in South India, Vethathiri Maharishi spent over three decades
              investigating Ayurveda, Siddha medicine, philosophy, and the mysteries of universal bio-magnetism. Through deep
              intense contemplation, he attained self-realization at age 35.
            </p>
            <p className="text-base text-[#6E6E73] leading-relaxed">
              Realizing that ancient spiritual sciences were often kept inaccessible, overly austere, or burdened by superstition,
              Maharishi dedicated his life to simplifying these practices for householders, working professionals, and families.
              In 1958, he founded the <strong>World Community Service Center (WCSC)</strong>, which today guides millions of
              practitioners worldwide with certified research centers and university degree programs.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#2D2825]">
              <span className="bg-[#F0EBE1] px-3.5 py-1.5 rounded-full border border-stone-200">
                100% Non-Sectarian
              </span>
              <span className="bg-[#F0EBE1] px-3.5 py-1.5 rounded-full border border-stone-200">
                501(c)(3) Non-Profit
              </span>
              <span className="bg-[#F0EBE1] px-3.5 py-1.5 rounded-full border border-stone-200">
                Scientific & Verifiable
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars (Interactive Explorer) */}
      <section className="py-16 px-5 md:px-12 bg-[#E8EDE7] border-y border-[#2D2825]/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">The Four Pillars</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mt-2 mb-3">
              A Complete System for Well-Being
            </h2>
            <p className="text-sm md:text-base text-[#6E6E73]">
              SKY Yoga is not merely physical stretching. It is a four-dimensional architecture addressing every level of
              human life.
            </p>
          </div>

          {/* Pillars Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activePillar === idx
                    ? 'border-[#D27D56] bg-[#FDFBF7] shadow-md -translate-y-0.5'
                    : 'border-stone-300/70 bg-[#FDFBF7]/60 hover:bg-[#FDFBF7] text-[#6E6E73]'
                }`}
              >
                <span className="text-xs font-mono text-[#D27D56] font-bold block mb-1">0{idx + 1}.</span>
                <h3 className="text-sm md:text-base font-bold text-[#2D2825] leading-snug">{pillar.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <div className="bg-[#FDFBF7] rounded-2xl border border-[#2D2825]/10 p-8 md:p-10 shadow-sm animate-fade-in">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#D27D56]">
                Pillar {activePillar + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D2825] mt-1 mb-2">
                {pillars[activePillar].title}
              </h3>
              <p className="text-base text-[#D27D56] font-medium mb-4 italic">{pillars[activePillar].tagline}</p>
              <p className="text-sm md:text-base text-[#6E6E73] leading-relaxed mb-6">
                {pillars[activePillar].description}
              </p>

              <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D2825] mb-3">Core Components & Benefits</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#2D2825]">
                {pillars[activePillar].points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-[#F0EBE1] p-3 rounded-lg border border-stone-200">
                    <CheckCircle className="w-4 h-4 text-[#D27D56] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs text-[#6E6E73]">
                  Taught systematically in the Adults Foundation Course & Kaya Kalpa Workshops.
                </span>
                <button
                  onClick={() => onNavigate('adults')}
                  className="px-5 py-2.5 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  View Course Schedule <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science of Bio-Magnetism & Brain Waves */}
      <section className="py-20 px-5 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">
              Research & Evidence
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] leading-tight">
              Brainwave Modulation & Bio-Magnetic Harmony
            </h2>
            <p className="text-base text-[#6E6E73] leading-relaxed">
              Modern neurophysiology verifies Maharishi’s assertions. During ordinary waking hours, the mind races in the
              Beta wave frequency (14 to 30 cycles per second), triggering sympathetic nervous fight-or-flight reactions.
            </p>
            <p className="text-base text-[#6E6E73] leading-relaxed">
              When kundalini energy is raised to the Agna center between the eyebrows, EEG scans reveal brainwaves
              calming instantly into the relaxed <strong>Alpha band (8 to 13 cps)</strong> and deeper into <strong>Theta (4 to 7 cps)</strong> during Thuriya meditation.
              At this level, conscious control over emotional reactions becomes effortless.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#F0EBE1] border border-stone-200">
                <p className="text-2xl font-bold font-mono text-[#D27D56]">14 - 30 Hz</p>
                <p className="text-xs font-bold text-[#2D2825] mt-1">Beta Waves (Stress)</p>
                <p className="text-[11px] text-[#6E6E73] mt-1">High adrenaline, mental exhaustion, divided focus.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F0EBE1] border border-stone-200">
                <p className="text-2xl font-bold font-mono text-emerald-700">8 - 13 Hz</p>
                <p className="text-xs font-bold text-[#2D2825] mt-1">Alpha Waves (SKY State)</p>
                <p className="text-[11px] text-[#6E6E73] mt-1">Quiet focus, enhanced immunity, neuro-plasticity.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#2D2825]/10 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#2D2825] flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#D27D56]" />
              Verified Health & Psychological Benefits
            </h3>
            <div className="space-y-4 text-xs md:text-sm text-[#6E6E73]">
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <strong className="text-[#2D2825] block mb-0.5">Cardiovascular & Blood Pressure Regulation</strong>
                Systematic physical exercises regulate arterial pressure and optimize venous return from lower extremities.
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <strong className="text-[#2D2825] block mb-0.5">Subconscious Reprogramming</strong>
                Introspection enables moralization of desires and neutralizes destructive anger without psychological suppression.
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <strong className="text-[#2D2825] block mb-0.5">Cellular Longevity (Kaya Kalpa)</strong>
                Conservation of physical vital fluid fortifies telomere resilience and delays degenerative tissue deterioration.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="w-full py-3 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all shadow-sm"
              >
                Begin Your Journey With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact (tabbed) */}
      <section className="py-20 px-5 md:px-12 max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mt-2 mb-3">Peace That Ripples Outward</h2>
            <p className="text-sm md:text-base text-[#6E6E73]">From one person to the entire world — see how SKY Yoga transforms every level of life.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-8" role="tablist">
            {impacts.map((imp, idx) => {
              const Icon = imp.icon;
              return (
                <button
                  key={imp.id}
                  role="tab"
                  aria-selected={activeImpact === idx}
                  onClick={() => setActiveImpact(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                    activeImpact === idx
                      ? 'bg-[#D27D56] text-white border-[#D27D56] shadow-md -translate-y-0.5'
                      : 'bg-white text-[#2D2825] border-stone-200 hover:border-[#D27D56]/50'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {imp.label}
                </button>
              );
            })}
          </div>

          <div key={impacts[activeImpact].id} className="bg-[#FDFBF7] rounded-3xl border border-[#2D2825]/10 p-5 sm:p-8 md:p-12 shadow-sm animate-fade-in grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#D27D56]">Impact on {impacts[activeImpact].label}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D2825] mt-2 leading-snug">{impacts[activeImpact].headline}</h3>
              {/* Real photos to be collected - placeholder tile */}
              <div className="mt-6 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#E8EDE7] to-[#F0EBE1] border border-stone-200 flex items-center justify-center text-[#D27D56]/60">
                {React.createElement(impacts[activeImpact].icon, { className: 'w-14 h-14' })}
              </div>
            </div>
            <ul className="md:col-span-8 space-y-4">
              {impacts[activeImpact].points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-[#6E6E73] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#D27D56] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Peace chain */}
      <section className="py-16 px-5 md:px-12 bg-[#2D2825] text-white">
        <Reveal className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {peaceChain.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#D27D56]/20 text-[#E9A783] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#E9A783]">0{i + 1}</span>
                  <p className="font-semibold mt-1">{step.label}</p>
                  {i < peaceChain.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E9A783] z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Donate */}
      <section id="donate" className="px-5 md:px-12 max-w-[1200px] mx-auto py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D27D56] to-[#a9552f] p-6 sm:p-10 md:p-14 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-white/10 animate-float-slow" />
            <div className="relative max-w-xl">
              <HeartHandshake className="w-10 h-10 mb-4 text-white/90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Donate to SKY NA</h2>
              <p className="text-white/90 leading-relaxed">
                SKY NA is a volunteer-run 501(c)(3) non-profit. Your gift supports free community programs, youth outreach, and the U.S. Temple of Consciousness.
              </p>
            </div>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 bg-white text-[#a9552f] font-bold rounded-xl hover:scale-105 transition-transform shadow-lg whitespace-nowrap w-full md:w-auto text-center"
            >
              Donate Here &rarr;
            </a>
          </div>
        </Reveal>
      </section>

      {/* Our Origin timeline */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-20">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">Our Origin</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mt-2">From a Weaver’s Vision to a Global Family</h2>
            <p className="text-xs text-[#6E6E73] mt-2">History of SKY NA to be provided by Murali Sir — draft milestones shown.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-3 left-[10%] right-[10%] h-0.5 bg-[#D27D56]/40 origin-left" style={{ animation: 'draw-line 1.6s ease-out both' }} />
            {timeline.map((t) => (
              <div key={t.year} className="relative text-center md:pt-8 group">
                <span className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D27D56] border-4 border-[#F5F2ED] group-hover:scale-125 transition-transform" />
                <span className="text-xs font-mono font-bold text-[#D27D56]">{t.year}</span>
                <h3 className="font-bold text-[#2D2825] mt-1 mb-1">{t.title}</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Global presence & Aliyar TOC */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#E8EDE7] border border-[#2D2825]/5">
              <Globe2 className="w-8 h-8 text-[#D27D56] mb-3" />
              <h3 className="text-2xl font-bold text-[#2D2825] mb-2">Our Global Presence</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed mb-5">
                Global centers carry Vethathiri Maharishi’s teachings across continents. In North America, find a SKY center near you.
              </p>
              <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 text-sm font-semibold text-[#D27D56] hover:gap-3 transition-all cursor-pointer">
                <MapPin className="w-4 h-4" /> Find a center <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 rounded-3xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm">
              <Mountain className="w-8 h-8 text-[#D27D56] mb-3" />
              <h3 className="text-2xl font-bold text-[#2D2825] mb-2">Aliyar Temple of Consciousness</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed mb-5">
                Looking for a yoga retreat or residential courses? The Temple of Consciousness at Aliyar, nestled in the Western Ghats, is the heart of the WCSC global family.
              </p>
              <a href="https://www.vethathiri.edu.in/pages/about-wcsc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D27D56] hover:gap-3 transition-all">
                Explore retreats &amp; residential courses <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
