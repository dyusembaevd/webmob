"use client";

import { config } from "@/config";
import { Blogger } from "@/entities/blogger/types";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import { Project } from "@/entities/project/types";
import { ProjectCreatedDrawer } from "@/entities/project/ui/ProjectCreatedDrawer";
import IconFavorite from "@/features/bloggers/ui/IconFavorite";
import { City } from "@/features/profile/types";
import { Link, useRouter } from "@/navigation";
import IconArrowL from "@/shared/assets/icons/icon_arrow-l.svg";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
import IconCloseWhite from "@/shared/assets/icons/icon_close_white.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconStatistics from "@/shared/assets/icons/icon_statistics_dark.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import IconWallet from "@/shared/assets/icons/icon_wallet.svg";
import { Button } from "@/shared/ui/Button";
import { ReadMore } from "@/shared/ui/ReadMore";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { formatFullName } from "@/shared/utils/formatters";
import { Footer } from "@/widgets/Footer";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

const fetchProjectById = async (
  id: string,
  locale: string,
): Promise<Project> => {
  const res = await fetch(
    `${config.API_BASE}/merchants/mvp/ads/${id}?lang=${locale}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blogger data");
  }
  const data: Project = await res.json();
  return data;
};

export default function BloggerByIdPage({
  params,
}: {
  params: { guid: string };
}) {
  const router = useRouter();
  const locale = useLocale();

  const { data, isLoading, error } = useQuery({
    queryKey: ["project", params.guid],
    queryFn: () => fetchProjectById(params.guid, locale),
    enabled: !!params.guid,
  });
  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error loading project data</div>;

  return (
    <div className="flex w-full flex-col ">
      <div className="relative flex h-[280px] w-full flex-col items-stretch justify-start gap-5 rounded-b-[32px] bg-[#171719] p-5">
        <div className="absolute left-0 top-5 z-40 flex w-full items-center justify-between px-5">
          <div />
          <button
            onClick={() => router.back()}
            className="flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-2xl"
          >
            <IconCloseWhite className={`${"scale-100 "}`} />
          </button>
        </div>
        {data?.banner_url && (
          <Image
            src={data.banner_url}
            fill
            alt=""
            className="rounded-b-[32px] object-cover object-top"
          />
        )}
      </div>
      <div className="flex min-h-[70dvh] w-full flex-col items-stretch justify-start gap-4 overflow-hidden bg-[#1717190A] px-5 pt-4">
        <div className="-mx-5 flex items-stretch justify-start gap-1 overflow-x-auto px-5">
          {data?.categories && data?.categories?.length > 0
            ? data?.categories?.map((item) => (
                <CategoryBadge
                  key={item.id}
                  id={item.id}
                  color={item.color}
                  name={item.name}
                />
              ))
            : null}
        </div>
        <div className="flex flex-col items-stretch justify-start gap-8">
          <div className="w-full">
            <Typography className="text-[24px] font-bold leading-[28.8px]">
              {data?.title ?? "Новый проект"}
            </Typography>

            <ReadMore text={data?.description ?? ""} />
            <div className="mt-3 flex max-h-6 w-full items-stretch justify-start gap-2">
              <div className="flex items-center justify-start gap-1">
                {data?.requirements?.social_networks?.map((network, index) => {
                  switch (network.type) {
                    case "instagram":
                      return (
                        <div
                          key={index}
                          className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]"
                        >
                          <IconInstagram />
                        </div>
                      );
                    case "tiktok":
                      return (
                        <div
                          key={index}
                          className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]"
                        >
                          <IconTiktok />
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Ссылки на социальные сети
            </Typography>

            {/* Checking and rendering social network links */}
            {data?.requirements?.social_networks?.map((network, index) => {
              if (network.value === "instagram") {
                return (
                  <Typography
                    key={index}
                    className="text-[16px] leading-[20.8px]"
                  >
                    <Link
                      className="block text-[#8065FF]"
                      href={
                        `https://www.instagram.com/${network.description || ""}` as any
                      }
                    >
                      Instagram
                    </Link>
                  </Typography>
                );
              } else if (network.value === "tiktok") {
                return (
                  <Typography
                    key={index}
                    className="text-[16px] leading-[20.8px]"
                  >
                    <Link
                      className="block text-[#8065FF]"
                      href={
                        `https://www.tiktok.com/@${network.description || ""}` as any
                      }
                    >
                      Tiktok
                    </Link>
                  </Typography>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Язык публикаций
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {data?.requirements?.languages &&
              data.requirements.languages?.length > 0
                ? data?.requirements?.languages
                    .map((language) => {
                      switch (language.value) {
                        case "kz":
                          return "Казахский";
                        case "ru":
                          return "Русский";
                        case "en":
                          return "Английский";
                        default:
                          return null;
                      }
                    })
                    .filter(Boolean) // To remove null values in case of invalid language codes
                    .join(", ")
                : "Не указано"}
            </Typography>
          </div>

          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Регион
            </Typography>
            {data?.cities && data.cities.length > 0 ? (
              data?.cities.map((city, index) => (
                <Typography
                  key={city.id}
                  className="text-[16px] leading-[20.8px] text-text-secondary-subduet"
                >
                  {`${city.name}, Казахстан`}
                </Typography>
              ))
            ) : (
              <Typography className="text-[16px] leading-[20.8px]">
                Не указано
              </Typography>
            )}
          </div>
        </div>

        <div className="my-20 flex w-full items-center justify-start gap-2">
          <Link href={"/"} className="px-1 py-[2px]">
            <Typography className="text-[14px] leading-[19.6px]">
              Главная
            </Typography>
          </Link>
          <IconArrowR />
          <div className="px-1 py-[2px]">
            <Typography className="text-[14px] leading-[19.6px]">
              Страница проекта
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
