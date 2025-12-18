type Props = {
  selected: "naira" | "dollar";
  onSelect: (type: "naira" | "dollar") => void;
};

export default function WalletSelector({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => onSelect("naira")}
        className={`p-4 rounded-xl ${
          selected === "naira"
            ? "bg-green-600 text-white"
            : "bg-gray-100"
        }`}
      >
        Naira Card
      </button>

      <button
        onClick={() => onSelect("dollar")}
        className={`p-4 rounded-xl ${
          selected === "dollar"
            ? "bg-blue-600 text-white"
            : "bg-gray-100"
        }`}
      >
        Dollar Card
      </button>
    </div>
  );
}