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
  SectionEightContent,
  SectionFiveContent,
  SectionFourContent,
  SectionNineContent,
  SectionOneContent,
  SectionSevenContent,
  SectionSixContent,
  SectionTenContent,
  SectionThreeContent,
  SectionTwoContent,
} from "./_sections";

export default function UserAgreementPage() {
  const router = useRouter();
  return (
    <>
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
                Пользовательское соглашение
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-5">
            <Typography className="text-[20px] font-semibold leading-[28px] text-[#6C4DFF]">
              Пользовательское соглашение
            </Typography>
            <Typography className="text-[15px] font-normal leading-[21px]">
              Товарищество с ограниченной ответственностью [пожалуйста, укажите]
              в лице Директора [пожалуйста, укажите], (далее по тексту –
              «Компания»), настоящей публичной офертой предлагает
              любомуфизическому или юридическому лицу, а также индивидуальному
              предпринимателю (далее по тексту – «Пользователь») заключить
              Договор — оферту для использования им приложения [пожалуйста,
              укажитенаименование] (далее по тексту – «Приложение»). Настоящий
              документ является публичной офертой на заключение договора
              на использование им приложения и содержит в себе условия договора
              на оказание услуг. Настоящий документ является публичной офертой
              Компании, которая направлена на неограниченный круг лиц. Настоящая
              оферта содержит все существенные условия, которые предъявляются
              требованиями ст. 395–396 Гражданского кодекса Республики Казахстан
              (далее по тексту – «ГК РК») к публичным офертам, настоящая оферта
              выражает волю Компании заключить договор на условиях, указанных
              в настоящей оферте с любым, кто отзовётся.На настоящую оферту
              распространяется положения и сила ГК РК, в том числе
              ст. 395–396 ГК РК включительно. Акцептант он же Пользователь
              уведомлен с текстом настоящей оферты — договора до момента начала
              использования приложения. Настоящая оферта является бессрочной
              и любое лицо вправе акцептовать её в любой момент. В связи
              с вышеизложенным, внимательно прочитайте текст данного Договора и,
              если вы не согласны с каким‑либо пунктом настоящей оферты —
              договора, Компания предлагает вам отказаться от каких‑либо
              действий, необходимых для акцепта.
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
                  Общие положения
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionTwoContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  3.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Условия и порядок пользования
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionThreeContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  4.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Права и обязанности сторон
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionFourContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  5.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Ответственность сторон
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionFiveContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  6.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Разрешение споров
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionSixContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  7.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Срок действия договора и порядок его изменения и расторжения
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionSevenContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  8.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Конфидециальная информация, персональные данные и их защита
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionEightContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  9.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Прочие условия
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionNineContent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  10.
                </div>
                <div className="text-[18px] font-semibold leading-[25.2px]">
                  Реквизиты компании
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SectionTenContent />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
