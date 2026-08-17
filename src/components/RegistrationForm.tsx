import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Dumbbell,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SPECIALIZATIONS, BUSINESS_INFO, DEFAULT_GOOGLE_SHEET_URL } from '../data/fitnessData';
import { RegistrationFormData, FormValidationErrors } from '../types';

interface RegistrationFormProps {
  selectedActivities: string[];
  onToggleActivity: (title: string) => void;
  googleSheetUrl?: string;
  onFormSubmitSuccess: (data: RegistrationFormData) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedActivities,
  onToggleActivity,
  googleSheetUrl,
  onFormSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    homeAddress: '',
    preferredActivities: selectedActivities,
    whyPrefer: '',
    expectation: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // Synchronize when parent updates selectedActivities
  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      preferredActivities: selectedActivities,
    }));
  }, [selectedActivities]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name as on valid ID is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Valid Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.homeAddress.trim()) {
      newErrors.homeAddress = 'Home address is required';
    }
    if (!formData.preferredActivities || formData.preferredActivities.length === 0) {
      newErrors.preferredActivities = 'Please select at least one fitness activity';
    }
    if (!formData.whyPrefer.trim()) {
      newErrors.whyPrefer = 'Please tell us why you prefer these activities';
    }
    if (!formData.expectation.trim()) {
      newErrors.expectation = 'Please tell us what you expect to achieve';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.getElementById('register-form-container');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Submitting your registration...');

    // Save locally to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('ifeanyi_registrations') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('ifeanyi_registrations', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Google Sheet Submission fetch
    const targetUrl = (googleSheetUrl && googleSheetUrl.trim()) || DEFAULT_GOOGLE_SHEET_URL;
    if (targetUrl && targetUrl.startsWith('http')) {
      try {
        setSubmitStatus('Recording your registration in Google Sheet...');
        await fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.warn('Submission fetch error:', err);
      }
    }

    setIsSubmitting(false);
    setSubmitStatus('Registered successfully! Opening WhatsApp confirmation...');

    // Call parent success trigger
    onFormSubmitSuccess(formData);
  };

  return (
    <section id="register" className="py-20 relative bg-black border-t border-white/10">
      <div id="register-form-container" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-white/15 inline-flex items-center gap-1.5">
            <Dumbbell className="w-3.5 h-3.5 text-lime-400" />
            <span>Secure Your 5-Month Spot</span>
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            RESERVE YOUR <span className="text-lime-400">SPOT NOW</span>
          </h2>

          <p className="text-white/80 text-sm leading-relaxed font-medium">
            Fill out the official registration form below. Once submitted, your registration is recorded securely and you will be directed straight to Coach Ifeanyi on WhatsApp to confirm your spot.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-zinc-900/90 rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white uppercase tracking-wider block">
                  Full Name <span className="text-lime-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Chidi Emmanuel Okafor"
                  className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                  }`}
                />
                <p className="text-[11px] text-white/50">Must match valid ID/document name</p>
                {errors.fullName && (
                  <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white uppercase tracking-wider block">
                  Email Address <span className="text-lime-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. name@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white uppercase tracking-wider block">
                  Phone Number <span className="text-lime-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 801 234 5678"
                  className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Home Address */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white uppercase tracking-wider block">
                  Home / Residential Address <span className="text-lime-400">*</span>
                </label>
                <input
                  type="text"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleChange}
                  placeholder="e.g. Lekki Phase 1, Lagos State"
                  className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.homeAddress
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                  }`}
                />
                {errors.homeAddress && (
                  <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.homeAddress}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Preferred Fitness Activities Multi-Selection */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs font-black text-white uppercase tracking-wider block">
                  Preferred Fitness Activities <span className="text-lime-400">* (Select as many as you want)</span>
                </label>
                
                {/* Select All & Clear All Quick Helpers */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[11px] font-bold text-lime-400 bg-zinc-800 border border-lime-400/30 px-2.5 py-0.5 rounded-full">
                    {formData.preferredActivities.length} of {SPECIALIZATIONS.length} Selected
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const allTitles = SPECIALIZATIONS.map((s) => s.title);
                      setFormData((prev) => ({ ...prev, preferredActivities: allTitles }));
                      allTitles.forEach((t) => {
                        if (!selectedActivities.includes(t)) onToggleActivity(t);
                      });
                    }}
                    className="text-[11px] font-bold text-white/70 hover:text-lime-400 underline transition-colors"
                  >
                    Select All 8
                  </button>
                  <span className="text-white/30">•</span>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, preferredActivities: [] }));
                      selectedActivities.forEach((t) => onToggleActivity(t));
                    }}
                    className="text-[11px] font-bold text-white/50 hover:text-red-400 underline transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {SPECIALIZATIONS.map((spec) => {
                  const isChecked = formData.preferredActivities.includes(spec.title);
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => {
                        const newActivities = isChecked
                          ? formData.preferredActivities.filter((item) => item !== spec.title)
                          : [...formData.preferredActivities, spec.title];
                        setFormData((prev) => ({ ...prev, preferredActivities: newActivities }));
                        onToggleActivity(spec.title);
                        if (errors.preferredActivities) {
                          setErrors((prev) => ({ ...prev, preferredActivities: undefined }));
                        }
                      }}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between text-left transition-all ${
                        isChecked
                          ? 'bg-zinc-950 border-lime-400 text-lime-400 font-black shadow-md shadow-lime-400/10'
                          : 'bg-black border-white/15 text-white/75 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-2 uppercase font-bold">{spec.title}</span>
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-lime-400 border-lime-400 text-black'
                            : 'border-white/30 bg-zinc-900'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {errors.preferredActivities && (
                <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.preferredActivities}</span>
                </p>
              )}
            </div>

            {/* Textarea: Why do you prefer these activities? */}
            <div className="space-y-2">
              <label className="text-xs font-black text-white uppercase tracking-wider block">
                Why do you prefer these activities? <span className="text-lime-400">*</span>
              </label>
              <textarea
                name="whyPrefer"
                rows={3}
                value={formData.whyPrefer}
                onChange={handleChange}
                placeholder="Explain why you are interested in these specific fitness activities (e.g., past enjoyment, ease on joints, specific muscle targeting...)"
                className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                  errors.whyPrefer
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                }`}
              />
              {errors.whyPrefer && (
                <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.whyPrefer}</span>
                </p>
              )}
            </div>

            {/* Textarea: What do you expect to achieve? */}
            <div className="space-y-2">
              <label className="text-xs font-black text-white uppercase tracking-wider block">
                What do you expect to achieve after the 5-month training? <span className="text-lime-400">*</span>
              </label>
              <textarea
                name="expectation"
                rows={3}
                value={formData.expectation}
                onChange={handleChange}
                placeholder="Describe your 5-month goal (e.g., lose 10kg fat, tone stomach, eliminate back pain, gain muscle strength, improve stamina...)"
                className={`w-full px-4 py-3 rounded-xl bg-black border text-white text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                  errors.expectation
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-white/15 focus:border-lime-400 focus:ring-lime-400/30'
                }`}
              />
              {errors.expectation && (
                <p className="text-xs text-red-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.expectation}</span>
                </p>
              )}
            </div>

            {/* Suggested Tuition Transfer Box */}
            <div className="p-4 rounded-2xl bg-black border border-lime-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Tuition Transfer Details (Suggested)
                </span>
                <p className="text-white/80 font-medium">
                  <strong>PalmPay:</strong> <span className="font-mono text-lime-300 font-bold">9069710687</span> (Chukwudebe Ifeanyi) • <strong>₦50,000</strong>
                </p>
              </div>
              <span className="text-[11px] text-white/50 font-medium shrink-0">
                *Proof can be sent via WhatsApp after submission.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 px-6 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-lime-400/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processing Registration...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Registration & Chat on WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-white/50 font-medium">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Your information is encrypted and directly transmitted to Coach Ifeanyi.</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
