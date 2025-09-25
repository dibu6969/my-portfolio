'use client';

import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b bg-background/70">
      <nav className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold">ED</a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600" />
    </header>
  );
}


