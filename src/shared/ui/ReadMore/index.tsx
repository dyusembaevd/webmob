"use client";

import { Typography } from "@/shared/ui/Typography";
import { useState } from "react";

type Props = {
  title?: string;
  text?: string;
};

export const ReadMore = ({ title = "", text = "" }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  if (!text) return <></>;

  return (
    <div className="w-full">
      <Typography>{title}</Typography>
      <Typography
        className={` text-[15px] leading-[21px] ${isCollapsed ? "line-clamp-3" : ""} ${title ? "mt-4" : ""}`}
      >
        {text}
      </Typography>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        <Typography className="mt-3 text-[14px] leading-[19.6px] text-[#8065FF]">
          {isCollapsed ? "Читать полностью" : "Свернуть"}
        </Typography>
      </button>
    </div>
  );
};
