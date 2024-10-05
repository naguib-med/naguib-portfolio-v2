import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-3x px-4 mx-auto", props.className)}>
      {props.children}
    </section>
  );
};
