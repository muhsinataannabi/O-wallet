type Transaction = {
  id: number;
  user: string;
  amount: string;
  type: "Credit" | "Debit";
  cardType: string;
  date: string;
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionsTable({ transactions }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-4">User</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Card</th>
              <th className="text-left p-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="p-4 font-medium">{tx.user}</td>

                <td
                  className={`p-4 font-semibold ${
                    tx.type === "Credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.amount}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tx.type === "Credit"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>

                <td className="p-4 text-gray-600">{tx.cardType}</td>
                <td className="p-4 text-gray-500">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y">
        {transactions.map((tx) => (
          <div key={tx.id} className="p-4 space-y-2">
            <div className="flex justify-between">
              <p className="font-medium">{tx.user}</p>
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

            <div className="flex justify-between text-sm text-gray-500">
              <span>{tx.cardType}</span>
              <span>{tx.date}</span>
            </div>

            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                tx.type === "Credit"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {tx.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}