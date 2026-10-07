import React, { useState } from 'react';
import { SkyLogo } from './SkyLogo';
import { Search, Menu, X } from 'lucide-react';

export type PageType = 'home' | 'mission' | 'adults' | 'kids' | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenSearch: () => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenGetStarted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'MISSION', page: 'mission' },
    { label: 'ADULTS', page: 'adults' },
    { label: 'KIDS', page: 'kids' },
    { label: 'CONTACT US', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F2ED]/85 backdrop-blur-xl border-b border-[#2D2825]/10">
      <div className="flex justify-between items-center px-5 md:px-12 py-3.5 max-w-[1200px] mx-auto relative">
        {/* Brand / Logo Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center h-[40px] w-auto group cursor-pointer focus:outline-none"
            aria-label="SKY Yoga North America Home"
          >
            <SkyLogo className="h-10 w-auto group-hover:scale-102 transition-transform" />
          </button>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] tracking-wide font-medium">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`py-1 cursor-pointer transition-colors duration-200 uppercase ${
                  isActive
                    ? 'text-[#D27D56] font-semibold border-b-2 border-[#D27D56]'
                    : 'text-[#6E6E73] hover:text-[#D27D56]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="text-[#2D2825] hover:opacity-80 transition-opacity flex items-center justify-center p-2 rounded-full hover:bg-[#F0EBE1] cursor-pointer"
            aria-label="Search SKY Yoga programs and centers"
            title="Search (Programs, Centers, Philosophy)"
          >
            <Search className="w-5 h-5 text-[#2D2825]" />
          </button>

          <button
            onClick={onOpenGetStarted}
            className="bg-[#D27D56] text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#b8653f] transition-all active:scale-95 duration-150 ease-in-out hidden sm:block shadow-sm cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2D2825] p-2 flex items-center justify-center rounded-full hover:bg-[#F0EBE1] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F5F2ED]/95 backdrop-blur-xl border-b border-[#2D2825]/10 py-5 px-6 flex flex-col gap-3 shadow-xl animate-fade-in">
          {navLinks.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-left py-2 text-sm font-medium transition-colors ${
                currentPage === item.page ? 'text-[#D27D56] font-bold pl-2 border-l-2 border-[#D27D56]' : 'text-[#6E6E73]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGetStarted();
            }}
            className="bg-[#D27D56] text-white text-xs font-semibold py-3 rounded-lg w-full mt-3 shadow-sm text-center"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
