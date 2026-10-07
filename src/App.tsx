/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageType } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { AdultsPage } from './pages/AdultsPage';
import { KidsPage } from './pages/KidsPage';
import { ContactPage } from './pages/ContactPage';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { GetStartedModal } from './components/GetStartedModal';
import { ProgramRegistrationModal } from './components/ProgramRegistrationModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [programModal, setProgramModal] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
  }>({
    isOpen: false,
    title: '',
    category: '',
  });

  // Handle global shortcut (Cmd/Ctrl + K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageType, targetId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If a target section id was specified, scroll to it after short delay
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const openProgramModal = (title: string, category: string = 'Course') => {
    setProgramModal({
      isOpen: true,
      title,
      category,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2ED] text-[#2D2825] font-['Hanken_Grotesk'] selection:bg-[#D27D56]/20 selection:text-[#D27D56]">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => handleNavigate(page)}
            onOpenVideo={() => setIsVideoModalOpen(true)}
            onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
            onOpenProgramModal={openProgramModal}
          />
        )}

        {currentPage === 'mission' && (
          <MissionPage
            onNavigate={(page) => handleNavigate(page)}
            onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
          />
        )}

        {currentPage === 'adults' && (
          <AdultsPage
            onNavigate={(page) => handleNavigate(page)}
            onOpenRegisterModal={openProgramModal}
            onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
          />
        )}

        {currentPage === 'kids' && (
          <KidsPage
            onNavigate={(page) => handleNavigate(page)}
            onOpenRegisterModal={openProgramModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={(page) => handleNavigate(page)} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(page) => handleNavigate(page)} />

      {/* Interactive Video Player Dialog */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onExplorePrograms={() => {
          setIsVideoModalOpen(false);
          handleNavigate('adults');
        }}
      />

      {/* Interactive Global Search Dialog */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigate={(page, targetId) => handleNavigate(page, targetId)}
      />

      {/* Interactive Get Started Onboarding Dialog */}
      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={() => setIsGetStartedModalOpen(false)}
        onNavigateToProgram={(programId) => {
          setIsGetStartedModalOpen(false);
          handleNavigate('adults', programId);
        }}
      />

      {/* Direct Program Registration Dialog */}
      <ProgramRegistrationModal
        isOpen={programModal.isOpen}
        programTitle={programModal.title}
        category={programModal.category}
        onClose={() => setProgramModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
