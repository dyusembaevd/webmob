import { BloggersSearchInput } from "@/features/BloggersSearch";
import { LanguageSwitcher } from "@/features/Language/ui/LanguageSwitcher";
import { CitiesDrawer } from "@/features/profile/ui/CitiesDrawer";
import IconLocation from "@/shared/assets/icons/icon_location.svg";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "700", "900"],
});
export const HomeHeader = async () => {
  return (
    <div className=" flex w-full flex-col items-stretch justify-start gap-5 rounded-b-[32px] bg-[#171719] p-5">
      <div className="flex w-full items-center justify-start py-[5px]">
        <div className="flex-start flex flex-1 items-center gap-2">
          <Image src={"/tmp/icon_invictus.png"} width={40} height={40} alt="" />
          <Typography
            className={cn(
              "text-[16px] font-semibold leading-[22.4px] text-white",
              roboto.className,
            )}
          >
            Invictus Go
          </Typography>
        </div>
        <div className="shrink basis-[32px] ">
          <LanguageSwitcher />
        </div>
        <div className="shrink ">
          <CitiesDrawer>
            <div className="group flex items-center gap-[2px] p-1">
              <IconLocation className="h-4 w-4 group-hover:stroke-[#8065FF]" />
              <Typography
                className={cn(
                  "text-[14px] font-semibold leading-[19.6px] text-white group-hover:text-[#8065FF] group-active:text-[#8065FF] ",
                  roboto.className,
                )}
              >
                Астана
              </Typography>
            </div>
          </CitiesDrawer>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-start">
        <Typography
          className={cn(
            "whitespace-nowrap text-[32px] font-extrabold leading-[38.4px] text-white",
            roboto.className,
          )}
        >
          Простой поиск
        </Typography>
        <div className="flex items-center justify-start gap-3">
          <Image src={"/tmp/avatars.png"} height={32} width={80} alt="" />
          <Typography
            className={cn(
              "whitespace-nowrap text-[32px] font-extrabold leading-[38.4px] text-white",
              roboto.className,
            )}
          >
            блогеров для
          </Typography>
        </div>
        <Typography
          className={cn(
            "whitespace-nowrap text-[32px] font-extrabold leading-[38.4px] text-white",
            roboto.className,
          )}
        >
          сотрудничества
        </Typography>
      </div>
      <BloggersSearchInput />
    </div>
  );
};
