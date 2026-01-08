"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary-bright py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold">
          One Wallet. Two Powerful Cards.
        </h2>

        {/* Sub text */}
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Create your account in minutes. Secure, fast, and built for modern
          payments.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 bg-white text-primary-bright font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started — It’s Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Trust note */}
        <p className="text-sm text-white/80">
          No hidden fees • Bank-grade security • Instant access
        </p>
      </div>
    </section>
  );
}