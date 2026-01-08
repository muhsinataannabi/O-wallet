"use client";
import { cards } from "../../data/cards";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { useRouter } from "next/navigation";
import { Download, Copy } from "lucide-react";

export default function Cards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCopied, setShowCopied] = useState(false);
  const router = useRouter();

  if (!cards || cards.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No Cards Available
      </div>
    );
  }

  const downloadCard = async (index: number) => {
    const node = cardRefs.current[index];
    if (!node) return;

    try {
      const dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: 2,
        backgroundColor: "transparent",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${cards[index].type}.png`;
      link.click();
    } catch (err) {
      console.error("Failed to download card:", err);
    }
  };

  const copyCardNumber = (number: string) => {
    navigator.clipboard.writeText(number);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  return (
    <section className="mt-6 px-5 pb-20 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-primary-dark text-transparent bg-clip-text">
          My Cards
        </h3>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-primary-bright text-white text-sm px-5 py-2.5 rounded-xl font-medium"
        >
          Back
        </button>
      </div>

      {/* CARD CAROUSEL */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-6"
        onScroll={handleScroll}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="snap-center shrink-0 w-[88%] max-w-md" // Slightly less than full width for peek effect
          >
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative w-full h-56 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
                index === activeIndex ? "scale-100" : "scale-95 opacity-80"
              } ${card.gradient}`}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="
                    M65 0
                    C80 25, 80 75, 65 100
                    L100 100
                    L100 0
                    Z
                  "
                  fill="rgba(0,0,0,0.18)"
                />
              </svg>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-lg opacity-80">{card.type}</p>
                <p className="text-xl font-semibold mt-1">{card.fullNumber}</p>
              </div>

              <div className="absolute bottom-6 left-6 flex gap-12 text-white">
                <p className="text-[15px] opacity-70">{card.holder}</p>

                <div>
                  <p className="text-[15px] opacity-70">CVV</p>
                  <p className="font-medium text-md">{card.cvv}</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 text-white">
                <p className="text-[15px] opacity-70">VALID</p>
                <p className="font-medium text-md">{card.expiry}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS INDICATOR */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-primary-bright" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* ACTION BUTTONS (for active card) */}
      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={() => downloadCard(activeIndex)}
          className="flex items-center gap-3 bg-primary-bright text-white py-3 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          <Download size={20} />
          Download Card
        </button>

        <button
          onClick={() => copyCardNumber(cards[activeIndex].fullNumber)}
          className="flex items-center gap-3 bg-primary-bright text-white py-3 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          <Copy size={20} />
          Copy Card No
        </button>
      </div>

      {/* COPIED TOAST */}
      {showCopied && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-black/80 text-white text-sm px-6 py-3 rounded-xl shadow-lg">
            Card number copied
          </div>
        </div>
      )}
    </section>
  );
}