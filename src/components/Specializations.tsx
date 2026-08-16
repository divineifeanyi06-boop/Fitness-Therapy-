import React from 'react';
import {
  Dumbbell,
  HeartPulse,
  Flame,
  Sun,
  Zap,
  ShieldCheck,
  Activity,
  Apple,
  CheckCircle2,
  Plus,
  ArrowDownRight
} from 'lucide-react';
import { SPECIALIZATIONS } from '../data/fitnessData';
import { Specialization } from '../types';

interface SpecializationsProps {
  selectedActivities: string[];
  onToggleActivity: (title: string) => void;
}

export const Specializations: React.FC<SpecializationsProps> = ({
  selectedActivities,
  onToggleActivity,
}) => {
  // Helper to resolve icon component dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Sun':
        return <Sun className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Apple':
        return <Apple className="w-6 h-6" />;
      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section id="specializations" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/15">
            Our 8 Specialized Pillars
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            TAILORED COACHING <span className="text-lime-400">SPECIALIZATIONS</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
            Select one or multiple specialization areas that align with your fitness aspirations. Click any card to select it for your registration.
          </p>
        </div>

        {/* 8 Specializations Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIZATIONS.map((spec) => {
            const isSelected = selectedActivities.includes(spec.title);

            return (
              <div
                key={spec.id}
                onClick={() => onToggleActivity(spec.title)}
                className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 -translate-y-1'
                    : 'bg-zinc-900/90 border border-white/10 hover:border-lime-400/50 hover:bg-zinc-900 hover:-translate-y-1'
                }`}
              >
                {/* Selection Check Indicator Badge */}
                <div className="absolute top-4 right-4">
                  {isSelected ? (
                    <span className="p-1 rounded-full bg-lime-400 text-black shadow-md">
                      <CheckCircle2 className="w-5 h-5 font-black" />
                    </span>
                  ) : (
                    <span className="p-1 rounded-full bg-black text-white/50 group-hover:text-lime-400 group-hover:bg-zinc-800 border border-white/15 transition-colors">
                      <Plus className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* Top Icon & Content */}
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-lime-400 text-black font-black'
                        : 'bg-black text-lime-400 border border-white/15 group-hover:bg-lime-400 group-hover:text-black'
                    }`}
                  >
                    {getIcon(spec.iconName)}
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-white leading-snug">
                    {spec.title}
                  </h3>

                  <p className="text-xs text-white/70 font-medium leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Benefits Pill list */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1">
                    {spec.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-[11px] text-white/80 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card bottom CTA */}
                  <div className="pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className={isSelected ? 'text-lime-400' : 'text-white/50 group-hover:text-white'}>
                      {isSelected ? '✓ Selected' : 'Tap to Add'}
                    </span>
                    <ArrowDownRight className={`w-4 h-4 ${isSelected ? 'text-lime-400' : 'text-white/40'}`} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected activities summary bar */}
        {selectedActivities.length > 0 && (
          <div className="mt-10 p-5 rounded-2xl bg-zinc-900 border border-lime-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/80 flex items-center gap-3">
              <span className="font-black uppercase tracking-widest text-black bg-lime-400 px-3 py-1 rounded-lg">
                {selectedActivities.length} Selected
              </span>
              <span className="font-medium">Selected for registration: <strong className="text-white font-bold">{selectedActivities.join(', ')}</strong></span>
            </div>
            <a
              href="#register"
              className="px-6 py-3 rounded-xl bg-lime-400 text-black font-black uppercase text-xs tracking-widest hover:bg-lime-300 transition-all shadow-md shrink-0"
            >
              Proceed to Reserve Spot →
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
