// components/RequirementsDrawer.tsx
"use client";

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
import { RadioGroup, RadioGroupItem } from "@/shared/ui/RadioGroup";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import React, { ReactNode, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext, useWatch } from "react-hook-form";

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

// components/RequirementsDrawer.tsx

export const RequirementsDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue, control } = useFormContext<CreateAdRequest>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Watch form fields to synchronize with the drawer
  const cityIds = useWatch({ control, name: "city_ids" }) || [];
  const requirements = useWatch({ control, name: "requirements" }) || {};
  const deadline = useWatch({ control, name: "deadline" }) || "";
  const specification = useWatch({ control, name: "specification" }) || "";
  const description = useWatch({ control, name: "description" }) || "";

  // Local state
  const [selectedCities, setSelectedCities] = useState<number[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [deadlineOption, setDeadlineOption] = useState<string>("no_deadline");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [specificationText, setSpecificationText] = useState<string>("");
  const [descriptionText, setDescriptionText] = useState<string>("");

  // Handle city selection
  const toggleCitySelection = (cityId: number) => {
    setSelectedCities((prevCities) =>
      prevCities.includes(cityId)
        ? prevCities.filter((id) => id !== cityId)
        : [...prevCities, cityId],
    );
  };

  // Handle age selection
  const toggleAgeSelection = (age: string) => {
    setSelectedAges((prevAges) =>
      prevAges.includes(age)
        ? prevAges.filter((a) => a !== age)
        : [...prevAges, age],
    );
  };

  // Determine if the drawer has values
  const hasValues =
    selectedCities.length > 0 ||
    selectedLanguage ||
    (deadlineOption === "set_deadline" && selectedDate) ||
    selectedAges.length > 0 ||
    selectedGender ||
    specificationText.trim() !== "" ||
    descriptionText.trim() !== "";

  // Handle Apply
  const handleApply = () => {
    // Update city_ids
    setValue("city_ids", selectedCities);

    // Update requirements.languages
    if (selectedLanguage) {
      setValue("requirements.languages", [
        { type: "content_language", value: selectedLanguage },
      ]);
    } else {
      setValue("requirements.languages", undefined);
    }

    // Update deadline
    if (deadlineOption === "set_deadline" && selectedDate) {
      setValue("deadline", selectedDate.toISOString());
    } else {
      setValue("deadline", "");
    }

    // Update requirements.ages
    if (selectedAges.length > 0) {
      setValue(
        "requirements.ages",
        selectedAges.map((age) => ({ type: "age", value: age })),
      );
    } else {
      setValue("requirements.ages", undefined);
    }

    // Update requirements.genders
    if (selectedGender) {
      setValue("requirements.genders", [
        { type: "gender", value: selectedGender },
      ]);
    } else {
      setValue("requirements.genders", undefined);
    }

    // Update specification
    setValue("specification", specificationText.trim());

    // Update description
    setValue("description", descriptionText.trim());
  };

  // Update local state when form data changes
  useEffect(() => {
    if (isDrawerOpen) {
      setSelectedCities(cityIds);
      setSelectedLanguage(requirements.languages?.[0]?.value || "");
      setDeadlineOption(deadline ? "set_deadline" : "no_deadline");
      setSelectedDate(deadline ? new Date(deadline) : null);
      setSelectedAges(
        requirements.ages?.map((item: RequirementItem) => item.value) || [],
      );
      setSelectedGender(requirements.genders?.[0]?.value || "");
      setSpecificationText(specification);
      setDescriptionText(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawerOpen]);

  return (
    <div className="flex items-center gap-1">
      <Drawer
        open={isDrawerOpen}
        onOpenChange={(open) => setIsDrawerOpen(open)}
      >
        <DrawerTrigger
          asChild
          className="flex w-full items-stretch justify-stretch"
        >
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <div
            style={{ height: "calc(100dvh - 24px)" }}
            className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
          >
            <div className="mb-7 flex items-center justify-between">
              <Typography
                variant="headline3"
                className="semibold w-full text-center text-[16px] leading-[22.4px]"
              >
                Техническое задание
              </Typography>

              <DrawerClose asChild>
                <CloseIcon
                  width={28}
                  height={28}
                  className="text-base-700 absolute right-5"
                />
              </DrawerClose>
            </div>

            {/* Section 1: Cities */}
            <Typography
              variant="headline3"
              className="mb-2 text-[18px] font-semibold leading-[25.2px]"
            >
              На какой город ориентирована ваша реклама?
            </Typography>
            <div className="flex w-full flex-col items-stretch justify-start gap-2">
              {[
                { label: "Астана", value: 1 },
                { label: "Алматы", value: 2 },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center gap-2">
                  <Checkbox
                    value={value.toString()}
                    checked={selectedCities.includes(value)}
                    onCheckedChange={() => toggleCitySelection(value)}
                  />
                  <Typography className="text-[16px] leading-[20.8px]">
                    {label}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Section 2: Languages */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Выберите язык рекламы
            </Typography>
            <RadioGroup
              value={selectedLanguage}
              onValueChange={(value) => setSelectedLanguage(value)}
            >
              {[
                { label: "Казахский", value: "kz" },
                { label: "Русский", value: "ru" },
                { label: "Английский", value: "en" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center gap-2">
                  <RadioGroupItem value={value} id={value} />
                  <label htmlFor={value}>
                    <Typography className="text-[16px] leading-[20.8px]">
                      {label}
                    </Typography>
                  </label>
                </div>
              ))}
            </RadioGroup>

            {/* Section 3: Deadline */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Укажите сроки действия проекта
            </Typography>
            <RadioGroup
              value={deadlineOption}
              onValueChange={(value) => setDeadlineOption(value)}
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no_deadline" id="no_deadline" />
                <label htmlFor="no_deadline">
                  <Typography className="text-[16px] leading-[20.8px]">
                    Без сроков
                  </Typography>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="set_deadline" id="set_deadline" />
                <label htmlFor="set_deadline">
                  <Typography className="text-[16px] leading-[20.8px]">
                    Установить дедлайн
                  </Typography>
                </label>
              </div>
            </RadioGroup>
            {deadlineOption === "set_deadline" && (
              <div className="mt-4">
                {/* DatePicker component */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  className="w-[335px] rounded border p-2"
                  placeholderText="Выберите дату"
                />
              </div>
            )}

            {/* Section 4: Ages */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              На какой возраст аудитории ориентирована ваша реклама?
            </Typography>
            <div className="flex items-center justify-start gap-2">
              {["18-24", "25-34", "35-44", "45-54"].map((age) => (
                <div
                  key={age}
                  className={`cursor-pointer rounded-[16px] border-[1px] border-[#171719] border-opacity-[40%] px-3 py-[7px] ${
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

            {/* Section 5: Genders */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              На какой пол ориентирована ваша реклама?
            </Typography>
            <RadioGroup
              value={selectedGender}
              onValueChange={(value) => setSelectedGender(value)}
            >
              {[
                { label: "Женский", value: "female" },
                { label: "Мужской", value: "male" },
                { label: "Любой", value: "other" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center gap-2">
                  <RadioGroupItem value={value} id={value} />
                  <label htmlFor={value}>
                    <Typography className="text-[16px] leading-[20.8px]">
                      {label}
                    </Typography>
                  </label>
                </div>
              ))}
            </RadioGroup>

            {/* Section 6: Audience Specification (Dummy Input) */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Опишите вашу аудиторию (не обязательно)
            </Typography>
            <textarea
              placeholder="Какие интересы у вашей аудитории, доход, образ жизни и т.д."
              className="h-[150px] w-full resize-none rounded-[16px] border border-[#1717191F] p-4 focus:border-[#8065FF] focus:outline-none"
              style={{ lineClamp: 3 }}
            />

            {/* Section 7: Расскажите о вашем проекте (бизнесе) */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Расскажите о вашем проекте (бизнесе)
            </Typography>
            <textarea
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
              placeholder="Чем занимается ваша компания, какие услуги или товары предлагает"
              className="h-[150px] w-full resize-none rounded-[16px] border border-[#1717191F] p-4 focus:border-[#8065FF] focus:outline-none"
              style={{ lineClamp: 3 }}
            />

            {/* Section 8: Техническое задание */}
            <Typography
              variant="headline3"
              className="mb-2 mt-6 text-[18px] font-semibold leading-[25.2px]"
            >
              Техническое задание
            </Typography>
            <textarea
              value={specificationText}
              onChange={(e) => setSpecificationText(e.target.value)}
              placeholder="Расскажите о вашем проекте (бизнесе), укажите условия размещения рекламы и требования к контенту."
              className="min-h-[150px] w-full resize-none rounded-[16px] border border-[#1717191F] p-4 focus:border-[#8065FF] focus:outline-none"
              style={{ lineClamp: 4 }}
            />
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
