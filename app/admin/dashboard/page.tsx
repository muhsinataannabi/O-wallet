"use client";
import { dashboardStats, recentTransactions } from "./data/dashboard";
import StatsCard from "../../components/admin/statCard";
import RecentTransactions from "../../components/admin/recentTransactions";

export default function AdminDashboardPage() {
 
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