"use client";
import { useState } from "react";
import WalletSelector from "./walletSelector";
import AmountInput from "./amountInput";
import FundingMethod from "./fundingMethod";
import AddMoneyButton from "./addMoneyButton";

export default function AddMoneyPage() {
  const [selectedCard, setSelectedCard] = useState<"naira" | "dollar">("naira");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = () => {
    const payload = {
      cardType: selectedCard,
      amount,
      method,
    };

    console.log("ADD MONEY DATA:", payload);
    alert("Add money action triggered");
  };

  return (
    <section className="px-4 py-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          Fund Your Wallet
        </h1>
        <a href="/dashboard" className="text-blue-600 text-sm hover:underline">
          Go Back
        </a>
      </div>

      <WalletSelector
        selected={selectedCard}
        onSelect={setSelectedCard}
      />

      <AmountInput
        cardType={selectedCard}
        amount={amount}
        onChange={setAmount}
      />

      <FundingMethod
        selected={method}
        onSelect={setMethod}
      />

      <AddMoneyButton onClick={handleSubmit} />
    </section>
  );
}