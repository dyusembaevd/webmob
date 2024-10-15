"use client";

import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { useLocale } from "next-intl";
import { Roboto } from "next/font/google";

import { LanguagesDrawer } from "../LanguageDrawer";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const LanguageSwitcher = () => {
  const locale = useLocale();

  return (
    <LanguagesDrawer>
      <Typography
        className={cn(
          "text-[14px] font-semibold leading-[19.6px] text-white hover:text-[#8065FF] active:text-[#8065FF]",
          roboto.className,
        )}
      >
        {locale.toUpperCase()}
      </Typography>
    </LanguagesDrawer>
  );
};
