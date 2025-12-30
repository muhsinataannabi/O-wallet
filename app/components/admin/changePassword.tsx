"use client";
import { useState } from "react";
import { Lock } from "lucide-react";

export default function ChangePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (newPass !== confirm) {
      setError("Passwords do not match");
      return;
    }

    alert("Password updated (connect backend later)");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Change Password
      </h2>

      <input
        type="password"
        placeholder="Current password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="w-full mb-3 px-4 py-3 border rounded-lg"
      />

      <input
        type="password"
        placeholder="New password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        className="w-full mb-3 px-4 py-3 border rounded-lg"
      />

      <input
        type="password"
        placeholder="Confirm new password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full mb-3 px-4 py-3 border rounded-lg"
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        Update Password
      </button>
    </div>
  );
}