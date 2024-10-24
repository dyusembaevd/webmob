"use client";

import { config } from "@/config";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import { genderLabels, SpecificationsAccordion } from "@/entities/project";
import { EGender, Project } from "@/entities/project/types";
import FollowersAccordion from "@/entities/project/ui/FollowersAccordion";
import { Link, useRouter } from "@/navigation";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
import IconCloseWhite from "@/shared/assets/icons/icon_close_white.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconMood from "@/shared/assets/icons/icon_mood.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { ReadMore } from "@/shared/ui/ReadMore";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { Footer } from "@/widgets/Footer";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

// Fetch project by ID
const fetchProjectById = async (
  id: string,
  locale: string,
): Promise<Project> => {
  const res = await fetch(
    `${config.API_BASE}/merchants/mvp/ads/${id}?lang=${locale}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }
  return res.json();
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
            className="flex h-8 w-8 items-center justify-center"
          >
            <IconCloseWhite />
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
          {data?.categories?.map((item) => (
            <CategoryBadge
              key={item.id}
              id={item.id}
              color={item.color}
              name={item.name}
            />
          ))}
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
                  switch (network.value) {
                    case "instagram":
                      return (
                        <div
                          key={index}
                          className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]"
                        >
                          <IconInstagram />
                        </div>
                      );
                    case "tiktok":
                      return (
                        <div
                          key={index}
                          className="flex h-6 w-6 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]"
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
          {/* Social Networks Section */}
          <SocialNetworksContent
            socialNetworks={data?.requirements?.social_networks}
          />

          {/* Deadline Section */}
          <ProjectDeadlineContent deadline={data?.deadline} />

          {/* Region Section */}
          <ProjectRegionContent cities={data?.cities} />

          {/* Language Section */}
          <PublicationLanguageContent
            languages={data?.requirements?.languages}
          />

          {/* Bonuses Section */}
          <BonusesContent bonus={data?.bonus} />

          {/* Payment Method Section */}
          <PaymentMethodContent priceTypes={data?.requirements?.price_types} />
          <SpecificationsAccordion
            contentTypes={data?.requirements?.content_types}
            specification={data?.specification}
          />

          <FollowersAccordion
            ages={data?.requirements?.ages}
            genders={data?.requirements?.genders}
          />
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

// Component: Social Networks
const SocialNetworksContent: React.FC<{
  socialNetworks: Project["requirements"]["social_networks"];
}> = ({ socialNetworks }) => {
  return (
    <div className="flex flex-col items-stretch justify-start gap-2">
      <Typography className="text-[18px] font-semibold leading-[25.2px]">
        Ссылки на социальные сети
      </Typography>
      {socialNetworks?.map((network, index) => {
        if (network.value === "instagram") {
          return (
            <Typography key={index} className="text-[16px] leading-[20.8px]">
              <Link
                className="block text-[#8065FF]"
                href={`${network.description || ""}` as any}
              >
                Instagram
              </Link>
            </Typography>
          );
        } else if (network.value === "tiktok") {
          return (
            <Typography key={index} className="text-[16px] leading-[20.8px]">
              <Link
                className="block text-[#8065FF]"
                href={`${network.description || ""}` as any}
              >
                Tiktok
              </Link>
            </Typography>
          );
        }
        return null;
      })}
    </div>
  );
};

// Component: Project Deadline
const ProjectDeadlineContent: React.FC<{ deadline?: string | null }> = ({
  deadline,
}) => (
  <div className="flex flex-col items-stretch justify-start gap-2">
    <Typography className="text-[18px] font-semibold leading-[25.2px]">
      Срок выполнения
    </Typography>
    {deadline ? (
      <Typography className="text-[16px] leading-[20.8px] text-[#171719E0]">
        {new Date(deadline).toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    ) : (
      <Typography className="text-[16px] leading-[20.8px] text-[#171719E0]">
        Не указано
      </Typography>
    )}
  </div>
);

// Component: Region
const ProjectRegionContent: React.FC<{ cities: Project["cities"] }> = ({
  cities,
}) => (
  <div className="flex flex-col items-stretch justify-start gap-2">
    <Typography className="text-[18px] font-semibold leading-[25.2px]">
      Регион
    </Typography>
    {cities?.length > 0 ? (
      cities.map((city) => (
        <Typography
          key={city.id}
          className="text-[16px] leading-[20.8px] text-[#171719E0]"
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
);

// Component: Publication Language
const PublicationLanguageContent: React.FC<{
  languages: Project["requirements"]["languages"];
}> = ({ languages }) => (
  <div className="flex flex-col items-stretch justify-start gap-2">
    <Typography className="text-[18px] font-semibold leading-[25.2px]">
      Язык публикаций
    </Typography>
    <Typography className="text-[16px] leading-[20.8px]">
      {languages && languages?.length > 0
        ? languages
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
            .filter(Boolean)
            .join(", ")
        : "Не указано"}
    </Typography>
  </div>
);

// Component: Bonuses
const BonusesContent: React.FC<{ bonus?: string }> = ({ bonus }) => (
  <div className="flex flex-col items-stretch justify-start gap-2">
    <Typography className="text-[18px] font-semibold leading-[25.2px]">
      Бонусы для подписчиков
    </Typography>
    <div className="flex items-center justify-start gap-2 rounded-[12px] bg-[#8065FF] bg-opacity-5 p-3">
      <div className="h-4 w-4 self-start">
        <IconMood />
      </div>
      <Typography className="text-[14px] font-normal leading-[19.6px]">
        {bonus || "Не указано"}
      </Typography>
    </div>
  </div>
);

// Component: Payment Method
const PaymentMethodContent: React.FC<{
  priceTypes?: Project["requirements"]["price_types"];
}> = ({ priceTypes }) => (
  <div className="flex flex-col items-stretch justify-start gap-2">
    <Typography className="text-[18px] font-semibold leading-[25.2px]">
      Способ оплаты
    </Typography>
    <div className="flex items-center justify-start gap-2 rounded-[12px] bg-[#8065FF] bg-opacity-5 p-3">
      <div className="h-4 w-4 self-start">
        <IconMood />
      </div>
      <Typography className="text-[14px] font-normal leading-[19.6px]">
        Оплата -
        {priceTypes?.map((item, index) => {
          const paymentMethod =
            item.value === "money"
              ? "деньгами"
              : item.value === "barter"
                ? "бартер"
                : "деньгами, бартер";
          return (
            <span
              key={index}
              className="text-[14px] font-semibold leading-[19.6px]"
            >
              {" "}
              {paymentMethod}
            </span>
          );
        })}
      </Typography>
    </div>
  </div>
);
