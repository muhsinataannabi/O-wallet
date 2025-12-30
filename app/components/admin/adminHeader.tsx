import { Bell, Menu } from "lucide-react";

type AdminHeaderProps = {
  onMenuClick: () => void;
  adminName?: string; 
  onLogout: () => void;
};

export default function AdminHeader({ onMenuClick, adminName = "Admin", onLogout }: AdminHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Menu button (mobile only) */}
        <button onClick={onMenuClick} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-lg font-semibold">Hi, {adminName}</h1>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600" />
        <button
        onClick={onLogout}
        className="bg-primary-bright text-white px-4 py-2 rounded-lg text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}