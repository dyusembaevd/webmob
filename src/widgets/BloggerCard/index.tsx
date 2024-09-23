"use client";

import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/utils/common";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import ChevronRightButton from "../IconButtonChevronRIght";

type Props = {
  color?: string;
};

export const BloggerCard = ({ color = "bg-lilac-600" }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 relative h-[548px] w-[358px] cursor-pointer rounded-2xl"
      style={{ perspective: 1000 }} // 3D perspective to make the flip effect smooth
      onHoverStart={() => setIsFlipped(true)} // Flip on hover
      onHoverEnd={() => setIsFlipped(false)} // Return to original state when hover ends
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Rotate the container on Y axis
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {/* Front Card */}
        <motion.div
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col items-start justify-between gap-4 rounded-2xl p-8 pb-0",
            color ? color : "bg-lilac-600",
          )}
          style={{ backfaceVisibility: "hidden" }} // Hide back face
        >
          <div className="flex flex-col items-start justify-start gap-2">
            <Typography variant={"headline3"}>Miriam Kautova</Typography>
            <Typography variant={"bodyM"} className="pr-3">
              Блогер с аудиторией более 100k подписчиков, которая пишет о
              бизнесе
            </Typography>
          </div>
          <Image
            src={"/tmp/blogger_card.png"}
            alt="blogger card"
            width={244}
            height={388}
            quality={100}
            className="self-center"
          />
        </motion.div>

        {/* Back Card */}
        <motion.div
          className="bg-bg-primary-inverse absolute inset-0 flex h-full w-full flex-col items-start justify-between gap-4 rounded-2xl p-8"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} // Initial rotation of the back side
        >
          <div className="flex flex-col items-stretch justify-start gap-6">
            <Typography variant={"headline3"} className="text-white">
              Отличное приложение!
            </Typography>
            <div className="flex flex-col items-stretch justify-start gap-4">
              <Typography variant={"bodyM"} className="text-text-tertiary">
                Нам, блогерам, важно найти рекламодателей со схожими ценностями.
              </Typography>

              <Typography variant={"bodyM"} className="text-text-tertiary">
                Это оказалось сделать легко в приложении InBOOST, разработанным
                нашими казахстанскими специалистами.
              </Typography>

              <Typography variant={"bodyM"} className="text-text-tertiary">
                Я рада, что теперь в Казахстане есть такой продукт.
              </Typography>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <Typography variant={"bodyM"} className="text-bg-primary">
              Зарегистрироваться
            </Typography>
            <ChevronRightButton />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
