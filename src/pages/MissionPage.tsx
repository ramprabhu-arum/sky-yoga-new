import React, { useState } from 'react';
import { PageType } from '../components/Navbar';
import { Sparkles, Brain, Heart, Activity, CheckCircle, ArrowRight, BookOpen, Compass } from 'lucide-react';

interface MissionPageProps {
  onNavigate: (page: PageType) => void;
  onOpenGetStarted: () => void;
}

export const MissionPage: React.FC<MissionPageProps> = ({ onNavigate, onOpenGetStarted }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

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
      {/* Hero Header */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-[#D27D56] font-semibold mb-3 inline-block">
          Our Vision & Lineage
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D2825] tracking-tight mb-6 max-w-3xl mx-auto">
          Ancient Yogic Science for Conscious Living
        </h1>
        <p className="text-base md:text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
          Bringing the complete, scientific teachings of Yogiraj Vethathiri Maharishi to North America — harmonizing body,
          mind, and soul for peaceful living in a fast-paced world.
        </p>
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
    </div>
  );
};
