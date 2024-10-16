"use client";

import { useRouter } from "@/navigation";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { formatFullName } from "@/shared/utils/formatters";
import Image from "next/image";
import React from "react";

import { Blogger } from "../../types";
import { CategoryBadge } from "../CategoryBadge";

type Props = {
  blogger: Blogger;
};

export const BloggerCard = ({ blogger }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/bloggers/${blogger.guid}` as any);
  };

  return (
    <div
      onClick={handleClick}
      key={blogger.guid}
      className="flex h-[353px] w-full flex-col items-stretch justify-start gap-3 overflow-hidden rounded-[24px] bg-white px-4 pb-5 pt-4 active:shadow-[0px_3px_12px_0px_#D0D0D3]"
    >
      <div className="relative h-[144px] w-full rounded-[16px] bg-gray-100">
        {blogger.avatar_url ? (
          <Image
            fill
            className="rounded-[16px] object-cover"
            src={blogger.avatar_url}
            alt=""
          />
        ) : null}
      </div>
      <div className="-mx-4 flex items-stretch justify-start gap-1 overflow-x-auto px-4">
        {blogger.categories && blogger.categories?.length > 0
          ? blogger.categories?.map((item) => (
              <CategoryBadge id={item.id} color={item.color} name={item.name} />
            ))
          : null}
        {/* <Typography className="rounded-[16px] bg-[#FEC90124] px-3 py-1 text-[13px] font-normal leading-[18.2px] text-[#FF7A00E0]">
          Психология
        </Typography>
        <Typography className="rounded-[16px] bg-[#8065FF17] px-3 py-1 text-[13px] font-normal leading-[18.2px] text-[#8065FF]">
          Здоровье и медицина
        </Typography> */}
      </div>
      <div className="flex flex-col items-stretch justify-start gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <Typography
              className={cn("text-[24px] font-bold leading-[28.8px]")}
            >
              {formatFullName({
                first_name: blogger.first_name,
                last_name: blogger.last_name ?? undefined,
                patronymic: blogger.patronymic ?? undefined,
              })}
            </Typography>
            <Typography className="text-text-secondary-subduet">
              Астана, Казахстан
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-start">
            <Typography className="text-[20px] font-semibold leading-[28px]">
              {blogger.instagram_followers || blogger.tiktok_followers
                ? (blogger.instagram_followers ?? 0) +
                  (blogger.tiktok_followers ?? 0)
                : "?"}
            </Typography>
            <Typography className="text-text-secondary-subduet">
              Подписчиков
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-start gap-3 border-t-[2px] border-t-[#1717191F] pt-2">
          <div className="flex max-h-6 w-full items-stretch justify-start gap-2">
            <div className="flex items-stretch justify-start gap-1">
              {blogger.instagram ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconInstagram />
                </div>
              ) : null}
              {blogger.tiktok ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconTiktok />
                </div>
              ) : null}
            </div>
            {(blogger.instagram || blogger.tiktok) && (
              <Typography className="text-[14px] leading-[19.6px] text-[#171719E0]">
                {[blogger.instagram, blogger.tiktok]
                  .filter(Boolean)
                  .join(" | ")}
              </Typography>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Typography className="text-[14px] leading-[19.6px] text-[#17171999]">
              Стоимость услуг
            </Typography>
            <Typography className="text-[18px] font-semibold leading-[25.2px] text-[#171719]">
              {blogger.price ? `от ${blogger.price} ₸` : "Договорная"}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
