import React from 'react';
import { Check, Shield, Target, Users, HeartPulse, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fitnessData';

export const About: React.FC = () => {
  const corePillars = [
    {
      title: 'Individualized Fitness Therapy',
      desc: 'No generic cookie-cutter plans. Every movement program is structured around your current mobility, injury history, and target health goals.',
      icon: Target,
    },
    {
      title: 'Sustainable Nigerian Nutrition',
      desc: 'We integrate accessible local Nigerian foods (fish, plantains, beans, vegetable soups, lean meats) so you never feel starved or restricted.',
      icon: HeartPulse,
    },
    {
      title: 'Posture & Joint Rehabilitation',
      desc: 'Therapeutic movements to address lower back strain, knee stiffness, and shoulder tightness caused by sedentary desk work or prior injuries.',
      icon: Shield,
    },
    {
      title: 'Relentless Accountability',
      desc: 'Direct 1-on-1 WhatsApp communication ensures you stay motivated, execute proper form, and hit every weekly metric target.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/15">
            About The Therapy Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            WHY CHOOSE <span className="text-lime-400">IFEANYI'S HFT?</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
            Fitness is more than just lifting heavy weights—it is restorative health therapy designed to rebuild your vitality, enhance longevity, and transform your physical confidence.
          </p>
        </div>

        {/* Grid Content: Coach Portrait & Story + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coach Photo & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl group bg-zinc-900">
              <img
                src="/src/assets/images/coach_ifeanyi_1786358379064.jpg"
                alt="Coach Ifeanyi - Founder & Athletic Fitness Therapist"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-125 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
              
              {/* Overlay Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-lime-400 text-black">
                    <Award className="w-5 h-5 font-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-tight text-white">Coach Ifeanyi</h3>
                    <p className="text-xs text-lime-400 font-bold uppercase tracking-wider">Head Fitness & Athletic Therapist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Floating Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -right-2 bg-zinc-900 border border-white/20 p-4 rounded-2xl shadow-2xl items-center gap-3">
              <div className="text-2xl font-black text-lime-400 uppercase tracking-tight">5 Months</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 leading-tight">
                Complete Health <br />& Fitness Reset
              </div>
            </div>
          </div>

          {/* Philosophy Story & Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                EMPOWERING NIGERIAN CLIENTS TO LIVE PAIN-FREE & FULL OF ENERGY
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                At <strong className="text-white font-bold">Ifeanyi's Health Fitness Therapy</strong>, we recognize that many modern fitness programs fail because they ignore the reality of busy lifestyles, local food cultures, and joint mechanics. Our coaching combines targeted strength conditioning, high-burn cardio, posture correction, and tailored Nigerian meal plans.
              </p>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                Over our intensive <strong className="text-lime-400 font-bold">5-month program</strong>, you will not only lose unwanted body fat and build tone, but you will also learn how to maintain your health for a lifetime.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, index) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-lime-400/50 transition-all space-y-2 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black border border-white/15 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-white">{pillar.title}</h4>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Trust Checklist */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-white/90">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Beginner to Advanced Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Home & Gym Adaptable</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400" />
                <span>Affordable ₦50,000 Tuition</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
