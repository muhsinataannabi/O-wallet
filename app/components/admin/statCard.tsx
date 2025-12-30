type StatsCardProps = {
  value: number | string;
  title: string;
};

export default function StatsCard({ value, title }: StatsCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center w-full">
      <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mt-2">
        {value}
      </h1>
    </div>
  );
}