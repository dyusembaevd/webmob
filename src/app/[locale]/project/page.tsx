"use client";

import { SocialNetworkDrawer } from "@/features/project";
import { Link, useRouter } from "@/navigation";
import IconArrowBack from "@/shared/assets/icons/icon_arrow_back.svg";
import IconBusiness from "@/shared/assets/icons/icon_Business, Statistic.svg";
import IconDocumentAdd from "@/shared/assets/icons/icon_Document Add.svg";
import IconGlobal from "@/shared/assets/icons/icon_Global.svg";
import IconList from "@/shared/assets/icons/icon_List.svg";
import IconMoney from "@/shared/assets/icons/icon_Money.svg";
import IconText from "@/shared/assets/icons/icon_Text Square.svg";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import React from "react";

export default function ProjectPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-stretch justify-start gap-6 p-5">
      <div
        style={{
          boxShadow: "0px 3px 12px 0px #D0D0D3",
        }}
        className="fixed left-0 top-0 z-30 flex w-full items-center justify-start bg-white py-3"
      >
        <IconArrowBack
          className={"fixed left-2 top-2 hover:cursor-pointer"}
          onClick={() => router.back()}
        />
        <Typography className="flex-1 text-center text-[16px] font-semibold leading-[22.4px]">
          Добавление проекта
        </Typography>
      </div>
      <div className="flex w-full flex-col items-stretch justify-start gap-5 pb-[120px] pt-[48px]">
        <div className="flex w-full flex-col items-stretch justify-start gap-2">
          <Typography className="text-[24px] font-bold leading-[28.8px]">
            Заполните, пожалуйста, следующую информацию
          </Typography>
          <Typography className="text-[16px] font-normal leading-[20.8px]">
            Чем больше информации вы предоставите, тем понятнее будет
            техническое задание исполнителю
          </Typography>
        </div>

        {/* Button Containers */}
        <div className="flex flex-col items-stretch justify-start gap-3">
          {/* Button 1 */}
          <SocialNetworkDrawer>
            <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
              <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                <IconGlobal />
              </div>
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                  Социальная сеть
                </Typography>
                <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                  Рекламируемая страница
                </Typography>
              </div>
            </button>
          </SocialNetworkDrawer>

          {/* Button 2 */}
          <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
              <IconList />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                1-Категории
              </Typography>
              <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                Тематика проекта
              </Typography>
            </div>
          </button>

          {/* Button 3 */}
          <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
              <IconText />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                2 - Публикация
              </Typography>
              <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                Формат публикации и цена за нее
              </Typography>
            </div>
          </button>

          {/* Button 4 */}
          <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
              <IconDocumentAdd />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                3 - Техническое задание
              </Typography>
              <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                Описание, сроки, условия
              </Typography>
            </div>
          </button>

          {/* Button 5 */}
          <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
              <IconMoney />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                4 - Бонусы
              </Typography>
              <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                Текст для бонусов и промокодов
              </Typography>
            </div>
          </button>

          {/* Button 6 */}
          <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
              <IconBusiness />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                5 - Изображения
              </Typography>
              <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                Логотип компании, фото
              </Typography>
            </div>
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-center bg-white px-4 py-5">
        <Button
          variant={"ghost"}
          className="w-full rounded-[32px] bg-[#171719] bg-opacity-[8%] px-2 pb-[18px] pt-[16px] text-[#171719] text-opacity-40"
        >
          Создать проект
        </Button>
      </div>
    </div>
  );
}
