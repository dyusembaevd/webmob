"use client";

import Check from "@/shared/assets/icons/icon_checkbox.svg";
import IconCheckboxWhite from "@/shared/assets/icons/icon_checkbox_white.svg";
import { cn } from "@/shared/utils/common";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // Add the 'group' class here
      "ring-offset-background group h-4 w-4 shrink-0 rounded-[2px] border border-[#171719] border-opacity-60 focus-visible:outline-none focus-visible:ring-[2.5px] focus-visible:ring-[#17171999] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#8065FF]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current",
        // Change text color when the checkbox is checked
        "group-[data-state=checked]:text-white",
      )}
    >
      <IconCheckboxWhite className="h-4 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
