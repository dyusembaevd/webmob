import IconLogoFull from "@/shared/assets/icons/icon_logo_full.svg";
import { Typography } from "@/shared/ui/Typography";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex h-[454px] w-full flex-col items-stretch justify-start gap-14 bg-[#171719] px-5 pb-[120px] pt-8">
      <div className="flex w-full items-center justify-center">
        <IconLogoFull />
      </div>
      <Typography className="text-center text-[20px] font-semibold leading-[28px] text-[#8065FF]">
        +7 778 000 18 80
      </Typography>
      <div className="flex flex-col items-stretch justify-start gap-4">
        <Typography className="text-center text-[16px] font-normal leading-[20.8px] text-white">
          Пользовательское соглашение
        </Typography>
        <Typography className="text-center text-[16px] font-normal leading-[20.8px] text-white">
          Политика конфиденциальности
        </Typography>
      </div>
      <Typography className="text-center text-[12px] font-normal leading-[15.6px] text-white">
        ©2024 ИП “InBOOST”
      </Typography>
    </div>
  );
};
