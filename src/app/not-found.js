import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">404</h2>
        <p className="text-lg text-gray-700 mb-6">Could not find the requested resource.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
