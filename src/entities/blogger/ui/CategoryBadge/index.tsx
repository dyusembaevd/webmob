import { Category } from "@/entities/blogger/types";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { getTextColorBasedOnBackground } from "@/shared/utils/formatters";
import React from "react";

export const CategoryBadge = ({ color, id, name }: Category) => {
  const textColor = getTextColorBasedOnBackground(color);
  return (
    <div
      className={`flex items-center justify-center rounded-[16px] bg-[${color ?? "#000000"}] px-3 py-1 `}
    >
      <Typography
        key={id}
        className={cn(
          "whitespace-nowrap  px-3 py-1 text-[13px] font-normal leading-[18.2px] text-white",
        )}
        style={{
          color: textColor,
        }}
      >
        {name}
      </Typography>
    </div>
  );
};
