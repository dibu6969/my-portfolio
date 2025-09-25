'use client';

import { useState } from 'react';

export default function ReplPage() {
  const [code, setCode] = useState<string>(`// Type JS here and hit Run\nconst msg = 'Hello, Emilio';\nmsg.toUpperCase();`);
  const [output, setOutput] = useState<string>('');

  function run() {
    try {
      const fn = new Function(code);
      const result = fn();
      setOutput(String(result));
    } catch (e: unknown) {
      const error = e as Error;
      setOutput('Error: ' + error.message);
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-4">REPL Projects</h1>
      <div className="grid gap-4">
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="min-h-48 rounded-lg border p-3 font-mono" />
        <div className="flex gap-2">
          <button onClick={run} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Run</button>
          <button onClick={() => setOutput('')} className="px-4 py-2 rounded-lg border">Clear</button>
        </div>
        <pre className="rounded-lg border p-3 bg-black text-white min-h-20">{output}</pre>
      </div>
    </main>
  );
}


