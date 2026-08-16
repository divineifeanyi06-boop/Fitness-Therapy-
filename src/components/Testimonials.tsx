import React from 'react';
import { Star, Quote, Award, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/fitnessData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/15">
            Real Transformations
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            CLIENT SUCCESS <span className="text-lime-400">STORIES</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
            See how our 5-month fitness therapy program has helped individuals across Nigeria rebuild strength, lose weight, and reclaim vibrant energy.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-zinc-900/90 border border-white/10 hover:border-lime-400/50 transition-all flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 group-hover:text-lime-400/20 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info & Achievement Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black border border-white/15 text-[11px] font-black uppercase tracking-wider text-lime-400">
                  <Award className="w-3.5 h-3.5 text-lime-400" />
                  <span>{t.achievement}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white">{t.name}</h3>
                    <span className="text-[11px] font-semibold text-white/60 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-lime-400" />
                      <span>{t.location}</span>
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center font-black text-xs text-lime-400">
                    {t.name.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
