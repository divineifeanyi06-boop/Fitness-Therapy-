import React, { useState } from 'react';
import { Calculator, Sparkles, Flame, HeartPulse, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { SPECIALIZATIONS } from '../data/fitnessData';

interface FitnessCalculatorProps {
  onSelectRecommendedActivities: (activities: string[]) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({
  onSelectRecommendedActivities,
}) => {
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(168);
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_tone' | 'therapy_pain' | 'stamina'>('fat_loss');
  const [calculated, setCalculated] = useState(true);

  // Compute BMI
  const heightInMeters = height / 100;
  const bmi = heightInMeters > 0 ? Number((weight / (heightInMeters * heightInMeters)).toFixed(1)) : 22;

  let bmiCategory = 'Normal Weight';
  let bmiColor = 'text-lime-400';
  let recommendedActs: string[] = ['Strength Training', 'Weight Loss / Fat Burn Programs'];

  if (bmi < 18.5) {
    bmiCategory = 'Underweight (Needs Lean Mass & Strength)';
    bmiColor = 'text-amber-400';
    recommendedActs = ['Strength Training', 'Personalized Nutrition Coaching', 'Core & Abs Conditioning'];
  } else if (bmi < 25) {
    bmiCategory = 'Optimal / Healthy Range';
    bmiColor = 'text-lime-400';
    recommendedActs = ['Core & Abs Conditioning', 'HIIT (High-Intensity Interval Training)', 'Yoga & Flexibility Training'];
  } else if (bmi < 30) {
    bmiCategory = 'Overweight (Targeted Fat Burn Recommended)';
    bmiColor = 'text-yellow-400';
    recommendedActs = ['Weight Loss / Fat Burn Programs', 'Strength Training', 'Cardio & Endurance Training', 'Personalized Nutrition Coaching'];
  } else {
    bmiCategory = 'High Body Mass (Therapy & Guided Fat Loss Recommended)';
    bmiColor = 'text-red-400';
    recommendedActs = ['Weight Loss / Fat Burn Programs', 'Functional / Mobility Training', 'Personalized Nutrition Coaching', 'Cardio & Endurance Training'];
  }

  // Adjust by goal
  if (goal === 'therapy_pain') {
    recommendedActs = ['Functional / Mobility Training', 'Yoga & Flexibility Training', 'Core & Abs Conditioning'];
  } else if (goal === 'muscle_tone') {
    recommendedActs = ['Strength Training', 'Core & Abs Conditioning', 'HIIT (High-Intensity Interval Training)'];
  } else if (goal === 'stamina') {
    recommendedActs = ['Cardio & Endurance Training', 'HIIT (High-Intensity Interval Training)', 'Personalized Nutrition Coaching'];
  }

  const handleApplyToRegistration = () => {
    onSelectRecommendedActivities(recommendedActs);
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="assessment" className="py-16 bg-zinc-950 border-y border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/90 rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/15 text-lime-400 text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Automated Fitness & Body Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Instant Body Analysis & <span className="text-lime-400">Prescription</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                Enter your parameters to calculate your BMI and get automated Nigerian nutrition and activity recommendations.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-2xl border border-white/10 text-xs font-bold text-white/90">
              <Calculator className="w-4 h-4 text-lime-400" />
              <span>Free Nigerian Diagnostic Tool</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Gender selector */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-white block mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-black uppercase transition-all ${
                      gender === 'female'
                        ? 'bg-lime-400 border-lime-400 text-black shadow-lg shadow-lime-400/20'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/30'
                    }`}
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-black uppercase transition-all ${
                      gender === 'male'
                        ? 'bg-lime-400 border-lime-400 text-black shadow-lg shadow-lime-400/20'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/30'
                    }`}
                  >
                    Male
                  </button>
                </div>
              </div>

              {/* Weight & Height sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 bg-black p-4 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold text-white">
                    <span className="uppercase text-white/70">Current Weight:</span>
                    <span className="text-lime-400 text-sm font-black">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={150}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-lime-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-semibold">
                    <span>40 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                <div className="space-y-2 bg-black p-4 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold text-white">
                    <span className="uppercase text-white/70">Height:</span>
                    <span className="text-lime-400 text-sm font-black">{height} cm</span>
                  </div>
                  <input
                    type="range"
                    min={140}
                    max={210}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-lime-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-semibold">
                    <span>140 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>
              </div>

              {/* Primary Goal Selector */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-white block">
                  Primary Transformation Goal
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setGoal('fat_loss')}
                    className={`p-3 rounded-xl border font-bold text-left transition-all ${
                      goal === 'fat_loss'
                        ? 'bg-black border-lime-400 text-lime-400'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    🔥 Targeted Fat Burn & Flat Belly
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('muscle_tone')}
                    className={`p-3 rounded-xl border font-bold text-left transition-all ${
                      goal === 'muscle_tone'
                        ? 'bg-black border-lime-400 text-lime-400'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    💪 Lean Muscle & Body Sculpting
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('therapy_pain')}
                    className={`p-3 rounded-xl border font-bold text-left transition-all ${
                      goal === 'therapy_pain'
                        ? 'bg-black border-lime-400 text-lime-400'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    🛡️ Back/Joint Pain & Mobility Therapy
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal('stamina')}
                    className={`p-3 rounded-xl border font-bold text-left transition-all ${
                      goal === 'stamina'
                        ? 'bg-black border-lime-400 text-lime-400'
                        : 'bg-black border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    ⚡ Energy, Heart Health & Stamina
                  </button>
                </div>
              </div>

            </div>

            {/* Diagnostic Output Card */}
            <div className="lg:col-span-6">
              <div className="bg-black/90 rounded-3xl border-2 border-lime-400/50 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/60">
                    Your Metric Report
                  </span>
                  <span className="text-xs font-bold bg-lime-400/20 text-lime-400 px-3 py-1 rounded-full">
                    5-Month Projection
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs text-white/60 block">Calculated BMI</span>
                    <span className="text-3xl sm:text-4xl font-black text-white">{bmi}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block">Classification</span>
                    <span className={`text-sm sm:text-base font-black ${bmiColor}`}>{bmiCategory}</span>
                  </div>
                </div>

                {/* Recommended Activities Prescription */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-lime-400">
                      Recommended Specializations for You:
                    </span>
                    <span className="text-[10px] text-white/50">{recommendedActs.length} Selected</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recommendedActs.map((act, i) => (
                      <span
                        key={i}
                        className="text-xs font-bold bg-zinc-900 border border-lime-400/40 text-lime-300 px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                        <span>{act}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-white/70 font-medium">
                  💡 In Coach Ifeanyi's 5-Month Therapy, this routine combines structured weekly progression with balanced Nigerian meal guidelines.
                </p>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={handleApplyToRegistration}
                  className="w-full py-3.5 px-5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20"
                >
                  <span>Apply These Specializations & Register</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
