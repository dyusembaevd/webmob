// components/BonusesDrawer.tsx
"use client";

import { CreateAdRequest } from "@/entities/project/types";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import React, { ReactNode, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// components/BonusesDrawer.tsx

// components/BonusesDrawer.tsx

export const BonusesDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue, control } = useFormContext<CreateAdRequest>();

  // Watch the 'bonus' field to synchronize with the drawer
  const bonus =
    useWatch({
      control,
      name: "bonus",
    }) || "";

  const [bonusText, setBonusText] = useState<string>(bonus);

  const hasValues = bonusText.trim() !== "";

  const handleApply = () => {
    // Update the form state
    setValue("bonus", bonusText.trim());
  };

  // Update local state when form state changes
  useEffect(() => {
    setBonusText(bonus);
  }, [bonus]);

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
            style={{ height: "calc(100dvh - 48px)" }}
            className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
          >
            <div className="mb-4 flex items-center justify-between">
              <Typography
                variant="headline3"
                className="semibold w-full text-center text-[16px] leading-[22.4px]"
              >
                Бонусы и промокоды
              </Typography>

              <DrawerClose asChild>
                <CloseIcon width={28} height={28} className="text-base-700" />
              </DrawerClose>
            </div>

            <Typography
              variant="headline3"
              className="mb-4 text-[18px] font-semibold leading-[25.2px]"
            >
              Какие бонусы вы предоставляете подписчикам за подписки, переходы,
              покупки и т.д. Эта информация будет добавлена в карточку проекта.
            </Typography>

            {/* Textarea for bonus input */}
            <textarea
              value={bonusText}
              onChange={(e) => setBonusText(e.target.value)}
              placeholder="Например: «Скидка 2500 на первый заказ от 5000 из любого ресторана»"
              className="h-[150px] w-full resize-none rounded-[16px] border border-[#1717191F] p-4 focus:border-[#8065FF] focus:outline-none"
              style={{ lineClamp: 3 }}
            />
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
                disabled={!hasValues}
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
