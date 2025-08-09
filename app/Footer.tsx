import React from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#161c2d] text-white/90">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top CTA / Newsletter */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Talk to our team</h3>
              <p className="mt-1 max-w-xl text-sm text-white/70">
                Whether you're exploring our services or ready to transform your workforce, our sales experts are just a message away.
              </p>
            </div>
            <form className="flex w-full max-w-md items-center gap-3" action="#" method="post">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#161c2d] hover:bg-white/90"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="mt-16 grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="inline-block h-9 w-9 rounded-lg bg-white/15 ring-1 ring-white/20" aria-hidden="true" /> */}
              {/* <span className="text-lg font-semibold text-white">iSkillBox</span> */}
              <img src='/iskillLogo/17.png' alt='logo'  className='w-52'/>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Building future‑ready workforces with insights, intelligence and innovation.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link className="hover:text-white" href="#about">About Us</Link></li>
              <li><Link className="hover:text-white" href="#solutions">Solutions</Link></li>
              <li><Link className="hover:text-white" href="#success">Success Stories</Link></li>
              <li><Link className="hover:text-white" href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Resources</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="hover:text-white" href="#">Blog</a></li>
              <li><a className="hover:text-white" href="#">Case Studies</a></li>
              <li><a className="hover:text-white" href="#">Guides</a></li>
              <li><a className="hover:text-white" href="#">Help Center</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Security</a></li>
              <li><a className="hover:text-white" href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/60">© {year} iSkillBox. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a aria-label="Instagram" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a aria-label="YouTube" className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20" href="#">
              <Youtube className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
