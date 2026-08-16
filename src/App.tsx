import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specializations } from './components/Specializations';
import { ProgramDetails } from './components/ProgramDetails';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { SuccessModal } from './components/SuccessModal';
import { Footer } from './components/Footer';
import { RegistrationFormData } from './types';
import { DEFAULT_GOOGLE_SHEET_URL } from './data/fitnessData';

export default function App() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([
    'Strength Training',
    'Weight Loss / Fat Burn Programs',
  ]);

  const [googleSheetUrl] = useState<string>(() => {
    localStorage.setItem('ifeanyi_sheet_url', DEFAULT_GOOGLE_SHEET_URL);
    return DEFAULT_GOOGLE_SHEET_URL;
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  const handleToggleActivity = (title: string) => {
    setSelectedActivities((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleFormSubmitSuccess = (data: RegistrationFormData) => {
    setSubmittedData(data);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-lime-400 selection:text-black">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Why Choose Us Section */}
        <About />

        {/* 3. Specializations Section (8 Activities) */}
        <Specializations
          selectedActivities={selectedActivities}
          onToggleActivity={handleToggleActivity}
        />

        {/* 4. Program Details Section (5 Months, ₦50,000) */}
        <ProgramDetails />

        {/* 5. Testimonials Section */}
        <Testimonials />

        {/* 6. Registration Form Section ("Reserve Your Spot") */}
        <RegistrationForm
          selectedActivities={selectedActivities}
          onToggleActivity={handleToggleActivity}
          googleSheetUrl={googleSheetUrl}
          onFormSubmitSuccess={handleFormSubmitSuccess}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Success Redirect Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        formData={submittedData}
      />
    </div>
  );
}
