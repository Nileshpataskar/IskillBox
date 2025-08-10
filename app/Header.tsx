"use client";

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-16 transition-colors duration-200 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className=" flex h-16 w-full max-w-full items-center justify-between px-4 md:px-40">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/iskillLogo/17.png" alt="logo" className="w-40" />
        </div>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-white hover:text-white">
            About Us
          </a>
          <a href="#solutions" className="text-sm text-white hover:text-white">
            Solutions
          </a>
          <a href="#success" className="text-sm text-white hover:text-white">
            Success Stories
          </a>
          <a href="#contact" className="text-sm text-white hover:text-white">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
