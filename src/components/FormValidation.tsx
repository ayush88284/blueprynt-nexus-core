import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Brand Enquiry Schema
export const brandEnquirySchema = z.object({
  // Company Info
  companyName: z.string().min(2, "Company name is required"),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  industry: z.string().min(1, "Please select an industry"),
  companySize: z.string().min(1, "Please select company size"),
  
  // Contact Info
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Position is required"),
  
  // Project Details
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  
  // Challenges & Goals
  challenges: z.string().min(10, "Please describe your challenges (at least 10 characters)"),
  goals: z.string().min(10, "Please describe your goals (at least 10 characters)"),
  currentMarketing: z.string().min(1, "Please describe your current marketing"),
  
  // Additional Info
  additionalInfo: z.string().optional(),
  hearAboutUs: z.string().min(1, "Please let us know how you heard about us"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BrandEnquiryFormData = z.infer<typeof brandEnquirySchema>;