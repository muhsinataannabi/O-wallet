"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../../components/ui/loader";

type Notification = {
  id: number;
  title: string;
  message: string;
  read: boolean;
};

export default function NotificationPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      router.replace("/auth/login");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.replace("/auth/login");
      return;
    }

    const user = JSON.parse(storedUser);
    const key = `notifications_${user.email}`;

    const storedNotifications = localStorage.getItem(key);

    if (storedNotifications) {
      const parsed: Notification[] = JSON.parse(storedNotifications);

      // 👇 mark all as read
      const updated = parsed.map((n) => ({ ...n, read: true }));

      localStorage.setItem(key, JSON.stringify(updated));
      setNotifications(updated); // IMPORTANT: update state with read=true
    } else {
      setNotifications([]);
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-xl font-semibold mb-4">Notifications</h1>

      {notifications.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No notifications yet
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-xl shadow bg-white ${
                !n.read ? "border-l-4 border-primary-bright" : ""
              }`}
            >
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm text-gray-600">{n.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}