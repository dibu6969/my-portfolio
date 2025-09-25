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
  };
  
  export const EXPERIENCE: Experience[] = [
    { company: "GWM Partners", role: "Wealth Management Intern", start: "May 2025", end: "Jun 2025",
      bullets: [
        "Supported investment professionals on Brazil focused mandates by analyzing client portfolios, preparing research briefs, and participating in strategy sessions with asset managers and portfolio specialists",
        "Attended client meetings and industry events to track market dynamics and evaluate cross border investment opportunities, strengthening relationship management, and communication skills"
      ] },
    { company: "Limitless Shoes", role: "Finance Manager", start: "Mar 2020", end: "Nov 2022",
      bullets: [
        "Oversaw budgeting, forecasting, and profit analysis for a six-figure revenue sneaker and apparel business, implementing cost control measures that reduced expenses",
        "Streamlined inventory strategies and optimized pricing models maximizing margins and supporting a sustained growth rate",
        "Scaled operations through data driven decision making and financial planning"
      ] },
    { company: "Acapella", role: "Small Business Owner", start: "Jun 2020", end: "Aug 2020",
      bullets: [
        "Launched a curbside pop-up shop, selling 300+ t-shirts from an emerging Mexican apparel startup I introduced to the U.S. market",
        "Donated part of my proceeds to support unemployed community members, combining social impact with commercial success"
      ] },
  ];
  
  export const PROJECTS: Project[] = [
    { title: "Triathlon Race Aggregator",
      summary: "Find and compare triathlon races.",
      href: "#", tags: ["Next.js", "Supabase"] },
    { title: "Limitless Shoes",
      summary: "Sneaker resale analytics with trends.",
      href: "#", tags: ["Next.js", "Charts"] },
  ];
  
  export const SKILLS = [
    "Financial Analysis", "International Business", "Python", "Programming", "Data Analytics", 
    "Brazilian Jiu-Jitsu", "MMA", "Coding", "Entrepreneurship", "Leadership", "Problem Solving", "Strategic Planning"
  ];