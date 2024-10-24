import { Category } from "@/entities/blogger/types";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { getTextColorBasedOnBackground } from "@/shared/utils/formatters";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Define size variants using cva
const categoryBadgeVariants = cva(
  "flex items-center justify-center rounded-[16px] px-3 py-1", // base styles
  {
    variants: {
      size: {
        small: "px-3 py-1",
        medium: "px-6 py-2",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export interface CategoryBadgeProps
  extends Category,
    VariantProps<typeof categoryBadgeVariants> {}

export const CategoryBadge = ({
  color,
  id,
  name,
  size,
}: CategoryBadgeProps) => {
  const textColor = getTextColorBasedOnBackground(color);

  return (
    <div
      className={cn(categoryBadgeVariants({ size }))}
      style={{ backgroundColor: color }}
    >
      <Typography
        key={id}
        className="whitespace-nowrap text-[13px] font-normal leading-[18.2px] text-white"
        style={{ color: textColor }}
      >
        {name}
      </Typography>
    </div>
  );
};
