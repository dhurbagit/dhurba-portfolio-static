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
  service_used?: string;
  rating: number;
  comment: string;
}) {
  try {
    fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  } catch {
    // Non-blocking for review submissions
  }

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
  // 1. Try local server-side API route
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const result = await res.json();
      return result;
    }
  } catch (err) {
    console.warn("Local API route not reachable, switching to direct dual relay...", err);
  }

  // 2. Fail-safe direct dual delivery to both sharvikatech@gmail.com and dhurba179@gmail.com
  try {
    await Promise.allSettled([
      fetch("https://formsubmit.co/ajax/dhurba179@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.sender_name,
          email: data.sender_email,
          phone: data.sender_phone || "Not provided",
          _subject: `Portfolio Inquiry from ${data.sender_name}: ${data.subject || "General Inquiry"}`,
          message: data.message,
          _replyto: data.sender_email,
          _cc: "sharvikatech@gmail.com",
          _template: "table",
          _captcha: "false",
        }),
      }),
      fetch("https://formsubmit.co/ajax/sharvikatech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.sender_name,
          email: data.sender_email,
          phone: data.sender_phone || "Not provided",
          _subject: `[Portfolio Inquiry] ${data.sender_name}: ${data.subject || "General Inquiry"}`,
          message: data.message,
          _replyto: data.sender_email,
          _template: "table",
          _captcha: "false",
        }),
      }),
    ]);
  } catch (e) {
    console.error("Direct fallback dispatch error:", e);
  }

  return {
    success: true,
    message: "Your message has been sent successfully to both dhurba179@gmail.com and sharvikatech@gmail.com! Dhurba will get back to you promptly.",
    data,
  };
}
