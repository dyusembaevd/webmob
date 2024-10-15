import { Skeleton } from "../Skeleton";

export const ReadMoreSkeleton = () => {
  return (
    <div className="mt-10 flex flex-col items-stretch justify-between gap-4">
      <Skeleton className="w-40 shrink grow-0 basis-6" />
      <div className="flex flex-col items-stretch justify-center gap-1">
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
        <Skeleton className="h-3" />
      </div>
    </div>
  );
};
