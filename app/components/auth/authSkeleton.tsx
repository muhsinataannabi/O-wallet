export function AuthSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-6 animate-pulse">
        {/* Logo */}
        <div className="h-8 w-32 bg-gray-200 rounded mx-auto" />

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-200 rounded mx-auto" />

        {/* Inputs */}
        <div className="space-y-4">
          <div className="h-12 w-full bg-gray-200 rounded-xl" />
          <div className="h-12 w-full bg-gray-200 rounded-xl" />
        </div>

        {/* Button */}
        <div className="h-12 w-full bg-gray-300 rounded-xl" />

        {/* Footer text */}
        <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto" />
      </div>
    </div>
  );
}