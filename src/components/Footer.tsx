import React from 'react';
import {
  Dumbbell,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/fitnessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-white/60 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-lime-400 p-0.5">
                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-lime-400" />
                </div>
              </div>
              <span className="text-xl font-black text-lime-400 tracking-tighter">
                IFEANYI'S<span className="text-white">.HFT</span>
              </span>
            </div>

            <p className="text-white/70 text-xs font-medium leading-relaxed max-w-sm">
              {BUSINESS_INFO.subTagline} Premium 5-month fitness coaching and postural conditioning tailored for Nigerian lifestyles.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-black border border-white/15 hover:border-lime-400 text-white/80 hover:text-lime-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-black border border-white/15 hover:border-lime-400 text-white/80 hover:text-lime-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-black border border-white/15 hover:border-lime-400 text-white/80 hover:text-lime-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Quick Navigation</h4>
            <ul className="space-y-2 font-semibold">
              <li>
                <a href="#home" className="hover:text-lime-400 transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-lime-400 transition-colors">About Coaching Philosophy</a>
              </li>
              <li>
                <a href="#specializations" className="hover:text-lime-400 transition-colors">8 Exercise Specializations</a>
              </li>
              <li>
                <a href="#program" className="hover:text-lime-400 transition-colors">Program Details (₦50,000)</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-lime-400 transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#register" className="hover:text-lime-400 transition-colors">Reserve Your Spot</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Contact &amp; Location</h4>
            <ul className="space-y-2.5 font-semibold">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Phone / WhatsApp: <strong className="text-white">{BUSINESS_INFO.formattedPhone}</strong></span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Email: {BUSINESS_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Location: {BUSINESS_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Coach Ifeanyi, I want to ask a question before registering.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-lime-400 text-xs font-black uppercase tracking-wider hover:border-lime-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-white/50">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-white/50">
            <span>Crafted for Peak Athletic Health &amp; Sustainable Wellness</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
