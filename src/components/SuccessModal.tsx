import React, { useEffect, useState } from 'react';
import { CheckCircle2, MessageCircle, ExternalLink, Dumbbell, X } from 'lucide-react';
import { RegistrationFormData } from '../types';
import { BUSINESS_INFO } from '../data/fitnessData';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: RegistrationFormData | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  formData,
}) => {
  const [countdown, setCountdown] = useState(4);

  const getWhatsAppUrl = () => {
    if (!formData) {
      return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Hi, I just registered for Ifeanyi's Health Fitness Therapy program."
      )}`;
    }

    const message = `Hi Coach Ifeanyi! I just completed my official registration for your 5-Month Health Fitness Therapy program.

*Client Details:*
• *Full Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Address:* ${formData.homeAddress}

*Selected Specializations:*
${formData.preferredActivities.map((act) => `- ${act}`).join('\n')}

*Why I Chose These:*
${formData.whyPrefer}

*My 5-Month Goals:*
${formData.expectation}

Please confirm my spot reservation!`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(4);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto redirect to WhatsApp
          window.open(getWhatsAppUrl(), '_blank');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, formData]);

  if (!isOpen || !formData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-900 border-2 border-lime-400 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-black text-white/60 hover:text-white border border-white/15"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-lime-400/20 border border-lime-400 text-lime-400 flex items-center justify-center mx-auto shadow-lg shadow-lime-400/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest block">
            REGISTRATION COMPLETED!
          </span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">
            WELCOME, {formData.fullName.split(' ')[0]}!
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
            Your details have been registered successfully. We are now redirecting you to Coach Ifeanyi on WhatsApp to confirm your 5-month spot.
          </p>
        </div>

        {/* Summary Card */}
        <div className="p-4 rounded-2xl bg-black border border-white/15 text-left space-y-2 text-xs">
          <div className="text-white/50 uppercase tracking-widest font-black text-[10px]">
            REGISTRATION SUMMARY
          </div>
          <div className="flex justify-between">
            <span className="text-white/60 font-medium">Name:</span>
            <span className="text-white font-bold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60 font-medium">Phone:</span>
            <span className="text-white font-bold">{formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60 font-medium">Activities:</span>
            <span className="text-lime-400 font-bold">{formData.preferredActivities.length} Selected</span>
          </div>
        </div>

        {/* Redirect Countdown and Action Button */}
        <div className="space-y-3 pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-lime-400 text-black font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-lime-400/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp Now ({BUSINESS_INFO.formattedPhone})</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-xs text-white/60 font-medium">
            {countdown > 0 ? (
              <span>Auto-opening WhatsApp in <strong className="text-lime-400 font-bold">{countdown}s</strong>...</span>
            ) : (
              <span>If WhatsApp didn't open automatically, click the button above.</span>
            )}
          </p>
        </div>

      </div>
    </div>
  );
};
