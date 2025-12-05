"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";


export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (email.trim() === "") {
      setError("This field is required");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No registered user found");
      return;
    }

    const savedEmail = savedUser.email;

    if (savedEmail === email) {
      alert("Reset link has been sent to your email");
      router.push("/auth/otp")
    } else {
      setError("No account found with this email");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-h-screen bg-gradient-primary-light flex items-center justify-center px-5 py-2 font-sans"
    >
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <h1 className="bg-gradient-primary-dark font-sans font-semibold text-2xl bg-clip-text text-center text-transparent mb-5">
          Enter your email address
        </h1>
        <div className="space-y-6">
        <div className="relative">
          <Mail 
          className="absolute left-4 top-5 text-gray-400 w-4 h-4"
          
          />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border bg-gray-50 rounded-2xl focus:outline-none w-full pr-4 py-4 border-gray-200 focus:ring-1 focus:ring-primary-bright transition-all duration-300 placeholder-gray-400 pl-12"
          placeholder="Enter your registered email"
        />
      </div>
      </div>
        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-primary-dark rounded-2xl px-10 py-3 text-white shadow-lg hover:shadow-2xl font-semibold"
        >
          Send OTP
        </button>
      </div>
    </form>
  );
}