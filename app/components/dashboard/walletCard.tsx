"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cards } from "../../data/cards";

export default function Wallet() {
  const totalCards = cards.length;
  
  if (totalCards === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No Cards Available
      </div>
    );
  }
  
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () =>
    setActiveIndex((prev) => (prev + 1) % totalCards);

  const prevCard = () =>
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  return (
    <section className="mt-6 px-4 relative">

      {/* HEADER + INDICATORS */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Your Cards</h3>

        <div className="flex gap-1">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-primary-bright w-6"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative w-64 h-40 rounded-3xl overflow-hidden shadow-lg mx-auto">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card) => (
          <div
              key={card.id}
              className={`relative w-64 h-40 shrink-0 rounded-3xl overflow-hidden ${card.gradient}`}
            >
              {/* DARK SHAPE */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
                <path
                  d="M250,0 C290,80 290,170 250,250 L400,250 L400,0 Z"
                  fill="rgba(0,0,0,0.18)"
                />
              </svg>

              {/* CARD TITLE + NUMBER */}
              <div className="absolute top-6 left-6 text-white">
                <p className="text-xs opacity-80">
                  {card.type}
                </p>
                <p className="text-xl font-semibold mt-1">{card.maskedNumber}</p>
              </div>

              {/* NAME + CVV */}
              <div className="absolute bottom-6 left-6 flex gap-12 text-white">
                <div>
                  <p className="text-[10px] opacity-70">{card.holder}</p>
                </div>

                <div>
                  <p className="text-[10px] opacity-70">CVV</p>
                  <p className="font-medium text-sm">{card.cvv}</p>
                </div>
              </div>

              {/* EXPIRY */}
              <div className="absolute bottom-6 right-6 text-white">
                <p className="text-[10px] opacity-70">VALID</p>
                <p className="font-medium text-sm">{card.expiry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        {totalCards > 1 && (
          <>
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
          </>
        )}
      </div>

    </section>
  );
}