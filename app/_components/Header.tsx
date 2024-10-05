import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 z-10">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary">Naguib.</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href={
              "https://www.linkedin.com/in/naguib-mohamed-mahamoud-3baa96177/"
            }
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/naguib-med"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/naguib-med"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
