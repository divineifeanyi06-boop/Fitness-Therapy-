import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle, Flame, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fitnessData';

interface PaymentAlert {
  name: string;
  location: string;
  activity: string;
  timeAgo: string;
  amount: string;
}

const NIGERIAN_PAYMENTS: PaymentAlert[] = [
  {
    name: 'Chidi Okafor',
    location: 'Lekki Phase 1, Lagos',
    activity: 'Strength Training & Fat Burn',
    timeAgo: 'Just now',
    amount: '₦50,000',
  },
  {
    name: 'Amina Bello',
    location: 'Maitama, Abuja',
    activity: 'Personalized Nutrition & Cardio',
    timeAgo: '1 min ago',
    amount: '₦50,000',
  },
  {
    name: 'Blessing David',
    location: 'Agbor, Delta State',
    activity: 'Posture Therapy & Mobility',
    timeAgo: '2 mins ago',
    amount: '₦50,000',
  },
  {
    name: 'Emeka Nwosu',
    location: 'Asaba, Delta State',
    activity: 'Core & Abs Conditioning + HIIT',
    timeAgo: 'Just now',
    amount: '₦50,000',
  },
  {
    name: 'Ngozi Eze',
    location: 'GRA Phase 2, Port Harcourt',
    activity: 'Weight Loss & Sustainable Diet',
    timeAgo: '3 mins ago',
    amount: '₦50,000',
  },
  {
    name: 'Babatunde Adebayo',
    location: 'Ikeja GRA, Lagos',
    activity: 'Full 5-Month Athletic Therapy',
    timeAgo: '1 min ago',
    amount: '₦50,000',
  },
  {
    name: 'Osas Igbinedion',
    location: 'Benin City, Edo State',
    activity: 'Strength & Joint Rehabilitation',
    timeAgo: 'Just now',
    amount: '₦50,000',
  },
  {
    name: 'Chinelo Umeh',
    location: 'Independence Layout, Enugu',
    activity: 'Yoga, Flexibility & Nutrition',
    timeAgo: '2 mins ago',
    amount: '₦50,000',
  },
  {
    name: 'Tariq Ibrahim',
    location: 'Wuse 2, Abuja',
    activity: 'HIIT & Functional Fitness',
    timeAgo: '4 mins ago',
    amount: '₦50,000',
  },
  {
    name: 'Kehinde Adeyemi',
    location: 'Bodija, Ibadan',
    activity: 'Fat Burn & Core Strength',
    timeAgo: 'Just now',
    amount: '₦50,000',
  },
];

export const LivePaymentNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissedPermanently, setIsDismissedPermanently] = useState(false);

  useEffect(() => {
    if (isDismissedPermanently) return;

    // Show initial notification shortly after page load (after 6 seconds)
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    // Hide after 7 seconds of display
    let hideTimeout: NodeJS.Timeout;
    if (isVisible) {
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 7500);
    }

    // Interval to trigger a new payment notification every 60 seconds (60,000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NIGERIAN_PAYMENTS.length);
      setIsVisible(true);

      // Auto hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, [isVisible, isDismissedPermanently]);

  if (isDismissedPermanently || !isVisible) return null;

  const current = NIGERIAN_PAYMENTS[currentIndex];

  return (
    <div className="fixed bottom-5 left-4 sm:left-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-auto animate-bounce-in">
      <div className="bg-zinc-950/95 backdrop-blur-xl border border-lime-400/40 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-black/80 flex items-start gap-3 relative overflow-hidden group">
        
        {/* Subtle glowing accent line */}
        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-lime-400" />

        {/* Live Indicator Icon */}
        <div className="relative shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-black border border-lime-400/30 flex items-center justify-center text-lime-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-black animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-black" />
        </div>

        {/* Payment & Client Information */}
        <div className="flex-grow min-w-0 pr-5">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-lime-400 mb-0.5">
            <CheckCircle className="w-3.5 h-3.5 text-lime-400" />
            <span>Verified Payment Received</span>
            <span className="text-white/40 text-[9px]">• {current.timeAgo}</span>
          </div>

          <p className="text-xs font-bold text-white truncate">
            <strong className="text-white font-extrabold">{current.name}</strong> from{' '}
            <span className="text-lime-300 font-semibold">{current.location}</span>
          </p>

          <p className="text-[11px] text-white/70 font-medium truncate mt-0.5">
            Paid <span className="text-lime-400 font-bold">{current.amount}</span> for 5-Month Therapy
          </p>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-[10px] font-semibold bg-white/10 text-white/80 px-2 py-0.5 rounded-md truncate max-w-[200px]">
              {current.activity}
            </span>
            <a
              href="#register"
              onClick={() => setIsVisible(false)}
              className="text-[10px] font-black text-lime-400 hover:underline uppercase tracking-wider ml-auto flex items-center gap-0.5"
            >
              <span>Enroll</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-2.5 right-2.5 p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          title="Dismiss notification"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
