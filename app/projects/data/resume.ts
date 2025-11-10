// data/resume.ts
export type Experience = {
    company: string;
    role: string;
    start: string;
    end: string; // "Present" is ok
    bullets: string[];
  };
  
export type Project = {
    title: string;
    summary: string;
    href?: string;
    tags?: string[];
    status?: "Active" | "Completed" | "Live" | "In Progress";
  };
  
  export const EXPERIENCE: Experience[] = [
    { company: "Onda", role: "Founder & Product Lead", start: "Oct 2025", end: "Present",
      bullets: [
        "Launched a verified student ticket marketplace replacing fragmented WhatsApp groups",
        "Shipped MVP with React, Supabase RLS, and Stripe escrow for instant payouts",
        "Instrumented analytics, support playbooks, and compliance checkpoints from day one"
      ] },
    { company: "GWM Partners", role: "Wealth Management Intern", start: "May 2025", end: "Jun 2025",
      bullets: [
        "Analyzed Brazil-focused client portfolios to surface allocation and risk insights",
        "Built research briefs for strategy sessions with asset managers and specialists",
        "Tracked market catalysts, keeping advisors and clients aligned on cross-border moves"
      ] },
    { company: "Limitless Shoes", role: "Finance Manager", start: "Mar 2020", end: "Nov 2022",
      bullets: [
        "Led budgeting, forecasting, and profitability reviews for a consistent six-figure revenue brand",
        "Optimized inventory turns and pricing levers to grow margins and sell-through",
        "Scaled operations with dashboards that steered purchasing, marketing, and staffing"
      ] },
    { company: "Acapella", role: "Small Business Owner", start: "Jun 2020", end: "Aug 2020",
      bullets: [
        "Sold 300+ shirts via a curbside pop-up shop promoting a Mexican apparel startup",
        "Donated proceeds to families facing unemployment, blending social impact with profit"
      ] },
  ];
  
  export const PROJECTS: Project[] = [
    { title: "Onda",
      summary: "Student ticket marketplace that verifies users and consolidates buying, selling, chat, payments, and transfers in one place to replace fragmented WhatsApp groups.",
      tags: ["React", "Vite", "Supabase", "Stripe"],
      status: "Active"
    },
    { title: "Limitless Shoes",
      summary: "Sneaker resale analytics with trends.",
      tags: ["Next.js", "Charts"],
      status: "Completed"
    },
  ];
  
  export const SKILLS = [
    "Financial Analysis", "International Business", "Python", "Programming", "Data Analytics", 
    "Brazilian Jiu-Jitsu", "MMA", "Coding", "Entrepreneurship", "Leadership", "Problem Solving", "Strategic Planning"
  ];