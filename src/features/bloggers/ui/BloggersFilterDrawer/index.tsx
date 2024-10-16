"use client";

import { config } from "@/config";
import IconArrowDown from "@/shared/assets/icons/icon_arrow_d.svg";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import IconInstagram from "@/shared/assets/icons/icon_instagram_filled.svg";
import IconTiktok from "@/shared/assets/icons/icon_tiktok_filled.svg";
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
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

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

export const BloggersFilterDrawer = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [hasInstagram, setHasInstagram] = useState<boolean>(
    searchParams.get("has_instagram") === "true",
  );
  const [hasTiktok, setHasTiktok] = useState<boolean>(
    searchParams.get("has_tiktok") === "true",
  );
  const [selectedAges, setSelectedAges] = useState<string[]>(
    searchParams.get("age")?.split(",") || [],
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    searchParams.get("content_language")?.split(",") || [],
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(
    searchParams.get("city_id") === "1"
      ? "Астана"
      : searchParams.get("city_id") === "2"
        ? "Алматы"
        : null,
  );
  const [selectedGender, setSelectedGender] = useState<string | null>(
    searchParams.get("gender") || null,
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    searchParams.get("category_id")?.split(",").map(Number) || [],
  );
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [selectedPriceType, setSelectedPriceType] = useState<string[]>(
    searchParams.get("price_type")?.split(",") || [],
  );
  const hasFilters =
    hasInstagram ||
    hasTiktok ||
    selectedAges.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedCity !== null ||
    selectedGender !== null ||
    selectedCategories.length > 0 ||
    selectedPriceType.length > 0;

  const toggleAgeSelection = (age: string) => {
    setSelectedAges((prevSelectedAges) =>
      prevSelectedAges.includes(age)
        ? prevSelectedAges.filter((a) => a !== age)
        : [...prevSelectedAges, age],
    );
  };

  const toggleLanguageSelection = (language: string) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.includes(language)
        ? prevSelectedLanguages.filter((l) => l !== language)
        : [...prevSelectedLanguages, language],
    );
  };

  const handleCitySelection = (city: string) => {
    setSelectedCity((prevCity) => (prevCity === city ? null : city));
  };

  const handleGenderSelection = (gender: string) => {
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
  };

  const toggleCategorySelection = (categoryId: number) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId],
    );
  };

  const togglePriceTypeSelection = (priceType: string) => {
    setSelectedPriceType((prevPriceTypes) =>
      prevPriceTypes.includes(priceType)
        ? prevPriceTypes.filter((type) => type !== priceType)
        : [...prevPriceTypes, priceType],
    );
  };

  const createQueryString = (name: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  const handleReset = () => {
    setHasInstagram(false);
    setHasTiktok(false);
    setSelectedAges([]);
    setSelectedLanguages([]);
    setSelectedCity(null);
    setSelectedGender(null);
    setSelectedCategories([]);

    setSelectedPriceType([]);
    router.replace("/", undefined);
    // router.push(`?${createQueryString("has_instagram", null)}`);
    // router.push(`?${createQueryString("has_tiktok", null)}`);
    // router.push(`?${createQueryString("age", null)}`);
    // router.push(`?${createQueryString("content_language", null)}`);
    // router.push(`?${createQueryString("city_id", null)}`);
    // router.push(`?${createQueryString("gender", null)}`);
    // router.push(`?${createQueryString("category_id", null)}`);
    // router.push(`?${createQueryString("price_type", null)}`);
  };

  const handleApply = () => {
    let updatedParams = new URLSearchParams();

    if (hasInstagram) updatedParams.set("has_instagram", "true");
    if (hasTiktok) updatedParams.set("has_tiktok", "true");
    if (selectedAges.length > 0)
      updatedParams.set("age", selectedAges.join(","));
    if (selectedLanguages.length > 0)
      updatedParams.set("content_language", selectedLanguages.join(","));
    if (selectedCity)
      updatedParams.set("city_id", selectedCity === "Астана" ? "1" : "2");
    if (selectedGender) updatedParams.set("gender", selectedGender);
    if (selectedCategories.length > 0)
      updatedParams.set("category_id", selectedCategories.join(","));
    if (selectedPriceType.length > 0)
      updatedParams.set("price_type", selectedPriceType.join(","));

    router.push(`?${updatedParams.toString()}`);
  };

  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery<
    CategoryGroup[]
  >({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <div className="flex items-center gap-1">
      <Drawer>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent>
          <div
            style={{ height: "calc(100dvh-48px)" }}
            className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
          >
            <div className="mb-4 flex items-center justify-between">
              <Typography variant="headline3" className="w-full text-center">
                Поиск блоггеров
              </Typography>

              <DrawerClose asChild>
                <CloseIcon width={28} height={28} className="text-base-700" />
              </DrawerClose>
            </div>
            <Typography
              variant="headline3"
              className="mb-4 text-[20px] font-semibold leading-[28px]"
            >
              Выберите подходящие параметры для поиска
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Социальная сеть
              </Typography>
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox
                  value={"instagram"}
                  checked={hasInstagram}
                  onCheckedChange={(checked) =>
                    setHasInstagram(checked === true)
                  }
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconInstagram />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Instagram
                </Typography>
              </div>
              <div className="flex w-full items-center justify-start gap-2">
                <Checkbox
                  value={"tiktok"}
                  checked={hasTiktok}
                  onCheckedChange={(checked) => setHasTiktok(checked === true)}
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border-[1px] border-[#1717191F]">
                  <IconTiktok />
                </div>
                <Typography className="text-[16px] leading-[20.8px]">
                  Tiktok
                </Typography>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <Typography className=" text-[18px] font-semibold leading-[25.2px]">
                  Категории
                </Typography>
                <IconArrowDown
                  className={`transition-transform duration-300 ${
                    isCategoriesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isCategoriesOpen && (
                <>
                  {isLoadingCategories ? (
                    <Typography>Загрузка категорий...</Typography>
                  ) : (
                    categoriesData?.map((categoryGroup: CategoryGroup) => (
                      <div key={categoryGroup.id} className="mt-4">
                        <Typography className="text-[16px] font-semibold leading-[20.8px]">
                          {categoryGroup.title}
                        </Typography>
                        <div className="mt-2 flex w-full flex-wrap gap-2">
                          {categoryGroup.categories.map(
                            (category: Category) => (
                              <div
                                key={category.id}
                                className={`cursor-pointer rounded-[16px] border-[1px] border-black px-3 py-[7px] ${
                                  selectedCategories.includes(category.id)
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                }`}
                                onClick={() =>
                                  toggleCategorySelection(category.id)
                                }
                              >
                                <Typography className="text-[13px] font-medium leading-[18.2px]">
                                  {category.name}
                                </Typography>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </>
              )}
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Способ оплаты
              </Typography>
              <div className="flex w-full flex-col items-stretch gap-2">
                {[
                  { label: "Деньгами", value: "money" },
                  { label: "Товаром или услугой (бартер)", value: "barter" },
                ].map(({ label, value }) => (
                  <div key={value} className="flex items-center gap-2">
                    <Checkbox
                      value={value}
                      checked={selectedPriceType.includes(value)}
                      onCheckedChange={() => togglePriceTypeSelection(value)}
                    />
                    <Typography className="text-[16px] leading-[20.8px]">
                      {label}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Город
              </Typography>
              <div className="flex w-full flex-col items-stretch justify-start gap-2">
                {["Астана", "Алматы"].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Checkbox
                      value={city}
                      checked={selectedCity === city}
                      onCheckedChange={() => handleCitySelection(city)}
                    />
                    <Typography className="text-[16px] leading-[20.8px]">
                      {city}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Возраст аудитории
              </Typography>
              <div className="flex items-center justify-start gap-2">
                {["18-24", "25-34", "35-44", "45-54"].map((age) => (
                  <div
                    key={age}
                    className={`cursor-pointer rounded-[16px] border-[1px] border-black px-3 py-[7px] ${
                      selectedAges.includes(age)
                        ? "bg-black text-white"
                        : " bg-white text-black"
                    }`}
                    onClick={() => toggleAgeSelection(age)}
                  >
                    <Typography className="text-[13px] font-medium leading-[18.2px]">
                      {age}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Язык
              </Typography>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                {["ru", "kz", "en"].map((language) => (
                  <div key={language} className="flex items-center gap-2">
                    <Checkbox
                      value={language}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) =>
                        toggleLanguageSelection(language)
                      }
                    />
                    <Typography className="text-[16px] leading-[20.8px]">
                      {language === "ru"
                        ? "Русский"
                        : language === "kz"
                          ? "Казахский"
                          : "Английский"}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-2">
              <Typography className="mb-3 text-[18px] font-semibold leading-[25.2px]">
                Пол
              </Typography>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                {[
                  { label: "Женский", value: "female" },
                  { label: "Мужской", value: "male" },
                  { label: "Любой", value: "other" },
                ].map(({ label, value }) => (
                  <div key={value} className="flex items-center gap-2">
                    <Checkbox
                      value={value}
                      checked={selectedGender === value}
                      onCheckedChange={() => handleGenderSelection(value)}
                    />
                    <Typography className="text-[16px] leading-[20.8px]">
                      {label}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 flex w-full flex-nowrap justify-evenly gap-2 bg-white px-5 pb-5">
            <DrawerClose asChild>
              <Button
                variant={"ghost"}
                className="flex-1 border border-[#17171966] text-[16px] font-semibold"
                onClick={handleReset}
              >
                Сбросить
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                className={cn(
                  "text-white",
                  !hasFilters &&
                    "flex-1 cursor-not-allowed bg-[#171719] bg-opacity-[0.08] text-[#17171966]",
                  hasFilters && "flex-1 bg-[#8065FF]",
                )}
                onClick={handleApply}
                disabled={!hasFilters}
              >
                {" "}
                Применить
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
