"use client";

import { useState } from "react";
import AdminHeader from "../../components/admin/adminHeader";
import AdminSidebar from "../../components/admin/adminSidebar";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const router = useRouter();
  
  const handleLogout = () => {
    router.push("/admin/auth/login")
  }
  
  const adminName = "Muhseenat";

  
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} 
        onLogout={handleLogout}
        adminName={adminName}
        />

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}