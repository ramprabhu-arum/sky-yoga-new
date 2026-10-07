import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, Clock, BookOpen, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplorePrograms: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onExplorePrograms }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'The Ancient Science of Bio-Magnetism', duration: '03:15', timePercent: 0 },
    { title: 'Safe & Teacher-Guided Kundalini Awakening', duration: '04:30', timePercent: 28 },
    { title: 'Kaya Kalpa: Cellular Vitality & Longevity', duration: '03:45', timePercent: 62 },
    { title: 'Living in Balance: Practical Introspection', duration: '02:30', timePercent: 88 },
  ];

  // Auto-progress simulation when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Keep active chapter aligned with progress
  useEffect(() => {
    if (progress < 28) setActiveChapter(0);
    else if (progress < 62) setActiveChapter(1);
    else if (progress < 88) setActiveChapter(2);
    else setActiveChapter(3);
  }, [progress]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl border border-black/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2825]/10 bg-[#F5F2ED]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D27D56] animate-pulse"></span>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#6E6E73]">Documentary Preview</p>
              <h3 className="text-lg md:text-xl font-bold text-[#2D2825]">An Introduction to the Science of SKY Yoga</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#2D2825] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-stone-900 overflow-hidden flex items-center justify-center group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDguCSEGhZyZHQzOAN-hLtuJX1yRvmutL5PNqT_0pbBlXIizGw3O5odSDInHM6g2btehiKVzl_PVMz9qu1c7p5bSo3fbgVwfSD9Tzc49-8osqZ_hvoG8lRu5-uJAepze7L8Twf5v0nVW2rwAb-JdzHbzIQ7lQnuLf0wAhi1846aI1PuyRQMiU86ZB6bL4ssRba5EMg3JkUWVLDc1Hi1QwoxpjnazvmaGySwOcRbPvluKvA4TvpKwu61"
            alt="An Introduction to the Science of SKY Yoga"
            className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>

          {/* Center Play/Pause Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-20 w-18 h-18 rounded-full bg-white/90 text-[#D27D56] flex items-center justify-center shadow-xl backdrop-blur hover:scale-110 active:scale-95 transition-all"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </button>

          {/* Chapter subtitle badge on video */}
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs flex items-center gap-2">
            <span className="text-[#D27D56] font-bold">Chapter {activeChapter + 1}:</span>
            <span>{chapters[activeChapter].title}</span>
          </div>

          {/* Video bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 to-transparent">
            {/* Scrubber line */}
            <div
              className="w-full bg-white/20 h-1.5 rounded-full mb-3 cursor-pointer overflow-hidden relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPercent = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);
                setProgress(newPercent);
              }}
            >
              <div
                className="bg-[#D27D56] h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#D27D56] transition-colors p-1"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#D27D56] transition-colors p-1"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-stone-300">
                  {Math.floor((progress / 100) * 14)}:
                  {String(Math.floor(((progress / 100) * 14 * 60) % 60)).padStart(2, '0')} / 14:00
                </span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Sparkles className="w-3.5 h-3.5 text-[#D27D56]" />
                <span className="hidden sm:inline">Vethathiri Maharishi Teachings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Chapters & Summary */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6E6E73] mb-3">Chapters & Syllabus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setProgress(ch.timePercent);
                    setActiveChapter(idx);
                    setIsPlaying(true);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    activeChapter === idx
                      ? 'border-[#D27D56] bg-[#D27D56]/5 text-[#2D2825]'
                      : 'border-stone-200 hover:border-stone-300 bg-white text-[#6E6E73]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        activeChapter === idx ? 'bg-[#D27D56] text-white' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium line-clamp-1">{ch.title}</span>
                  </div>
                  <span className="text-xs font-mono text-stone-400 shrink-0 ml-2">{ch.duration}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Key Insights & Takeaways */}
          <div className="bg-[#F0EBE1] rounded-xl p-4 border border-stone-200">
            <h4 className="text-sm font-bold text-[#2D2825] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D27D56]" />
              Core Takeaways from Maharishi's Teachings
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#2D2825]/90">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D27D56] shrink-0 mt-0.5" />
                <span>Bio-magnetism is the vital force regulating physical health and psychological peace.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D27D56] shrink-0 mt-0.5" />
                <span>Kundalini awakens gently from Mooladhara to Agna Chakra through certified master touch.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D27D56] shrink-0 mt-0.5" />
                <span>Kaya Kalpa practice restructures physical cells and slows biological aging.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D27D56] shrink-0 mt-0.5" />
                <span>Introspection practices sublimate anger, worry, and conflicting desires into clarity.</span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-stone-200">
            <div className="text-xs text-[#6E6E73]">
              Experience these techniques in our upcoming Foundation Course.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#2D2825] hover:bg-stone-200 rounded-lg transition-colors w-full sm:w-auto"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  onClose();
                  onExplorePrograms();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#D27D56] hover:bg-[#b8653f] rounded-lg shadow-sm transition-colors w-full sm:w-auto"
              >
                Explore Foundation Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
