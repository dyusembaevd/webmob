"use client";

import { config } from "@/config";
import IconArrowDown from "@/shared/assets/icons/icon_arrow_d.svg";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_large.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_large.svg";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

export const SocialNetworkDrawer = ({ children }: { children: ReactNode }) => {
  const [instagramValue, setInstagramValue] = useState<string>("");
  const [tiktokValue, setTiktokValue] = useState<string>("");

  const hasValues = instagramValue.trim() !== "" || tiktokValue.trim() !== "";

  const handleApply = () => {};
  return (
    <div className="flex items-center gap-1">
      <Drawer>
        <DrawerTrigger
          asChild
          className="flex w-full items-stretch justify-stretch"
        >
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <div
            style={{ height: "calc(100dvh-48px)" }}
            className="flex flex-col gap-3 overflow-auto px-5 pb-[102px]"
          >
            <div className="mb-4 flex items-center justify-between">
              <Typography
                variant="headline3"
                className="semibold w-full text-center text-[16px] leading-[22.4px]"
              >
                Социальная сеть
              </Typography>

              <DrawerClose asChild>
                <CloseIcon width={28} height={28} className="text-base-700" />
              </DrawerClose>
            </div>
            <Typography
              variant="headline3"
              className="mb-4 text-[18px] font-semibold leading-[25.2px]"
            >
              Выберите социальную сеть, в которой будет размещена реклама{" "}
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox value={"instagram"} />
                <div className="flex h-9 w-9 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconInstagram />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Instagram
                </Typography>
              </div>
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox value={"tiktok"} />
                <div className="flex h-9 w-9 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconTiktok />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Tiktok
                </Typography>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography
                variant="headline3"
                className="mb-4 text-[18px] font-semibold leading-[25.2px]"
              >
                Добавьте ссылку на рекламируемую страницу
              </Typography>

              {/* Instagram Input */}
              <label
                htmlFor="instagram"
                className="pl-3 text-left text-[14px] font-normal leading-[19.6px]"
                style={{ fontFamily: "Roboto" }}
              >
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                value={instagramValue}
                onChange={(e) => setInstagramValue(e.target.value)}
                className="h-[52px] w-[335px] rounded-[24px] border border-[#1717191F] px-[14px] py-[6px] focus:border-[#8065FF] focus:outline-none"
                placeholder="https://www.instagram"
              />

              {/* Tiktok Input */}
              <label
                htmlFor="tiktok"
                className="pl-3 text-left text-[14px] font-normal leading-[19.6px]"
                style={{ fontFamily: "Roboto" }}
              >
                Tiktok
              </label>
              <input
                type="text"
                id="tiktok"
                value={tiktokValue}
                onChange={(e) => setTiktokValue(e.target.value)}
                className="h-[52px] w-[335px] rounded-[24px] border border-[#1717191F] px-[14px] py-[6px] focus:border-[#8065FF] focus:outline-none"
                placeholder="https://www.tiktok"
              />
            </div>
          </div>

          <div className="absolute bottom-0 flex w-full flex-nowrap justify-evenly gap-2 bg-white px-5 pb-5">
            <DrawerClose asChild>
              <Button
                className={cn(
                  "text-white",
                  !hasValues
                    ? "flex-1 cursor-not-allowed bg-[#171719] bg-opacity-[0.08] text-[#17171966]"
                    : "flex-1 bg-[#8065FF]",
                )}
                onClick={handleApply}
                disabled={!hasValues} // Disable the button if no input has a value
              >
                Сохранить
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
