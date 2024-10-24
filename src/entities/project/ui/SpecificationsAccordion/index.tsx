import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { Typography } from "@/shared/ui/Typography";

interface SpecificationsAccordionProps {
  contentTypes?: { value: string }[];
  specification?: string;
}

export const SpecificationsAccordion: React.FC<
  SpecificationsAccordionProps
> = ({ contentTypes, specification }) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="specifications" className="border-none">
        <AccordionTrigger
          className="
  p-0 [&[data-state=closed]>div]:text-[18px]
            [&[data-state=closed]>div]:font-semibold [&[data-state=closed]>div]:leading-[25.2px] [&[data-state=closed]>div]:text-black [&[data-state=closed]>svg>path]:stroke-[#17171966]
            [&[data-state=open]>div]:text-[18px]  [&[data-state=open]>div]:font-semibold [&[data-state=open]>div]:leading-[25.2px] [&[data-state=open]>div]:text-black [&[data-state=open]>svg>path]:stroke-[#17171966]"
        >
          Техническое задание
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-stretch justify-start gap-2">
          <div className="flex flex-col items-stretch justify-start gap-1">
            <Typography className="text-[15px] leading-[21px] text-[#171719] text-opacity-60">
              Форматы публикаций
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {contentTypes && contentTypes.length > 0
                ? contentTypes.map((contentType, index) => {
                    const isLastItem = index === contentTypes.length - 1;
                    return `${contentType.value}${isLastItem ? "" : " + "}`;
                  })
                : "Не указано"}
            </Typography>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-1">
            <Typography className="text-[15px] leading-[21px] text-[#171719] text-opacity-60">
              Задание
            </Typography>
            <Typography className="text-[16px] leading-[20.8px]">
              {specification ?? "Не указано"}
            </Typography>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SpecificationsAccordion;
