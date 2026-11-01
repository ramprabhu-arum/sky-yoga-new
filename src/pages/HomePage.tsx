import React, { useState, useEffect, useRef } from "react";
import { PageType } from "../components/Navbar";
import {
  Play,
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  ChevronLeft,
} from "lucide-react";

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
      title: "Harmonize Physical Energy",
      subtitle:
        "Experience the ancient science of physical vitality through focused movement and expansive breath.",
      bgImage: "/hero1.jpeg",
      align: "right",
    },
    {
      title: "Quiet the Mind",
      subtitle:
        "Cultivate inner peace and mental clarity through deep meditation practices.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAasEvNGgT4E2KTkFDYAZHYBDMuqriyx4yCeEdM9G6t353SxFU287bmYoQ5O9tpsUrOjtEmBNlMgd0ZhTa9sg4AZepdBvpQ_ccSKGgQhivleON0e2ltuEQ9emEx7kdg3HldjgH3gemRM9saEpasc8cZHcfp05-6PW1cRJOPNsqAR630W3hH4tUW76YnK3Anx7fbtFEFx1s37582RxDUs2Qr4y_iDtuXcsG87Pt6ks0X_nw8BwbFoIL8",
      align: "center",
    },
    {
      title: "Awaken Vitality",
      subtitle:
        "Restore youthfulness and enhance your life force with Kayakalpa Yoga.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD8mua1bwm9A7eZ7yXdHoFwK7_-M5gCF6-w42c8Mkw407fLhwIt4xoteYgGz4ENElpDzPCxYFGRPrZ3M5yeR1rwazwi2P-efb_YXaoJqAnbYnLxCgl03GMPVN_fVqZYYswT8D7ouCa_uyrEgXBRcqjzkjc371N3OzG1P74ES3n-8QtKnnPoDy9SmzUu8PKapbFXH4Ph3PE0Mh6TX3EZDugrM-wc7PgGZSW8avRHnF_y7RxXLqlncwIE",
      align: "center",
    },
    {
      title: "Global Transformation",
      subtitle:
        "Join a worldwide community dedicated to personal peace and planetary harmony.",
      bgImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCCGSJqF0iTIg7117ZysVv7kxDbD5KpILmCjiQwGJ5U4TImdrXrsFWVFUrG0d7LNGLgnSVzYo4c1UpIi6CV9DT0SgkRmC69llU9bvsTdAxMOIXW7lFvvtAyy6lcxMUDUcScYXh6b-qA61ldS5liCWsyGELzYLskVOfX-QTjfedBEhuZUG0oIXbpmFO9Btr5LPtr-ynvFR15SVkNYQ0ZhxFSXaJiTbtNXokoqxJP9l5xxLuKFG5RMulm",
      align: "center",
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

  const adultPrograms = [
    {
      title: "Foundation Course – Men and Women",
      format: "Online",
      details: "$60 per person",
      registration: "Registration Open",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "In-center Foundation Course",
      format: "In Person",
      details: "Contact center for fee details",
      registration: "Registration Open",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Kayakalpa",
      format: "Online / In Person",
      details: "$35 per person",
      registration: "Registration Open for next session",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Certificate Program (1 Yr)",
      format: "Online / In Person",
      details: "$300/yr",
      registration: "Registration June to Aug",
      image:
        "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Diploma Program (1 Yr)",
      format: "Online / In Person",
      details: "$300/yr",
      registration: "Registration June to Aug",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Advance Diploma Program (2 Yr)",
      format: "Online / In Person",
      details: "$300/yr",
      registration: "Registration June to Aug",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const youthPrograms = [
    {
      title: "Yoga Bears",
      format: "Elementary | Online",
      details: "$300/yr",
      registration: "Registration Open",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Mind-rangers",
      format: "Middle School | Online",
      details: "$300/yr",
      registration: "Registration Open",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Young Master",
      format: "High School | Online",
      details: "$300/yr",
      registration: "May to Aug – Registration closed",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "SKY Yoga School",
      format: "In Person: Dallas / Bay Area",
      details: "$300/yr",
      registration: "Registration Closed",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const renderProgramCard = (
    program: (typeof adultPrograms)[number],
    category: string
  ) => {
    const isOpen = program.registration.toLowerCase().includes("open");
    const isClosed = program.registration.toLowerCase().includes("closed");

    return (
      <article
        key={program.title}
        onClick={() => onOpenProgramModal(program.title, category)}
        className="group flex flex-row overflow-hidden rounded-xl border border-[#2D2825]/10 bg-[#FDFBF7] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#D27D56]/40 cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenProgramModal(program.title, category);
          }
        }}
        aria-label={`${program.title} - ${program.details}`}
      >
        {/* Left: Thumbnail Image */}
        <div className="w-24 sm:w-28 md:w-28 lg:w-36 shrink-0 relative overflow-hidden bg-[#EAE6DF]">
          <img
            src={program.image}
            alt={`${program.title} course imagery`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Right: Content details */}
        <div className="flex flex-1 flex-col justify-between p-3 sm:p-4 min-w-0">
          <div>
            <h4 className="text-sm sm:text-base font-semibold leading-snug text-[#2D2825] group-hover:text-[#D27D56] transition-colors line-clamp-2">
              {program.title}
            </h4>
            <p className="mt-1 text-xs text-[#6E6E73] truncate">
              {program.format}
            </p>
          </div>

          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-[#2D2825]/5">
            <span className="text-xs sm:text-sm font-semibold text-[#D27D56]">
              {program.details}
            </span>
            <span
              className={`text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                isOpen
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                  : isClosed
                  ? "bg-gray-100 text-gray-500 border border-gray-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200/60"
              }`}
            >
              {program.registration}
            </span>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="w-full">
      {/* ========================================================
          HERO CAROUSEL SECTION
         ======================================================== */}
      <header
        className="relative w-full h-[calc(100svh-65px)] md:h-[90vh] min-h-[620px] md:min-h-[600px] bg-[#EAE6DF] mt-[65px] md:mt-[72px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className={`w-full min-w-full basis-full max-w-full h-full relative shrink-0 grow-0 overflow-hidden ${slide.align === "right" ? "bg-[#0b2a5b] md:bg-transparent" : ""}`}>
              {/* Overlay: desktop gradient keeps the face clear; mobile fades the image panel into the text area */}
              {slide.align === "right" ? (
                <div className="absolute inset-x-0 top-0 h-[52%] md:inset-0 md:h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent md:via-black/15 to-[#0b2a5b] md:to-black/65 z-10 pointer-events-none" />
              ) : (
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
              )}

              {/* Background photography */}
              <div
                className={`absolute w-full bg-cover ${slide.align === "right" ? "inset-x-0 top-0 h-[52%] md:inset-0 md:h-full bg-[position:25%_20%] md:bg-center" : "inset-0 h-full bg-center"}`}
                style={{ backgroundImage: `url("${slide.bgImage}")` }}
                role="img"
                aria-label={slide.title}
              />

              {/* Slide text content & CTAs */}
              {slide.align === "right" ? (
                <div className="relative z-20 w-full h-full flex flex-col justify-end md:justify-center items-end px-5 pb-16 md:pb-0 md:px-16 max-w-[1200px] mx-auto text-white box-border">
                  <div className="w-full md:w-auto max-w-xl md:max-w-2xl text-left md:text-right flex flex-col items-start md:items-end">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 drop-shadow-md tracking-tight leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="w-full max-w-[34rem] text-sm md:text-base mb-6 md:mb-10 text-white/90 leading-relaxed font-normal drop-shadow-sm">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-end">
                      <button
                        onClick={onOpenGetStarted}
                        className="bg-[#D27D56] text-white text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8653f] transition-colors shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        Begin Journey
                      </button>
                      <button
                        onClick={() => onNavigate("mission")}
                        className="border border-white/80 bg-black/20 text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-white/15 transition-colors backdrop-blur-xs active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-5 pb-10 md:pb-0 md:px-16 max-w-[1200px] mx-auto text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-sm max-w-4xl tracking-tight leading-tight">
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
                      onClick={() => onNavigate("mission")}
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
              className={`rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Subtle Prev/Next buttons on desktop */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
            )
          }
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
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
              Simple Practices. Profound Transformation.
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Simplified Kundalini Yoga North America (SKY NA) is a nonprofit
                organization dedicated to sharing the transformative teachings
                of Vethathiri Maharishi — a visionary yogi, scientist, and
                philosopher whose work offers a complete, practical system for
                the well-being of body, mind, and soul. As the official North
                American branch of the World Community Service Center, SKY NA
                brings Maharishi’s research-aligned approach to meditation,
                yoga, and conscious living to individuals and families across
                the United States and Canada.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                SKY stands apart from other yoga and meditation schools. Rooted
                in ancient yogic science yet expressed through simple,
                accessible methods, SKY offers a safe, teacher-guided awakening
                and stabilization of kundalini energy using a gentle, structured
                approach. Our system integrates meditation, simplified physical
                exercises, introspection practices, and holistic life-skills —
                making conscious living practical, inclusive, and suitable for
                all ages.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Across North America, SKY NA is building a community where
                people can cultivate clarity, compassion, and inner balance
                while living fully in the modern world.
              </p>
            </div>
            <button
              onClick={() => onNavigate("mission")}
              className="flex items-center gap-2 text-[#D27D56] font-semibold text-sm hover:opacity-75 transition-opacity group cursor-pointer"
            >
              Discover Our Mission{" "}
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
                <p className="text-xs uppercase tracking-wider mb-1 font-semibold opacity-90">
                  WATCH
                </p>
                <p className="text-lg md:text-2xl font-semibold leading-snug">
                  An Introduction to the Science of SKY Yoga
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROGRAMS (ADULTS & CHILDREN SIDE BY SIDE)
         ======================================================== */}
      <section className="py-14 md:py-20 px-5 md:px-12 bg-[#FBF9F5] border-t border-[#2D2825]/5">
        <div className="mx-auto max-w-[1200px]">
          {/* Main Section Header */}
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2D2825]">
              Featured Programs
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#6E6E73] leading-relaxed">
              Explore structured yoga, meditation, and kayakalpa programs designed
              for every stage of life — from youth to adults.
            </p>
          </div>

          {/* Side by Side Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-10 items-start">
            {/* Adult Programs Column */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2825]/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2D2825] flex items-center gap-2">
                    Adult Programs
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#D27D56]/10 text-[#D27D56]">
                      Ages 18+
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-[#6E6E73] mt-1">
                    Foundation courses, kayakalpa, and certification tracks
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("adults")}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#D27D56] hover:text-[#b8653f] transition-colors cursor-pointer shrink-0 ml-3"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3.5">
                {adultPrograms.map((p) => renderProgramCard(p, "Adult Course"))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate("adults")}
                className="sm:hidden mt-2 w-full py-2.5 px-4 text-center text-xs font-semibold text-[#D27D56] border border-[#D27D56]/30 rounded-xl hover:bg-[#D27D56]/5 transition-colors cursor-pointer"
              >
                Explore All Adult Offerings →
              </button>
            </div>

            {/* Children & Youth Programs Column */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2825]/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2D2825] flex items-center gap-2">
                    Children & Youth Programs
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#4A7C59]/15 text-[#3A6B48]">
                      Ages 5–18
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-[#6E6E73] mt-1">
                    Age-tailored mindfulness, focus, and healthy habits
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("kids")}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#D27D56] hover:text-[#b8653f] transition-colors cursor-pointer shrink-0 ml-3"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3.5">
                {youthPrograms.map((p) => renderProgramCard(p, "Youth Program"))}

                {/* Additional Card for School/Custom Cohorts */}
                <div
                  onClick={() => onNavigate("contact")}
                  className="group flex flex-row overflow-hidden rounded-xl border border-dashed border-[#D27D56]/30 bg-[#FAF7F2] p-4 transition-all duration-300 hover:border-[#D27D56] hover:bg-[#FAF4ED] cursor-pointer items-center justify-between"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onNavigate("contact");
                    }
                  }}
                >
                  <div className="flex-1 pr-3 min-w-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#D27D56]">
                      <Sparkles className="w-3.5 h-3.5" /> School & Youth Groups
                    </span>
                    <h4 className="text-sm font-semibold text-[#2D2825] mt-1 group-hover:text-[#D27D56] transition-colors">
                      Custom Cohorts for Schools & Colleges
                    </h4>
                    <p className="text-xs text-[#6E6E73] mt-0.5 line-clamp-2">
                      Request tailored workshops or youth sessions for your institution.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#D27D56]/10 text-[#D27D56] group-hover:bg-[#D27D56] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate("kids")}
                className="sm:hidden mt-2 w-full py-2.5 px-4 text-center text-xs font-semibold text-[#D27D56] border border-[#D27D56]/30 rounded-xl hover:bg-[#D27D56]/5 transition-colors cursor-pointer"
              >
                Explore All Youth Offerings →
              </button>
            </div>
          </div>

          {/* Bottom Help Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[#2D2825]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-semibold text-[#2D2825]">
                Not finding what you are looking for?
              </h4>
              <p className="text-sm text-[#6E6E73] mt-0.5">
                Connect with our center coordinators for customized schedules, family packages, or local in-person sessions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[#D27D56] text-white text-sm font-semibold hover:bg-[#b8653f] transition-colors shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Contact Centers & Coordinators
            </button>
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
              Hear from those who have experienced profound changes through
              consistent practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "The Kayakalpa practice has completely restored my energy
                levels. I feel a vitality I haven't experienced in years."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">
                    Sarah Jenkins
                  </p>
                  <p className="text-xs text-[#6E6E73]">
                    Practitioner for 3 years • Bay Area
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "SKY meditation provided the mental clarity I needed to navigate
                my demanding career with profound inner calm."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">
                    Michael Chen
                  </p>
                  <p className="text-xs text-[#6E6E73]">
                    Executive Director • Toronto
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#FDFBF7] border border-[#2D2825]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 md:mb-6 text-[#D27D56]/40">
                <Quote className="w-8 h-8 rotate-180" />
              </div>
              <p className="text-base text-[#2D2825] mb-8 italic flex-grow leading-relaxed">
                "The youth program has been incredible for my children. They are
                more focused, resilient, and emotionally balanced."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#E8E8EA] flex items-center justify-center text-[#D27D56] font-semibold text-lg border border-[#2D2825]/5">
                  E
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2825]">
                    Elena Rodriguez
                  </p>
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
