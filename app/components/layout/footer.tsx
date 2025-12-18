import { Home, CreditCard, History, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-primary-dark px-4 py-2">
      <div className="flex items-center justify-between">
        
        <a href="/dashboard">
        <div className="flex flex-col items-center group cursor-pointer">
          <Home className="w-6 h-6 text-white group-hover:text-blue-200" />
          <p className="text-sm text-white font-medium group-hover:text-blue-200">Home</p>
        </div>
        </a>
        <div className="w-px h-10 bg-primary-bright"></div>
        <a href="/dashboard/cards">
        <div className="flex flex-col items-center group cursor-pointer">
          <CreditCard className="text-white w-6 h-6 group-hover:text-blue-200"/>
          <p className="text-sm text-white font-medium group-hover:text-blue-200">Cards</p>
        </div>
        </a>

        <div className="w-px h-10 bg-primary-bright"></div>
        
        <a href="/dashboard/history">
        <div className="flex flex-col items-center group cursor-pointer">
          <History className="w-6 h-6 text-white group group-hover:text-blue-200" />
          <p className="text-sm text-white font-medium group-hover:text-blue-200">History</p>
        </div>
        </a>
        <div className="w-px h-10 bg-primary-bright"></div>
         <a href="/dashboard/profile">
        <div className="flex flex-col items-center group cursor-pointer">
          <User className="w-6 h-6 text-white group-hover:text-blue-200" />
          <p className="text-sm text-white font-medium group-hover:text-blue-200">Profile</p>
        </div>
        </a>
      </div>
    </footer>
  );
}