"use client";

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      const scrolled = y > 200;
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

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contactus", label: "Contact Us" }
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-16 transition-colors duration-200 rounded-md m-2 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/20 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 w-full max-w-full items-center justify-between px-4 md:px-40">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/iskillLogo/17.png" alt="logo" className="w-40" />
        </div>

        {/* Desktop Navigation - Keep exactly as original */}
        <nav className="hidden gap-6 md:flex">
          <a href="/" className="text-sm text-white hover:text-white">Home</a>
          <a href="/about" className="text-sm text-white hover:text-white">About Us</a>
          <a href="/solutions" className="text-sm text-white hover:text-white">Solutions</a>
          <a href="/success-stories" className="text-sm text-white hover:text-white">Success Stories</a>
          <a href="/contactus" className="text-sm text-white hover:text-white">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full group"
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
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          {/* Decorative Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-transparent to-purple-400/10"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
          </div>
          
          <nav className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="group flex items-center gap-4 text-white hover:text-lime-400 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 border border-transparent hover:border-lime-400/30"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-lime-400">
                  →
                </span>
              </a>
            ))}
          </nav>
          
          {/* Bottom Decoration */}
          <div className="px-6 pb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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
      `}</style>
    </header>
  );
};

export default Header;
