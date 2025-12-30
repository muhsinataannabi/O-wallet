"use client";

import { useState } from "react";
import { recentTransactions } from "../data/dashboard";
import TransactionsTable from "../../../components/admin/transactionsTable";

export default function AllTransactionsPage() {
  const [filter, setFilter] = useState<"All" | "Credit" | "Debit">("All");

  const filteredTransactions =
    filter === "All"
      ? recentTransactions
      : recentTransactions.filter((tx) => tx.type === filter);

  return (
    <main className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          All Transactions
        </h1>

        {/* Filters */}
        <div className="flex gap-2">
          {["All", "Credit", "Debit"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === item
                  ? "bg-primary-bright text-white"
                  : "bg-white border text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions */}/
      <TransactionsTable transactions={filteredTransactions} />
    </main>
  );
}