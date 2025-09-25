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
    { company: "Limitless Shoes", role: "Founder", start: "2024", end: "Present",
      bullets: ["Built resale analytics dashboard", "Grew GMV to $XXk/mo"] },
    { company: "Triathlon Race Aggregator", role: "Builder", start: "2023", end: "2024",
      bullets: ["Scraped + normalized race data", "Next.js + Supabase stack"] },
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
    "TypeScript","Next.js","Tailwind CSS","Postgres","Python","Scraping","Product Design","Entrepreneurship",
  ];