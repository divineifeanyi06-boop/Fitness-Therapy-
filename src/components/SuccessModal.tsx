import React, { useEffect, useState } from 'react';
import { CheckCircle2, MessageCircle, ExternalLink, Copy, Check, X, CreditCard, Building2 } from 'lucide-react';
import { RegistrationFormData } from '../types';
import { BUSINESS_INFO, PAYMENT_INFO } from '../data/fitnessData';

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
  const [countdown, setCountdown] = useState(6);
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getWhatsAppUrl = () => {
    if (!formData) {
      return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Hi Coach Ifeanyi, I just registered for your 5-Month Health Fitness Therapy program."
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

Please confirm my spot reservation and send my program commencement guide!`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(6);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-zinc-900 border-2 border-lime-400 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-center my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-black text-white/60 hover:text-white border border-white/15"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-14 h-14 rounded-full bg-lime-400/20 border border-lime-400 text-lime-400 flex items-center justify-center mx-auto shadow-lg shadow-lime-400/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] font-black text-lime-400 uppercase tracking-widest block">
            CONGRATULATIONS &amp; WELCOME!
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            REGISTRATION LOGGED FOR {formData.fullName.split(' ')[0]}!
          </h3>
          <p className="text-xs text-white/80 font-medium leading-relaxed">
            Your details have been safely received in our records. You are now connecting directly to Coach Ifeanyi on WhatsApp to confirm your spot.
          </p>
        </div>

        {/* Suggested Payment Account Card */}
        <div className="p-4 rounded-2xl bg-black border border-lime-400/50 text-left space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-lime-400 uppercase tracking-wider font-black text-[11px] flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Suggested Tuition Transfer</span>
            </span>
            <span className="text-[10px] bg-lime-400/10 text-lime-400 font-bold px-2 py-0.5 rounded-md">
              {PAYMENT_INFO.programFee} / 5 Months
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-white/50 block font-semibold">
                {PAYMENT_INFO.bankName} • {PAYMENT_INFO.accountName}
              </span>
              <span className="text-lg font-black text-white font-mono tracking-wider">
                {PAYMENT_INFO.accountNumber}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyAccount}
              className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 shrink-0 ${
                copied
                  ? 'bg-lime-400 text-black'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-white/15'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-lime-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-white/60 font-medium leading-relaxed">
            💡 <em>Suggestion:</em> You can transfer to the account above and forward your receipt on WhatsApp for immediate priority confirmation.
          </p>
        </div>

        {/* Redirect Action Button */}
        <div className="space-y-2.5 pt-1">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-lime-400 text-black font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-lime-400/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp with Coach Ifeanyi</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-white/60 font-medium">
            {countdown > 0 ? (
              <span>Opening WhatsApp in <strong className="text-lime-400 font-bold">{countdown}s</strong>...</span>
            ) : (
              <span>Tap button above to start your WhatsApp chat.</span>
            )}
          </p>
        </div>

      </div>
    </div>
  );
};
