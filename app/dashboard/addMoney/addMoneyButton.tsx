type Props = {
  onClick: () => void;
};

export default function AddMoneyButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 bg-gradient-primary-dark text-white rounded-2xl font-semibold"
    >
      Add Money
    </button>
  );
}