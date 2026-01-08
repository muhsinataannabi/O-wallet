"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Walletheader from "../components/dashboard/walletheader";
import Walletbalance from "../components/dashboard/walletbalance";
import Wallet from "../components/dashboard/walletCard";
import RecentTransaction from "../components/dashboard/recentTransaction";

import PinModal from "../components/auth/pinModal";
import ForgotPinModal from "../components/auth/forgotPinModal";

import {
  HeaderSkeleton,
  CardSkeleton,
  BalanceSkeleton,
  TransactionSkeleton,
} from "../components/ui/skeletons";

export default function Dashboard() {
  const router = useRouter();

  const [userName, setUserName] = useState<string | null>(null);
  const [pinMode, setPinMode] = useState<"create" | "verify" | null>(null);
  const [showForgot, setShowForgot] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    // ================= AUTH CHECK =================
    const auth = localStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      router.replace("/auth/login");
      return;
    }

    // ================= USER =================
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.replace("/auth/login");
      return;
    }

    const user = JSON.parse(storedUser);
    setUserName(user.username ?? "User");
    
    
    // ================= NOTIFICATIONS =================
     const notificationsKey = `notifications_${user.email}`;
    const storedNotifications = localStorage.getItem(notificationsKey);

     if (storedNotifications) {
    const notifications = JSON.parse(storedNotifications);
     const unreadCount = notifications.filter((n: any) => !n.read).length;
     setNotificationCount(unreadCount);
       } else {
      setNotificationCount(0);
   }

    // ================= PIN LOGIC (PER USER) =================
    const userPin = localStorage.getItem(`pin_${user.email}`);
    setPinMode(userPin ? "verify" : "create");

    // ================= FAKE LOADING =================
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen relative bg-gray-50">

      {/* ================= PIN MODAL (HIGHEST PRIORITY) ================= */}
      {pinMode && !showForgot && (
        <PinModal
          mode={pinMode}
          onSuccess={() => setPinMode(null)}
          onForgot={() => setShowForgot(true)}
        />
      )}

      {/* ================= FORGOT PIN ================= */}
      {showForgot && (
        <ForgotPinModal
          onVerified={() => {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) return;

            const user = JSON.parse(storedUser);
            localStorage.removeItem(`pin_${user.email}`);

            setShowForgot(false);
            setPinMode("create");
          }}
        />
      )}

      {/* ================= BLOCK DASHBOARD UNTIL PIN IS CLEARED ================= */}
      {!pinMode && !showForgot && (
        <>
          {loading ? (
            /* ======= SKELETON VIEW ======= */
            <div className="space-y-6 p-4 animate-pulse">
              <HeaderSkeleton />
              <BalanceSkeleton />
              <CardSkeleton />

              <div className="bg-white rounded-2xl p-4 shadow space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <TransactionSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : (
            /* ======= REAL CONTENT ======= */
            <>
              <Walletheader
                userName={userName ?? "User"}
                loading={!userName}
                notificationCount={notificationCount}
              />

              <Walletbalance />

              <Wallet />

              <RecentTransaction />
            </>
          )}
        </>
      )}
    </main>
  );
}