  "use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // TEMP admin credentials (before backend)
  const adminEmail = "admin@owallet.com";
  const adminPassword = "admin123";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (email === adminEmail && password === adminPassword) {
  localStorage.setItem(
    "admin",
    JSON.stringify({
      email,
    })
  );
  router.push("/admin/dashboard");
  }else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6"
      >
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Admin Login
        </h1>

        {/* EMAIL */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}