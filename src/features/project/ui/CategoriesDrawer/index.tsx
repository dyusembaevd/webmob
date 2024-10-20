// components/CategoriesDrawer.tsx
"use client";

import { config } from "@/config";
import { CreateAdRequest } from "@/entities/project/types";
import IconArrowDown from "@/shared/assets/icons/icon_arrow_d.svg";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// components/CategoriesDrawer.tsx

interface Category {
  id: number;
  name: string;
  color: string;
  logo_url: string;
}

interface CategoryGroup {
  id: number;
  title: string;
  categories: Category[];
}

const fetchCategories = async (): Promise<CategoryGroup[]> => {
  const res = await fetch(`${config.API_BASE}/categories?lang=ru`);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

export const CategoriesDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue, control } = useFormContext<CreateAdRequest>();

  // Watch the 'category_ids' field to initialize selected categories
  const categoryIds = useWatch({
    control,
    name: "category_ids",
  });

  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    categoryIds || [],
  );
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);

  // Fetch categories using react-query
  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery<
    CategoryGroup[]
  >({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Update selectedCategories when categoryIds change
  useEffect(() => {
    setSelectedCategories(categoryIds || []);
  }, [categoryIds]);

  const toggleCategorySelection = (categoryId: number) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId],
    );
  };

  const hasValues = selectedCategories.length > 0;

  const handleApply = () => {
    // Update the form state
    setValue("category_ids", selectedCategories);
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <Drawer>
          <DrawerTrigger
            asChild
            className="flex w-full items-stretch justify-stretch"
          >
            {children}
          </DrawerTrigger>
          <DrawerContent>
            <div
              style={{ height: "calc(100dvh - 48px)" }}
              className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
            >
              <div className="mb-4 flex items-center justify-between">
                <Typography
                  variant="headline3"
                  className="semibold w-full text-center text-[16px] leading-[22.4px]"
                >
                  Категории
                </Typography>

                <DrawerClose asChild>
                  <CloseIcon width={28} height={28} className="text-base-700" />
                </DrawerClose>
              </div>
              <Typography
                variant="headline3"
                className="mb-4 text-[18px] font-semibold leading-[25.2px]"
              >
                Выберите тематику вашего проекта из предложенных категорий
              </Typography>

              <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
                {isLoadingCategories ? (
                  <Typography>Загрузка категорий...</Typography>
                ) : (
                  categoriesData?.map((categoryGroup: CategoryGroup) => (
                    <div key={categoryGroup.id} className="mt-4">
                      <Typography className="text-[16px] font-semibold leading-[20.8px]">
                        {categoryGroup.title}
                      </Typography>
                      <div className="mt-2 flex w-full flex-wrap gap-2">
                        {categoryGroup.categories.map((category: Category) => (
                          <div
                            key={category.id}
                            className={cn(
                              "cursor-pointer rounded-[16px] border-[1px] border-black px-3 py-[7px]",
                              selectedCategories.includes(category.id)
                                ? "bg-black text-white"
                                : "bg-white text-black",
                            )}
                            onClick={() => toggleCategorySelection(category.id)}
                          >
                            <Typography className="text-[13px] font-medium leading-[18.2px]">
                              {category.name}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="absolute bottom-0 flex w-full flex-nowrap justify-evenly gap-2 bg-white px-5 pb-5">
              <DrawerClose asChild>
                <Button
                  className={cn(
                    "text-white",
                    !hasValues
                      ? "flex-1 cursor-not-allowed bg-[#171719] bg-opacity-[0.08] text-[#17171966]"
                      : "flex-1 bg-[#8065FF]",
                  )}
                  onClick={handleApply}
                  disabled={!hasValues}
                >
                  Сохранить
                </Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
