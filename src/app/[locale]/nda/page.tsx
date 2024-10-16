"use client";

import { Link, useRouter } from "@/navigation";
import IconArrowR from "@/shared/assets/icons/icon_arrow-r.svg";
import IconArrowBack from "@/shared/assets/icons/icon_arrow_back.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { Typography } from "@/shared/ui/Typography";
import React from "react";

import {
  SectionFiveContent,
  SectionFourContent,
  SectionOneContent,
  SectionThreeContent,
  SectionTwoContent,
} from "./_sections";

export default function NDAPage() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-stretch justify-start p-5">
      <div className="mb-6 flex w-full items-center justify-start py-2">
        <IconArrowBack
          className={"hover:cursor-pointer"}
          onClick={() => router.back()}
        />
      </div>
      <div className="mb-6 flex w-full flex-col items-center justify-start gap-6">
        <div className="flex items-center justify-start self-start">
          <Link href={"/"} className="px-1 py-[2px]">
            <Typography className="text-[14px] leading-[19.6px] text-[#171719] text-opacity-[88%]">
              Главная
            </Typography>
          </Link>
          <IconArrowR />
          <div className="px-1 py-[2px]">
            <Typography className="text-[14px] font-semibold leading-[19.6px] ">
              Политика конфиденциальности
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-start gap-5">
          <Typography className="text-[20px] font-semibold leading-[28px] text-[#6C4DFF]">
            Политика конфиденциальности
          </Typography>
          <Typography className="text-[15px] font-normal leading-[21px]">
            Настоящая политика конфиденциальности и обработки персональных
            данных (далее по тексту – «Политика») регулирует порядок обработки
            и использования персональных и иных данных пользователей приложения,
            принадлежащего
            <span className="text-[16px] font-semibold leading-[22.4px]">
              {" "}
              ТОО [пожалуйста, укажите наименование]{" "}
            </span>
            (далее по тексту — «Оператор»). Действующая редакция настоящей
            Политики конфиденциальности, постоянно доступна для ознакомления,
            и размещена в сети Интернет по адресу: 
            <span className="text-[#8065FF]"> [пожалуйста, укажите] </span>
            (далее по тексту – «Приложение»).Передавая Оператору персональные
            и иные данные посредством приложения, Пользователь подтверждает своё
            согласие на использование указанных данных на условиях, изложенных
            в настоящей Политике (в том числе на трансграничную передачу
            персональных данных).Если Пользователь не согласен с условиями
            настоящей Политики, он обязан прекратить использование приложение.
            Дальнейшее использование Пользователем настоящего приложения
            означает его согласие с условиями, изложенными в настоящей Политике.
            Безусловным акцептом настоящей Политики является начало
            использования приложения Пользователем.
          </Typography>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                1.
              </div>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                Термины и определения
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <SectionOneContent />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                2.
              </div>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                Сбор и обработка персональных данных
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {" "}
              <SectionTwoContent />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                3.
              </div>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                Порядок обработки персональных данных
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {" "}
              <SectionThreeContent />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                4.
              </div>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                Защита персональных данных
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {" "}
              <SectionFourContent />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                5.
              </div>
              <div className="text-[18px] font-semibold leading-[25.2px]">
                Иные положения
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {" "}
              <SectionFiveContent />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
