import { portfolioData, ProjectCaseStudy } from "./portfolioData";
import { cvData } from "./cvData";

/**
 * 100% Static Portfolio Data Layer (No CMS / No External Network Roundtrip)
 * Returns structured static mock/production data instantaneously.
 */

export async function getPortfolioBootstrap() {
  return portfolioData;
}

export async function getGlobalSettings() {
  return portfolioData.settings;
}

export async function getHeroProfile() {
  return portfolioData.profile;
}

export async function getSkills() {
  return portfolioData.skills;
}

export async function getWorkExperience() {
  return portfolioData.work_experience;
}

export async function getFreelanceSuites() {
  return portfolioData.freelance;
}

export async function getDesignExperience() {
  return portfolioData.design;
}

export async function getEducation() {
  return portfolioData.education;
}

export async function getProjects(featuredOnly = false): Promise<ProjectCaseStudy[]> {
  if (featuredOnly) {
    return portfolioData.projects.filter((p) => p.is_featured);
  }
  return portfolioData.projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectCaseStudy | null> {
  const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const match = portfolioData.projects.find(
    (p) =>
      p.slug === slug ||
      normalize(p.title) === slug ||
      p.title.toLowerCase().includes(slug.replace(/-/g, " "))
  );
  return match || null;
}

export async function getServices() {
  return portfolioData.services;
}

export async function getPhilosophies() {
  return portfolioData.philosophies;
}

export async function getReviews() {
  return portfolioData.reviews;
}

export async function submitReview(data: {
  name: string;
  role?: string;
  company?: string;
  service_used: string;
  rating: number;
  comment: string;
}) {
  return {
    success: true,
    message: "Thank you for your feedback! Your review has been recorded.",
    data: {
      id: `rev-${Date.now()}`,
      reviewer_name: data.name,
      reviewer_role: data.role || "Client",
      company_or_context: data.company || "Project Review",
      service_used: data.service_used,
      rating: data.rating,
      comment: data.comment,
      display_date: "Just Now",
      is_verified: true,
      likes_count: 1,
    },
  };
}

export async function likeReview(id: number | string) {
  return {
    success: true,
    message: "Feedback marked as helpful.",
    id,
  };
}

export async function submitContact(data: {
  sender_name: string;
  sender_email: string;
  sender_phone?: string;
  subject?: string;
  message: string;
}) {
  return {
    success: true,
    message: "Your message has been received successfully! Dhurba Dhakal will get back to you promptly.",
    data,
  };
}
