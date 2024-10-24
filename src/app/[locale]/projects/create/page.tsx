"use client";

import { useCreateAd } from "@/entities/project/model/useCreateAd";
import { CreateAdRequest } from "@/entities/project/types";
import { CreateAdRequestSchema } from "@/entities/project/types/schema";
import { ProjectCreatedDrawer } from "@/entities/project/ui/ProjectCreatedDrawer";
import { SocialNetworkDrawer } from "@/features/project";
import { BonusesDrawer } from "@/features/project/ui/BonusesDrawer";
import { CategoriesDrawer } from "@/features/project/ui/CategoriesDrawer";
import { ImagesDrawer } from "@/features/project/ui/ImagesDrawer";
import { PublicationsDrawer } from "@/features/project/ui/PublicationsDrawer";
import { RequirementsDrawer } from "@/features/project/ui/RequirementsDrawer";
import { Link, useRouter } from "@/navigation";
import IconArrowBack from "@/shared/assets/icons/icon_arrow_back.svg";
import IconCheckboxChecked from "@/shared/assets/icons/icon_checkbox_checked.svg";
import IconDocumentAdd from "@/shared/assets/icons/icon_Document Add.svg";
import IconDocumentAddWhite from "@/shared/assets/icons/icon_document_add_white.svg";
import IconGallery from "@/shared/assets/icons/icon_gallery.svg";
import IconGalleryWhite from "@/shared/assets/icons/icon_gallery_white.svg";
import IconGlobal from "@/shared/assets/icons/icon_Global.svg";
import IconGlobalWhite from "@/shared/assets/icons/icon_global_white.svg";
import IconList from "@/shared/assets/icons/icon_List.svg";
import IconListWhite from "@/shared/assets/icons/icon_list_white.svg";
import IconMoney from "@/shared/assets/icons/icon_Money.svg";
import IconMoneyWhite from "@/shared/assets/icons/icon_money_white.svg";
import IconText from "@/shared/assets/icons/icon_Text Square.svg";
import IconTextSquareWhite from "@/shared/assets/icons/icon_text_square_white.svg";
import { Button } from "@/shared/ui/Button";
import { Calendar } from "@/shared/ui/Calendar";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function ProjectPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [createdProjectGuid, setCreatedProjectGuid] = useState<string | null>(
    null,
  );
  const router = useRouter();
  const methods = useForm<CreateAdRequest>({
    resolver: zodResolver(CreateAdRequestSchema),
    mode: "onChange",
  });

  const { handleSubmit, formState } = methods;
  const createAdMutation = useCreateAd({
    onSuccess: (data) => {
      if (data.guid) {
        setCreatedProjectGuid(data.guid);
        setIsDrawerOpen(true);
      }
    },
    onError: (error) => {
      console.error("Error creating ad:", error.message);
    },
  });
  const onSubmit = (data: CreateAdRequest) => {
    createAdMutation.mutate(data);
  };

  const socialNetworks = methods.watch("requirements.social_networks");
  const isSocialNetworksFilled =
    Array.isArray(socialNetworks) && socialNetworks.length > 0;

  const categoryIds = methods.watch("category_ids");
  const isCategoriesFilled =
    Array.isArray(categoryIds) && categoryIds.length > 0;

  const publicationData = methods.watch("requirements.content_types");
  const isPublicationFilled =
    Array.isArray(publicationData) && publicationData.length > 0;

  const deadline = methods.watch("deadline");
  const specification = methods.watch("specification");
  const isTechnicalTaskFilled = deadline?.trim() && specification?.trim();

  const bonus = methods.watch("bonus");
  const isBonusFilled = bonus?.trim();

  const logoUrl = methods.watch("logo_url");
  const bannerUrl = methods.watch("banner_url");
  const isImagesFilled = logoUrl?.trim() && bannerUrl?.trim();
  const cityIds = methods.watch("city_ids");
  const maxPrice = methods.watch("max_price");
  const minPrice = methods.watch("min_price");
  const requirements = methods.watch("requirements");

  const isFormValid =
    categoryIds?.length > 0 &&
    cityIds?.length > 0 &&
    !!deadline?.trim() &&
    maxPrice > 0 &&
    minPrice > 0 &&
    !!requirements &&
    !!specification?.trim();

  const closeDrawer = () => setIsDrawerOpen(false);

  const iconTransition = {
    duration: 0.1,
    ease: "easeInOut",
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex min-h-[100dvh] w-full flex-col items-stretch justify-start gap-6 p-5">
          <motion.div
            style={{ boxShadow: "0px 3px 12px 0px #D0D0D3" }}
            className="fixed left-0 top-0 z-30 flex w-full items-center justify-start bg-white py-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={iconTransition}
          >
            <IconArrowBack
              className={"fixed left-2 top-2 hover:cursor-pointer"}
              onClick={() => router.back()}
            />
            <Typography className="flex-1 text-center text-[16px] font-semibold leading-[22.4px]">
              Добавление проекта
            </Typography>
          </motion.div>
          <motion.div
            className="flex w-full flex-col items-stretch justify-start gap-5 pb-[120px] pt-[48px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={iconTransition}
          >
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
              <SocialNetworkDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    {/* Default Icon */}
                    <IconGlobal className="group-hover:hidden group-active:hidden" />
                    {/* White Icon on hover/press */}
                    <IconGlobalWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    {/* Change text color on hover and press */}
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      Социальная сеть
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Рекламируемая страница
                    </Typography>
                  </div>

                  {isSocialNetworksFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </SocialNetworkDrawer>

              <CategoriesDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    <IconList className="group-hover:hidden group-active:hidden" />
                    <IconListWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      1 - Категории
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Тематика проекта
                    </Typography>
                  </div>

                  {isCategoriesFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </CategoriesDrawer>

              <PublicationsDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    <IconText className="group-hover:hidden group-active:hidden" />
                    <IconTextSquareWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      2 - Публикация
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Формат публикации и цена за нее
                    </Typography>
                  </div>

                  {isPublicationFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </PublicationsDrawer>

              <RequirementsDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    <IconDocumentAdd className="group-hover:hidden group-active:hidden" />
                    <IconDocumentAddWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      3 - Техническое задание
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Описание, сроки, условия
                    </Typography>
                  </div>

                  {isTechnicalTaskFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </RequirementsDrawer>

              <BonusesDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    <IconMoney className="group-hover:hidden group-active:hidden" />
                    <IconMoneyWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      4 - Бонусы
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Текст для бонусов и промокодов
                    </Typography>
                  </div>

                  {isBonusFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </BonusesDrawer>

              <ImagesDrawer>
                <motion.button
                  className="group flex items-center justify-start gap-3 rounded-[16px] bg-[#364467] bg-opacity-15 px-4 py-3"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ background: "#000000" }}
                  transition={iconTransition}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center self-center rounded-[8px] bg-white group-hover:bg-[#8065FF] group-active:bg-[#8065FF]"
                    transition={iconTransition}
                  >
                    <IconGallery className="group-hover:hidden group-active:hidden" />
                    <IconGalleryWhite className="hidden group-hover:block group-active:block" />
                  </motion.div>

                  <div className="flex flex-1 flex-col items-start justify-start gap-[2px]">
                    <Typography className="text-[16px] leading-[20.8px] text-[#364467] group-hover:text-white group-active:text-white">
                      5 - Изображения
                    </Typography>
                    <Typography className="truncate text-[14px] leading-[19.6px] text-[#364467] group-hover:text-white group-active:text-white">
                      Логотип компании, фото
                    </Typography>
                  </div>

                  {isImagesFilled && (
                    <IconCheckboxChecked className="self-center" />
                  )}
                </motion.button>
              </ImagesDrawer>
            </div>
          </motion.div>

          <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-center bg-white px-4 py-5">
            <motion.button
              type="submit"
              disabled={!isFormValid}
              className={cn(
                "w-full rounded-[32px] px-2 pb-[18px] pt-[16px]",
                isFormValid
                  ? "bg-[var(--bg-accent,#8065FF)] text-white"
                  : "cursor-not-allowed bg-[#171719] bg-opacity-[8%] text-[#171719] text-opacity-40",
              )}
              whileTap={{ scale: 0.95 }}
              transition={iconTransition}
            >
              Создать проект
            </motion.button>
          </div>
        </div>
      </form>
      <ProjectCreatedDrawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        onMainPage={() => {
          closeDrawer();
          router.push("/");
        }}
        onProjectPreview={() => {
          if (createdProjectGuid) {
            closeDrawer();
            router.push(`/projects/${createdProjectGuid}` as any);
          }
        }}
      />
    </FormProvider>
  );
}
