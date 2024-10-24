"use client";

import { config } from "@/config";
import { Project } from "@/entities/project/types";
import { useRouter } from "@/navigation";
import { MainLayout } from "@/shared/layouts";
import { Button } from "@/shared/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { WidgetProjectCard } from "@/widgets/WidgetProjectCard";
import { WidgetProjectCardSkeleton } from "@/widgets/WidgetProjectCard/WidgetProjectCardSkeleton";
import { useQuery } from "@tanstack/react-query";
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
          className="flex flex-1 flex-col bg-[#F3F4F1] pb-24 pt-5"
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
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <WidgetProjectCardSkeleton key={i} />
                  ))
                ) : data ? (
                  data?.map((item) => (
                    <WidgetProjectCard key={item.guid} item={item} />
                  ))
                ) : (
                  <ProjectsEmptyTab />
                )}
              </div>
            </TabsContent>

            <TabsContent value="active">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <ActiveProjectsEmptyTab />
              </div>
            </TabsContent>

            <TabsContent value="offers">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <OffersEmptyTab />
              </div>
            </TabsContent>

            <TabsContent value="favourite">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <FavouriteEmptyTab />
              </div>
            </TabsContent>

            <TabsContent value="archive">
              <div className="flex flex-col items-stretch justify-start gap-4">
                <ArchiveEmptyTab />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
}

const ProjectsEmptyTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8">
      <Image
        src={`${config.BASE_URL}/tmp/img_projects_main.png`}
        width={136}
        quality={100}
        height={200}
        alt=""
      />
      <div className="flex flex-col items-stretch justify-start gap-2">
        <Typography className="text-center text-[20px] font-semibold leading-[28px]">
          У вас пока нет проектов
        </Typography>
        <Typography className="text-center text-[15px] leading-[21px]">
          Проекты, которые вы будете создавать, появятся здесь
        </Typography>
      </div>
    </div>
  );
};

const ActiveProjectsEmptyTab: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-start gap-8">
      <Image
        src={`${config.BASE_URL}/tmp/img_projects_active.png`}
        width={216}
        quality={100}
        height={179}
        alt=""
      />
      <div className="flex flex-col items-stretch justify-start gap-2">
        <Typography className="text-center text-[20px] font-semibold leading-[28px]">
          У вас пока нет проектов в работе
        </Typography>
        <Typography className="text-center text-[15px] leading-[21px]">
          Вы можете предложить свой проект блогерам в разделе «Исполнители» или
          на главном экране
        </Typography>
      </div>
      <Button
        onClick={() => router.push("/")}
        className={cn("w-full text-white", "flex-1 bg-[#8065FF]")}
      >
        Найти исполнителя
      </Button>
    </div>
  );
};

const OffersEmptyTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8">
      <Image
        src={`${config.BASE_URL}/tmp/img_projects_offers.png`}
        width={155}
        quality={100}
        height={200}
        alt=""
      />
      <div className="flex flex-col items-stretch justify-start gap-2">
        <Typography className="text-center text-[20px] font-semibold leading-[28px]">
          У вас пока нет персональных предложений
        </Typography>
        <Typography className="text-center text-[15px] leading-[21px]">
          Как только исполнитель предложит вам сотрудничество, его визитка
          появится здесь
        </Typography>
      </div>
    </div>
  );
};

const FavouriteEmptyTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8">
      <Image
        src={`${config.BASE_URL}/tmp/img_projects_favourite.png`}
        width={149}
        quality={100}
        height={200}
        alt=""
      />
      <div className="flex flex-col items-stretch justify-start gap-2">
        <Typography className="text-center text-[20px] font-semibold leading-[28px]">
          В избранном пока ничего нет
        </Typography>
        <Typography className="text-center text-[15px] leading-[21px]">
          Не теряйте понравившихся блогеров. Добавляйте их визитки в «Избранное»
          и приступайте к работе в удобное для вас время
        </Typography>
      </div>
    </div>
  );
};

const ArchiveEmptyTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8">
      <Image
        src={`${config.BASE_URL}/tmp/img_projects_archive.png`}
        width={162}
        quality={100}
        height={200}
        alt=""
      />
      <div className="flex flex-col items-stretch justify-start gap-2">
        <Typography className="text-center text-[20px] font-semibold leading-[28px]">
          Здесь будет история ваших проектов
        </Typography>
        <Typography className="text-center text-[15px] leading-[21px]">
          Любые проекты, которые были завершены или отменены по какой-либо
          причине, будут храниться в архиве
        </Typography>
      </div>
    </div>
  );
};
