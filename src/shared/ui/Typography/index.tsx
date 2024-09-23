import { cn } from "@/shared/utils/common";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const style = cva("", {
  variants: {
    variant: {
      headline1: "text-[58px] leading-[120%] font-bold",
      headline2: "text-[36px] leading-[140%] font-bold",
      headline3: "text-[24px] leading-[120%] font-bold",

      caption1: "text-[24px] leading-[140%] font-semibold",
      caption2: "text-[20px] leading-[140%] font-extrabold",

      bodyL: "text-[20px] leading-[140%] font-normal",
      bodyM: "text-[16px] leading-[140%] font-normal",
      bodyS: "text-[13px] leading-[140%] font-normal",
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
    <Component className={cn(style({ variant }), className)}>
      {children}
    </Component>
  );
};
