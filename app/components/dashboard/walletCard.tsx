"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Wallet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => setActiveIndex((prev) => (prev === 1 ? 0 : 1));
  const prevCard = () => setActiveIndex((prev) => (prev === 0 ? 1 : 0));

  return (
    <section className="mt-6 px-4 relative">

      {/* Header + Indicators */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Your Cards</h3>
        <div className="flex gap-1">
          <div className={`w-2 h-2 rounded-full transition-all ${activeIndex === 0 ? "bg-primary-bright w-6" : "bg-gray-300"}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${activeIndex === 1 ? "bg-primary-bright w-6" : "bg-gray-300"}`} />
        </div>
      </div>

      {/* SLIDER CONTAINER */}
      <div className="relative w-64 h-40 rounded-3xl overflow-hidden shadow-lg mx-auto">

        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {/* CARD 1 */}
          <div className="relative w-64 h-40 shrink-0 bg-gradient-card rounded-3xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
              <path d="M250,0 C290,80 290,170 250,250 L400,250 L400,0 Z" fill="rgba(0,0,0,0.18)" />
            </svg>

            <div className="absolute top-6 left-6 text-white">
              <p className="text-xs opacity-80">Dollar Virtual Card</p>
              <p className="text-xl font-semibold mt-1">•••• •••• •••• 1234</p>
            </div>

            <div className="absolute bottom-6 left-6 flex gap-12 text-white">
              <div>
                <p className="text-[10px] opacity-70">Muhsinat</p>
              </div>
              <div>
                <p className="text-[10px] opacity-70">CVV</p>
                <p className="font-medium text-sm">345</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 text-white">
              <p className="text-[10px] opacity-70">VALID</p>
              <p className="font-medium text-sm">01/27</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-64 h-40 shrink-0 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
              <path d="M250,0 C290,80 290,170 250,250 L400,250 L400,0 Z" fill="rgba(0,0,0,0.18)" />
            </svg>

            <div className="absolute top-6 left-6 text-white">
              <p className="text-xs opacity-80">Naira Virtual Card</p>
              <p className="text-xl font-semibold mt-1">•••• •••• •••• 8421</p>
            </div>

            <div className="absolute bottom-6 left-6 flex gap-12 text-white">
              <div>
                <p className="text-[10px] opacity-70">Muhsinat</p>
              </div>
              <div>
                <p className="text-[10px] opacity-70">CVV</p>
                <p className="font-medium text-sm">543</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 text-white">
              <p className="text-[10px] opacity-70">VALID</p>
              <p className="font-medium text-sm">03/29</p>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <button
          onClick={prevCard}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextCard}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}