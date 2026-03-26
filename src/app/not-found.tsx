export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-slate-500 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block gradient-bg text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        Back to Home
      </a>
    </div>
  );
}
