import React, { useState } from 'react';
import { PageType } from '../components/Navbar';
import { Calendar, Clock, MapPin, Check, ArrowRight, Sparkles, BookOpen, UserCheck, ShieldCheck, ChevronDown, Dumbbell, Flame, Brain, Eye, GraduationCap, Sun } from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface AdultsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenRegisterModal: (title: string, category: string) => void;
  onOpenGetStarted: () => void;
}

export const AdultsPage: React.FC<AdultsPageProps> = ({
  onNavigate,
  onOpenRegisterModal,
  onOpenGetStarted,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'all' | 'online' | 'in-person'>('all');
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [openOffering, setOpenOffering] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Journey: SPE -> KK -> ... -> Divine Wisdom (intermediate steps are a draft; to be confirmed)
  const journey = [
    { abbr: 'SPE', title: 'Simplified Physical Exercises', icon: Dumbbell, text: 'Seven gentle practices that harmonize blood, heat, air, and bio-magnetism, preparing the body for deeper work.' },
    { abbr: 'KK', title: 'Kayakalpa Yoga', icon: Flame, text: 'A 3-minute daily practice for cellular rejuvenation and conservation of vital energy.' },
    { abbr: 'MED', title: 'Kundalini Meditation', icon: Brain, text: 'Agna, Shanti, and Thuriya meditations that calm the mind and awaken the life force.' },
    { abbr: 'INT', title: 'Introspection', icon: Eye, text: 'Systematic analysis of thoughts, desires, anger, and worries to transform deep-seated patterns.' },
    { abbr: 'DIP', title: 'Certificate → Diploma Programs', icon: GraduationCap, text: 'Structured study of Maharishi’s philosophy and science, from certificate to advanced diploma.' },
    { abbr: 'DW', title: 'Divine Wisdom', icon: Sun, text: 'Self-realization and oneness with the cosmos — the culmination of the SKY journey.' },
  ];

  const offerings = [
    { name: 'Foundation Course – Men and Women (Online)', price: '$60 per person', status: 'Open', details: 'Live online course for all who are new to SKY. Covers the Simplified Physical Exercises, Agna and Shanti meditation, and daily practice guidance.', course: 'Adults Foundation Course' },
    { name: 'In-Center Foundation Course', price: 'Contact center for fee details', status: 'Per center', details: 'The same foundation course taught in person at your local SKY center. Fees and schedules vary by center.', course: 'In-Center Foundation Course' },
    { name: 'Kayakalpa', price: '$35 per person', status: 'Registration open for next session', details: 'Learn the Kayakalpa practice for vitality, hormonal balance, and renewal. Foundation course is recommended before joining.', course: 'Kaya Kalpa Yoga' },
    { name: 'Certificate Program (1 Year)', price: '$300 / year', status: 'Registration June – Aug', details: 'A one-year guided study of SKY philosophy and practice.', course: 'Certificate Program' },
    { name: 'Diploma Program (1 Year)', price: '$300 / year', status: 'Registration June – Aug', details: 'A deeper one-year program building on the certificate level.', course: 'Diploma Program' },
    { name: 'Advance Diploma Program (2 Years)', price: '$300 / year', status: 'Registration June – Aug', details: 'A two-year advanced program for dedicated practitioners and aspiring teachers.', course: 'Advance Diploma Program' },
  ];

  const courses = [
    {
      id: 'foundation',
      title: 'Adults Foundation Course',
      badge: 'Core Program',
      level: 'All Levels • Beginners Welcome',
      duration: '2-Day Intensive (8 Hours Total)',
      format: 'Online Live & In-Person Centers',
      tagline: 'The Gateway to Kundalini Awakening & Physical Harmony',
      description:
        'The foundational cornerstone of SKY Yoga. Under the gentle guidance of a certified WCSC master, participants receive touch initiation to awaken the dormant Kundalini life force from the Mooladhara to the Agna Chakra (Third Eye), followed by stabilization at the Shanti Chakra.',
      curriculum: [
        'Gentle initiation into Agna Chakra (Mind calming meditation)',
        'Shanti Chakra initiation (Bio-magnetic grounding & stabilization)',
        '7 Simplified Physical Exercises (Arms, legs, breathing, eye, abdominal & massage)',
        'Daily Sadhana Routine & home practice guidelines',
        'Principles of Bio-magnetism & life energy conservation',
      ],
      upcoming: [
        { date: 'Next Saturday & Sunday', timing: '9:00 AM – 1:00 PM EST', type: 'online' },
        { date: 'Every 2nd & 4th Weekend', timing: 'In-Person at Regional Centers', type: 'in-person' },
      ],
    },
    {
      id: 'kayakalpa',
      title: 'Kaya Kalpa Yoga',
      badge: 'Vitality & Anti-Aging',
      level: 'Ages 14+ • No prerequisites',
      duration: 'Half-Day Masterclass (3.5 Hours)',
      format: 'Online Live & In-Person Centers',
      tagline: 'Cellular Regeneration & Sexual Energy Transmutation',
      description:
        'An ancient Siddha longevity science rediscovered and simplified by Vethathiri Maharishi. Kaya Kalpa preserves cellular health, stimulates the neuro-endocrine system, and recycles sexual vital energy throughout the body, revitalizing brain cells.',
      curriculum: [
        'Ashwini Mudra: Transmutes physical energy to spiritual bio-magnetism',
        'Ojas Breath: Distributes transmuted energy to brain cells and spinal cord',
        'Immunity Boost: Natural defense against chronic degenerative illnesses',
        'Postponement of aging and hormonal balance preservation',
        'Simple 3-minute morning & evening maintenance exercise',
      ],
      upcoming: [
        { date: 'Upcoming Sunday', timing: '10:00 AM – 1:30 PM EST', type: 'online' },
        { date: 'Monthly Weekend Workshops', timing: 'Select local centers', type: 'in-person' },
      ],
    },
    {
      id: 'introspection',
      title: 'Introspection (Stages I, II, III)',
      badge: 'Subconscious Mastery',
      level: 'Prerequisite: Foundation Course',
      duration: 'Modular Weekend Courses',
      format: 'Online & In-Person Retreats',
      tagline: 'Systematic Purification of Genetic & Mental Imprints',
      description:
        'Meditation calms the mind; Introspection transforms habitual patterns. This 3-stage curriculum trains practitioners to systematically analyze thought sources, dissolve unwholesome desires, eliminate chronic worries, and neutralize deep-seated anger.',
      curriculum: [
        'Stage 1: Analysis of Thoughts & Moralization of Desires',
        'Stage 2: Neutralization of Anger & Eradication of Worries',
        'Stage 3: Who am I? (Philosophy of consciousness & Self-Realization)',
        'Nine Center Meditation & Universal Peace Prayer immersion',
        'Resolution of interpersonal and family karmic relationships',
      ],
      upcoming: [
        { date: 'Stage 1: 3rd Saturday of Month', timing: '9:00 AM – 4:00 PM EST', type: 'online' },
        { date: 'Stage 2 & 3: Biannual Retreats', timing: 'Regional Retreat Centers', type: 'in-person' },
      ],
    },
    {
      id: 'master',
      title: 'Assistant Master & Teacher Training',
      badge: 'Accredited Certification',
      level: 'Prerequisite: Introspection Stage 3',
      duration: '6-Month Guided Mentorship',
      format: 'Hybrid Intensive Program',
      tagline: 'Become a Certified WCSC Sky Yoga Master',
      description:
        'A noble calling to serve humanity. Train to initiate new practitioners safely, teach the 7 Simplified Physical Exercises, and lead group meditations across North America in affiliation with the World Community Service Center.',
      curriculum: [
        'Mastery of Kundalini touch initiation techniques',
        'In-depth study of Maharishi’s Universal Magnetism treatises',
        'Anatomy, physiology, and safe modifications for varied body types',
        'Public discourse, student counseling, and center management',
        'WCSC Global Certification and teaching credentials',
      ],
      upcoming: [
        { date: 'Spring & Fall Cohorts', timing: '6-Month Hybrid Program', type: 'hybrid' },
      ],
    },
  ];

  return (
    <div className="w-full pt-[90px] pb-20">
      {/* Header */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-14 text-center">
        <span className="text-xs uppercase tracking-widest text-[#D27D56] font-semibold mb-3 inline-block">
          Adult Education & Programs
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D2825] tracking-tight mb-4 max-w-3xl mx-auto">
          Pathway to Health, Harmony & Clarity
        </h1>
        <p className="text-base text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
          Structured, time-tested practices developed specifically for working professionals, parents, and modern householders.
        </p>
      </section>

      {/* Offerings Intro: the SKY journey */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">What is SKY?</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mt-2 mb-3">A Step-by-Step Journey to Divine Wisdom</h2>
            <p className="text-sm md:text-base text-[#6E6E73]">SKY is a complete science of life. Each practice builds on the last — tap a step to explore it.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 relative mb-6">
            {journey.map((step, i) => {
              const Icon = step.icon;
              const on = activeStep === i;
              return (
                <button
                  key={step.abbr}
                  onClick={() => setActiveStep(i)}
                  className={`relative p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    on ? 'bg-[#D27D56] text-white border-[#D27D56] shadow-lg -translate-y-1' : i <= activeStep ? 'bg-[#F0EBE1] border-[#D27D56]/40 text-[#2D2825]' : 'bg-white border-stone-200 text-[#2D2825] hover:border-[#D27D56]/40'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-1.5" />
                  <span className="text-xs font-bold tracking-wider">{step.abbr}</span>
                </button>
              );
            })}
          </div>
          <div key={activeStep} className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm animate-fade-in">
            <p className="text-xs font-mono font-bold text-[#D27D56] mb-1">Step {activeStep + 1} of {journey.length}</p>
            <h3 className="text-xl font-bold text-[#2D2825] mb-2">{journey[activeStep].title}</h3>
            <p className="text-sm text-[#6E6E73] leading-relaxed">{journey[activeStep].text}</p>
          </div>
        </Reveal>
      </section>

      {/* Featured Courses Tabs & Detailed Card */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16">
        {/* Horizontal Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-4 mb-8">
          {courses.map((course, idx) => (
            <button
              key={course.id}
              onClick={() => setActiveCourseIndex(idx)}
              className={`px-4 md:px-5 py-2.5 md:py-3 rounded-xl border font-semibold text-xs md:text-sm text-left transition-all cursor-pointer ${
                activeCourseIndex === idx
                  ? 'bg-[#D27D56] text-white border-[#D27D56] shadow-sm'
                  : 'bg-white text-[#2D2825] border-stone-200 hover:border-stone-300'
              }`}
            >
              {course.title}
            </button>
          ))}
        </div>

        {/* Selected Course Deep-Dive */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#2D2825]/10 p-5 sm:p-8 md:p-12 shadow-sm animate-fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-7/12 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#F0EBE1] text-[#D27D56] text-xs font-semibold px-3 py-1 rounded-full border border-stone-200">
                  {courses[activeCourseIndex].badge}
                </span>
                <span className="text-xs text-[#6E6E73]">{courses[activeCourseIndex].level}</span>
                <span className="text-xs text-stone-300">·</span>
                <span className="text-xs text-[#6E6E73]">{courses[activeCourseIndex].duration}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2825]">
                {courses[activeCourseIndex].title}
              </h2>
              <p className="text-sm md:text-base text-[#D27D56] font-medium italic">
                {courses[activeCourseIndex].tagline}
              </p>
              <p className="text-sm md:text-base text-[#6E6E73] leading-relaxed">
                {courses[activeCourseIndex].description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D2825] mb-3">
                  What You Will Learn & Practice
                </h4>
                <div className="space-y-2.5">
                  {courses[activeCourseIndex].curriculum.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D2825]">
                      <Check className="w-4 h-4 text-[#D27D56] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="w-full lg:w-5/12 bg-[#F0EBE1] rounded-2xl p-6 md:p-8 border border-stone-200 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-300/50 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E6E73]">Program Schedule</span>
                <span className="text-xs text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                  Open for Registration
                </span>
              </div>

              <div className="space-y-3">
                {courses[activeCourseIndex].upcoming.map((sched, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-stone-200 text-xs space-y-1">
                    <div className="font-semibold text-[#2D2825] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D27D56]" />
                      <span>{sched.date}</span>
                    </div>
                    <div className="text-[#6E6E73] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{sched.timing}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-[#6E6E73] space-y-1 pt-1">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Includes lifetime practice review rights at all SKY centers.</span>
                </p>
                <p className="text-[11px] text-stone-500 pl-5">
                  Courses conducted by WCSC certified master professors.
                </p>
              </div>

              <button
                onClick={() =>
                  onOpenRegisterModal(courses[activeCourseIndex].title, courses[activeCourseIndex].badge)
                }
                className="w-full py-3 bg-[#D27D56] text-white font-semibold rounded-lg hover:bg-[#b8653f] transition-all text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                Enroll in {courses[activeCourseIndex].title} <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full text-center text-xs text-[#6E6E73] hover:text-[#D27D56] transition-colors"
              >
                Prefer an in-person center near you? Find local centers &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service offerings with pricing */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">Service Offerings</span>
            <h2 className="text-3xl font-semibold text-[#2D2825] mt-1 mb-2">Programs &amp; Fees</h2>
            <p className="text-sm text-[#6E6E73]">Choose the step that is right for you. Tap any program for details.</p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {offerings.map((o, i) => (
              <div key={o.name} className={`rounded-2xl border bg-[#FDFBF7] overflow-hidden transition-all ${openOffering === i ? 'border-[#D27D56]/60 shadow-md' : 'border-stone-200 hover:border-[#D27D56]/30'}`}>
                <button onClick={() => setOpenOffering(openOffering === i ? null : i)} className="w-full p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-1 sm:gap-4 text-left cursor-pointer" aria-expanded={openOffering === i}>
                  <span className="text-xs font-mono font-bold text-[#D27D56] w-6">0{i + 1}</span>
                  <div className="flex-1 min-w-[55%] sm:min-w-0">
                    <p className="font-bold text-[#2D2825] text-sm md:text-base">{o.name}</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5">{o.status}</p>
                  </div>
                  <span className="order-last sm:order-none basis-full sm:basis-auto pl-9 sm:pl-0 text-sm font-bold text-[#D27D56] sm:text-right">{o.price}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openOffering === i ? 'rotate-180' : ''}`} />
                </button>
                {openOffering === i && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 sm:pl-[3.75rem] animate-fade-in">
                    <p className="text-sm text-[#6E6E73] leading-relaxed mb-4">{o.details}</p>
                    <button onClick={() => onOpenRegisterModal(o.course, 'Program')} className="px-5 py-2 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all cursor-pointer">
                      Register Interest →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Daily Practice Structure (What a Practitioner Experience Looks Like) */}
      <section className="py-14 px-5 md:px-12 max-w-[1200px] mx-auto bg-[#E8EDE7] rounded-3xl border border-[#2D2825]/5 mb-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">The Daily Routine</span>
          <h2 className="text-3xl font-semibold text-[#2D2825] mt-1 mb-2">Designed for the Modern Schedule</h2>
          <p className="text-sm text-[#6E6E73]">
            How SKY Yoga fits effortlessly into a busy working day without needing hours away from family or career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#D27D56]">01. Morning (30 Mins)</span>
            <h3 className="text-base font-bold text-[#2D2825] mt-1 mb-2">Physical Harmonization</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              7 Simplified Physical Exercises + 3-minute Kaya Kalpa. Awakens every vital organ and regulates blood circulation.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#D27D56]">02. Midday / Evening (15 Mins)</span>
            <h3 className="text-base font-bold text-[#2D2825] mt-1 mb-2">Agna / Shanti Meditation</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Quieting mental chatter at the third eye. Lowers brainwaves from frantic Beta to calming Alpha, refreshing focus.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-mono font-bold text-[#D27D56]">03. Night Reflection (10 Mins)</span>
            <h3 className="text-base font-bold text-[#2D2825] mt-1 mb-2">Introspection & Peace</h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Universal Peace Prayer + brief desire analysis. Prepares the nervous system for deep restorative sleep.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
