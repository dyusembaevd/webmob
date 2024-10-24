"use client";

import { config } from "@/config";
import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import { Project } from "@/entities/project/types";
import IconPen from "@/shared/assets/icons/icon_pen.svg";
import { MainLayout } from "@/shared/layouts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs";
import { Typography } from "@/shared/ui/Typography";
import { WidgetProjectCard } from "@/widgets/WidgetProjectCard";
import { WidgetProjectCardSkeleton } from "@/widgets/WidgetProjectCard/WidgetProjectCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import Avatar from "boring-avatars";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const getAds = async ({
  locale = "ru",
}: {
  locale: "ru" | "kz" | "en";
}): Promise<Project[]> => {
  const response = await fetch(
    `${config.API_BASE}/merchants/mvp/ads?lang=${locale}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch ads");
  }
  return response.json();
};

export default function ProjectPage() {
  const locale = useLocale();

  const { data, isLoading } = useQuery<Project[]>({
    queryKey: ["ads"],
    queryFn: () => getAds({ locale: locale as "ru" | "kz" | "en" }),
  });
  console.log(data);

  return (
    <MainLayout hasFooter={false}>
      <div className="flex min-h-[100dvh] flex-col items-stretch justify-start">
        <div className="bg-[#171719] px-5 pb-4 pt-3">
          <Typography className="py-[13.5px] text-[24px] font-bold leading-[28.8px] text-white">
            Проекты
          </Typography>
        </div>
        <Tabs
          defaultValue="projects"
          defaultChecked
          className="flex flex-1 shrink-0 grow flex-col bg-[#F3F4F1] pb-24 pt-5"
        >
          <TabsList>
            <TabsTrigger value="projects">Мои проекты</TabsTrigger>
            <TabsTrigger value="active">В работе</TabsTrigger>
            <TabsTrigger value="offers">Предложения</TabsTrigger>
            <TabsTrigger value="favourite">Избранные</TabsTrigger>
            <TabsTrigger value="archive">Архив</TabsTrigger>
          </TabsList>
          <div className="flex grow items-center justify-center bg-[#f3f0f0] px-5">
            <TabsContent value="projects" className="min-h-full w-full">
              <div className="flex flex-col items-stretch justify-start gap-4">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <WidgetProjectCardSkeleton key={i} />
                    ))
                  : data?.map((item) => (
                      <WidgetProjectCard key={item.guid} item={item} />
                    ))}
              </div>
            </TabsContent>
            <TabsContent value="active"></TabsContent>
            <TabsContent value="offers"></TabsContent>
            <TabsContent value="favourite"></TabsContent>
            <TabsContent value="archive"></TabsContent>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
}
