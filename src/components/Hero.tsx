import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Flame, Award, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fitnessData';
import heroImg from '../assets/images/fitness_hero_1786358364833.jpg';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(heroImg);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-black">
      {/* Background Hero Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={imgSrc}
          onError={() => setImgSrc(FALLBACK_HERO)}
          alt="Ifeanyi's Fitness Therapy Training Facility"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter contrast-150 brightness-75 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-lime-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-lime-400 animate-pulse" />
              <span>Personalized Health Fitness Therapy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              TRANSFORM <br />
              <span className="text-lime-400">YOUR HEALTH</span> <br />
              & FITNESS
            </h1>

            {/* Sub-tagline */}
            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {BUSINESS_INFO.tagline}. Build lasting muscle, burn fat, correct posture, and double your daily energy with a proven 5-month personalized coaching curriculum.
            </p>

            {/* Quick Feature Checklist Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-xs font-bold uppercase tracking-wider text-white/90 pt-1">
              <div className="flex items-center gap-2 bg-zinc-900/90 px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                <span>5 Months Program</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                <span>Fee: {BUSINESS_INFO.programFee}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                <span>1-on-1 Coaching</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/90 px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                <span>Nigerian Meal Plans</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-lime-400 text-black font-black uppercase text-xs sm:text-sm tracking-widest shadow-xl shadow-lime-400/20 hover:bg-lime-300 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Join Now ({BUSINESS_INFO.programFee})</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#specializations"
                className="w-full sm:w-auto px-6 py-4.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore 8 Specializations</span>
              </a>
            </div>

            {/* Guarantee note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/50 text-xs font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>Limited Client Cohort for Dedicated 1-on-1 Focus & Results</span>
            </div>
          </div>

          {/* Right Highlight Feature Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md bg-zinc-900/90 p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl">
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest font-black text-lime-400 block">
                    Official Program
                  </span>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white mt-0.5">5-Month Therapy</h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-lime-400 p-0.5">
                  <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                    <Flame className="w-6 h-6 text-lime-400" />
                  </div>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="py-6 my-4 bg-black/80 rounded-2xl border border-lime-400/30 px-5 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Full 5-Month Registration Fee
                </span>
                <div className="text-4xl sm:text-5xl font-black text-lime-400 tracking-tight flex items-center justify-center gap-1">
                  <span>₦50,000</span>
                </div>
                <span className="text-[11px] font-medium text-white/60 mt-1 block">
                  Includes All 8 Specialization Modules & Direct WhatsApp Coaching
                </span>
              </div>

              {/* Quick Perks List */}
              <ul className="space-y-3 text-xs font-semibold text-white/80 pb-6 border-b border-white/10">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>Personalized Gym & Home Exercise Routines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>5 Full Months of Guided Athletic Therapy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  </div>
                  <span>Weekly Progress Metrics & Body Composition Review</span>
                </li>
              </ul>

              {/* Direct Card Action */}
              <div className="pt-4 text-center">
                <a
                  href="#register"
                  className="w-full py-3.5 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs uppercase tracking-widest block transition-all shadow-md shadow-lime-400/20"
                >
                  Reserve Your Spot Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
