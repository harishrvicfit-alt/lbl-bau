import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "peer min-h-36 w-full resize-none rounded-[8px] border border-anthracite-900/15 bg-white px-4 pt-6 text-sm text-anthracite-950 shadow-sm outline-none transition-all placeholder:text-transparent focus:border-sand-500 focus:ring-4 focus:ring-sand-500/15",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
