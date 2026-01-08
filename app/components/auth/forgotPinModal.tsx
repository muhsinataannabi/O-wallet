"use client";
import { useState } from "react";

type ForgotPinProps = {
  onVerified: () => void;
};

export default function ForgotPinModal({ onVerified }: ForgotPinProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleVerify() {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    const user = JSON.parse(storedUser);

    if (password === user.password) {
      onVerified();
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          Verify your identity
        </h2>

        <input
          type="password"
          placeholder="Enter account password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-3"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <button
          onClick={handleVerify}
          className="w-full py-3 rounded-xl bg-gradient-primary-dark text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}