import { cn } from "@/shared/utils/common";
import { cva, type VariantProps } from "class-variance-authority";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "700", "900"],
});
const style = cva("", {
  variants: {
    variant: {
      headline1: "text-[36px] md:text-[58px] leading-[120%] font-bold",
      headline2: "text-[24px] md:text-[36px] leading-[140%] font-bold",
      headline3: "text-[20px] md:text-[24px] leading-[120%] font-bold",

      caption1: "text-[20px] md:text-[24px] leading-[140%] font-semibold",
      caption2: "text-[18px] md:text-[20px] leading-[140%] font-extrabold",

      bodyL: "text-[16px] md:text-[20px] leading-[140%] font-normal",
      bodyM: "text-[14px] md:text-[16px] leading-[140%] font-normal",
      bodyS: "text-[12px] md:text-[13px] leading-[140%] font-normal",
    },
  },
  defaultVariants: {
    variant: "bodyM",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof style> {
  as?: keyof JSX.IntrinsicElements;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  as,
  children,
  className,
}) => {
  const Component = as || "div";

  return (
    <Component className={cn(style({ variant }), roboto.className, className)}>
      {children}
    </Component>
  );
};
