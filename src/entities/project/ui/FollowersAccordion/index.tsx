import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { Typography } from "@/shared/ui/Typography";

import { EGender } from "../../types";

interface FollowersAccordionProps {
  ages?: { value: string; description?: string }[];
  genders?: { value: string }[];
}

const genderLabels: Record<EGender, string> = {
  [EGender.Male]: "Мужской",
  [EGender.Female]: "Женский",
  [EGender.Other]: "Любой",
};

export const FollowersAccordion: React.FC<FollowersAccordionProps> = ({
  ages,
  genders,
}) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="followers" className="border-none">
        <AccordionTrigger
          className="p-0
          [&[data-state=closed]>div]:text-[18px]
          [&[data-state=closed]>div]:font-semibold
            [&[data-state=closed]>div]:leading-[25.2px] [&[data-state=closed]>div]:text-black [&[data-state=closed]>svg>path]:stroke-[#17171966] [&[data-state=open]>div]:text-[18px]
            [&[data-state=open]>div]:font-semibold [&[data-state=open]>div]:leading-[25.2px] [&[data-state=open]>div]:text-black [&[data-state=open]>svg>path]:stroke-[#17171966]"
        >
          Аудитория
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-stretch justify-start gap-2">
          <div className="flex flex-col items-stretch justify-start gap-1">
            <Typography className="text-[15px] leading-[21px] text-[#171719] text-opacity-60">
              Возраст
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {ages && ages.length > 0
                ? ages.map((age, index) => {
                    const isLastItem = index === ages.length - 1;
                    return `${age.value}${isLastItem ? "" : ", "}`;
                  })
                : "Не указано"}
            </Typography>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-1">
            <Typography className="text-[15px] leading-[21px] text-[#171719] text-opacity-60">
              Пол
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {genders && genders.length > 0
                ? genders.map((gender) => {
                    const genderLabel =
                      genderLabels[gender.value as EGender] || "Любой";
                    return <span key={gender.value}>{genderLabel}</span>;
                  })
                : "Не указано"}
            </Typography>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FollowersAccordion;
