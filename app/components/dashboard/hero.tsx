"use client";
import Link from "next/link";
import HeroMockup from "./heroMockup";
import { motion } from "framer-motion";

export default function Hero() {
    return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: TEXT */}
        <div 
        className="flex-1 text-center md:text-left">
          <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Money, <br />
            <span className="bg-gradient-primary-dark bg-clip-text text-transparent">Smarter. Faster. Secure.</span>
          </motion.h1>

          <p className="mt-5 text-gray-600 text-lg max-w-md mx-auto md:mx-0 scroll-mt-24" id="about">
            Send, receive, save, and manage your money with O-Wallet.
            A modern wallet built for fast, safe, everyday payments.
          </p>
         {/* RIGHT: APP MOCKUP */}
        <div className="flex-1 flex justify-center">
         <HeroMockup />
        </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/auth/register">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-primary-dark text-white font-semibold shadow-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>

            <Link href="/auth/login">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
       
      </div>
    </section>
  );
}