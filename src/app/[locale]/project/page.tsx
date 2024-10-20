"use client";

import { useCreateAd } from "@/entities/project/model/useCreateAd";
import { CreateAdRequest } from "@/entities/project/types";
import { CreateAdRequestSchema } from "@/entities/project/types/schema";
import { SocialNetworkDrawer } from "@/features/project";
import { BonusesDrawer } from "@/features/project/ui/BonusesDrawer";
import { CategoriesDrawer } from "@/features/project/ui/CategoriesDrawer";
import { ImagesDrawer } from "@/features/project/ui/ImagesDrawer";
import { PublicationsDrawer } from "@/features/project/ui/PublicationsDrawer";
import { RequirementsDrawer } from "@/features/project/ui/RequirementsDrawer";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function ProjectPage() {
  const router = useRouter();
  const methods = useForm<CreateAdRequest>({
    resolver: zodResolver(CreateAdRequestSchema),
    mode: "onChange",
  });

  const { handleSubmit, formState } = methods;
  const createAdMutation = useCreateAd({
    onSuccess: (data) => {
      if (data.guid) {
        router.push(`/project/${data.guid}` as any);
      }
    },
    onError: (error) => {
      console.error("Error creating ad:", error.message);
    },
  });

  const onSubmit = (data: CreateAdRequest) => {
    console.log("onSubmit called with data:", data);
    createAdMutation.mutate(data);
  };
  console.log(methods.getValues());
  console.log("Form errors:", formState.errors);

  const socialNetworks = methods.watch("requirements.social_networks");
  const isSocialNetworksFilled =
    Array.isArray(socialNetworks) && socialNetworks.length > 0;

  const categoryIds = methods.watch("category_ids");
  const isCategoriesFilled =
    Array.isArray(categoryIds) && categoryIds.length > 0;

  const publicationData = methods.watch("requirements.content_types");
  const isPublicationFilled =
    Array.isArray(publicationData) && publicationData.length > 0;

  const description = methods.watch("description");
  const deadline = methods.watch("deadline");
  const specification = methods.watch("specification");
  const isTechnicalTaskFilled = deadline?.trim() && specification?.trim();

  const bonus = methods.watch("bonus");
  const isBonusFilled = bonus?.trim();

  const logoUrl = methods.watch("logo_url");
  const bannerUrl = methods.watch("banner_url");
  const isImagesFilled = logoUrl?.trim() && bannerUrl?.trim();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      Социальная сеть
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Рекламируемая страница
                    </Typography>
                  </div>
                  {isSocialNetworksFilled && (
                    <input type="checkbox" checked readOnly />
                  )}
                </button>
              </SocialNetworkDrawer>

              {/* Button 2 */}
              <CategoriesDrawer>
                <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                    <IconList />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      1 - Категории
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Тематика проекта
                    </Typography>
                  </div>
                  {isCategoriesFilled && (
                    <input type="checkbox" checked readOnly />
                  )}
                </button>
              </CategoriesDrawer>
              {/* Button 3 */}
              <PublicationsDrawer>
                <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                    <IconText />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      2 - Публикация
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Формат публикации и цена за нее
                    </Typography>
                  </div>
                  {isPublicationFilled && (
                    <input type="checkbox" checked readOnly />
                  )}
                </button>
              </PublicationsDrawer>

              {/* Button 4 */}
              <RequirementsDrawer>
                <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                    <IconDocumentAdd />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      3 - Техническое задание
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Описание, сроки, условия
                    </Typography>
                  </div>
                  {isTechnicalTaskFilled && (
                    <input type="checkbox" checked readOnly />
                  )}
                </button>
              </RequirementsDrawer>

              {/* Button 5 */}
              <BonusesDrawer>
                <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                    <IconMoney />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      4 - Бонусы
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Текст для бонусов и промокодов
                    </Typography>
                  </div>
                  {isBonusFilled && <input type="checkbox" checked readOnly />}
                </button>
              </BonusesDrawer>

              {/* Button 6 */}
              <ImagesDrawer>
                <button className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3 active:bg-black">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-white group-active:bg-[#8065FF]">
                    <IconBusiness />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] group-active:text-white">
                      5 - Изображения
                    </Typography>
                    <Typography className="text-[14px] leading-[19.6px] group-active:text-white">
                      Логотип компании, фото
                    </Typography>
                  </div>
                  {isImagesFilled && <input type="checkbox" checked readOnly />}
                </button>
              </ImagesDrawer>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-center bg-white px-4 py-5">
            <button
              type="submit"
              className="w-full rounded-[32px] bg-[#171719] bg-opacity-[8%] px-2 pb-[18px] pt-[16px] text-[#171719] text-opacity-40"
            >
              Создать проект
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
