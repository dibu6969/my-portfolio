export type Profile = {
  name: string;
  location?: string;
  email?: string;
  phone?: string;
  summary?: string;
  links?: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

// Override values here to personalize the site regardless of PDF parsing
export const PROFILE: Profile = {
  name: "Emilio Dibildox",
  location: "Boston, MA",
  email: "dibildox.e@northeastern.edu",
  phone: "305-699-9713",
  summary:
    "Northeastern student focused on finance and international business; builder and entrepreneur with interests in BJJ, AI, and product.",
  links: {
    linkedin: "https://www.linkedin.com/in/emiliodibildox",
  },
};


