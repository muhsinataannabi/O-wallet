type Props = {
  status: "Active" | "Frozen" | "Expired";
};

export default function CardStatusBadge({ status }: Props) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Frozen: "bg-yellow-100 text-yellow-700",
    Expired: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[status]}`}
    >
      {status}
    </span>
  );
}