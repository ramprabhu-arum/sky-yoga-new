import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToProgram?: (programId: string) => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, onNavigateToProgram }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [goal, setGoal] = useState<string>('vitality');
  const [experience, setExperience] = useState<string>('beginner');
  const [format, setFormat] = useState<string>('online');

  // Registration form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  const getRecommendedCourse = () => {
    if (goal === 'kids') {
      return {
        title: 'SKY Yoga School for Youth',
        subtitle: 'Ages 6-18 • Emotional resilience, memory power & physical agility',
        badge: 'Youth Program',
        schedule: 'Upcoming Batch: Starts Saturday, 10:00 AM EST (Online & Local Centers)',
        duration: '4-Week Progressive Curriculum (1.5 hrs / week)',
      };
    }
    if (goal === 'longevity' || goal === 'vitality') {
      return {
        title: 'Adults Foundation & Kaya Kalpa Course',
        subtitle: 'Comprehensive initiation into Agna & Shanti Chakras + Cellular Rejuvenation',
        badge: 'Recommended for You',
        schedule: 'Next Weekend Cohort: Saturday & Sunday, 9:00 AM - 1:00 PM EST',
        duration: '2-Day Live Interactive Immersion + 14-day Guided Sadhana',
      };
    }
    return {
      title: 'SKY Adults Foundation Immersion',
      subtitle: 'Gentle, teacher-guided Kundalini awakening and simplified physical exercises',
      badge: 'Core Program',
      schedule: 'Next Cohort: Starts Next Saturday (Online & In-Person)',
      duration: 'Comprehensive 8-Hour Masterclass + Daily Practice Support',
    };
  };

  const recommendation = getRecommendedCourse();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2825]/10 bg-[#F5F2ED]">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D27D56]">
              {step < 4 ? `Step ${step} of 3 • Guided Pathway` : 'Registration & Confirmation'}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-[#2D2825]">
              {step === 1 && 'What is your primary wellness goal?'}
              {step === 2 && 'What is your background with yoga or meditation?'}
              {step === 3 && 'Choose your preferred learning format'}
              {step === 4 && (submitted ? 'Welcome to SKY Yoga North America!' : 'Complete Your Registration')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#2D2825] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* STEP 1: GOAL */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-xs text-[#6E6E73]">
                Vethathiri Maharishi developed distinct practices tailored to physical health, psychological calmness, and vitality.
              </p>
              {[
                {
                  id: 'vitality',
                  title: 'Physical Vitality & Stress Reduction',
                  desc: 'Release chronic tension, harmonize blood circulation, and learn gentle daily physical exercises.',
                },
                {
                  id: 'longevity',
                  title: 'Kaya Kalpa Yoga & Cellular Anti-Aging',
                  desc: 'Restructure physical bio-magnetism, boost immune response, and postpone old age.',
                },
                {
                  id: 'meditation',
                  title: 'Spiritual Awakening & Kundalini Meditation',
                  desc: 'Experience safe Agna and Shanti chakra awakening to quiet mental chatter and expand awareness.',
                },
                {
                  id: 'kids',
                  title: "Youth & Kids Program (Ages 6-18)",
                  desc: 'Cultivate focus, emotional intelligence, memory retention, and positive habits for youth.',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setGoal(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    goal === opt.id
                      ? 'border-[#D27D56] bg-[#D27D56]/5 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="pr-4">
                    <h4 className="text-sm font-bold text-[#2D2825] mb-1">{opt.title}</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">{opt.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      goal === opt.id ? 'border-[#D27D56] bg-[#D27D56] text-white' : 'border-stone-300'
                    }`}
                  >
                    {goal === opt.id && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: EXPERIENCE */}
          {step === 2 && (
            <div className="space-y-3">
              <p className="text-xs text-[#6E6E73]">
                SKY Yoga is uniquely designed for modern householders and practitioners of all physical abilities.
              </p>
              {[
                {
                  id: 'beginner',
                  title: 'Complete Beginner to Yoga & Meditation',
                  desc: 'No prior background required. Our certified masters guide every breath and movement gently.',
                },
                {
                  id: 'intermediate',
                  title: 'Familiar with Hatha / Vinyasa Asanas',
                  desc: 'Looking to deepen internal bio-magnetic awareness, Kundalini awakening, and introspection.',
                },
                {
                  id: 'experienced',
                  title: 'Experienced Meditator / Spiritual Seeker',
                  desc: 'Seeking Maharishi’s scientific approach to mind-frequency reduction (beta to alpha/theta).',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setExperience(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    experience === opt.id
                      ? 'border-[#D27D56] bg-[#D27D56]/5 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="pr-4">
                    <h4 className="text-sm font-bold text-[#2D2825] mb-1">{opt.title}</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">{opt.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      experience === opt.id ? 'border-[#D27D56] bg-[#D27D56] text-white' : 'border-stone-300'
                    }`}
                  >
                    {experience === opt.id && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: FORMAT */}
          {step === 3 && (
            <div className="space-y-3">
              <p className="text-xs text-[#6E6E73]">
                Courses are conducted both via live interactive video conference and in-person across our 18+ North American centers.
              </p>
              {[
                {
                  id: 'online',
                  title: 'Live Interactive Online Cohort (Zoom)',
                  desc: 'Learn from home with real-time teacher corrections, breakout sessions, and Q&A.',
                },
                {
                  id: 'in-person',
                  title: 'In-Person at a Local SKY Center',
                  desc: 'Experience teacher touch initiation in USA (CA, TX, NY, NJ, WA, IL) or Canada (ON, BC, AB).',
                },
                {
                  id: 'hybrid',
                  title: 'Flexible Hybrid Weekend Workshop',
                  desc: 'Combine online theoretical foundations with a local center initiation ceremony.',
                },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setFormat(opt.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    format === opt.id
                      ? 'border-[#D27D56] bg-[#D27D56]/5 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="pr-4">
                    <h4 className="text-sm font-bold text-[#2D2825] mb-1">{opt.title}</h4>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">{opt.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      format === opt.id ? 'border-[#D27D56] bg-[#D27D56] text-white' : 'border-stone-300'
                    }`}
                  >
                    {format === opt.id && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: RECOMMENDATION & REGISTRATION FORM */}
          {step === 4 && (
            <div>
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2D2825]">Registration Received!</h4>
                  <p className="text-sm text-[#6E6E73] max-w-md mx-auto">
                    Thank you, <strong className="text-[#2D2825]">{name || 'Practitioner'}</strong>. We have sent the confirmation packet and Zoom / center instructions to{' '}
                    <strong className="text-[#2D2825]">{email || 'your email'}</strong>.
                  </p>
                  <div className="p-4 bg-[#F0EBE1] rounded-xl text-left border border-stone-200 text-xs space-y-2 mt-4">
                    <div className="flex items-center gap-2 text-[#2D2825] font-semibold">
                      <Calendar className="w-4 h-4 text-[#D27D56]" />
                      <span>{recommendation.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#6E6E73]">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Complimentary orientation materials and daily practice chart included.</span>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="w-full py-3 bg-[#D27D56] text-white font-semibold rounded-lg hover:bg-[#b8653f] transition-colors mt-4 text-sm"
                  >
                    Done & Return to Homepage
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Recommended Program Card */}
                  <div className="p-4 rounded-xl bg-[#F0EBE1] border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#D27D56]/15 text-[#D27D56]">
                        {recommendation.badge}
                      </span>
                      <span className="text-xs text-[#6E6E73] font-medium">{format.toUpperCase()}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#2D2825]">{recommendation.title}</h4>
                    <p className="text-xs text-[#6E6E73]">{recommendation.subtitle}</p>
                    <div className="pt-2 border-t border-stone-300/50 flex flex-col gap-1 text-xs text-[#2D2825]">
                      <span className="font-semibold">{recommendation.schedule}</span>
                      <span className="text-stone-500">{recommendation.duration}</span>
                    </div>
                  </div>

                  {/* Participant Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (name && email) setSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2825] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Sharma or Emily Parker"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#2D2825] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#2D2825] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2825] mb-1">City / Region (USA or Canada)</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. San Jose, CA or Toronto, ON"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                      />
                    </div>

                    <p className="text-[11px] text-stone-500 pt-1">
                      By registering, you connect with SKY NA (a registered 501(c)(3) non-profit). Course tuition is voluntary or nominal to cover center facilities.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#D27D56] text-white font-semibold rounded-lg hover:bg-[#b8653f] transition-colors text-sm shadow-sm flex items-center justify-center gap-2 mt-4"
                    >
                      Confirm Registration <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!submitted && (
          <div className="px-6 py-4 border-t border-[#2D2825]/10 bg-[#F5F2ED] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="px-4 py-2 text-xs font-semibold text-[#6E6E73] hover:text-[#2D2825] transition-colors"
              >
                Back
              </button>
            ) : (
              <span className="text-xs text-[#6E6E73]">Step 1 of 3</span>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev + 1) as any)}
                className="px-6 py-2.5 bg-[#D27D56] text-white font-semibold rounded-lg text-xs hover:bg-[#b8653f] transition-all flex items-center gap-1.5 shadow-sm"
              >
                {step === 3 ? 'View Match' : 'Continue'} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
