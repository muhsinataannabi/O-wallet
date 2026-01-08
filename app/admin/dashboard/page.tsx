"use client";
import { dashboardStats, recentTransactions } from "./data/dashboard";
import StatsCard from "../../components/admin/statCard";
import RecentTransactions from "../../components/admin/recentTransactions";
import { adminTransactions } from "../../components/admin/data/adminTran";

export default function AdminDashboardPage() {
 const recentTransactions = [...adminTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5); // 👈 ONLY 5 RECENT

  return (
    <main className="min-h-screen bg-gray-100 px-5 py-3">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {dashboardStats.map((dashboardStat) => (
        
        <StatsCard
        key={dashboardStat.id}
        title={dashboardStat.title}
        value={dashboardStat.value}
        
        />
        ))}
        
      </div>
      
      <RecentTransactions
      transactions={recentTransactions}
      />
      
      
    </main>
  );
}