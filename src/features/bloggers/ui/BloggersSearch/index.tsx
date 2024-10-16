import IconFilter from "@/shared/assets/icons/icon_filter.svg";
import React from "react";

import { BloggersFilterDrawer } from "../BloggersFilterDrawer";

export const BloggersSearchInput = () => {
  return (
    <div className="relative flex h-[52px] w-full items-center rounded-[24px] border border-[#FFFFFF24] bg-[#36446766] p-[6px_14px]">
      <input
        type="text"
        placeholder="Найти"
        tabIndex={0}
        className="placeholder-white::placeholder h-[40px] w-[220px] bg-transparent text-white focus:outline-none"
      />
      <div className="absolute right-[14px] flex h-[32px] w-[32px] items-center justify-center rounded-[12px] bg-[#E0F97BE0]">
        <BloggersFilterDrawer>
          <IconFilter />
        </BloggersFilterDrawer>
      </div>
    </div>
  );
};
