import { ensureResume } from "@/lib/parseResume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hashFrom(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return ("0000000" + h.toString(16)).slice(-7);
}

export default async function TimelinePage() {
  const resume = await ensureResume();
  const exp = resume.sections.experience || [];
  const edu = resume.sections.education || [];
  const commits = [...exp, ...edu].slice(0, 24).map((line) => ({
    hash: hashFrom(line),
    message: line,
  }));

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-6">Commit Timeline</h1>
      <ol className="space-y-4">
        {commits.map((c) => (
          <li key={c.hash} className="rounded-lg border p-4 bg-background/60">
            <div className="text-xs text-blue-400">commit {c.hash}</div>
            <pre className="mt-2 text-sm whitespace-pre-wrap">{c.message}</pre>
          </li>
        ))}
      </ol>
    </main>
  );
}


