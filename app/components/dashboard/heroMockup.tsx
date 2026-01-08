"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMockup() {
  return (
    <div className="relative flex justify-center items-center">
      
      {/* LEFT FLOATING CARD */}
      <motion.div
      animate={{ y: [0, -10, 0] }}
       transition={{
        duration: 4,
        repeat: Infinity,
         ease: "easeInOut",
         }}
        className="absolute left-[-60px] top-24 bg-white rounded-xl shadow-lg px-4 py-3 w-40 text-center z-20"
      >
        <p className="text-sm font-semibold text-gray-800">
          One Wallet
        </p>
        <p className="text-xs text-gray-500 mt-1">
          your money in one place
        </p>
      </motion.div>

      {/* PHONE MOCKUP */}
      <div>
        <Image
          src="/Phone-mockup.png"
          alt="Wallet App"
          width={300}
          height={600}
          priority
          className="drop-shadow-2xl"
        />
      </div>

      {/* RIGHT FLOATING CARD */}
      <motion.div
      animate={{ y: [0, -10, 0] }}
       transition={{
       duration: 4,
        repeat: Infinity,
         ease: "easeInOut",
        }}
        className="absolute right-[-70px] bottom-24 bg-white rounded-xl shadow-lg px-4 py-3 w-44 text-center z-20"
      >
        <p className="text-sm font-semibold text-gray-800">
          Two Powerful Cards
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Naira & Dollar cards
        </p>
      </motion.div>

    </div>
  );
}