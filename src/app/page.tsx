"use client";

import { Typography } from "@/shared/ui/Typography";
import { BloggerCard } from "@/widgets/BloggerCard";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ContentFooter } from "./_sections/ContentFooter";
import { ContentOne } from "./_sections/ContentOne";

export default function Home() {
  const [parallaxFixed, setParallaxFixed] = useState(false);
  const [parallaxCompleted, setParallaxCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startScroll = 1400;
      const container = document.querySelector(
        ".parallax-container",
      ) as HTMLElement | null;
      const containerHeight = container ? container.offsetHeight : 3406;
      const endScroll = containerHeight + 680;
      console.log("ScrollY:", scrollY);
      console.log("Container height:", containerHeight);
      console.log("EndScroll:", endScroll);

      if (scrollY > startScroll && scrollY < endScroll) {
        setParallaxFixed(true);
        setParallaxCompleted(false);
      } else if (scrollY >= endScroll) {
        setParallaxFixed(false);
        setParallaxCompleted(true);
      } else {
        setParallaxFixed(false);
        setParallaxCompleted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white p-8 pb-0 text-[#171719]">
      <ContentOne />
      {/* Parallax content */}
      <div className="parallax-container relative mx-auto mt-[120px] flex h-[3406px] w-[1120px] flex-col items-stretch justify-start overflow-hidden">
        <Image
          src={"/tmp/parallax_cubes.png"}
          alt="parallax cubes"
          width={563}
          height={539}
          className={`${
            parallaxFixed
              ? "parallax-fixed"
              : parallaxCompleted
                ? "parallax-absolute"
                : "parallax-absolute"
          }`}
        />
        <div className="self-center rounded-[26px] bg-bg-accent-subduet-active px-6 pb-2 pt-1">
          <Typography variant={"headline3"}>Почему мы?</Typography>
        </div>

        {/* Repeated sections */}
        <div className="mt-[80px] flex h-[680px] w-full items-stretch justify-start gap-[157px]">
          <div className="flex w-[540px] flex-col items-stretch justify-center gap-6">
            <Typography variant={"headline1"}>
              Мы используем искусственный интеллект
            </Typography>
            <Typography variant={"bodyL"}>
              Рекламодатели или блогеры, предложенные в вашем профиле, будут
              подходить вам с точностью до 99%. Вам останется только выбрать
              подходящего кандидата и начать сотрудничество с помощью всего
              одной кнопки.
            </Typography>
          </div>
          <div className={"relative h-[653px] w-[302px] bg-white"}>
            <Image
              className="z-40"
              src={"/tmp/main_screen.png"}
              alt="main screen"
              fill
            />
          </div>
        </div>

        <div className="relative mt-[200px] flex h-[680px] w-full items-stretch justify-start gap-[157px]">
          <div className="flex w-[540px] flex-col items-stretch justify-center gap-6">
            <Typography variant={"headline1"}>
              Мы способствуем прозрачности сделки{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              В нашем приложении вы можете заключить договор между сторонами и
              регулировать сделку с помощью официального документа
            </Typography>
          </div>
          <div
            className={"absolute right-[184px] h-[653px] w-[302px] bg-white"}
          >
            <Image
              className="z-40"
              src={"/tmp/project_screen_1.png"}
              alt="main screen"
              fill
            />
          </div>
          <div
            className={"absolute right-2 top-20 h-[653px] w-[302px] bg-white"}
          >
            <Image
              className="z-30"
              src={"/tmp/project_screen_2.png"}
              alt="main screen"
              fill
            />
          </div>
        </div>
        <div className="mt-[200px] flex h-[680px] w-full items-stretch justify-start gap-[157px]">
          <div className="flex w-[540px] flex-col items-stretch justify-center gap-6">
            <Typography variant={"headline1"}>
              Мы предлагаем чат с сохранением истории{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              Вам не нужно переходить из мессенджера в мессенджер. Теперь
              чат прямо внутри приложения. Благодаря этому вы не теряете историю
              сделки с партнёром и всегда можете найти нужную информацию
            </Typography>
          </div>
          <div className={"relative h-[653px] w-[302px] bg-white"}>
            <Image
              className="z-40"
              src={"/tmp/project_screen_3.png"}
              alt="main screen"
              fill
            />
          </div>
        </div>
        <div className="relative mt-[200px] flex h-[680px] w-full items-stretch justify-start gap-[157px]">
          <div className="flex w-[540px] flex-col items-stretch justify-center gap-6">
            <Typography variant={"headline1"}>
              Мы экономим ваше время{" "}
            </Typography>
            <Typography variant={"bodyL"}>
              Портфолио и проекты создаются за пару кликов. Теперь вся
              необходимая информация, включая статистику блогеров, в одном
              приложении. Вы можете редактировать свой профиль, добавлять новые
              проекты и соцсети
            </Typography>
          </div>
          <div
            className={"absolute right-[184px] h-[653px] w-[302px] bg-white"}
          >
            <Image
              className="z-40"
              src={"/tmp/project_screen_2.png"}
              alt="main screen"
              fill
            />
          </div>
          <div
            className={"absolute right-0 top-20 h-[493px] w-[228px] bg-white"}
          >
            <Image
              className="z-30"
              src={"/tmp/project_screen_5.png"}
              alt="main screen"
              fill
            />
          </div>{" "}
        </div>
      </div>

      {/* bloggers card */}
      <div className="mx-auto mt-[120px] flex h-[658px] w-[1120px] flex-col items-stretch justify-between">
        <div className="self-center rounded-[26px] bg-bg-accent-subduet-active px-6 pb-2 pt-1">
          <Typography variant={"headline3"}>С нами сотрудничают</Typography>
        </div>
        <div className="z-50 flex w-full items-stretch justify-start gap-5">
          <BloggerCard color="bg-lilac-600" />
          <BloggerCard color="bg-teal-500" />
          <BloggerCard color="bg-bg-accent-yellow" />
        </div>
      </div>
      <ContentFooter />
    </div>
  );
}
