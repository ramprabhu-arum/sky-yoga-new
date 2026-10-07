import React, { useState, useEffect, useRef } from 'react';
import { PageType } from '../components/Navbar';
import { Play, ArrowRight, ChevronRight, Quote, Sparkles, ChevronLeft } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenVideo: () => void;
  onOpenGetStarted: () => void;
  onOpenProgramModal: (title: string, category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenGetStarted,
  onOpenProgramModal,
}) => {
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      title: 'Harmonize Physical Energy',
      subtitle: 'Experience the ancient science of physical vitality through focused movement and expansive breath.',
      bgImage: '/hero1.jpeg',
      align: 'right',
    },
    {
      title: 'Quiet the Mind',
      subtitle: 'Cultivate inner peace and mental clarity through deep meditation practices.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAasEvNGgT4E2KTkFDYAZHYBDMuqriyx4yCeEdM9G6t353SxFU287bmYoQ5O9tpsUrOjtEmBNlMgd0ZhTa9sg4AZepdBvpQ_ccSKGgQhivleON0e2ltuEQ9emEx7kdg3HldjgH3gemRM9saEpasc8cZHcfp05-6PW1cRJOPNsqAR630W3hH4tUW76YnK3Anx7fbtFEFx1s37582RxDUs2Qr4y_iDtuXcsG87Pt6ks0X_nw8BwbFoIL8',
      align: 'center',
    },
    {
      title: 'Awaken Vitality',
      subtitle: 'Restore youthfulness and enhance your life force with Kayakalpa Yoga.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD8mua1bwm9A7eZ7yXdHoFwK7_-M5gCF6-w42c8Mkw407fLhwIt4xoteYgGz4ENElpDzPCxYFGRPrZ3M5yeR1rwazwi2P-efb_YXaoJqAnbYnLxCgl03GMPVN_fVqZYYswT8D7ouCa_uyrEgXBRcqjzkjc371N3OzG1P74ES3n-8QtKnnPoDy9SmzUu8PKapbFXH4Ph3PE0Mh6TX3EZDugrM-wc7PgGZSW8avRHnF_y7RxXLqlncwIE',
      align: 'center',
    },
    {
      title: 'Global Transformation',
      subtitle: 'Join a worldwide community dedicated to personal peace and planetary harmony.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCCGSJqF0iTIg7117ZysVv7kxDbD5KpILmCjiQwGJ5U4TImdrXrsFWVFUrG0d7LNGLgnSVzYo4c1UpIi6CV9DT0SgkRmC69llU9bvsTdAxMOIXW7lFvvtAyy6lcxMUDUcScYXh6b-qA61ldS5liCWsyGELzYLskVOfX-QTjfedBEhuZUG0oIXbpmFO9Btr5LPtr-ynvFR15SVkNYQ0ZhxFSXaJiTbtNXokoqxJP9l5xxLuKFG5RMulm',
      align: 'center',
    },
  ];

  // Auto advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  return (
    <div className="w-full">
      {/* ========================================================
          HERO CAROUSEL SECTION
         ======================================================== */}
      <header
        className="relative w-full h-[80vh] md:h-[90vh] min-h-[500px] md:min-h-[600px] bg-[#EAE6DF] mt-[65px] md:mt-[72px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative shrink-0">
              {/* Overlay with zero darkening on the left to preserve the original image */}
              {slide.align === 'right' ? (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/15 to-black/70 sm:to-black/65 z-10 pointer-events-none" />
              ) : (
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
              )}

              {/* Background photography */}
              <div
                className={`absolute inset-0 w-full h-full bg-cover ${
                  slide.align === 'right' ? 'bg-left sm:bg-center' : 'bg-center'
                }`}
                style={{ backgroundImage: `url("${slide.bgImage}")` }}
                role="img"
                aria-label={slide.title}
              />

              {/* Slide text content & CTAs */}
              {slide.align === 'right' ? (
                <div className="relative z-20 h-full flex flex-col justify-center items-end px-5 md:px-16 max-w-[1200px] mx-auto text-white">
                  <div className="max-w-xl md:max-w-2xl text-left md:text-right flex flex-col items-start md:items-end">
                    <span className="text-xs uppercase tracking-widest text-[#D27D56] bg-black/35 backdrop-blur-xs px-3 py-1 rounded-full font-semibold mb-3 border border-white/10 shadow-xs">
                      World Community Service Center
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-md tracking-tight leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-xl mb-8 md:mb-10 text-white/90 leading-relaxed font-normal drop-shadow-sm">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-end">
                      <button
                        onClick={onOpenGetStarted}
                        className="bg-[#D27D56] text-white text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8653f] transition-colors shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        Begin Journey
                      </button>
                      <button
                        onClick={() => onNavigate('mission')}
                        className="border border-white/80 bg-black/20 text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-white/15 transition-colors backdrop-blur-xs active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-5 md:px-16 max-w-[1200px] mx-auto text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-sm max-w-4xl tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-xl mb-8 md:mb-10 max-w-2xl text-white/90 leading-relaxed font-normal">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                      onClick={onOpenGetStarted}
                      className="bg-[#D27D56] text-white text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8653f] transition-colors w-full sm:w-auto shadow-md active:scale-95 cursor-pointer"
                    >
                      Begin Journey
                    </button>
                    <button
                      onClick={() => onNavigate('mission')}
                      className="border border-white/80 text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-white/15 transition-colors w-full sm:w-auto backdrop-blur-xs active:scale-95 cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 h-2.5 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Subtle Prev/Next buttons on desktop */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </header>

      {/* ========================================================
          COMMUNITY & INTRO SECTION (SKY NA)
         ======================================================== */}
      <section className="py-14 md:py-20 px-5 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Text Column */}
          <div className="w-full md:w-5/12 text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#2D2825] leading-tight tracking-tight">
              Simplified Kundalini Yoga North America (SKY NA)
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Simplified Kundalini Yoga North America (SKY NA) is a nonprofit organization dedicated to sharing the
                transformative teachings of Vethathiri Maharishi — a visionary yogi, scientist, and philosopher whose work
                offers a complete, practical system for the well-being of body, mind, and soul. As the official North American
                branch of the World Community Service Center, SKY NA brings Maharishi’s research-aligned approach to
                meditation, yoga, and conscious living to individuals and families across the United States and Canada.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                SKY stands apart from other yoga and meditation schools. Rooted in ancient yogic science yet expressed through
                simple, accessible methods, SKY offers a safe, teacher-guided awakening and stabilization of kundalini
                energy using a gentle, structured approach. Our system integrates meditation, simplified physical exercises,
                introspection practices, and holistic life-skills — making conscious living practical, inclusive, and suitable
                for all ages.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Across North America, SKY NA is building a community where people can cultivate clarity, compassion, and inner
                balance while living fully in the modern world.
              </p>
            </div>
            <button
              onClick={() => onNavigate('mission')}
              className="flex items-center gap-2 text-[#D27D56] font-semibold text-sm hover:opacity-75 transition-opacity group cursor-pointer"
            >
              Discover Our Mission{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Right Video Preview Card */}
          <div className="w-full md:w-7/12">
            <div
              onClick={onOpenVideo}
              className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-[#2D2825]/10 shadow-sm"
              title="Click to watch An Introduction to the Science of SKY Yoga"
            >
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors z-10 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-110 active:scale-95 transition-all">
                  <Play className="w-8 h-8 md:w-9 md:h-9 text-[#D27D56] fill-current ml-1" />
                </div>
              </div>

              {/* Video background cover */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDguCSEGhZyZHQzOAN-hLtuJX1yRvmutL5PNqT_0pbBlXIizGw3O5odSDInHM6g2btehiKVzl_PVMz9qu1c7p5bSo3fbgVwfSD9Tzc49-8osqZ_hvoG8lRu5-uJAepze7L8Twf5v0nVW2rwAb-JdzHbzIQ7lQnuLf0wAhi1846aI1PuyRQMiU86ZB6bL4ssRba5EMg3JkUWVLDc1Hi1QwoxpjnazvmaGySwOcRbPvluKvA4TvpKwu61")',
                }}
              />

              {/* Title & badge at bottom left */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 text-white drop-shadow-md pr-4">
                <p className="text-xs uppercase tracking-wider mb-1 font-semibold opacity-90">WATCH</p>
                <p className="text-lg md:text-2xl font-semibold leading-snug">
                  An Introduction to the Science of SKY Yoga
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROGRAMS BENTO GRID (PATHWAYS TO MASTERY)
         ======================================================== */}
      <section className="py-14 md:py-20 px-5 md:px-12 border-y border-[#2D2825]/5 bg-[#E8EDE7]">
        <div className="max-w-[1200px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mb-2 tracking-tight">
                Pathways to Mastery
              </h2>
              <p className="text-base text-[#6E6E73]">Structured programs for every stage of your journey.</p>
            </div>
            <button
              onClick={() => onNavigate('adults')}
              className="flex items-center gap-2 text-[#D27D56] text-sm font-semibold hover:opacity-70 transition-opacity cursor-pointer group"
            >
              View All Programs{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Adults Foundation (Spans 2 columns) */}
            <div className="md:col-span-2 bg-[#FDFBF7] rounded-2xl border border-[#2D2825]/10 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col md:flex-row h-full min-h-[300px]">
              <div className="w-full md:w-1/2 h-60 md:h-auto relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQS7ReiPowgWEtChyrNzf_uDMt6x6qO1GeElhH40YCAq_mGP2I7Y5Rd9-7xjs66JxUskspIdwnUEMLa5GxJAPsk15rBWMsDRgSgQcmrM65BFntmQbedbgsWYxCOX4kHFMAjYCLqNUz3cmTcDfXsMm47Owe02wiTO5QV-m71nSD9MVHIfTKoEdq_Vp1tuRfkKQwpP892EYhbHIpfvZxYr1B1Z47Z4rmHfPwsQovQdIVJnj9F44G9lep")',
                  }}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
                <span className="inline-block bg-[#F0EBE1] text-[#D27D56] text-xs font-semibold px-3 py-1 rounded-full w-max mb-4 border border-[#2D2825]/5">
                  Foundation
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-[#2D2825] mb-3">Adults Foundation</h3>
                <p className="text-sm text-[#6E6E73] mb-6 leading-relaxed">
                  Master the fundamental techniques of physical regulation and mental clarity through our core courses
                  available at centers globally.
                </p>
                <button
                  onClick={() => onNavigate('adults')}
                  className="mt-auto text-sm text-[#D27D56] flex items-center gap-1 group-hover:gap-2 transition-all font-semibold cursor-pointer w-max"
                >
                  Explore Courses <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Kids / Youth School (Spans 1 column) */}
            <div className="bg-[#FDFBF7] rounded-2xl border border-[#2D2825]/10 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col h-full min-h-[300px]">
              <div className="h-48 md:h-44 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCufeKD1mJHPVNGxl5z6DuXbXWKE-CKJcfYEQL8DTunru_LaexTRz5jNWPGfyKl1C8YRpCha0u8_Uuu1R_qQtpH5ukhUIw-JVs5hIHZxGbSy-8tH9CxuQmFKuTBZAKW2sfBeAg1gnRWEgs_e87gAAfNM7FsuW4ela-0vokHLE_UQKqpPXvsbxWNyAqJ49gYDRkwQo4AUjTVos_eGfcxoFZqllkOPNCMemIL_g6VkEuWM7eVfCdLFoWh")',
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold text-[#2D2825] mb-2">SKY Yoga School</h3>
                <p className="text-sm text-[#6E6E73] mb-6 flex-grow leading-relaxed">
                  Cultivating focus, emotional resilience, and physical health in youth.
                </p>
                <button
                  onClick={() => onNavigate('kids')}
                  className="mt-auto text-sm text-[#D27D56] flex items-center gap-1 group-hover:gap-2 transition-all font-semibold cursor-pointer w-max"
                >
                  Youth Programs <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          VOICES OF TRANSFORMATION (TESTIMONIALS)
         ======================================================== */}
      <section className="py-14 md:py-20 px-5 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2825] mb-3 tracking-tight">
              Voices of Transformation
            </h2>
            <p className="text-base text-[#6E6E73]">
              Hear from those who have experienced profound changes through consistent practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "The Kayakalpa practice has completely restored my energy levels. I feel a vitality I haven't experienced
                in years."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">Sarah Jenkins</p>
                  <p className="text-xs text-[#6E6E73]">Practitioner for 3 years • Bay Area</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "SKY meditation provided the mental clarity I needed to navigate my demanding career with profound inner
                calm."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">Michael Chen</p>
                  <p className="text-xs text-[#6E6E73]">Executive Director • Toronto</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "The youth program has been incredible for my children. They are more focused, resilient, and emotionally
                balanced."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  E
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">Elena Rodriguez</p>
                  <p className="text-xs text-[#6E6E73]">Parent • Dallas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
