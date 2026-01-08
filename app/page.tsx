"use client";
import Hero from "./components/dashboard/hero";
import Features from "./components/dashboard/features";
import Trust from "./components/dashboard/trust";
import HowToUse from "./components/dashboard/howToUse";
import FinalCTA from "./components/dashboard/finalCta";

import Footer from "./components/dashboard/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-primary-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_80%)] opacity-40" />
<Hero />
<Features />
<Trust />
<HowToUse />
<FinalCTA />
<Footer />
    </main>
  );
}