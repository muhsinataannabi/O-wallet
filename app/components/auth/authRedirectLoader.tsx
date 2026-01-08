export default function AuthRedirectLoader(){
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary-bright/30 border-t-primary-bright rounded-full animate-spin mb-4" />
      <p className="text-gray-600 text-sm">Securing your account...</p>
    </div>
  );
}