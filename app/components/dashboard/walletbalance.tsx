"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"

export default function Walletbalance() {
  const [visible, setVisible] = useState({
    naira: false,
    dollar: false,
  });
const router = useRouter();
  const balances = [
    {
      id: "naira",
      title: "Naira Balance",
      amount: "24,850.00",
      symbol: "₦",
    },
    {
      id: "dollar",
      title: "Dollar Balance",
      amount: "456.00",
      symbol: "$",
    },
  ];

  const toggleVisible = (id: string) => {
    setVisible((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  return (
    <div className="px-6 -mt-8 z-50">
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4">

        <div className="flex items-center justify-between">

          {/* LEFT — NAIRA */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
               <h1 className="text-green-500 font-bold text-md">₦</h1>
              </div>
              <h2 className="text-xs text-gray-800 font-medium">
                {balances[0].title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => toggleVisible("naira")}>
                {visible.naira ? (
                  <EyeOff className="w-5 h-5 text-gray-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <p className="text-md font-bold text-gray-900">
                {visible.naira
                  ? `${balances[0].symbol}${balances[0].amount}`
                  : "****"}
              </p>
            </div>
          </div>

          {/* CENTER LINE */}
          <div className="w-px h-16 bg-gray-200 mx-4"></div>

          {/* RIGHT — DOLLAR */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
               <h1 className="text-red-500 font-bold text-md">$</h1>
              </div>
              <h2 className="text-xs text-gray-800 font-medium">
                {balances[1].title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => toggleVisible("dollar")}>
                {visible.dollar ? (
                  <EyeOff className="w-5 h-5 text-gray-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <p className="text-md font-bold text-gray-900">
                {visible.dollar
                  ? `${balances[1].symbol}${balances[1].amount}`
                  : "****"}
              </p>
            </div>
          </div>
         </div>
         <div className="flex justify-center mt-4">
          <button 
          onClick={() => router.push("/dashboard/addMoney")}
          className="bg-primary-bright text-white text-xs rounded-lg px-3 py-1 w-full">Add money</button>
          </div>
        </div>

      </div>
  );
}