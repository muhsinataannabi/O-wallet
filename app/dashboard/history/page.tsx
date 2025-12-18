"use client";
import { useState } from "react";
import { transactions } from "../../data/transactions";

export default function Transactions() {
  const [filter, setFilter] = useState("all");

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    if (filter === "dollar") return transaction.cardType === "Dollar Card";
    if (filter === "naira") return transaction.cardType === "Naira Card";
    return true;
  });

  return (
    <div className="mt-6 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          Transactions History
        </h1>
        <a href="/" className="text-blue-600 text-sm hover:underline">
          Go Back
        </a>
      </div>

      {/* Filters */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-gray-100 rounded-lg"
        >
          All
        </button>

        <button
          onClick={() => setFilter("dollar")}
          className="px-4 py-2 bg-blue-100 rounded-lg"
        >
          Dollar
        </button>

        <button
          onClick={() => setFilter("naira")}
          className="px-4 py-2 bg-green-100 rounded-lg"
        >
          Naira
        </button>
      </div>

      {/* Transactions List */}
      <div className="flex flex-col gap-3">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`bg-gray-100 rounded-xl px-5 py-4 flex justify-between items-center border-l-4 ${
              transaction.type === "Credit"
                ? "border-green-500"
                : "border-red-500"
            }`}
          >
            <div>
              <h2 className="text-sm font-semibold">
                {transaction.name}
              </h2>
              <p className="text-sm text-gray-700">
                {transaction.type} • {transaction.cardType}
              </p>
              <p className="text-xs text-gray-500">
                {transaction.date}
              </p>
            </div>

            <p
              className={`text-lg font-bold ${
                transaction.type === "Credit"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}