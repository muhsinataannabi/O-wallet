type Props = {
  cardType: "naira" | "dollar";
  amount: string;
  onChange: (value: string) => void;
};

export default function AmountInput({ cardType, amount, onChange }: Props) {
  return (
    <div>
      <label className="text-sm text-gray-600">
        Amount ({cardType === "naira" ? "₦" : "$"})
      </label>

      <input
        type="number"
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 p-4 border rounded-xl"
        placeholder="Enter amount"
      />
    </div>
  );
}