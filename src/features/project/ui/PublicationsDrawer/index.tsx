// components/PublicationsDrawer.tsx
"use client";

import { config } from "@/config";
import { CreateAdRequest, RequirementItem } from "@/entities/project/types";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import React, { ReactNode, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// components/PublicationsDrawer.tsx

// components/PublicationsDrawer.tsx

export const PublicationsDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue, control } = useFormContext<CreateAdRequest>();

  // Watch form fields to sync with the drawer
  const contentTypes =
    useWatch({
      control,
      name: "requirements.content_types",
    }) || [];

  const priceTypes =
    useWatch({
      control,
      name: "requirements.price_types",
    }) || [];

  const minPrice = useWatch({
    control,
    name: "min_price",
  });

  const maxPrice = useWatch({
    control,
    name: "max_price",
  });

  // Local state for selections
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    contentTypes.map((item: RequirementItem) => item.value),
  );

  const [selectedPriceTypes, setSelectedPriceTypes] = useState<string[]>(
    priceTypes.map((item: RequirementItem) => item.value),
  );

  const [minPriceInput, setMinPriceInput] = useState<number | "">(
    minPrice || "",
  );
  const [maxPriceInput, setMaxPriceInput] = useState<number | "">(
    maxPrice || "",
  );

  // Content type options mapping labels to values
  const contentTypeOptions = [
    { label: "Пост", value: "post" },
    { label: "Пост+Сторис", value: "post_story" },
    { label: "Сторис", value: "story" },
    { label: "Сторис + Reels", value: "story_reels" },
    { label: "Reels", value: "reels" },
    { label: "Любой", value: "any" },
  ];

  // Price type options
  const priceTypeOptions = [
    { label: "Деньгами", value: "money" },
    { label: "Товаром или услугой (бартер)", value: "barter" },
  ];

  const hasValues =
    selectedContentTypes.length > 0 || selectedPriceTypes.length > 0;

  const handleApply = () => {
    // Update requirements.content_types
    setValue(
      "requirements.content_types",
      selectedContentTypes.map((value) => ({
        type: "content_type",
        value,
      })),
    );

    // Update requirements.price_types
    setValue(
      "requirements.price_types",
      selectedPriceTypes.map((value) => ({
        type: "price_type",
        value,
      })),
    );

    // Update min_price and max_price
    setValue("min_price", minPriceInput || 0);
    setValue("max_price", maxPriceInput || 0);
  };

  return (
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
                Публикация
              </Typography>

              <DrawerClose asChild>
                <CloseIcon width={28} height={28} className="text-base-700" />
              </DrawerClose>
            </div>

            {/* Section 1: Content Types */}
            <Typography
              variant="headline3"
              className="mb-4 text-[18px] font-semibold leading-[25.2px]"
            >
              Выберите формат публикации
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              {contentTypeOptions.map(({ label, value }) => (
                <div key={value} className="flex items-center gap-2">
                  <Checkbox
                    value={value}
                    checked={selectedContentTypes.includes(value)}
                    onCheckedChange={() => {
                      setSelectedContentTypes((prev) =>
                        prev.includes(value)
                          ? prev.filter((v) => v !== value)
                          : [...prev, value],
                      );
                    }}
                  />
                  <Typography className="text-[16px] leading-[20.8px]">
                    {label}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Section 2: Price Types */}
            <Typography
              variant="headline3"
              className="mb-4 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Выберите способ оплаты за рекламу
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              {priceTypeOptions.map(({ label, value }) => (
                <div key={value} className="flex items-center gap-2">
                  <Checkbox
                    value={value}
                    checked={selectedPriceTypes.includes(value)}
                    onCheckedChange={() => {
                      setSelectedPriceTypes((prev) =>
                        prev.includes(value)
                          ? prev.filter((v) => v !== value)
                          : [...prev, value],
                      );
                    }}
                  />
                  <Typography className="text-[16px] leading-[20.8px]">
                    {label}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Section 3: Price Range */}
            <Typography
              variant="headline3"
              className="mb-4 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Укажите сумму оплаты (не обязательно)
            </Typography>
            <div className="flex items-center gap-2">
              {/* Min Price */}
              <label
                htmlFor="minPrice"
                className="text-[14px] font-normal leading-[19.6px]"
                style={{ fontFamily: "Roboto" }}
              >
                от
              </label>
              <input
                type="number"
                id="minPrice"
                value={minPriceInput}
                onChange={(e) => setMinPriceInput(e.target.valueAsNumber || "")}
                className="h-[52px] w-full rounded-[24px] border border-[#1717191F] px-[14px] py-[6px] focus:border-[#8065FF] focus:outline-none"
                placeholder="Цена, ₸"
                min={0}
              />
              {/* Max Price */}
              <label
                htmlFor="maxPrice"
                className="text-[14px] font-normal leading-[19.6px]"
                style={{ fontFamily: "Roboto" }}
              >
                до
              </label>
              <input
                type="number"
                id="maxPrice"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(e.target.valueAsNumber || "")}
                className="h-[52px] w-full rounded-[24px] border border-[#1717191F] px-[14px] py-[6px] focus:border-[#8065FF] focus:outline-none"
                placeholder="Цена, ₸"
                min={0}
              />
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
  );
};
