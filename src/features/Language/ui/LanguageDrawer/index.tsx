"use client";

import { usePathname, useRouter } from "@/navigation";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/Drawer";
import { Typography } from "@/shared/ui/Typography";
import { useLocale } from "next-intl";
import React, { ReactNode, useState } from "react";

interface LanguageOption {
  code: "ru" | "kz" | "en";
  name: string;
}

export const LanguagesDrawer = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"ru" | "kz" | "en">(
    locale as "ru" | "kz" | "en",
  );

  const languages: LanguageOption[] = [
    { code: "ru", name: "Русский" },
    { code: "kz", name: "Казахский" },
    { code: "en", name: "Английский" },
  ];

  const handleLanguageSelection = (languageCode: "ru" | "kz" | "en") => {
    setSelectedLanguage(languageCode);

    router.replace(pathname as any, { locale: languageCode });

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
                Выберите язык
              </Typography>

              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Drawer"
              >
                <CloseIcon
                  width={24}
                  height={24}
                  className="text-base-700 absolute right-5"
                />
              </button>
            </div>

            <div className="px-4">
              {languages.map((language) => (
                <div
                  key={language.code}
                  className="flex cursor-pointer items-center gap-2 py-2"
                  onClick={() => handleLanguageSelection(language.code)}
                >
                  <Checkbox
                    value={language.code}
                    checked={selectedLanguage === language.code}
                    onCheckedChange={() =>
                      handleLanguageSelection(language.code)
                    }
                  />
                  <Typography>{language.name}</Typography>
                </div>
              ))}
            </div>

            <div className="mt-2"></div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
