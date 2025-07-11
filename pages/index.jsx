import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to CareerNest</h1>
      <p className="mb-6">Create your professional CV or Bio-data easily</p>
      <Link href="/create">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Start Building</button>
      </Link>
    </main>
  );
}
