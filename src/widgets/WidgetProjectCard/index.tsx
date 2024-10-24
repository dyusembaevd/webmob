import { CategoryBadge } from "@/entities/blogger/ui/CategoryBadge";
import { Project } from "@/entities/project/types";
import { useRouter } from "@/navigation";
import IconPen from "@/shared/assets/icons/icon_pen.svg";
import { Typography } from "@/shared/ui/Typography";
import Avatar from "boring-avatars";
import Image from "next/image";
import React from "react";

interface WidgetProjectCardProps {
  item: Project;
}

export const WidgetProjectCard: React.FC<WidgetProjectCardProps> = ({
  item,
}) => {
  const router = useRouter();
  const handleClick = (guid: string) => {
    router.push(`/projects/${guid}` as any);
  };
  return (
    <div
      onClick={() => handleClick(item.guid)}
      className="flex w-[335px] flex-col gap-3 rounded-[16px] bg-white px-3 pb-3 pt-[11px]"
    >
      <div className="flex items-center justify-start gap-3">
        {/* IMAGE DIV */}
        {item.logo_url ? (
          <div className="relative h-14 w-14 gap-[10px] p-3">
            <Image
              fill
              alt=""
              src={item.logo_url}
              className="rounded-full object-cover"
            />
          </div>
        ) : (
          <Avatar
            name={item.guid}
            className="h-[54px] w-[54px] object-cover"
            variant="ring"
            colors={["#8065FF", "#E0F97BE0", "#36446766"]}
          />
        )}

        <div className="flex flex-1 flex-col items-stretch justify-start gap-3 overflow-hidden">
          {/* INFO container */}
          <div className="flex items-center justify-start gap-1 overflow-x-scroll">
            {item.categories && item.categories.length > 0
              ? item.categories.map((category) => (
                  <CategoryBadge
                    size="small"
                    id={category.id}
                    key={category.id}
                    name={category.name}
                    color={category.color}
                  />
                ))
              : null}
          </div>
          <Typography className="text-[14px] leading-[19.6px] text-[#171719] text-opacity-[88%]">
            {item.deadline
              ? new Date(item.deadline).toLocaleDateString("ru", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "-"}
          </Typography>
        </div>
        <div className="flex h-6 w-6 items-center justify-center self-start">
          <IconPen />
        </div>
      </div>

      <div className="flex flex-col items-stretch justify-start gap-[2px]">
        <Typography className="text-[20px] font-semibold leading-[28px]">
          {item.title ? item.title : `Проект`}
        </Typography>
        <Typography>
          {item.description
            ? item.description
            : "Описание проекта не заполнено"}
        </Typography>
      </div>
    </div>
  );
};
