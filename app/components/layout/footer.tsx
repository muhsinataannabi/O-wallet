import { Home, CreditCard, History, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-primary-dark px-4 py-2">
      <div className="flex items-center justify-between">
        
        <div className="flex flex-col items-center">
          <Home className="w-6 h-6 text-white" />
          <p className="text-sm text-white font-medium">Home</p>
        </div>

        <div className="w-px h-10 bg-primary-bright"></div>

        <div className="flex flex-col items-center">
          <CreditCard className="w-6 h-6 text-white" />
          <p className="text-sm text-white font-medium">Card</p>
        </div>

        <div className="w-px h-10 bg-primary-bright"></div>

        <div className="flex flex-col items-center">
          <History className="w-6 h-6 text-white" />
          <p className="text-sm text-white font-medium">History</p>
        </div>

        <div className="w-px h-10 bg-primary-bright"></div>

        <div className="flex flex-col items-center">
          <User className="w-6 h-6 text-white" />
          <p className="text-sm text-white font-medium">Me</p>
        </div>

      </div>
    </footer>
  );
}