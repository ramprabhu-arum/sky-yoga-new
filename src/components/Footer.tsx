import React, { useState } from 'react';
import { SkyLogo } from './SkyLogo';
import { PageType } from './Navbar';
import { X, Shield, FileText, Cookie, Leaf } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; body: string }> = {
    privacy: {
      title: 'Privacy Policy',
      body: 'Simplified Kundalini Yoga North America (SKY NA) is committed to protecting your personal privacy. We do not sell, rent, or share personal contact information with third parties. Data provided during course registration is strictly utilized for program communication, course logistics, and optional community newsletter updates.',
    },
    terms: {
      title: 'Terms of Service',
      body: 'All meditation, physical exercises, and Kaya Kalpa techniques taught by SKY NA are certified under the World Community Service Center (WCSC) guidelines established by Yogiraj Vethathiri Maharishi. Practitioners practice mindfully according to their personal health conditions. SKY Yoga practices are complementary to conventional wellness and medical care.',
    },
    cookie: {
      title: 'Cookie Policy',
      body: 'This website utilizes strictly functional cookies to manage presentation preferences and session states. No invasive third-party ad tracking or biometric profiling technologies are deployed.',
    },
    sustainability: {
      title: 'Sustainability & Community Pledge',
      body: 'As a non-profit spiritual and scientific educational organization, SKY NA operates on principles of ecological harmony, mindful consumption, and service to humanity. Our digital and physical facilities strive for zero waste and reduced carbon impact.',
    },
  };

  return (
    <footer className="bg-[#FDFBF7] py-12 md:py-16 border-t border-[#2D2825]/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-12 max-w-[1200px] mx-auto gap-8">
        {/* Brand logo & non-profit badge */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center h-[40px] md:h-[48px] w-auto group cursor-pointer"
            aria-label="Return to top"
          >
            <SkyLogo className="h-10 md:h-12 w-auto group-hover:scale-102 transition-transform" />
          </button>
        </div>

        {/* Legal and policy links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-[#6E6E73]">
          <button
            onClick={() => setLegalModal('privacy')}
            className="hover:text-[#D27D56] transition-colors hover:underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setLegalModal('terms')}
            className="hover:text-[#D27D56] transition-colors hover:underline cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => setLegalModal('cookie')}
            className="hover:text-[#D27D56] transition-colors hover:underline cursor-pointer"
          >
            Cookie Policy
          </button>
          <button
            onClick={() => setLegalModal('sustainability')}
            className="hover:text-[#D27D56] transition-colors hover:underline cursor-pointer"
          >
            Sustainability
          </button>
        </div>

        {/* Copyright notice */}
        <div className="text-[#6E6E73] text-xs text-center md:text-right">
          <p>© 2024 SKY YOGA. All rights reserved.</p>
          <p className="text-[11px] text-stone-400 mt-0.5">World Community Service Center • North America</p>
        </div>
      </div>

      {/* Legal Dialog Overlay */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#FDFBF7] rounded-2xl shadow-2xl border border-stone-300 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="text-lg font-bold text-[#2D2825]">{legalContent[legalModal]?.title}</h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-full hover:bg-stone-200 text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#2D2825]/90 leading-relaxed">{legalContent[legalModal]?.body}</p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#D27D56] text-white text-xs font-semibold rounded-lg hover:bg-[#b8653f]"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
