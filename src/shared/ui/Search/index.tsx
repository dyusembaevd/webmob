"use client";

import { config } from "@/config";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Checkbox } from "@/shared/ui/Checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import React, { ReactNode, useState } from "react";

interface City {
  id: number;
  slug: string;
  name: string;
}

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

export const CitiesDrawer = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();
  const { data: citiesData, isLoading } = useQuery<City[]>({
    queryKey: ["cities"],
    queryFn: () => getCities({ locale: locale as "ru" | "kz" | "en" }),
  });

  const [selectedCityIds, setSelectedCityIds] = useState<number[]>([]);

  const handleCitySelection = (cityId: number) => {
    setSelectedCityIds((prevSelected) =>
      prevSelected.includes(cityId)
        ? prevSelected.filter((id) => id !== cityId)
        : [...prevSelected, cityId],
    );
  };

  return (
    <div className="flex items-center gap-1">
      <Drawer>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent>
          <div style={{ height: "calc(100dvh - 24px)" }}>
            <div className="flex items-center justify-between px-4 py-5">
              <Typography variant="headline3">Выберите город</Typography>

              <DrawerClose asChild>
                <CloseIcon width={24} height={24} className="text-base-700" />
              </DrawerClose>
            </div>

            <div className="px-4">
              {isLoading ? (
                <Typography>Загрузка городов...</Typography>
              ) : (
                citiesData?.map((city) => (
                  <div key={city.id} className="flex items-center gap-2 py-2">
                    <Checkbox
                      value={city.id.toString()}
                      checked={selectedCityIds.includes(city.id)}
                      onCheckedChange={() => handleCitySelection(city.id)}
                    />
                    <Typography>{city.name}</Typography>
                  </div>
                ))
              )}
            </div>

            <div className="mt-2"></div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
