"use client";

import { config } from "@/config";
import { Blogger } from "@/entities/blogger/types";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import { Link, useRouter } from "@/navigation";
import IconArrowL from "@/shared/assets/icons/icon_arrow-l.svg";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
import IconFavorite from "@/shared/assets/icons/icon_favorite.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconStatistics from "@/shared/assets/icons/icon_statistics_dark.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import IconWallet from "@/shared/assets/icons/icon_wallet.svg";
import { ReadMore } from "@/shared/ui/ReadMore";
import { Typography } from "@/shared/ui/Typography";
import { formatFullName } from "@/shared/utils/formatters";
import { Footer } from "@/widgets/Footer";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

// Fetch function for a single blogger by ID
const fetchBloggerById = async (id: string): Promise<Blogger> => {
  const res = await fetch(`${config.API_BASE}/influencers/mvp/${id}?lang=ru`);
  if (!res.ok) {
    throw new Error("Failed to fetch blogger data");
  }
  const data: Blogger = await res.json();
  return data;
};

export default function BloggerByIdPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  // Use React Query's `useQuery` hook to fetch blogger data
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogger", params.id], // Unique query key based on the blogger's ID
    queryFn: () => fetchBloggerById(params.id), // Fetcher function
    enabled: !!params.id, // Only run the query if there's a valid ID
  });

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // Error state
  if (error || !data) return <div>Error loading blogger data</div>;

  // Display the blogger's data
  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="mb-4 text-xl font-bold">Blogger Data</h1>
    // </div>
    <div className="flex w-full flex-col ">
      <div className="relative flex h-[280px] w-full flex-col items-stretch justify-start gap-5 rounded-b-[32px] bg-[#171719] p-5">
        <div className="absolute left-0 top-5 z-40 flex w-full items-center justify-between px-5">
          <button
            onClick={() => router.back()}
            className=" flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFFFF66] backdrop-blur-2xl"
            style={{ backdropFilter: "blur(0.1px)", background: "#FFFFFF66" }}
          >
            <IconArrowL />
          </button>
          <button
            className=" flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFFFF66] backdrop-blur-2xl"
            style={{ backdropFilter: "blur(0.1px)", background: "#FFFFFF66" }}
          >
            <IconFavorite />
          </button>
        </div>
        {data.avatar_url && (
          <Image
            src={data.avatar_url}
            fill
            alt=""
            className="rounded-b-[32px] object-cover object-top"
          />
        )}
      </div>
      <div className="flex min-h-[100dvh] w-full flex-col items-stretch justify-start gap-4 overflow-hidden bg-[#1717190A] px-5 pt-4">
        <div className="-mx-5 flex items-stretch justify-start gap-1 overflow-x-auto px-5">
          {data?.categories && data?.categories?.length > 0
            ? data?.categories?.map((item) => (
                <CategoryBadge
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
              {formatFullName({
                first_name: data?.first_name ?? "",
                last_name: data?.last_name ?? "",
                patronymic: data?.patronymic ?? "",
              })}
            </Typography>
            <Typography className="mb-2 mt-1 text-[16px] font-semibold leading-[22.4px]">
              {data?.instagram_followers || data?.tiktok_followers
                ? (data?.instagram_followers ?? 0) +
                  (data?.tiktok_followers ?? 0)
                : "?"}{" "}
              подписчиков
            </Typography>
            <ReadMore text="Делаю обзоры косметических средств казахстанских брендов. Нативная реклама, всегда интересно преподношу подписчикам товар" />
            <div className="mt-3 flex max-h-6 w-full items-stretch justify-start gap-2">
              <div className="flex items-center justify-start gap-1">
                {data?.instagram ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                    <IconInstagram />
                  </div>
                ) : null}
                {data?.tiktok ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                    <IconTiktok />
                  </div>
                ) : null}
              </div>
              {(data?.instagram || data?.tiktok) && (
                <Typography className="text-[14px] leading-[19.6px] text-[#171719E0]">
                  {[data?.instagram, data?.tiktok].filter(Boolean).join(" | ")}
                </Typography>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Статистика
            </Typography>
            <div className="flex items-start justify-start gap-2 rounded-[12px] bg-[#8065FF0D] p-3">
              <div>
                <IconStatistics />
              </div>
              <Typography className="text-[14px] leading-[19.6px]">
                У блогера пока еще не заполнена статистика. Вы можете запросить
                ее, связавшись с блогером в чате. Для этого нажмите кнопку
                “Предложить задание”
              </Typography>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Тип блога
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              Блог
            </Typography>
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Ссылки на социальные сети
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {data?.instagram ? (
                <Link
                  className="text-[#8065FF]"
                  href={`https://www.instagram.com/${data.instagram}` as any}
                >
                  Instagram
                </Link>
              ) : null}
              {data?.tiktok ? (
                <Link
                  className="text-[#8065FF]"
                  href={`https://www.tiktok.com/${data.tiktok}` as any}
                >
                  Tiktok
                </Link>
              ) : null}
            </Typography>
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Язык публикаций
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {data?.content_language ?? "Не указано"}
            </Typography>
          </div>
          <div className="flex w-full flex-col items-stretch justify-start gap-2">
            <Typography className="text-[18px] font-semibold leading-[25.2px]">
              Регион
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              Казахстан, Астана
            </Typography>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-stretch justify-start gap-2">
          <Typography className="text-start text-[18px] font-semibold leading-[25.2px]">
            Прайс на услуги
          </Typography>
          <div className="flex items-start justify-start gap-2 rounded-[12px] bg-[#8065FF0D] p-3">
            <div>
              <IconWallet />
            </div>
            <div className="flex flex-1 flex-col items-stretch justify-start gap-2">
              <Typography className="text-start text-[18px] font-semibold leading-[25.2px]">
                Instagram
              </Typography>
              <div className="flex flex-col items-stretch justify-start gap-[2px]">
                <Typography className="text-start text-[18px] font-semibold leading-[25.2px]">
                  1/24
                </Typography>
                <div className="flex w-full items-center justify-between">
                  <Typography className="text-[14px] leading-[19.6px]">
                    1 размещение на 24 часа
                  </Typography>

                  <Typography className="text-start text-[14px] font-semibold leading-[19.6px]">
                    {data?.price ? `${data?.price} ₸` : "Договорная"}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col items-stretch justify-start gap-[2px]">
                <Typography className="text-start text-[18px] font-semibold leading-[25.2px]">
                  Пост
                </Typography>
                <div className="flex w-full items-center justify-between">
                  <Typography className="text-[14px] leading-[19.6px]">
                    Нативный, в авторском стиле{" "}
                  </Typography>

                  <Typography className="text-start text-[14px] font-semibold leading-[19.6px]">
                    {data?.price ? `${data?.price} ₸` : "Договорная"}
                  </Typography>
                </div>
              </div>
            </div>
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
              Страница блогера
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
