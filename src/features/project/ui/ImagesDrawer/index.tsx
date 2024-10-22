"use client";

import { config } from "@/config";
import { CreateAdRequest } from "@/entities/project/types";
import CloseIcon from "@/shared/assets/icons/icon_close.svg";
import IconImageRed from "@/shared/assets/icons/icon_image_red.svg";
import IconTrashWhite from "@/shared/assets/icons/icon_trash_white.svg";
import IconUpload from "@/shared/assets/icons/icon_upload.svg";
import { Button } from "@/shared/ui/Button";
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

export const ImagesDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue, control } = useFormContext<CreateAdRequest>();

  const logoUrl =
    useWatch({
      control,
      name: "logo_url",
    }) || "";

  const bannerUrl =
    useWatch({
      control,
      name: "banner_url",
    }) || "";

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>(logoUrl);
  const [bannerPreview, setBannerPreview] = useState<string>(bannerUrl);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const hasValues = logoUrl && bannerUrl;

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerFile(file);
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${config.API_BASE}/statics/objects`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    const guid = data.guid;
    const imageUrl = `${config.API_BASE}/statics/objects/${guid}`;
    return imageUrl;
  };

  const handleApply = async () => {
    try {
      setIsUploading(true);

      let logoUrlValue = logoUrl;
      if (logoFile) {
        logoUrlValue = await uploadFile(logoFile);
        setValue("logo_url", logoUrlValue);
      }

      let bannerUrlValue = bannerUrl;
      if (bannerFile) {
        bannerUrlValue = await uploadFile(bannerFile);
        setValue("banner_url", bannerUrlValue);
      }

      setLogoFile(null);
      setBannerFile(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  // Remove the selected image on clicking the trash icon
  const handleRemoveImage = (imageType: "logo" | "banner") => {
    if (imageType === "logo") {
      setLogoFile(null);
      setLogoPreview("");
      setValue("logo_url", "");
    } else {
      setBannerFile(null);
      setBannerPreview("");
      setValue("banner_url", "");
    }
  };

  useEffect(() => {
    setLogoPreview(logoUrl);
    setBannerPreview(bannerUrl);
  }, [logoUrl, bannerUrl]);

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
            style={{ height: "calc(100dvh - 24px)" }}
            className="flex flex-col gap-3 overflow-auto px-4 pb-[102px]"
          >
            <div className="mb-7 flex items-center justify-between">
              <Typography
                variant="headline3"
                className="semibold w-full text-center text-[16px] leading-[22.4px]"
              >
                Изображения
              </Typography>

              <DrawerClose asChild>
                <CloseIcon
                  width={28}
                  height={28}
                  className="text-base-700 absolute right-5"
                />
              </DrawerClose>
            </div>

            <Typography
              variant="headline3"
              className="mb-2 text-[18px] font-semibold leading-[25.2px]"
            >
              Добавьте изображения
            </Typography>

            {/* Section 1: Логотип* */}
            <Typography className="text-[16px] font-normal leading-[20.8px]">
              Логотип*
            </Typography>
            <div className="flex items-center gap-4">
              <div className="group relative">
                {logoPreview ? (
                  <div className="relative h-[80px] w-[80px]">
                    <img
                      src={logoPreview}
                      alt="Logo Preview"
                      className="h-full w-full rounded-[12px] object-cover group-hover:bg-[#364467] group-hover:bg-opacity-40 group-hover:blur-[1px]"
                    />
                    <IconTrashWhite
                      className="absolute inset-0 m-auto h-6 w-6 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => handleRemoveImage("logo")}
                    />
                  </div>
                ) : (
                  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[12px] border border-[#1717191F] bg-[#8065FF0D] text-sm text-gray-500">
                    <IconUpload />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
            </div>

            {/* Section 2: Главное изображение* */}
            <Typography className="mt-6 text-[16px] font-normal leading-[20.8px]">
              Главное изображение*
            </Typography>
            <div className="flex items-center gap-4">
              <div className="group relative">
                {bannerPreview ? (
                  <div className="relative h-[80px] w-[80px]">
                    <img
                      src={bannerPreview}
                      alt="Banner Preview"
                      className="h-full w-full rounded-[12px] object-cover group-hover:bg-[#364467] group-hover:bg-opacity-40 group-hover:blur-[1px]"
                    />
                    <IconTrashWhite
                      className="absolute inset-0 m-auto h-6 w-6 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => handleRemoveImage("banner")}
                    />
                  </div>
                ) : (
                  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[12px] border border-[#1717191F] bg-[#8065FF0D] text-sm text-gray-500">
                    <IconUpload />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 flex w-full flex-nowrap justify-evenly gap-2 bg-white px-5 pb-5">
            <DrawerClose asChild>
              <Button
                className={cn(
                  "text-white",
                  !hasValues || isUploading
                    ? "flex-1 cursor-not-allowed bg-[#171719] bg-opacity-[0.08] text-[#17171966]"
                    : "flex-1 bg-[#8065FF]",
                )}
                onClick={handleApply}
              >
                {isUploading ? "Загрузка..." : "Сохранить"}
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
