"use client";

import { Params } from "@/config";
import { usePathname, useRouter } from "@/navigation";
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
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export const LanguagesDrawer = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = useLocale();
  console.log(locale);

  return (
    <div className="flex items-center gap-1">
      <Drawer>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent>
          <div style={{ height: "calc(100dvh-48px)" }}>
            <div className="flex items-center justify-between px-4 py-5">
              <Typography variant="headline3">Выберите язык</Typography>

              <DrawerClose asChild>
                <CloseIcon width={24} height={24} className="text-base-700" />
              </DrawerClose>
            </div>

            <div className="flex flex-col items-stretch">
              <Button
                onClick={() =>
                  router.replace(
                    { pathname, params: params as Params },
                    { locale: "ru" },
                  )
                }
                variant={"ghost"}
                className={cn(
                  locale === "ru" && "bg-base-200",
                  "justify-start p-3 pl-6",
                )}
              >
                Русский
              </Button>

              <Button
                onClick={() =>
                  router.replace(
                    { pathname, params: params as Params },
                    { locale: "kz" },
                  )
                }
                variant={"ghost"}
                className={cn(
                  locale === "kz" && "bg-base-200",
                  "justify-start p-3 pl-6",
                )}
              >
                Казахский
              </Button>
              <Button
                onClick={() =>
                  router.replace(
                    { pathname, params: params as Params },
                    { locale: "en" },
                  )
                }
                variant={"ghost"}
                className={cn(
                  locale === "en" && "bg-base-200",
                  "justify-start p-3 pl-6",
                )}
              >
                Английский
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
