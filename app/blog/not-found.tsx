import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        404 - Post Not Found
      </h1>
      <p className="text-gray-400 mb-8">
        The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/blog"
        className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
      >
        Back to Blog
      </Link>
    </div>
  );
}
