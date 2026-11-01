import React, { useState } from 'react';
import { PageType } from '../components/Navbar';
import { Smile, Brain, Heart, Sparkles, CheckCircle, ArrowRight, ShieldCheck, Calendar, BookOpen } from 'lucide-react';

interface KidsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenRegisterModal: (title: string, category: string) => void;
}

export const KidsPage: React.FC<KidsPageProps> = ({ onNavigate, onOpenRegisterModal }) => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<'kids' | 'teens'>('kids');

  return (
    <div className="w-full pt-[90px] pb-20">
      {/* Hero Header */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-[#D27D56] font-semibold mb-3 inline-block">
          SKY Yoga School • Youth & Teens
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D2825] tracking-tight mb-4 max-w-3xl mx-auto">
          Nurturing Focus, Resilience & Compassion in Youth
        </h1>
        <p className="text-base text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
          Age-appropriate holistic wellness programs designed by Vethathiri Maharishi to help young minds flourish
          academically, emotionally, and physically.
        </p>
      </section>

      {/* Hero Banner with the Kids Photo */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-[#2D2825]/10 shadow-sm min-h-[380px] md:min-h-[300px] md:aspect-[21/9]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCufeKD1mJHPVNGxl5z6DuXbXWKE-CKJcfYEQL8DTunru_LaexTRz5jNWPGfyKl1C8YRpCha0u8_Uuu1R_qQtpH5ukhUIw-JVs5hIHZxGbSy-8tH9CxuQmFKuTBZAKW2sfBeAg1gnRWEgs_e87gAAfNM7FsuW4ela-0vokHLE_UQKqpPXvsbxWNyAqJ49gYDRkwQo4AUjTVos_eGfcxoFZqllkOPNCMemIL_g6VkEuWM7eVfCdLFoWh")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent flex items-center p-8 md:p-14">
            <div className="max-w-lg text-white space-y-3">
              <span className="bg-[#D27D56] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Ages 6 to 18
              </span>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Empowering the Next Generation with Lifelong Inner Strength
              </h2>
              <p className="text-xs md:text-sm text-white/90">
                Interactive weekend sessions combining playful physical movement, memory enhancement, and mindfulness.
              </p>
              <button
                onClick={() => onOpenRegisterModal('SKY Yoga School for Kids', 'Youth Program')}
                className="mt-2 px-6 py-2.5 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all shadow-md inline-flex items-center gap-1.5"
              >
                Enroll Your Child <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Age Group Switcher */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-16">
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-[#F0EBE1] rounded-xl border border-stone-200 inline-flex">
            <button
              onClick={() => setSelectedAgeGroup('kids')}
              className={`px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                selectedAgeGroup === 'kids'
                  ? 'bg-white text-[#2D2825] shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#2D2825]'
              }`}
            >
              Junior Explorers (Ages 6–12)
            </button>
            <button
              onClick={() => setSelectedAgeGroup('teens')}
              className={`px-6 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                selectedAgeGroup === 'teens'
                  ? 'bg-white text-[#2D2825] shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#2D2825]'
              }`}
            >
              Youth Leaders (Ages 13–18)
            </button>
          </div>
        </div>

        {/* Age Group Content */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#2D2825]/10 p-8 md:p-12 shadow-sm animate-fade-in">
          {selectedAgeGroup === 'kids' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D27D56]">Curriculum Highlights</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D2825]">
                  Junior Explorers: Joyful Health & Focus
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  Children learn how their bodies work through lively storytelling, gentle posture corrections, and
                  simple breathing exercises that dispel restlessness and increase school attention spans.
                </p>
                <div className="space-y-2.5 pt-2">
                  {[
                    'Super Brain Yoga (Ear lobe stimulation to synchronize left and right cerebral hemispheres)',
                    'Gentle Eye Exercises to counter screen fatigue and myopia progression',
                    'Posture & Spine Alignment games to build strong habits early',
                    'Memory & Concentration drills utilizing sensory focus',
                    'Gratitude & Respect practices honoring parents, teachers, and nature',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D2825]">
                      <CheckCircle className="w-4 h-4 text-[#D27D56] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F0EBE1] p-6 md:p-8 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D2825]">Upcoming Junior Cohort</span>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Enrollment Active
                  </span>
                </div>
                <div className="text-xs space-y-2 text-[#2D2825]">
                  <p className="font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D27D56]" />
                    <span>Every Saturday (4-Week Module)</span>
                  </p>
                  <p className="text-[#6E6E73]">
                    10:00 AM – 11:15 AM EST • Online Live via Zoom + In-Person Center Batches
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-[#6E6E73] italic">
                  "My 8-year-old son used to struggle with 15 minutes of homework. After two months of Super Brain Yoga and
                  eye exercises, his teachers noted a remarkable turnaround in his class focus."
                  <span className="block font-semibold text-[#2D2825] mt-1 not-italic">— Priya V., Parent (Fremont, CA)</span>
                </div>
                <button
                  onClick={() => onOpenRegisterModal('Junior Explorers (Ages 6–12)', 'Youth School')}
                  className="w-full py-3 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all shadow-sm"
                >
                  Register for Junior Explorers
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D27D56]">Curriculum Highlights</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D2825]">
                  Youth Leaders: Stress Relief & Emotional Balance
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  Teens navigate high academic pressure, social media distractions, and physiological changes. This course
                  gives them internal emotional tools to handle anxiety and channel energy toward constructive goals.
                </p>
                <div className="space-y-2.5 pt-2">
                  {[
                    'Agna Meditation initiation for deep calm before high-stakes exams and tests',
                    'Kaya Kalpa Yoga instruction (Ages 14+) for hormonal balance and immune vitality',
                    'Emotion Regulation: Managing teenage frustration, peer pressure, and self-doubt',
                    'Leadership & Empathy: Positive communication and constructive habit formation',
                    'Physical fitness routines to maintain flexible joints, posture, and stamina',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D2825]">
                      <CheckCircle className="w-4 h-4 text-[#D27D56] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F0EBE1] p-6 md:p-8 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D2825]">Upcoming Teen Cohort</span>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Enrollment Active
                  </span>
                </div>
                <div className="text-xs space-y-2 text-[#2D2825]">
                  <p className="font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D27D56]" />
                    <span>Every Sunday (4-Week Module)</span>
                  </p>
                  <p className="text-[#6E6E73]">
                    11:30 AM – 1:00 PM EST • Online Live via Zoom + In-Person Center Batches
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-[#6E6E73] italic">
                  "As a high school junior taking 4 AP courses, anxiety was taking over my sleep. Learning Agna meditation
                  and Kaya Kalpa gave me my energy and calmness back."
                  <span className="block font-semibold text-[#2D2825] mt-1 not-italic">— Rahul K., High School Senior (Plano, TX)</span>
                </div>
                <button
                  onClick={() => onOpenRegisterModal('Youth Leaders (Ages 13–18)', 'Youth School')}
                  className="w-full py-3 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all shadow-sm"
                >
                  Register for Youth Leaders
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4 Pillars of Youth Development */}
      <section className="py-14 px-5 md:px-12 max-w-[1200px] mx-auto bg-[#E8EDE7] rounded-3xl border border-[#2D2825]/5">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">Core Benefits</span>
          <h2 className="text-3xl font-semibold text-[#2D2825] mt-1 mb-2">Holistic Benefits for Growing Minds</h2>
          <p className="text-sm text-[#6E6E73]">Scientifically verified outcomes across youth practitioners.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-stone-200 text-center">
            <div className="w-10 h-10 rounded-full bg-[#D27D56]/15 text-[#D27D56] flex items-center justify-center mx-auto mb-3">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#2D2825] mb-1">Academic Focus</h3>
            <p className="text-xs text-[#6E6E73]">Quiets cognitive scatter and improves retention during study hours.</p>
          </div>

          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-stone-200 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#2D2825] mb-1">Emotional Stability</h3>
            <p className="text-xs text-[#6E6E73]">Less reactive anger, fewer meltdowns, and greater empathy for others.</p>
          </div>

          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-stone-200 text-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#2D2825] mb-1">Physical Posture</h3>
            <p className="text-xs text-[#6E6E73]">Strengthens the spine, relieves computer neck, and improves stamina.</p>
          </div>

          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-stone-200 text-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#2D2825] mb-1">Values & Character</h3>
            <p className="text-xs text-[#6E6E73]">Rooted in gratitude, mutual respect, and ecological mindfulness.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
