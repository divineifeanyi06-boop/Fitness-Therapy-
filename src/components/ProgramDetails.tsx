import React from 'react';
import {
  Check,
  Calendar,
  Users,
  Utensils,
  MessageCircle,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  Clock,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO, PROGRAM_INCLUSIONS } from '../data/fitnessData';

export const ProgramDetails: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      default:
        return <Check className="w-5 h-5" />;
    }
  };

  return (
    <section id="program" className="py-20 bg-black border-y border-white/10 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-glow pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/15">
            Official Coaching Curriculum
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            5-MONTH HEALTH FITNESS <span className="text-lime-400">THERAPY PROGRAM</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
            Everything you need for total physical transformation, metabolic health, and postural correction in one transparent package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Program Features Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-lime-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>What Is Included In Your 5-Month Enrollment</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROGRAM_INCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-lime-400/50 transition-all space-y-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-black text-lime-400 border border-white/15 flex items-center justify-center font-bold">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="text-xs text-white/70 font-medium leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Extra assurance banner */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3 text-xs text-white/80 font-medium">
              <Clock className="w-5 h-5 text-lime-400 shrink-0" />
              <span>
                <strong className="text-white font-bold uppercase tracking-wider">Flexible Timings:</strong> Workouts can be adapted for early morning, evening, or weekend sessions at home or in your local gym.
              </span>
            </div>
          </div>

          {/* Right Side: High Impact Pricing Card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-zinc-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 overflow-hidden">
              
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-lime-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                Official Tuition
              </div>

              <div className="space-y-4">
                <span className="text-xs font-black text-lime-400 uppercase tracking-widest block">
                  Complete 5-Month Therapy
                </span>

                <h3 className="text-2xl font-black uppercase text-white tracking-tight">Full Coaching Pass</h3>
                
                <p className="text-xs text-white/70 font-medium">
                  Comprehensive 1-on-1 and group personal coaching covering all 8 specialization activities.
                </p>

                {/* Price Display */}
                <div className="py-6 border-y border-white/10 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-lime-400 tracking-tight">
                      {BUSINESS_INFO.programFee}
                    </span>
                    <span className="text-xs font-bold uppercase text-white/60">
                      / {BUSINESS_INFO.programDuration} Total
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-lime-400/90 block">
                    No hidden monthly renewal fees! Covers all 5 full months.
                  </span>
                </div>

                {/* Bullet list */}
                <ul className="space-y-3 text-xs font-semibold text-white/90 pt-2">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Duration: <strong className="text-white uppercase">5 Months Intensive</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Access to All 8 Specializations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Custom Nigerian Meal & Macro Guide</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Direct WhatsApp Access ({BUSINESS_INFO.formattedPhone})</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Automatic Google Sheets Registration Logging</span>
                  </li>
                </ul>

                {/* Submit Action CTA */}
                <div className="pt-4 space-y-2">
                  <a
                    href="#register"
                    className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest text-xs shadow-xl shadow-lime-400/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Reserve Your Spot Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-center text-white/50 pt-1 font-medium">
                    Instant redirect to WhatsApp upon form completion.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
