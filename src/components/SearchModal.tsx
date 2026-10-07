import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, MapPin, BookOpen, Sparkles, ArrowRight, User } from 'lucide-react';

interface SearchResultItem {
  id: string;
  title: string;
  category: 'Program' | 'Center' | 'Philosophy' | 'Practice';
  snippet: string;
  action: {
    page: 'home' | 'mission' | 'adults' | 'kids' | 'contact';
    targetId?: string;
  };
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: 'home' | 'mission' | 'adults' | 'kids' | 'contact', targetId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const searchDatabase: SearchResultItem[] = [
    {
      id: 'p1',
      title: 'Adults Foundation Course',
      category: 'Program',
      snippet: 'Learn Agna & Shanti meditation, Simplified Physical Exercises, and foundational breath mastery.',
      action: { page: 'adults', targetId: 'foundation' },
    },
    {
      id: 'p2',
      title: 'Kaya Kalpa Yoga',
      category: 'Practice',
      snippet: 'Ancient yogic technique to restructure the physical body, rejuvenate cells, and enhance life vitality.',
      action: { page: 'adults', targetId: 'kayakalpa' },
    },
    {
      id: 'p3',
      title: 'SKY Yoga School for Kids & Youth',
      category: 'Program',
      snippet: 'Youth courses tailored for ages 6-12 and 13-18. Focus, memory power, emotional resilience, and brain gym.',
      action: { page: 'kids' },
    },
    {
      id: 'p4',
      title: 'Introspection Practices (Stage I, II, III)',
      category: 'Practice',
      snippet: 'Systematic moralization of desires, eradication of worries, neutralization of anger, and self-realization.',
      action: { page: 'adults', targetId: 'introspection' },
    },
    {
      id: 'p5',
      title: 'Vethathiri Maharishi Philosophy',
      category: 'Philosophy',
      snippet: 'The life and teachings of Vethathiri Maharishi (1911–2006), synthesized science and spiritual realization.',
      action: { page: 'mission', targetId: 'philosophy' },
    },
    {
      id: 'p6',
      title: 'Bio-Magnetism & Kundalini Science',
      category: 'Philosophy',
      snippet: 'Understand the universal law of magnetism, life force transformation, and psychic centers.',
      action: { page: 'mission', targetId: 'science' },
    },
    {
      id: 'c1',
      title: 'San Francisco Bay Area SKY Center',
      category: 'Center',
      snippet: 'San Jose & Fremont centers. Weekly group meditation, Kaya Kalpa, and weekend Foundation courses.',
      action: { page: 'contact', targetId: 'bay-area' },
    },
    {
      id: 'c2',
      title: 'Dallas - Fort Worth Center',
      category: 'Center',
      snippet: 'Plano & Irving locations. In-person classes every Saturday & Sunday morning.',
      action: { page: 'contact', targetId: 'dallas' },
    },
    {
      id: 'c3',
      title: 'Greater Toronto Area SKY Center',
      category: 'Center',
      snippet: 'Mississauga, Scarborough & Brampton. Certified WCSC teachers offering bilingual sessions.',
      action: { page: 'contact', targetId: 'toronto' },
    },
    {
      id: 'c4',
      title: 'Seattle & Pacific Northwest Center',
      category: 'Center',
      snippet: 'Bellevue and Redmond communities. Hybrid online & in-person programs.',
      action: { page: 'contact', targetId: 'seattle' },
    },
    {
      id: 'c5',
      title: 'New York & New Jersey Centers',
      category: 'Center',
      snippet: 'Edison, NJ and Queens, NY. Active youth school batches and monthly advanced workshops.',
      action: { page: 'contact', targetId: 'new-york' },
    },
    {
      id: 'p7',
      title: 'Simplified Physical Exercises (7 Postures)',
      category: 'Practice',
      snippet: 'Hands, legs, breathing, eye exercises, Kapalabhati, Makarasana, and complete body massage.',
      action: { page: 'mission', targetId: 'exercises' },
    },
  ];

  const results = useMemo(() => {
    if (!query.trim()) return searchDatabase.slice(0, 6);
    const q = query.toLowerCase();
    return searchDatabase.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

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
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#2D2825]/10 bg-white">
          <Search className="w-5 h-5 text-[#6E6E73] shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search programs, centers, kayakalpa, meditation, teachers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-[#2D2825] placeholder:text-stone-400 text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-stone-100 text-stone-500 mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-stone-100 text-stone-600 hover:bg-stone-200"
          >
            ESC
          </button>
        </div>

        {/* Categories or Quick pills */}
        <div className="px-5 py-2.5 bg-[#F5F2ED] border-b border-[#2D2825]/5 flex items-center gap-2 overflow-x-auto text-xs text-[#6E6E73]">
          <span className="font-semibold text-[#2D2825] shrink-0">Filter by:</span>
          {['All', 'Program', 'Center', 'Practice', 'Philosophy'].map((filter) => (
            <button
              key={filter}
              onClick={() => (filter === 'All' ? setQuery('') : setQuery(filter))}
              className="px-2.5 py-1 rounded-md bg-white border border-stone-200 hover:border-[#D27D56] text-[#2D2825] transition-colors shrink-0"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 divide-y divide-stone-100">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate(item.action.page, item.action.targetId);
                  onClose();
                }}
                className="pt-2 first:pt-0 group p-3 rounded-xl hover:bg-[#F0EBE1] cursor-pointer transition-colors flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        item.category === 'Program'
                          ? 'bg-[#D27D56]/15 text-[#D27D56]'
                          : item.category === 'Center'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.category === 'Practice'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-indigo-100 text-indigo-800'
                      }`}
                    >
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#2D2825] group-hover:text-[#D27D56] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-2">{item.snippet}</p>
                </div>
                <div className="shrink-0 text-stone-400 group-hover:text-[#D27D56] transition-transform group-hover:translate-x-1 pt-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-[#6E6E73]">
              <Sparkles className="w-8 h-8 mx-auto text-stone-300 mb-2" />
              <p className="text-sm font-medium">No results found for "{query}"</p>
              <p className="text-xs mt-1 text-stone-400">
                Try searching for 'Kaya Kalpa', 'Meditation', 'Kids', or 'Bay Area'
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 border-t border-[#2D2825]/10 bg-[#F5F2ED] flex items-center justify-between text-xs text-[#6E6E73]">
          <span>Direct navigation across North American centers and programs</span>
          <span className="hidden sm:inline">Press Esc to exit</span>
        </div>
      </div>
    </div>
  );
};
