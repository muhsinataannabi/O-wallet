export default function RecentTransaction() {
  const transactions = [
    { id: 1, name: "Netflix Subscription", type: "Debit",  amount: "-₦3,200" },
    { id: 2, name: "Wallet Top-Up",        type: "Credit", amount: "+₦20,000" },
    { id: 3, name:true, name: "Spotify",              type: "Debit",  amount: "-₦1,500" },
    { id: 4, name: "Amazon Purchase",      type: "Debit",  amount: "-₦18,700" },
    { id: 5, name: "Salary Credit",       type: "Credit", amount: "+₦250,000" },
  ];

  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between items-center mb-4 mb-4">
        <h1 className="text-lg font-bold text-gray-800">Recent transactions</h1>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          View All
        </a>
      </div>

      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-3 pb-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`flex-shrink-0 w-80 bg-gray-100 rounded-xl px-5 py-4 flex justify-between items-center border-l-4 ${
                transaction.type === "Credit" ? "border-green-500" : "border-red-500"
              }`}
            >
              <div className="min-w-0">
                <h2 className="text-sm font-semibold truncate">{transaction.name}</h2>
                <p className="text-xs text-gray-600">{transaction.type}</p>
              </div>

              <p
                className={`ml-4 text-lg font-bold whitespace-nowrap ${
                  transaction.type === "Credit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}