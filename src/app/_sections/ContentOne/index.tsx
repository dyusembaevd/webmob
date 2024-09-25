import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import { RegisterForm } from "@/widgets/RegisterForm";
import { SettingsCard } from "@/widgets/SettingsCard";
import Image from "next/image";
import React from "react";

export const ContentOne = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-[162px] flex w-full items-center justify-center">
        <div className="flex flex-col items-stretch justify-start gap-2">
          <Typography className="text-center text-[36px] font-extrabold">
            In
            <span className="text-[36px] font-extrabold text-purple-500">
              BOOST
            </span>
          </Typography>
          <Typography className="font-medium">
            Уникальное приложение по поиску сотрудничества
          </Typography>
        </div>
      </div>
      {/* Content_1 */}
      <div className="relative mx-auto h-[640px] w-[1120px]">
        <div className="absolute -right-[124px] bottom-[65px] h-[339px] w-[765px]">
          <Image alt="cubes" src={"/tmp/cubes.png"} fill quality={100} />
        </div>
        <div className="flex w-[789px] flex-col items-stretch justify-start gap-[6px] pt-[69px]">
          <Typography variant={"headline1"}>
            Новая{" "}
            <span className="rounded-[26px] bg-bg-accent-subduet-active px-5">
              платформа
            </span>{" "}
            для
          </Typography>
          <Typography variant={"headline1"}>блогеров и бизнеса</Typography>
          <Typography variant={"headline1"}>в Казахстане</Typography>
        </div>
        <Typography variant={"bodyL"} className="mt-3 w-[478px]">
          <span className="text-[24px] font-semibold leading-[33.6px]">
            BOOST
          </span>
          аните свой бизнес — просто размещайте свои проекты и визитки в нашем
          приложении, а дальше мы сделаем все за вас
        </Typography>
        <RegisterForm>
          <Button variant={"secondary"} className="mt-10">
            Узнать больше
          </Button>
        </RegisterForm>
        <div className="absolute bottom-0 right-0 z-50">
          <SettingsCard />
        </div>
      </div>
      {/* Content_1_footer */}
      <div className="relative z-0 mx-auto -mt-16 h-[488px] w-[1120px] rounded-[32px] bg-bg-primary-inverse px-[223px] pb-[169px] pt-[129px]">
        <img
          src="/tmp/insta_rotated.png"
          className="absolute right-[13%] top-[40%] h-[71px] w-[71px]"
        />
        <div className=" absolute left-28 top-56 h-[42px] w-[42px] rotate-12 rounded-[12px] bg-bg-accent opacity-70" />
        <div className=" absolute bottom-12 left-16 h-24 w-24 rotate-45 rounded-[25px] bg-bg-accent-yellow-secondary opacity-70" />

        <div className="flex w-[674px] flex-col items-stretch justify-start gap-3">
          <Typography
            variant={"caption2"}
            className="text-center text-text-accent-lilac"
          >
            Наша миссия
          </Typography>
          <Typography
            variant={"headline2"}
            className="text-center text-bg-primary"
          >
            Предоставить возможность бизнесу и блогерам Казахстана найти друг
            друга всего в два клика
          </Typography>
        </div>
      </div>
    </>
  );
};
