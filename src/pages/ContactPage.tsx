import React, { useState } from 'react';
import { PageType } from '../components/Navbar';
import { MapPin, Phone, Mail, Clock, Search, Send, CheckCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [centerSearch, setCenterSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'usa' | 'canada'>('all');

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('courses');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const centers = [
    {
      city: 'San Francisco Bay Area, CA',
      region: 'usa',
      locations: 'San Jose, Fremont, Pleasanton & Sunnyvale',
      schedule: 'Sundays 8:30 AM – 10:30 AM (Group Meditation & Kaya Kalpa)',
      coordinator: 'Prof. Ramesh & Master Meena',
      email: 'bayarea@skyyoga.org',
      phone: '(408) 555-0192',
    },
    {
      city: 'Dallas – Fort Worth, TX',
      region: 'usa',
      locations: 'Plano, Irving & Frisco Centers',
      schedule: 'Saturdays & Sundays 8:00 AM – 10:00 AM',
      coordinator: 'Master Sundaram & Prof. Geetha',
      email: 'dallas@skyyoga.org',
      phone: '(469) 555-0143',
    },
    {
      city: 'Greater Toronto Area, ON',
      region: 'canada',
      locations: 'Mississauga, Scarborough & Brampton',
      schedule: 'Sundays 9:00 AM – 11:00 AM EST (Bilingual English/Tamil)',
      coordinator: 'Prof. Sivakumar & Master Jayanthi',
      email: 'toronto@skyyoga.org',
      phone: '(416) 555-0188',
    },
    {
      city: 'Seattle & Bellevue, WA',
      region: 'usa',
      locations: 'Bellevue, Redmond & Bothell',
      schedule: 'Saturdays 8:30 AM – 10:30 AM PST',
      coordinator: 'Prof. Arvind',
      email: 'seattle@skyyoga.org',
      phone: '(206) 555-0176',
    },
    {
      city: 'New York & New Jersey',
      region: 'usa',
      locations: 'Edison, NJ & Queens, NY',
      schedule: 'Sundays 9:00 AM – 11:00 AM EST',
      coordinator: 'Master Balan & Prof. Shanthi',
      email: 'nynj@skyyoga.org',
      phone: '(732) 555-0165',
    },
    {
      city: 'Austin, TX',
      region: 'usa',
      locations: 'North Austin & Round Rock',
      schedule: 'Saturdays 8:30 AM – 10:15 AM CST',
      coordinator: 'Master Suresh',
      email: 'austin@skyyoga.org',
      phone: '(512) 555-0122',
    },
    {
      city: 'Greater Vancouver, BC',
      region: 'canada',
      locations: 'Surrey & Vancouver Central',
      schedule: 'Sundays 9:30 AM – 11:30 AM PST',
      coordinator: 'Master Priya & Prof. Mohan',
      email: 'vancouver@skyyoga.org',
      phone: '(604) 555-0139',
    },
    {
      city: 'Chicago, IL',
      region: 'usa',
      locations: 'Naperville & Schaumburg',
      schedule: 'Sundays 8:30 AM – 10:30 AM CST',
      coordinator: 'Master Rajesh',
      email: 'chicago@skyyoga.org',
      phone: '(630) 555-0154',
    },
  ];

  const filteredCenters = centers.filter((c) => {
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
    const matchesQuery =
      c.city.toLowerCase().includes(centerSearch.toLowerCase()) ||
      c.locations.toLowerCase().includes(centerSearch.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  const faqs = [
    {
      q: 'Is Kundalini Meditation safe for beginners?',
      a: 'Yes, absolutely. Unlike forceful or aggressive yogic breathing techniques that can overstimulate the nervous system, SKY Yoga utilizes teacher-guided gentle touch initiation. The certified master gently redirects life-force energy directly to the Agna Chakra (Third Eye), where the practitioner immediately experiences calm stillness without risk.',
    },
    {
      q: 'Do I need prior flexibility or athletic experience?',
      a: 'No prior yoga flexibility is needed. The 7 Simplified Physical Exercises were specifically modified by Vethathiri Maharishi for individuals of all ages and body shapes, from teens to seniors in their 80s. Chairs or wall support can easily be used.',
    },
    {
      q: 'What is the commitment required for daily practice?',
      a: 'The full daily maintenance takes merely 35 minutes in the morning (simplified physical exercises + 3-minute Kaya Kalpa) and 15 minutes of meditation in the evening. It was designed specifically so busy householders and working professionals can sustain it permanently.',
    },
    {
      q: 'What is the relationship between SKY Yoga NA and the World Community Service Center (WCSC)?',
      a: 'SKY NA is the registered, official non-profit North American branch of WCSC (headquartered at the Temple of Consciousness, Azhiyar, India). All teachers are certified through WCSC syllabus and rigorous ethical guidelines.',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="w-full pt-[90px] pb-20">
      {/* Header */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-14 text-center">
        <span className="text-xs uppercase tracking-widest text-[#D27D56] font-semibold mb-3 inline-block">
          Connect With SKY North America
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D2825] tracking-tight mb-4 max-w-3xl mx-auto">
          Centers Across the United States & Canada
        </h1>
        <p className="text-base text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
          Find a local center for in-person initiation and group meditations, or reach out to our volunteer coordination team.
        </p>
      </section>

      {/* Directory & Contact Form Grid */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Center Directory (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-[#2D2825]">Center Directory</h2>

              {/* Region filter pills */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE1] rounded-lg border border-stone-200 self-start sm:self-auto">
                <button
                  onClick={() => setSelectedRegion('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    selectedRegion === 'all' ? 'bg-white text-[#2D2825] shadow-xs' : 'text-[#6E6E73]'
                  }`}
                >
                  All (NA)
                </button>
                <button
                  onClick={() => setSelectedRegion('usa')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    selectedRegion === 'usa' ? 'bg-white text-[#2D2825] shadow-xs' : 'text-[#6E6E73]'
                  }`}
                >
                  United States
                </button>
                <button
                  onClick={() => setSelectedRegion('canada')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    selectedRegion === 'canada' ? 'bg-white text-[#2D2825] shadow-xs' : 'text-[#6E6E73]'
                  }`}
                >
                  Canada
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#6E6E73] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by city, state, or location (e.g. San Jose, Dallas, Toronto)..."
                value={centerSearch}
                onChange={(e) => setCenterSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FDFBF7] rounded-xl border border-stone-200 text-xs md:text-sm focus:outline-none focus:border-[#D27D56]"
              />
            </div>

            {/* Centers List */}
            <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredCenters.length > 0 ? (
                filteredCenters.map((c, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-xs hover:border-[#D27D56]/50 transition-all space-y-2.5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#D27D56] shrink-0" />
                        <h3 className="text-base font-bold text-[#2D2825]">{c.city}</h3>
                      </div>
                      <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-[#F0EBE1] text-[#6E6E73]">
                        {c.region.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs text-[#6E6E73]">{c.locations}</p>

                    <div className="pt-2 border-t border-stone-200/70 text-xs text-[#2D2825] space-y-1">
                      <p className="flex items-center gap-2 text-stone-600">
                        <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{c.schedule}</span>
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-stone-500">
                        <span>Lead: {c.coordinator}</span>
                        <span>•</span>
                        <a href={`mailto:${c.email}`} className="text-[#D27D56] hover:underline">
                          {c.email}
                        </a>
                        <span>•</span>
                        <span>{c.phone}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-[#FDFBF7] rounded-2xl border border-stone-200 text-xs text-[#6E6E73]">
                  No centers matching "{centerSearch}". Online live sessions are open to all North American timezones!
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#2D2825]/10 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#2D2825] mb-1">Send an Inquiry</h2>
              <p className="text-xs text-[#6E6E73] mb-6">
                Have questions about courses, initiation, or starting a community practice circle in your city?
              </p>

              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D2825]">Message Received</h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Thank you, <strong>{formName}</strong>. A volunteer coordinator from your regional SKY chapter will
                    reply to <strong>{formEmail}</strong> within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormName('');
                      setFormEmail('');
                      setFormMessage('');
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-[#D27D56] hover:underline"
                  >
                    Send another inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2825] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Maya Patel"
                      className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs md:text-sm focus:outline-none focus:border-[#D27D56]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2825] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="maya@example.com"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs md:text-sm focus:outline-none focus:border-[#D27D56]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2D2825] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs md:text-sm focus:outline-none focus:border-[#D27D56]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2825] mb-1">Topic / Subject</label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs focus:outline-none focus:border-[#D27D56] text-[#2D2825]"
                    >
                      <option value="courses">Course Registration & Schedule</option>
                      <option value="center">Visiting a Local Center</option>
                      <option value="youth">Youth / Kids Yoga School</option>
                      <option value="corporate">Corporate & University Wellness</option>
                      <option value="volunteering">Volunteering & Master Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2825] mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Tell us about your city, background, or questions..."
                      className="w-full px-3 py-2 bg-white rounded-lg border border-stone-200 text-xs md:text-sm focus:outline-none focus:border-[#D27D56] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Inquiry
                  </button>

                  <div className="pt-2 text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your information is protected by our strict non-profit privacy pledge.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="px-5 md:px-12 max-w-[1200px] mx-auto bg-[#E8EDE7] p-8 md:p-14 rounded-3xl border border-[#2D2825]/5">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs uppercase tracking-wider text-[#D27D56] font-semibold">Common Queries</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2D2825] mt-1 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-[#6E6E73]">
            Essential insights into our philosophy, safety protocol, and practice discipline.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] rounded-xl border border-stone-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs md:text-sm text-[#2D2825] hover:text-[#D27D56]"
              >
                <span>{item.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#D27D56] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs text-[#6E6E73] leading-relaxed border-t border-stone-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
