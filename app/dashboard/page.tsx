import Walletheader from "../components/dashboard/walletheader";
import Walletbalance from "../components/dashboard/walletbalance";
import Wallet from "../components/dashboard/walletCard";
import RecentTransaction from "../components/dashboard/recentTransaction";
import Footer from "../components/layout/footer";

export default function Dashboard(){
  return(
    <main className="w-full min-h-screen">
      <Walletheader />
      <Walletbalance />
      <Wallet />
      <RecentTransaction />
      <Footer />
    </main>
    
    );
}

