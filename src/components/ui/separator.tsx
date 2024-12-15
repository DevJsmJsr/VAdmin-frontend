import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "~lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, title, subtitle, ...props },
    ref
  ) => (
    <div>
      {title && <h2 className="text-xl font-semibold text-gray-800 capitalize">{title}</h2>}
      {subtitle && <p className="text-sm text-gray-500 leading-relaxed capitalize">{subtitle}</p>}
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    </div>
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
