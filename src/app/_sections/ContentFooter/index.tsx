import IconAppstore from "@/shared/assets/icons/icon_appstore.svg";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import React from "react";

export const ContentFooter = () => {
  return (
    <>
      <div className="bg-bg-primary-inverse relative mx-auto mt-[120px] flex h-[488px] w-[1120px] items-stretch justify-start rounded-[32px] py-[79px] pl-[83px] pr-[134px]">
        <div className=" absolute left-10 top-[30%] h-[30px] w-[30px] rotate-12 rounded-[8px] bg-violet-main opacity-70" />
        <div className=" bg-bg-accent-yellow-secondary absolute bottom-[24%] left-[35%] h-10 w-10 -rotate-[30deg] rounded-[6px] opacity-70" />

        <div className="flex w-[662px] flex-col items-stretch justify-evenly ">
          <Typography variant={"caption2"} className="text-text-accent-lilac">
            Всего несколько шагов
          </Typography>
          <div className="flex flex-col gap-3">
            <Typography variant={"headline2"} className="text-white">
              скачайте приложение{" "}
            </Typography>
            <Typography variant={"headline2"} className="text-white">
              зарегистрируйтесь{" "}
            </Typography>
            <Typography variant={"headline2"} className="pr-24 text-white">
              ищите эксклюзивные предложения{" "}
            </Typography>
            <Typography variant={"headline2"} className="text-white">
              зарабатывайте{" "}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-between">
          <div className="relative h-[241px] w-[241px] self-center rounded-[32px]">
            <Image
              src={"/tmp/qr_code.png"}
              fill
              className="object-cover"
              alt="qr"
              quality={100}
            />
          </div>
          <div className="h-[80px] w-[280px]">
            <IconAppstore />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[131px] flex h-[120px] w-[1120px] items-start justify-start">
        <Typography className="text-center text-[26px] font-extrabold">
          In
          <span className="text-[26px] font-extrabold text-purple-500">
            BOOST
          </span>
        </Typography>
        <Typography
          variant={"caption2"}
          className="ml-[163px] whitespace-nowrap"
        >
          +7 700 000 99 00
        </Typography>
        <Typography variant={"caption2"} className="ml-[110px]">
          inboost@kz
        </Typography>
        <div className="ml-[79px] flex items-center justify-start gap-16">
          <Typography variant={"bodyL"}>Instagram</Typography>
          <Typography variant={"bodyL"}>Telegram</Typography>
          <Typography variant={"bodyL"}>Whatsapp</Typography>
        </div>
      </div>
    </>
  );
};
