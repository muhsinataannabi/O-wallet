import Skeleton from "./skeleton";

/* Header (avatar + name) */
export function HeaderSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}

/* Wallet Balance */
export function BalanceSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-40" />
    </div>
  );
}

/* Card Skeleton */
export function CardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-5 h-40 relative overflow-hidden">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-6 w-32" />
      <div className="absolute bottom-4 right-4">
        <Skeleton className="h-6 w-10" />
      </div>
    </div>
  );
}

/* Transaction Row */
export function TransactionSkeleton() {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-4 w-16" />
    </div>
  );
}

/* PIN Dots */
export function PinSkeleton() {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {[1,2,3,4].map((i) => (
        <Skeleton key={i} className="w-4 h-4 rounded-full" />
      ))}
    </div>
  );
}