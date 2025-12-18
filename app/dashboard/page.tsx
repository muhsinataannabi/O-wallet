"use client";
import { useState, useEffect } from "react";
import Walletheader from "../components/dashboard/walletheader";
import Walletbalance from "../components/dashboard/walletbalance";
import Wallet from "../components/dashboard/walletCard";
import RecentTransaction from "../components/dashboard/recentTransaction";
export default function Dashboard(){
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.username); // or user.username
    }
  }, []);

  return(
    <main className="min-h-screen">
       <Walletheader
        userName={userName ?? "User"}
        loading={!userName}
        notificationCount={0}
      />
      <Walletbalance />
      <Wallet />
      <RecentTransaction />
    </main>
    
    );
}

