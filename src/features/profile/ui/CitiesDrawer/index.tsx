"use client";

import { config } from "@/config";
import { useRouter } from "@/navigation";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

import { City } from "../../types";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: citiesData, isLoading } = useQuery<City[]>({
    queryKey: ["cities"],
    queryFn: () => getCities({ locale: locale as "ru" | "kz" | "en" }),
  });

  const [selectedCityId, setSelectedCityId] = useState<number | null>(
    searchParams.get("city_id")
      ? parseInt(searchParams.get("city_id") as string)
      : null,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleCitySelection = (cityId: number) => {
    setSelectedCityId(cityId);

    const params = new URLSearchParams(searchParams.toString());
    params.set("city_id", cityId.toString());

    router.push(`?${params.toString()}` as any);

    // Close the drawer after selection
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <div style={{ height: "calc(100dvh - 24px)" }}>
            <div className="flex items-center justify-between px-4 py-5">
              <Typography variant="headline3" className="w-full text-center">
                Выберите город
              </Typography>

              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Drawer"
              >
                <CloseIcon width={24} height={24} className="text-base-700" />
              </button>
            </div>

            <div className="px-4">
              {isLoading ? (
                <Typography>Загрузка городов...</Typography>
              ) : (
                citiesData?.map((city) => (
                  <div
                    key={city.id}
                    className="flex cursor-pointer items-center gap-2 py-2"
                    onClick={() => handleCitySelection(city.id)}
                  >
                    <Checkbox
                      value={city.id.toString()}
                      checked={selectedCityId === city.id}
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
