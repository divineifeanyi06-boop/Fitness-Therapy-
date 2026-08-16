export interface Specialization {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  achievement: string;
  avatarUrl?: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  homeAddress: string;
  preferredActivities: string[];
  whyPrefer: string;
  expectation: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  homeAddress?: string;
  preferredActivities?: string;
  whyPrefer?: string;
  expectation?: string;
}

export interface ProgramFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface GoogleSheetsConfig {
  endpointUrl: string;
  enabled: boolean;
}
