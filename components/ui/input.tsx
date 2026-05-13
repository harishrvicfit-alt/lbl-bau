import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "peer h-14 w-full rounded-[8px] border border-anthracite-900/15 bg-white px-4 pt-4 text-sm text-anthracite-950 shadow-sm outline-none transition-all placeholder:text-transparent focus:border-sand-500 focus:ring-4 focus:ring-sand-500/15",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
