type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg bg-gray-200
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_1.5s_infinite]
        before:bg-gradient-to-r
        before:from-transparent before:via-white/60 before:to-transparent
        ${className}
      `}
    />
  );
}