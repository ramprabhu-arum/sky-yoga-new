import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface ProgramRegistrationModalProps {
  isOpen: boolean;
  programTitle: string;
  category?: string;
  onClose: () => void;
}

export const ProgramRegistrationModal: React.FC<ProgramRegistrationModalProps> = ({
  isOpen,
  programTitle,
  category = 'Course Immersion',
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredCenter, setPreferredCenter] = useState('Online Live (Zoom)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const centers = [
    'Online Live (Zoom - North America Wide)',
    'SF Bay Area, CA (San Jose / Fremont)',
    'Dallas - Fort Worth, TX (Plano / Irving)',
    'Greater Toronto Area, ON (Mississauga / Brampton)',
    'Seattle, WA (Bellevue / Redmond)',
    'New York / New Jersey (Edison / Queens)',
    'Austin, TX',
    'Vancouver, BC',
    'Chicago, IL',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FDFBF7] rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[92dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2825]/10 bg-[#F5F2ED]">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D27D56]">
              {category}
            </span>
            <h3 className="text-lg font-bold text-[#2D2825]">{programTitle}</h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#2D2825] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#2D2825]">Enrollment Reserved</h4>
              <p className="text-xs text-[#6E6E73] max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in <strong>{programTitle}</strong>. A center coordinator will reach out to{' '}
                <strong>{email}</strong> within 24 hours with exact timings and curriculum materials.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F0EBE1] p-3 rounded-xl border border-stone-200 text-xs text-[#2D2825] space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D27D56]" />
                  <span>Upcoming Cohort: Saturday & Sunday</span>
                </div>
                <div className="text-[#6E6E73]">
                  Guided by certified WCSC Sky Yoga masters with personalized individual attention.
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2825] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2825] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-sm focus:outline-none focus:border-[#D27D56]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <div>
                  <label className="block text-xs font-semibold text-[#2D2825] mb-1">Preferred Location</label>
                  <select
                    value={preferredCenter}
                    onChange={(e) => setPreferredCenter(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs focus:outline-none focus:border-[#D27D56] text-[#2D2825]"
                  >
                    {centers.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-stone-500">
                Course participation is open to all seekers aged 14+. No prior yoga flexibility is needed.
              </p>

              <button
                type="submit"
                className="w-full py-3 bg-[#D27D56] text-white font-semibold rounded-lg hover:bg-[#b8653f] transition-colors text-sm shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                Enroll in {programTitle} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
