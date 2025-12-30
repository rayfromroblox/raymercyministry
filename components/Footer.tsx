'use client'

import { memo } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#141414] text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">
          {/* Brand - Scaled up by 40% aspect */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-2 md:p-3 shadow-2xl transition-transform duration-700 hover:rotate-6">
              <img
                src="/images/logo.png"
                alt="Ray Mercy Ministry"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-serif font-black tracking-tighter leading-none">Ray Mercy</h2>
              <p className="text-[0.55rem] md:text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#8E8E8E] mt-0.5 md:mt-1" style={{ fontFamily: 'Sora, sans-serif' }}>Kenya • Ministry</p>
            </div>
          </div>

          {/* Links - Balanced Spacing */}
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
            {['About', 'Impact', 'Archive', 'Witness', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase() === 'archive' ? 'gallery' : link.toLowerCase() === 'witness' ? 'testimonials' : link.toLowerCase() === 'impact' ? 'activities' : link.toLowerCase()}`}
                className="text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#A0A0A0] hover:text-[#C85A4A] transition-colors duration-300"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright - Refined Typography */}
          <div className="text-center md:text-right space-y-1 md:space-y-2">
            <p className="text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[#666666]" style={{ fontFamily: 'Sora, sans-serif' }}>
              © {currentYear} • Ray Mercy
            </p>
            <p className="text-[0.55rem] md:text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#444444]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Serving Kenya with dignity
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
