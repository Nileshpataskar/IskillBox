"use client";

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Debug mount marker
    // eslint-disable-next-line no-console
    console.log('[Header] mount');

    const getScrollY = () => {
      const se = document.scrollingElement as HTMLElement | null;
      const a = typeof window !== 'undefined' ? window.scrollY : 0;
      const b = typeof window !== 'undefined' ? window.pageYOffset : 0;
      const c = document.documentElement ? document.documentElement.scrollTop : 0;
      const d = document.body ? document.body.scrollTop : 0;
      const e = se ? se.scrollTop : 0;
      const y = a || b || c || d || e || 0;
      // eslint-disable-next-line no-console
      console.log('[Header:getScrollY]', { a, b, c, d, e, y });
      return y;
    };

    const onScroll = () => {
      const y = getScrollY();
      const scrolled = y > 50;
      setIsScrolled(scrolled);
      // eslint-disable-next-line no-console
      console.log('[Header] scroll', { y, isScrolled: scrolled });
    };

    // Initial run and listeners
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('touchmove', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const solutionsItems = [
    "Skill Gap Analysis",
    "Instructor-Led Training", 
    "1:1 & Group Coaching",
    "E-Learning & LMS",
    "Psychometric Assessments",
    "AI-Powered Solutions"
  ];

  const storiesItems = [
    "GMR Group",
    "Singapore Retail Chain",
    "FIAT",
    "Aequs",
    "Pathkind Labs"
  ];

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions", hasDropdown: true, dropdownKey: "solutions" },
    { href: "/success-stories", label: "Success Stories", hasDropdown: true, dropdownKey: "stories" },
    { href: "/contactus", label: "Contact Us" }
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'rounded-md m-4 bg-black/40 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Gradient overlay for better text readability */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20' : 'opacity-0'
      }`} />
      
      <div className="relative flex h-20 w-full max-w-full items-center justify-between px-4 md:px-40">
        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <img src="/iskillLogo/17.png" alt="logo" className="w-40 drop-shadow-lg" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex z-10">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.hasDropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.dropdownKey!)}
                  onMouseEnter={() => setActiveDropdown(item.dropdownKey!)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="text-sm text-white hover:text-lime-300 transition-all duration-300 flex items-center gap-2 font-medium tracking-wide"
                >
                  {item.label}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === item.dropdownKey && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 min-w-56 bg-white/95 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(item.dropdownKey!)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {/* Dropdown arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-white/30" />
                      
                      <div className="py-3">
                        {item.dropdownKey === "solutions" ? (
                          solutionsItems.map((title, idx) => (
                            <a
                              key={idx}
                              href={`/solutions#${title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-6 py-3 text-gray-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 font-medium border-l-2 border-transparent hover:border-l-purple-400"
                            >
                              {title}
                            </a>
                          ))
                        ) : item.dropdownKey === "stories" ? (
                          storiesItems.map((title, idx) => (
                            <a
                              key={idx}
                              href={`/success-stories#${title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-6 py-3 text-gray-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 font-medium border-l-2 border-transparent hover:border-l-purple-400"
                            >
                              {title}
                            </a>
                          ))
                        ) : null}
                      </div>
                    </div>
                  )}
                </button>
              ) : (
                <a 
                  href={item.href} 
                  className="text-sm text-white hover:text-lime-300 transition-all duration-300 font-medium tracking-wide relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-white hover:text-lime-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full group z-10"
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-b from-black/95 via-purple-900/90 to-black/95 backdrop-blur-3xl border-t border-white/20 shadow-2xl">
          {/* Decorative Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 via-purple-400/20 to-blue-400/20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          </div>
          
          <nav className="px-6 py-8 space-y-3 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.dropdownKey!)}
                      className="w-full group flex items-center justify-between text-white hover:text-lime-300 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 border border-transparent hover:border-lime-400/30"
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.dropdownKey && (
                      <div className="ml-4 mt-3 space-y-2 border-l-2 border-lime-400/40 pl-4">
                        {item.dropdownKey === "solutions" ? (
                          solutionsItems.map((title, idx) => (
                            <a
                              key={idx}
                              href={`/solutions#${title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block py-3 px-4 text-white/80 hover:text-lime-300 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-lime-400 rounded-full" />
                                <span className="font-medium">{title}</span>
                              </div>
                            </a>
                          ))
                        ) : item.dropdownKey === "stories" ? (
                          storiesItems.map((title, idx) => (
                            <a
                              key={idx}
                              href={`/success-stories#${title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block py-3 px-4 text-white/80 hover:text-lime-300 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                <span className="font-medium">{title}</span>
                              </div>
                            </a>
                          ))
                        ) : null}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={item.href} 
                    className="group flex items-center gap-4 text-white hover:text-lime-300 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 border border-transparent hover:border-lime-400/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? 'slideInFromRight 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-lime-400">
                      →
                    </span>
                  </a>
                )}
              </div>
            ))}
          </nav>
          
          {/* Bottom Decoration */}
          <div className="px-6 pb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex justify-center mt-6">
              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and scrollbar */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </header>
  );
};

export default Header;
