"use client";

import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { useLocale } from "next-intl";
import { Roboto } from "next/font/google";

import { LanguagesDrawer } from "../LanguageDrawer";

export const LanguageSwitcher = () => {
  const locale = useLocale();

  return (
    <LanguagesDrawer>
      <Typography
        className={cn(
          "text-[14px] font-semibold leading-[19.6px] text-white hover:text-[#8065FF] active:text-[#8065FF]",
        )}
      >
        {locale.toUpperCase()}
      </Typography>
    </LanguagesDrawer>
  );
};
