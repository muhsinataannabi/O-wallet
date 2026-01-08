import { LucideIcon } from "lucide-react";

type CardProps = {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

export default function Cards({
  title,
  description,
  icon: Icon,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-xl ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary-dark text-white mb-4">
          <Icon className="w-8 h-8" />
        </div>
      )}

      {/* TITLE */}
      {title && (
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>
      )}

      {description && (
        <p className="mt-3 text-sm text-gray-600 flex-1">
          {description}
        </p>
      )}
    </div>
  );
}