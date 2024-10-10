"use client";
import { Section } from "@/app/_components/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/app/_components/icons/LinkedInIcon";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { XIcon } from "@/app/_components/icons/XIcon";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-center justify-center py-16">
            <h1 className="text-5xl font-extrabold text-primary mb-8 tracking-tight">Let's Connect</h1>
            <div className="space-y-5 text-center text-lg">
                <p className="text-foreground">
                    If you would like to get in touch, please send me an email at{" "}
                    <a
                        href="mailto:moma.naguib@gmail.com"
                        className={cn(buttonVariants({ variant: "link" }), "text-primary font-semibold hover:underline")}
                    >
                        moma.naguib@gmail.com
                    </a>
                </p>
                <p className="text-foreground">
                    Or you can reach me on:
                </p>
                <div className="flex space-x-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/naguib-mohamed-mahamoud-3baa96177/"
                        className={cn(buttonVariants({ variant: "outline" }), "p-2")}
                    >
                        <LinkedInIcon size={20} className="text-primary" />
                    </a>
                    <a
                        href="https://x.com/NaguibMoma"
                        className={cn(buttonVariants({ variant: "outline" }), "p-2")}
                    >
                        <XIcon size={20} className="text-primary" />
                    </a>
                    <a
                        href="https://github.com/naguib-med"
                        className={cn(buttonVariants({ variant: "outline" }), "p-2")}
                    >
                        <GithubIcon size={20} className="text-primary" />
                    </a>
                </div>
            </div>
        </Section>
    );
};