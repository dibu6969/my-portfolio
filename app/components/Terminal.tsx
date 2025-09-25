'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { email: string; linkedin?: string | null };

export default function Terminal({ email, linkedin }: Props) {
  const [lines, setLines] = useState<string[]>([
    'Welcome. Type `help` to see commands.',
  ]);
  const [input, setInput] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [lines]);

  function run(cmd: string) {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    switch (c) {
      case 'help':
        return [
          'commands: help, about, experience, skills, resume, contact, clear',
        ];
      case 'about':
        return ['Boston-based builder and student.'];
      case 'experience':
        return ['See timeline at /timeline'];
      case 'skills':
        return ['Skills loaded from your PDF'];
      case 'resume':
        return ['Opening /resume.pdf'];
      case 'contact':
        return [
          `email: ${email}`,
          linkedin ? `linkedin: ${linkedin}` : 'linkedin: not set',
        ];
      case 'clear':
        setLines([]);
        return [];
      default:
        return [`unknown command: ${c}`];
    }
  }

  function onEnter() {
    setLines((prev) => [...prev, `> ${input}`]);
    const out = run(input);
    if (out.includes('Opening /resume.pdf')) {
      window.open('/resume.pdf', '_blank');
    }
    if (out.length) setLines((prev) => [...prev, ...out]);
    setInput('');
  }

  return (
    <div className="mt-6 rounded-xl border bg-black text-white">
      <div className="px-4 py-2 border-b text-xs text-gray-400">emilio@site ~ $</div>
      <div ref={ref} className="px-4 py-3 h-64 overflow-auto space-y-1 font-mono text-sm">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
        <div className="flex items-center gap-2">
          <span>&gt;</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onEnter()}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}


