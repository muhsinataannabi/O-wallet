"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./components/ui/button";


export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full bg-gradient-primary-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_80%)] opacity-40" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <motion.div
          className="max-w-md text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-8 flex justify-center">
            <div>
              <Image
                src="/logo.svg"
                alt="O-wallet"
                width={80}
                height={80}
                className="drop-shadow-lg rounded-full"
              />
            </div>
          </div>

          <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            O-wallet
          </h2>

          <h1 className="mb-6 bg-gradient-primary-dark bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
            One Wallet, Two Powerful Cards
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl">₦ Naira & $ Dollar</span>
          </h1>

          <p className="mx-auto mb-10 max-w-sm text-lg leading-relaxed text-gray-600">
            Fund, spend, and control your money with ease  locally and globally.
          </p>

          <Button
            onClick={() => router.push("/auth/register")}
            className="w-full"
            label="Get Started"
         >
            </Button>
         
          <p className="mt-8 text-sm text-gray-500">
            🔒 Bank-grade encryption • guarante and trusted
          </p>
        </motion.div>
      </div>
    </div>
  );
}