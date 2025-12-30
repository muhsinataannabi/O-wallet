"use client";
import { useState } from "react";

export default function NotificationSetting() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSave = () => {
    // Call API to save notification settings
    alert("Notification settings updated successfully");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={() => setEmailNotifications((prev) => !prev)}
        />
        <label>Email Notifications</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={smsNotifications}
          onChange={() => setSmsNotifications((prev) => !prev)}
        />
        <label>SMS Notifications</label>
      </div>
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded-md">
        Save Settings
      </button>
    </div>
  );
}