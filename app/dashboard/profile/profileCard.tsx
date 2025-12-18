 import { Camera } from "lucide-react";
 type ProfileCardProps = {
  fullname: string;
};

export default function ProfileCard({ fullname = "" }: ProfileCardProps) {
  // Generate initials from name
  const initials = fullname
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          Profile Details
        </h1>
        <a href="/dashboard" className="text-blue-600 text-sm hover:underline">
          Go Back
        </a>
      </div>
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
      
      {/* Avatar */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-primary-dark flex items-center justify-center text-white text-3xl font-bold">
          {initials}
        </div>

        {/* Camera button */}
        <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow">
          <Camera className="w-4 h-4 text-blue-600" />
        </button>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {fullname}
      </h2>
    </div>
    </div>
  );
}