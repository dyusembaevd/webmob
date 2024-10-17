"use client";

import { useRouter } from "@/navigation";
import IconBriefcase from "@/shared/assets/icons/icon_briefcase.svg";
import IconHome from "@/shared/assets/icons/icon_home.svg";
import IconMenu from "@/shared/assets/icons/icon_menu.svg";
import IconMessages from "@/shared/assets/icons/icon_messages.svg";
import IconPlus from "@/shared/assets/icons/icon_plus.svg";
import { Button } from "@/shared/ui/Button";
import { motion } from "framer-motion";

export const BottomNavbar = () => {
  const router = useRouter();

  // Variants for li hover animation
  const liVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Variants for button click animation
  const buttonVariants = {
    tap: {
      scale: 0.9,
    },
  };

  return (
    <ul
      className="bg-opacity-96 flex h-[68px] w-full items-stretch justify-evenly rounded-[100px] bg-[#171719] opacity-95 backdrop-blur-[0.3px]"
      style={{
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.li
        className="flex h-[68px] w-[65.4px] flex-col items-stretch justify-start"
        variants={liVariants}
        whileHover="hover"
      >
        <a
          href="/"
          className="flex flex-1 flex-col items-center justify-center text-white"
        >
          <IconHome size={24} />
          <span className="mt-1 text-xs">Главная</span>
        </a>
      </motion.li>

      <motion.li
        className="flex  h-[68px] w-[65.4px] flex-col items-stretch justify-start"
        variants={liVariants}
        whileHover="hover"
      >
        <a
          href="#"
          className="flex flex-1 flex-col items-center justify-center text-white hover:cursor-default"
        >
          <IconBriefcase size={24} />
          <span className="mt-1 text-xs">Проекты</span>
        </a>
      </motion.li>

      <motion.li
        className="flex h-[68px] w-[65.4px] flex-col items-center justify-center"
        variants={buttonVariants}
        whileTap="tap"
      >
        <Button
          onClick={() => router.push("/project")}
          className="h-[52px] w-[52px] rounded-[16px] bg-[#8065FF] px-[8px] pb-[16px] pt-[14px]"
        >
          <IconPlus />
        </Button>
      </motion.li>

      <motion.li
        className="flex h-[68px] w-[61.4px] flex-col items-stretch justify-start"
        variants={liVariants}
        whileHover="hover"
      >
        <a
          href="#"
          className="flex flex-1 flex-col items-center justify-center text-white hover:cursor-default"
        >
          <IconMessages size={24} />
          <span className="mt-1 text-xs">Чат</span>
        </a>
      </motion.li>

      <motion.li
        className="flex h-[68px] w-[65.4px] flex-col items-stretch justify-start"
        variants={liVariants}
        whileHover="hover"
      >
        <a
          href="#"
          className="flex flex-1 flex-col items-center justify-center text-white hover:cursor-default"
        >
          <IconMenu size={24} />
          <span className="mt-1 text-xs">Меню</span>
        </a>
      </motion.li>
    </ul>
  );
};
