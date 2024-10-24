import { Skeleton } from "@/shared/ui/Skeleton";
import React from "react";

export const WidgetProjectCardSkeleton = () => {
  return (
    <div className="flex w-[335px] flex-col gap-3 rounded-[16px] bg-white px-3 pb-3 pt-[11px]">
      <div className="flex items-center justify-start gap-3">
        {/* Image Skeleton */}
        <Skeleton className="h-14 w-14 rounded-full bg-gray-300" />

        <div className="flex flex-1 flex-col items-stretch justify-start gap-3">
          {/* Categories Skeleton */}
          <Skeleton className="h-5 w-full bg-gray-200" />
          <Skeleton className="h-5 w-3/4 bg-gray-200" />
        </div>
        <Skeleton className="h-6 w-6 bg-gray-200" />
      </div>

      <div className="flex flex-col items-stretch justify-start gap-2">
        {/* Title and Description Skeleton */}
        <Skeleton className="h-6 w-2/3 bg-gray-300" />
        <Skeleton className="h-4 w-full bg-gray-200" />
        <Skeleton className="h-4 w-5/6 bg-gray-200" />
      </div>
    </div>
  );
};
