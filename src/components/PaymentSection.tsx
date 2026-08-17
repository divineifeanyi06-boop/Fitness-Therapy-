import React, { useState } from 'react';
import {
  CreditCard,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Building2,
  UserCheck,
  Receipt,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO, PAYMENT_INFO } from '../data/fitnessData';

export const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="payment" className="py-20 bg-zinc-950 border-y border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-lime-400 text-xs font-black uppercase tracking-widest">
            <CreditCard className="w-4 h-4" />
            <span>Official Bank Payment Details</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            ENROLLMENT & <span className="text-lime-400">PAYMENT INFORMATION</span>
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
            To reserve your spot in the 5-Month Health Fitness Therapy program, make your payment to the official account below. You can complete payment before or after submitting the registration form.
          </p>
        </div>

        {/* Main Grid: Bank Card & Step-by-Step Payment Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive PalmPay Bank Account Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-zinc-900/90 rounded-3xl p-6 sm:p-8 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-black border border-lime-400/30 flex items-center justify-center text-lime-400 font-black">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-lime-400 block">
                    Verified Nigerian Account
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    {PAYMENT_INFO.bankName}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-bold text-lime-400 bg-lime-400/10 border border-lime-400/30 px-3 py-1 rounded-full">
                {PAYMENT_INFO.duration} Pass
              </span>
            </div>

            {/* Account Details Box */}
            <div className="my-6 space-y-4">
              
              {/* Account Number Box with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-black border border-white/15 space-y-2">
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest block">
                  Account Number
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-lime-400 tracking-wider font-mono">
                    {PAYMENT_INFO.accountNumber}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAccount}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      copied
                        ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-black stroke-[3]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-lime-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Account Name & Bank */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-white/50 uppercase font-semibold text-[10px] block">
                    Account Name
                  </span>
                  <span className="text-white font-extrabold text-sm flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>{PAYMENT_INFO.accountName}</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-white/50 uppercase font-semibold text-[10px] block">
                    Bank Institution
                  </span>
                  <span className="text-white font-extrabold text-sm flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>{PAYMENT_INFO.bankName}</span>
                  </span>
                </div>
              </div>

              {/* Amount Display */}
              <div className="p-3.5 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-lime-400/80 block">
                    Official Fee
                  </span>
                  <span className="text-lg font-black text-lime-400">
                    {PAYMENT_INFO.programFee}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-white/80">
                  Covers all 5 Months of Therapy
                </span>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#register"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-lime-400/20"
              >
                <span>Fill Registration Form</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Coach Ifeanyi! I am ready to make payment for the 5-Month Health Fitness Therapy program (${PAYMENT_INFO.programFee} to PalmPay ${PAYMENT_INFO.accountNumber} - ${PAYMENT_INFO.accountName}). Please confirm details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-black hover:bg-zinc-800 text-white border border-white/15 text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: How Payment & Registration Works (Suggestion / Step-by-Step) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="bg-zinc-900/60 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-lime-400 text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Simple 3-Step Enrollment Process</span>
              </div>

              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-lime-400 text-black font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                      Submit Your Registration Form
                    </h4>
                    <p className="text-xs text-white/70 font-medium mt-1 leading-relaxed">
                      Select your preferred fitness activities (Fat burn, Strength, Yoga, Cardio, etc.) and enter your contact details. Your response is saved automatically into our records.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black border border-lime-400/40">
                  <div className="w-8 h-8 rounded-xl bg-lime-400 text-black font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-lime-400 uppercase tracking-tight">
                      Make Bank Transfer (Suggested)
                    </h4>
                    <p className="text-xs text-white/70 font-medium mt-1 leading-relaxed">
                      Transfer the one-time tuition of <strong>{PAYMENT_INFO.programFee}</strong> to <strong>{PAYMENT_INFO.bankName}</strong> Account <strong>{PAYMENT_INFO.accountNumber}</strong> ({PAYMENT_INFO.accountName}).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black border border-white/10">
                  <div className="w-8 h-8 rounded-xl bg-lime-400 text-black font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                      Confirm & Send Proof on WhatsApp
                    </h4>
                    <p className="text-xs text-white/70 font-medium mt-1 leading-relaxed">
                      You will be directed straight to Coach Ifeanyi's WhatsApp with your pre-filled details. Share your receipt screenshot for instant activation and access to your diet guide.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Assurance Note */}
            <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3 text-xs text-white/80">
              <ShieldCheck className="w-6 h-6 text-lime-400 shrink-0" />
              <span>
                <strong className="text-white font-bold">Registration Guarantee:</strong> Submitting your form records your data immediately and will never be blocked, whether you transfer now or finalize on WhatsApp.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
