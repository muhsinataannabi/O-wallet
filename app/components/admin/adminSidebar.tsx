"use client";

import { Home, Users, CreditCard, Settings, X } from "lucide-react";
import Link from "next/link";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  return (
    <>
      {/* BACKDROP (mobile only) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-primary-bright">
            O-wallet
          </h2>

          {/* Close button (mobile only) */}
          <button onClick={onClose} className="md:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="p-4 space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-primary-bright"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </Link>

          <Link
            href="/admin/dashboard/users"
            className="flex items-center gap-3 text-gray-700 hover:text-primary-bright"
          >
            <Users className="w-5 h-5" />
            Users
          </Link>

          <Link
            href="/admin/dashboard/cards"
            className="flex items-center gap-3 text-gray-700 hover:text-primary-bright"
          >
            <CreditCard className="w-5 h-5" />
            Cards
          </Link>

          <Link
            href="/admin/dashboard/setting"
            className="flex items-center gap-3 text-gray-700 hover:text-primary-bright"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}