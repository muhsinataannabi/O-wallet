"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

interface WalletHeaderProps {
  userName?: string;
  notificationCount?: number;
  loading?: boolean;
}

export default function Walletheader({
  userName = "User",
  notificationCount = 0,
  loading = false,
}: WalletHeaderProps) {
  return (
    <div className="bg-gradient-primary-dark w-full h-auto text-white">
      <header className="px-6 pt-6 pb-10">
        <div className="flex items-center justify-between">

          {/* LEFT: USER INFO */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <Link href="/dashboard/profile" className="block">
            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            </Link>

            {/* Name */}
            <div>
              <h1 className="text-sm font-semibold uppercase">
                {loading ? "Loading..." : `Hi, ${userName}`}
              </h1>
            </div>
          </div>

          {/* RIGHT: NOTIFICATIONS */}
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/notification"
              className="relative p-2 rounded-full hover:bg-white/10 transition"
            >
              <Bell className="w-6 h-6 text-white" />

              {/* Badge */}
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-bold flex items-center justify-center text-white bg-red-500 rounded-full">
                  {notificationCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
}