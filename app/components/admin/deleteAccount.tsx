"use client";
import { useState } from "react";

export default function DeleteAccount() {
  const [confirm, setConfirm] = useState(false);

  const handleDelete = () => {
    if (confirm) {
      // Call API to delete account
      alert("Account deleted successfully");
    } else {
      alert("Please confirm the deletion.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">Delete Account</h3>
      <div>
        <label className="text-sm font-medium">Type 'DELETE' to confirm</label>
        <input
          type="text"
          value={confirm ? "DELETE" : ""}
          onChange={(e) => setConfirm(e.target.value === "DELETE")}
          className="mt-2 p-2 rounded-md border"
        />
      </div>
      <button onClick={handleDelete} className="mt-4 bg-red-500 text-white p-2 rounded-md">
        Delete Account
      </button>
    </div>
  );
}