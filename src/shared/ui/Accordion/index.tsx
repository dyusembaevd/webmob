"use client";

import ChevronDown from "@/shared/assets/icons/chevron_down.svg";
import { cn } from "@/shared/utils/common";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { Typography } from "../Typography";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b-base-200 border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-2 px-2 py-3 transition-all [&[data-state=open]>div]:text-bg-accent-hover [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {/* Display item number here */}
      <Typography
        variant="headline3"
        className="flex flex-row gap-2 text-start"
      >
        {children}
      </Typography>
      <ChevronDown className=" h-6 w-6 shrink-0 duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={cn("px-2 py-3", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
