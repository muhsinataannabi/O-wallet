"use client";
import { useState } from "react";
import { Lock } from "lucide-react";

export default function ResetPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!password.trim() || !confirmPassword.trim()) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    user.password = password;
    localStorage.setItem("user", JSON.stringify(user));

    alert("Password reset successfully");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-h-screen bg-gradient-primary-light flex items-center justify-center px-5 py-2 font-sans"
    >
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <h1 className="bg-gradient-primary-dark font-sans font-semibold text-2xl bg-clip-text text-center text-transparent mb-5">
          Create new password
        </h1>

        <div className="relative">
          <Lock className="absolute left-4 top-5 text-gray-400 w-4 h-4" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 border bg-gray-50 rounded-2xl focus:outline-none w-full pr-4 py-4 border-gray-200 focus:ring-1 focus:ring-primary-bright transition-all duration-300 placeholder-gray-400 pl-12"
            placeholder="Enter new password"
          />
          <label className="absolute -top-3 left-10 bg-white px-2 text-sm font-medium text-gray-600">
            Password:
          </label>
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-5 text-gray-400 w-4 h-4" />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-5 border bg-gray-50 rounded-2xl focus:outline-none w-full pr-4 py-4 border-gray-200 focus:ring-1 focus:ring-primary-bright transition-all duration-300 placeholder-gray-400 pl-12"
            placeholder="Confirm new password"
          />
          <label className="absolute -top-3 left-10 bg-white px-2 text-sm font-medium text-gray-600">
            Confirm password:
          </label>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-primary-dark rounded-2xl px-10 py-3 text-white shadow-lg hover:shadow-2xl font-semibold"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}