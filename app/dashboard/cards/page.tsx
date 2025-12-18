"use client";
import { cards } from "../../data/cards";
import { useRef,useState } from "react";
import * as htmlToImage from "html-to-image";
import { useRouter } from "next/navigation";

export default function Cards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

  setTimeout(() => {
    setShowCopied(false);
  }, 2000);
};
  
  return (
    <section className="mt-6 px-5 pb-10 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold bg-gradient-primary-dark text-transparent bg-clip-text">
          My Cards
        </h3>

        <button 
        onClick={() => router.push("/dashboard")}
        className="bg-primary-bright text-white text-sm px-4 py-2 rounded-lg">
          Back
        </button>
      </div>

      {cards.map((card, index) => (
        <div key={card.id} className="flex flex-col gap-4">
          {/* CARD */}
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative w-full h-52 rounded-3xl shadow-md overflow-hidden ${card.gradient}`}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100"
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
              <p className="text-xl font-semibold mt-1">
                {card.fullNumber}
              </p>
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

          {/* ACTION BUTTONS */}
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => downloadCard(index)}
              className="text-white py-2 rounded-xl text-[10px] font-semibold px-3 shadow-md bg-primary-bright hover:shadow-lg"
            >
              Download Card
            </button>

            <button
            onClick={() => copyCardNumber(card.fullNumber)}
              className="text-white py-2 rounded-xl text-[10px] font-semibold px-3 bg-primary-bright shadow-md  hover:shadow-lg"
                        >
              Copy Card No
            </button>
          </div>

          <hr className="border-gray-200 pb-10" />
        </div>
      ))}
      {showCopied && (
  <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-black/80 text-white text-sm px-4 py-2 rounded-xl shadow-lg">
      Card number copied
    </div>
  </div>
)}
    </section>
  );
}