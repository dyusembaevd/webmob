"use client";

import { config } from "@/config";
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
import React, { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";

export const ImagesDrawer = ({ children }: { children: ReactNode }) => {
  const { setValue } = useFormContext();

  // const [extraImages, setExtraImages] = useState<File[]>([]);
  // const [extraImagePreviews, setExtraImagePreviews] = useState<string[]>([]);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const hasValues = !!logoPreview && !!bannerPreview;

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // const handleExtraImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file && extraImages.length < 7) {
  //     setExtraImages((prev) => [...prev, file]);
  //     setExtraImagePreviews((prev) => [...prev, URL.createObjectURL(file)]);
  //   }
  // };

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
    return `${config.API_BASE}/statics/objects/${data.guid}`;
  };

  const handleApply = async () => {
    try {
      setIsUploading(true);

      if (logoFile) {
        const logoUrl = await uploadFile(logoFile);
        setValue("logo_url", logoUrl);
      }

      if (bannerFile) {
        const bannerUrl = await uploadFile(bannerFile);
        setValue("banner_url", bannerUrl);
      }

      setLogoFile(null);
      setBannerFile(null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
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
            <FileInputPreview
              preview={logoPreview}
              handleChange={(e) =>
                handleFileChange(e, setLogoFile, setLogoPreview)
              }
            />

            {/* Section 2: Главное изображение* */}
            <Typography className="mt-6 text-[16px] font-normal leading-[20.8px]">
              Главное изображение*
            </Typography>
            <FileInputPreview
              preview={bannerPreview}
              handleChange={(e) =>
                handleFileChange(e, setBannerFile, setBannerPreview)
              }
            />
          </div>

          {/* Section 3: Фото товара, контент для рекламы и др. */}
          {/* <Typography className="mt-6 text-[16px] font-normal leading-[20.8px]">
              Фото товара, контент для рекламы и др.
            </Typography>
            <div className="relative -mr-5 flex flex-nowrap items-center gap-4 overflow-x-auto overflow-y-hidden">
              {extraImagePreviews.map((preview, index) => (
                <FileImagePreview key={index} preview={preview} />
              ))}

              {extraImages.length < 7 && (
                <UploadButton handleChange={handleExtraImageChange} />
              )}
            </div>
          </div> */}
          {/* Save/Upload button */}
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
                disabled={!hasValues || isUploading}
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

const FileInputPreview = ({
  preview,
  handleChange,
}: {
  preview: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="group relative">
    {preview ? (
      <div className="relative h-[80px] w-[80px]">
        <img
          src={preview}
          alt="Preview"
          className="h-full w-full rounded-[12px] object-cover group-hover:bg-[#364467] group-hover:bg-opacity-40 group-hover:blur-[1px]"
        />
        <IconTrashWhite className="absolute inset-0 m-auto h-6 w-6 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    ) : (
      <div className="pointer-events-none flex h-[80px] w-[80px] items-center justify-center rounded-[12px] border border-[#1717191F] bg-[#8065FF0D] text-sm text-gray-500">
        <IconUpload />
      </div>
    )}
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="pointer-events-auto absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
    />
  </div>
);

const FileImagePreview = ({ preview }: { preview: string }) => (
  <div className="relative h-[80px] w-[80px] shrink-0">
    <img
      src={preview}
      alt="Extra Preview"
      className="h-full w-full rounded-[12px] object-cover"
    />
  </div>
);

const UploadButton = ({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[12px] border border-[#1717191F] bg-[#8065FF0D] text-sm text-gray-500">
    <IconUpload />
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
    />
  </div>
);
