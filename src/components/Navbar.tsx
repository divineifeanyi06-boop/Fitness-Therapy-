import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fitnessData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specializations', href: '#specializations' },
    { name: 'Program & Pricing', href: '#program' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-lime-400 p-0.5 shadow-lg shadow-lime-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-lime-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter text-lime-400 block leading-none">
                IFEANYI'S<span className="text-white">.HFT</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold block mt-0.5">
                Health Fitness Therapy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-lime-400 hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Coach Ifeanyi, I want to inquire about your 5-Month Health Fitness Therapy program."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold text-lime-400 bg-lime-950/30 hover:bg-lime-950/60 border border-lime-400/30 rounded-xl transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-lime-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#register"
              className="px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-lime-400 hover:bg-lime-300 rounded-xl shadow-lg shadow-lime-400/20 hover:scale-105 active:scale-95 transition-all"
            >
              Reserve Spot ({BUSINESS_INFO.programFee})
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#register"
              className="px-3 py-1.5 text-xs font-black uppercase text-black bg-lime-400 rounded-lg sm:hidden"
            >
              Join Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white hover:text-lime-400 hover:border-lime-400/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-white/80 hover:bg-zinc-900 hover:text-lime-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-xs font-bold text-lime-400 bg-lime-950/40 border border-lime-400/40 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp ({BUSINESS_INFO.formattedPhone})</span>
            </a>

            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-xs font-black uppercase tracking-wider text-black bg-lime-400 rounded-xl text-center shadow-lg shadow-lime-400/20"
            >
              Reserve Your Spot ({BUSINESS_INFO.programFee})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
