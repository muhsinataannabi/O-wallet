export default function Button({ label, onClick, className }) {
  return (
    <button
    type="submit"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-primary-dark px-10 py-2 text-lg font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${className}`}
    >
      {label}
    </button>
  );
}