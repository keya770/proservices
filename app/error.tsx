"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h1>
        <p className="text-slate-600 mb-6">{error.message || "An unexpected error occurred"}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[var(--color-green)] text-white rounded-lg hover:bg-[var(--color-green-light)] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
