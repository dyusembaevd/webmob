"use client";

import IconChevronRight from "@/shared/assets/icons/icon_chevron_right.svg";
import { IconButton } from "@/shared/ui/IconButton";

export default function ChevronRightButton() {
  return (
    <IconButton
      variant="primary"
      size="sm"
      onClick={() => console.log("Chevron Right button clicked")}
      className="group relative"
    >
      <IconChevronRight className="h-6 w-6" />
    </IconButton>
  );
}
