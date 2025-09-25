import fs from "fs/promises";
import path from "path";

export type ParsedResume = {
  rawText: string;
  sections: {
    education?: string[];
    experience?: string[];
    skills?: string[];
    summary?: string;
  };
  inferred: {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    links?: { [k: string]: string };
  };
};

function extractLinesBetween(text: string, start: RegExp, end?: RegExp) {
  const lines = text.split(/\r?\n/);
  const startIdx = lines.findIndex((l) => start.test(l));
  if (startIdx === -1) return [] as string[];
  const rest = lines.slice(startIdx + 1);
  let endIdx = rest.length;
  if (end) {
    const found = rest.findIndex((l) => end.test(l));
    endIdx = found === -1 ? rest.length : found;
  }
  return rest.slice(0, endIdx).map((l) => l.trim()).filter(Boolean);
}

function inferContact(text: string) {
  const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
  const phoneMatch = text.match(/\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/);
  const linkedinMatch = text.match(/https?:\/\/www\.linkedin\.com\/in\/[\w-]+/i);
  const githubMatch = text.match(/https?:\/\/(?:www\.)?github\.com\/[\w-]+/i);
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const name = lines[0] && lines[0].length < 60 ? lines[0] : undefined;
  return {
    name,
    email: emailMatch?.[0],
    phone: phoneMatch?.[0],
    links: {
      ...(linkedinMatch ? { linkedin: linkedinMatch[0] } : {}),
      ...(githubMatch ? { github: githubMatch[0] } : {}),
    },
  } as ParsedResume["inferred"];
}

export async function parseResumeFromPublic(filename = "resume.pdf"): Promise<ParsedResume | null> {
  try {
    const { default: pdf } = await import("pdf-parse");
    const pdfPath = path.join(process.cwd(), "public", filename);
    const buf = await fs.readFile(pdfPath);
    const data = await pdf(buf);
    const text = data.text || "";

    const sections = {
      education: extractLinesBetween(text, /EDUCATION/i, /EXPERIENCE|SKILLS|PROJECTS|AWARDS/i),
      experience: extractLinesBetween(text, /EXPERIENCE|WORK EXPERIENCE/i, /SKILLS|EDUCATION|PROJECTS|AWARDS/i),
      skills: extractLinesBetween(text, /SKILLS/i, /EXPERIENCE|EDUCATION|PROJECTS|AWARDS/i),
      summary: undefined,
    } as ParsedResume["sections"];

    const inferred = inferContact(text);

    return { rawText: text, sections, inferred };
  } catch (err) {
    return null;
  }
}

export async function ensureResume(): Promise<ParsedResume> {
  const parsed = await parseResumeFromPublic();
  if (parsed) return parsed;
  return {
    rawText: "",
    sections: {
      education: [],
      experience: [],
      skills: [],
    },
    inferred: {},
  };
}


