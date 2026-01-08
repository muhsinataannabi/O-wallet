import Cards from "../ui/cards";
import { Wallet, Clock, CreditCard, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const featuresLists = [
    {
      icon: Wallet,
      title: "All-in-One Wallet",
      description: "use all your cards in one secure web.",
    },
    {
      icon: Clock,
      title: "Instant Use",
      description: "Use your cards to make payments in seconds, anytime.",
    },
    {
      icon: CreditCard,
      title: "Powerful cards",
      description: "Naira & Dollar cards for online payments.",
    },
    {
      icon: Smartphone,
      title: "Mobile first",
      description: "Built for speed, simplicity, and accessibility.",
    },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
    
    className="w-full py-12 px-6 bg-gray-50 scroll-mt-24" id="features">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
     Our Features
      </h1>

      {/* Responsive Tailwind grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {featuresLists.map((feature, index) => (
          <Cards
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </motion.div>
  );
}

