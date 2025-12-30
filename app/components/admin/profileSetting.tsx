"use client";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function ProfileSetting() {
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      setEmail(JSON.parse(admin).email);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "admin",
      JSON.stringify({ email })
    );
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Profile Settings
      </h2>

      <label className="text-sm text-gray-600">Admin Email</label>

      <div className="relative mt-1">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="email"
          value={email}
          disabled={!editing}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg 
            ${editing ? "bg-white" : "bg-gray-100"}
            focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>

      <button
        onClick={editing ? handleSave : () => setEditing(true)}
        className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
      >
        {editing ? "Save Changes" : "Edit Email"}
      </button>
    </div>
  );
}