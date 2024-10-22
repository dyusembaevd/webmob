"use client";

import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import ImgConfetti from "@/shared/assets/icons/img_confetti.svg";
import { Button } from "@/shared/ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import React from "react";

interface ProjectCreatedDrawerProps {
  open: boolean;
  onClose: () => void;
  onMainPage: () => void;
  onProjectPreview: () => void;
}

export const ProjectCreatedDrawer = ({
  open,
  onClose,
  onMainPage,
  onProjectPreview,
}: ProjectCreatedDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <div
          style={{ height: "calc(100dvh-24px)" }}
          className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
        >
          <div className="mb-20 flex h-[56px] items-center justify-between">
            <DrawerClose asChild>
              <CloseIcon
                width={28}
                height={28}
                className="text-base-700 absolute right-5 top-5"
                onClick={onClose}
              />
            </DrawerClose>
          </div>

          <div className="flex w-full flex-col items-stretch justify-start gap-5">
            <ImgConfetti className="self-center" />
            <div>
              <Typography
                variant="headline3"
                className=" text-center text-[18px] font-semibold leading-[25.2px]"
              >
                Поздравляем! Ваш проект успешно добавлен
              </Typography>
              <div className="px-4 py-2">
                <Typography
                  variant="headline3"
                  className=" text-center text-[15px] font-normal leading-[21px]"
                >
                  Теперь блогеры смогут найти его и предложить
                  вам сотрудничество
                </Typography>
              </div>
            </div>
          </div>

          <div className=" flex w-full flex-col flex-nowrap justify-evenly gap-2 bg-white">
            <Button
              className={cn("w-full flex-1 bg-[#8065FF] text-white")}
              onClick={onMainPage}
            >
              На главную
            </Button>

            <Button
              className={cn(
                "w-full flex-1 border-[1px] border-[#171719] border-opacity-[40%] bg-white text-black",
              )}
              onClick={onProjectPreview}
            >
              Посмотреть превью проекта
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
