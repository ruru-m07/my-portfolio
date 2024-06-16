import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("h-screen flex items-center justify-between", className)}
    >
      {children}
    </section>
  );
};
