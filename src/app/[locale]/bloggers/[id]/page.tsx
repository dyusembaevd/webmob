"use client";

import { config } from "@/config";
import { Blogger } from "@/entities/blogger/types";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import IconFavorite from "@/features/bloggers/ui/IconFavorite";
import { City } from "@/features/profile/types";
import { Link, useRouter } from "@/navigation";
import IconArrowL from "@/shared/assets/icons/icon_arrow-l.svg";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
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

// Fetch function for a single blogger by ID
const fetchBloggerById = async (id: string): Promise<Blogger> => {
  const res = await fetch(`${config.API_BASE}/influencers/mvp/${id}?lang=ru`);
  if (!res.ok) {
    throw new Error("Failed to fetch blogger data");
  }
  const data: Blogger = await res.json();
  return data;
};

const getCities = async ({
  locale = "ru",
}: {
  locale: "ru" | "kz" | "en";
}): Promise<City[]> => {
  const response = await fetch(`${config.API_BASE}/cities?lang=${locale}`);
  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }
  return response.json();
};

export default function BloggerByIdPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const locale = useLocale();

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogger", params.id],
    queryFn: () => fetchBloggerById(params.id),
    enabled: !!params.id,
  });
  const { data: citiesData, isLoading: isCitiesLoading } = useQuery<City[]>({
    queryKey: ["cities"],
    queryFn: () => getCities({ locale: locale as "ru" | "kz" | "en" }),
  });

  const [isFavorite, setIsFavorite] = useState(false);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error loading blogger data</div>;

  return (
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
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFFFF66] backdrop-blur-2xl"
            style={{ backdropFilter: "blur(0.1px)", background: "#FFFFFF66" }}
          >
            <IconFavorite
              filled={isFavorite}
              className={`${
                isFavorite ? "scale-110 text-white" : "scale-100 text-gray-500"
              }`}
            />
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
            <ReadMore text={data?.description ?? ""} />
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
              Ссылки на социальные сети
            </Typography>
            {data?.instagram ? (
              <Typography className="text-[16px] leading-[20.8px]">
                <Link
                  className="block text-[#8065FF]"
                  href={`https://www.instagram.com/${data.instagram}` as any}
                >
                  Instagram
                </Link>
              </Typography>
            ) : null}
            {data?.tiktok ? (
              <Typography className="text-[16px] leading-[20.8px]">
                <Link
                  className="block text-[#8065FF]"
                  href={`https://www.tiktok.com/${data.tiktok}` as any}
                >
                  Tiktok
                </Link>
              </Typography>
            ) : null}
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
            {isCitiesLoading ? (
              <Skeleton className="bg-slate-200"></Skeleton>
            ) : data?.city_id && citiesData?.[data.city_id] ? (
              <Typography className="text-[16px] leading-[20.8px] text-text-secondary-subduet">
                {citiesData[data.city_id].name}, Казахстан
              </Typography>
            ) : (
              <Typography className="text-[16px] leading-[20.8px]">
                Не указано
              </Typography>
            )}
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
      <div className="fixed bottom-5 w-full px-5">
        <Button className={cn("w-full text-white", "flex-1 bg-[#8065FF]")}>
          {" "}
          Связаться
        </Button>
      </div>
    </div>
  );
}
