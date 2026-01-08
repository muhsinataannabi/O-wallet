import {
  UserPlus,
  WalletCards,
  LockKeyhole,
  ArrowDownToLine,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";


export default function HowToUse() {
  const howToUseList = [
    {
      icon: UserPlus,
      text: "Create an Account",
    },
    {
      icon: WalletCards,
      text: "Get Two Virtual Cards",
    },
    {
      icon: LockKeyhole,
      text: "Set Up Your PIN",
    },
    {
      icon: ArrowDownToLine,
      text: "Fund Your Wallet",
    },
    {
      icon: ShoppingCart,
      text: "Start Online Payments",
    },
  ];

  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
    
    className="px-6 py-16 bg-white scroll-mt-24" id="howToUse">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        How It Works
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
        {howToUseList.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className="flex flex-col items-center text-center bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition"
            >
                <Icon className="w-6 h-6 text-blue-600" />

              <p className="text-sm font-medium text-gray-700">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}