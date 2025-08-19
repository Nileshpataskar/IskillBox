"use client";

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Debug mount marker

    const getScrollY = () => {
      const se = document.scrollingElement as HTMLElement | null;
      const a = typeof window !== 'undefined' ? window.scrollY : 0;
      const b = typeof window !== 'undefined' ? window.pageYOffset : 0;
      const c = document.documentElement ? document.documentElement.scrollTop : 0;
      const d = document.body ? document.body.scrollTop : 0;
      const e = se ? se.scrollTop : 0;
      const y = a || b || c || d || e || 0;
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
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
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
          ? 'rounded-xl m-4 bg-black/30 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Gradient overlay for better text readability */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40' : 'opacity-0'
      }`} />
      
      <div className="relative flex h-20 w-full max-w-full items-center justify-between px-4 md:px-40">
        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <img src="/iskillLogo/17.png" alt="logo" className="w-40 drop-shadow-lg" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex z-10  md:items-center">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.hasDropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.dropdownKey!)}
                  onMouseEnter={() => {
                    if (dropdownTimeout) clearTimeout(dropdownTimeout);
                    setActiveDropdown(item.dropdownKey!);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setActiveDropdown(null), 250); // increased delay
                    setDropdownTimeout(timeout);
                  }}
                  className="text-sm text-white hover:text-lime-300 transition-all duration-300 flex items-center gap-2 font-medium tracking-wide"
                  style={{ position: 'relative', zIndex: 51 }}
                >
                  {item.label}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))', marginLeft: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Dropdown Menu */}
                  {activeDropdown === item.dropdownKey && (
                    <div 
                      className="absolute top-full left-0 mt-3 min-w-64 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden z-50 flex flex-col gap-0.5 py-3 animate-fadeIn"
                      style={{ boxShadow: '0 12px 40px 0 rgba(80,80,120,0.18), 0 1.5px 8px 0 rgba(80,80,120,0.10) inset', marginTop: 18 }}
                      onMouseEnter={() => {
                        if (dropdownTimeout) clearTimeout(dropdownTimeout);
                        setActiveDropdown(item.dropdownKey!);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setActiveDropdown(null), 250);
                        setDropdownTimeout(timeout);
                      }}
                    >
                      {/* Dropdown arrow */}
                      <div className="absolute -top-2 left-6 w-5 h-5 bg-white/10 backdrop-blur-2xl border-l border-t border-white/30 rounded-tl-xl" style={{ boxShadow: '0 2px 8px 0 rgba(80,80,120,0.10)' }} />
                      <div className="flex flex-col py-1">
                        {item.dropdownKey === "solutions" ? (
                          solutionsItems.map((title, idx) => {
                            const isActive = typeof window !== 'undefined' && window.location.hash === `#${title.toLowerCase().replace(/\s+/g, '-')}`;
                            return (
                              <a
                                key={idx}
                                href={`/solutions#${title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`block px-7 py-3 text-white/90 transition-all duration-200 font-medium border-l-2 border-transparent rounded-xl
                                  hover:bg-gradient-to-r hover:from-lime-400/10 hover:to-purple-400/10 hover:text-lime-300 hover:border-l-lime-400 hover:scale-[1.03]
                                  ${isActive ? 'bg-lime-400/10 text-lime-300 border-l-lime-400' : ''}`}
                                style={{ transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)' }}
                              >
                                {title}
                              </a>
                            );
                          })
                        ) : item.dropdownKey === "stories" ? (
                          storiesItems.map((title, idx) => {
                            const storyId = title.toLowerCase().replace(/\s+/g, '-');
                            const isActive = typeof window !== 'undefined' && window.location.search.includes(`story=${storyId}`);
                            return (
                              <a
                                key={idx}
                                href={`/success-stories?story=${storyId}`}
                                className={`block px-7 py-3 text-white/90 transition-all duration-200 font-medium border-l-2 border-transparent rounded-xl
                                  hover:bg-gradient-to-r hover:from-lime-400/10 hover:to-purple-400/10 hover:text-lime-300 hover:border-l-lime-400 hover:scale-[1.03]
                                  ${isActive ? 'bg-lime-400/10 text-lime-300 border-l-lime-400' : ''}`}
                                style={{ transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)' }}
                              >
                                {title}
                              </a>
                            );
                          })
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
                          storiesItems.map((title, idx) => {
                            const storyId = title.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <a
                                key={idx}
                                href={`/success-stories?story=${storyId}`}
                                className="block py-3 px-4 text-white/90 hover:text-lime-300 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                  <span className="font-medium">{title}</span>
                                </div>
                              </a>
                            );
                          })
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s cubic-bezier(.4,2,.6,1); }
      `}</style>
    </header>
  );
};

export default Header;
