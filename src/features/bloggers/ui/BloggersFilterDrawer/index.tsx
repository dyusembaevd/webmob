"use client";

import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

export const BloggersFilterDrawer = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State for filters
  const [hasInstagram, setHasInstagram] = useState<boolean>(
    searchParams.get("has_instagram") === "true",
  );
  const [hasTiktok, setHasTiktok] = useState<boolean>(
    searchParams.get("has_tiktok") === "true",
  );

  // Helper function to create updated query strings
  const createQueryString = (name: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  // Handle the reset of filters
  const handleReset = () => {
    setHasInstagram(false);
    setHasTiktok(false);
    router.push(`?${createQueryString("has_instagram", null)}`);
    router.push(`?${createQueryString("has_tiktok", null)}`);
  };

  // Handle the application of filters
  const handleApply = () => {
    let updatedParams = new URLSearchParams();

    if (hasInstagram) updatedParams.set("has_instagram", "true");
    if (hasTiktok) updatedParams.set("has_tiktok", "true");

    router.push(`?${updatedParams.toString()}`);
  };

  return (
    <div className="flex items-center gap-1">
      <Drawer>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent>
          <div
            style={{ height: "calc(100dvh-48px)" }}
            className="flex flex-col gap-3 px-4 pb-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <Typography variant="headline3" className="w-full text-center">
                Поиск блоггеров
              </Typography>

              <DrawerClose asChild>
                <CloseIcon width={28} height={28} className="text-base-700" />
              </DrawerClose>
            </div>
            <Typography
              variant="headline3"
              className="mb-4 text-[20px] font-semibold leading-[28px]"
            >
              Выберите подходящие параметры для поиска
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="text-[18px] font-semibold leading-[25.2px]">
                Социальная сеть
              </Typography>
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox
                  value={"instagram"}
                  checked={hasInstagram}
                  onCheckedChange={(checked) =>
                    setHasInstagram(checked === true)
                  }
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconInstagram />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Instagram
                </Typography>
              </div>
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox
                  value={"tiktok"}
                  checked={hasTiktok}
                  onCheckedChange={(checked) => setHasTiktok(checked === true)}
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconTiktok />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Tiktok
                </Typography>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 flex w-full flex-nowrap justify-between px-5">
            <Button
              variant={"ghost"}
              className="border border-[#17171966] text-[16px] font-semibold"
              onClick={handleReset}
            >
              Сбросить
            </Button>
            <Button className="bg-[#8065FF] text-white" onClick={handleApply}>
              Применить
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
