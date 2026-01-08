"use client";

import Link from "next/link";
import { Transaction } from "./data/adminTran";

type Transaction = {
  id: number;
  user: string;
  amount: string;
  type: "Credit" | "Debit";
  cardType: string;
  date: string;
};

type RecentTransactionsProps = {
  transactions: Transaction[];
};

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <button className="text-sm text-primary-bright hover:underline"><Link href="/admin/dashboard/transactions">View All</Link>
          
        </button>
      </div>

      {/* ===== Desktop Table Header ===== */}
      <div className="hidden md:grid grid-cols-5 text-sm text-gray-500 border-b pb-2">
        <p>User</p>
        <p>Amount</p>
        <p>Type</p>
        <p>Card</p>
        <p>Date</p>
      </div>

      {/* ===== Transactions ===== */}
      <div className="space-y-3 md:space-y-0 md:divide-y">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="
              flex flex-col gap-2
              md:grid md:grid-cols-5 md:items-center
              py-3 text-sm
              rounded-lg md:rounded-none
              border md:border-0
              p-3 md:p-0
            "
          >
            {/* User */}
            <div>
              <p className="md:hidden text-xs text-gray-400">User</p>
              <p className="font-medium text-gray-800">{tx.user}</p>
            </div>

            {/* Amount */}
            <div>
              <p className="md:hidden text-xs text-gray-400">Amount</p>
              <p
                className={`font-semibold ${
                  tx.type === "Credit"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {tx.amount}
              </p>
            </div>

            {/* Type */}
            <div>
              <p className="md:hidden text-xs text-gray-400">Type</p>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${
                  tx.type === "Credit"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {tx.type}
              </span>
            </div>

            {/* Card */}
            <div>
              <p className="md:hidden text-xs text-gray-400">Card</p>
              <p className="text-gray-600">{tx.cardType}</p>
            </div>

            {/* Date */}
            <div>
              <p className="md:hidden text-xs text-gray-400">Date</p>
              <p className="text-gray-500">{tx.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}