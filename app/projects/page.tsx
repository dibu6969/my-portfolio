import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Site</h1>
      <p className="mb-4">This is your homepage. From here you can explore your projects.</p>

      <Link href="/projects" className="px-4 py-2 rounded-xl border">
        Projects
      </Link>
    </main>
  );
}