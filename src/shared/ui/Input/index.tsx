import { cn } from "@/shared/utils/common";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-[52px] w-full rounded-md border bg-transparent px-[14px] py-[6px] text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
