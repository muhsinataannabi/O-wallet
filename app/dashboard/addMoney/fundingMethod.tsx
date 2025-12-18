type Props = {
  selected: string;
  onSelect: (method: string) => void;
};

export default function FundingMethod({ selected, onSelect }: Props) {
  const methods = [
    { id: "bank", label: "Bank Transfer" },
    { id: "card", label: "Debit Card" },
    { id: "ussd", label: "USSD" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">Funding Method</p>

      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={`w-full p-4 rounded-xl text-left ${
            selected === method.id
              ? "bg-blue-100 border-blue-500"
              : "bg-gray-100"
          }`}
        >
          {method.label}
        </button>
      ))}
    </div>
  );
}