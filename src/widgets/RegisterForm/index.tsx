import IconClose from "@/shared/assets/icons/icon_close.svg";
import { Button } from "@/shared/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui/Dialog";
import { Input } from "@/shared/ui/Input";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RegisterForm = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="z-50" asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="
          flex  
          w-[580px]
          flex-col
          gap-5
          rounded-[32px]
          bg-white
          p-[70px]
          pb-[80px]
          pt-20
        "
      >
        <DialogClose className="absolute right-4 top-4 z-[100] ">
          <IconClose />
        </DialogClose>
        <DialogHeader className="relative">
          <Image
            src={"/tmp/form_cubes.png"}
            alt="form cubes"
            width={543}
            height={182}
            className="absolute left-0 top-0 z-[60] min-h-[182px] max-w-[543px] -translate-x-16"
          />
          {/* TODO: handle the form cubes */}

          <div className="flex flex-col items-stretch justify-start gap-2">
            <Typography className="text-center" variant={"headline2"}>
              Начать BOOST!
            </Typography>
            <Typography className="text-center" variant={"bodyM"}>
              Введите свои данные и мы свяжемся с вами в течение 24 часов.
              Вы получите всю необходимую информацию и помощь в мгновенной
              регистрации.
            </Typography>
          </div>
        </DialogHeader>
        {/* Form itself */}
        <div
          className="
        flex
        w-full flex-col items-stretch
        justify-start
        gap-8
        "
        >
          <Input label="Имя и фамилия" placeholder="Например, Ольга Ивановна" />
          <Input
            label="Аккаунт в Instagram или TikTok"
            placeholder="@username"
          />
          <Input label="Номер телефона" placeholder="+7(XXX)-XXX-XX-XX" />
          <div className="flex w-full flex-col items-stretch justify-start gap-3">
            <Button variant={"secondary"} className="w-full">
              Отправить
            </Button>
            <Typography variant={"bodyS"}>
              Нажимая «Отправить», вы принимаете
              <Link href={"/documentation"}>
                <span className="text-text-accent-lilac hover:cursor-pointer">
                  {" "}
                  Соглашение на обработку персональных данных
                </span>
              </Link>
            </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
