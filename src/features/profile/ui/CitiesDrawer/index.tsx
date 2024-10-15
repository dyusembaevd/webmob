import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import { Search } from "@/shared/ui/Search";
import { Typography } from "@/shared/ui/Typography";
import { ReactNode } from "react";

export const CitiesDrawer = ({ children }: { children: ReactNode }) => {
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
              <Search placeholder="Астана" />
            </div>

            <div className="mt-2"></div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
