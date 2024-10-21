import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { XIcon } from "@/app/_components/icons/XIcon";

export default function Header() {
  return (
      <header className="sticky top-0 py-4 z-10">
        <Section className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary">Naguib.</h1>
          <ul className="flex items-center gap-2">
            <li>
              <Link
                  href="https://www.linkedin.com/in/naguib-mohamed-mahamoud-3baa96177/"
                  className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                  aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={12} className="text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                  href="https://x.com/NaguibMoma"
                  className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                  aria-label="X Profile"
              >
                <XIcon size={12} className="text-foreground" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
            </li>
            <li>
              <Link
                  href="https://github.com/naguib-med"
                  className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                  aria-label="GitHub Profile"
              >
                <GithubIcon size={12} className="text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
          </ul>
        </Section>
      </header>
  );
};
