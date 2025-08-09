import React from 'react'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 pt-10 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <span className="inline-block h-8 w-8 rounded bg-white/20 ring-1 ring-white/30" aria-hidden="true" />
          <span className="text-lg font-semibold text-white">iSkillBox</span> */}
          <img src='/iskillLogo/17.png' alt='logo' className='w-40' />

        </div>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-white/90 hover:text-white">About Us</a>
          <a href="#solutions" className="text-sm text-white/90 hover:text-white">Solutions</a>
          <a href="#success" className="text-sm text-white/90 hover:text-white">Success Stories</a>
          <a href="#contact" className="text-sm text-white/90 hover:text-white">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
