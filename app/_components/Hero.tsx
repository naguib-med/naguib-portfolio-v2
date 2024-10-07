import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import naguib from "./images/naguib.jpg";
import france from "./images/flag_of_france.png";
import { cn } from "@/lib/utils";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJSIcon } from "./icons/NextJSIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
  return (
    <code
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50",
        "transition-colors border-accent px-1 gap-1 py-0.5 rounded-sm text-primary",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 md:flex-row md:items-center">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="text-5xl font-bold font-caption text-primary">
          Hi, I'm Naguib.
        </h2>
        <h3 className="text-3xl font-caption">Software Engineer</h3>
        <p className="text-base">
          I'm a software engineer junior based in{" "}
          <Code className="inline-flex items-center">
            <Image src={france} alt="France flag" width={16} height={16} />
            France
          </Code>
          . I build web applications using{" "}
          <Code className="inline-flex items-center">
            <ReactIcon className="inline" size={16} />
            React
          </Code>
          ,{" "}
          <Code className="inline-flex items-center">
            <TypeScriptIcon className="inline" size={16} />
            TypeScript
          </Code>
          , and{" "}
          <Code className="inline-flex items-center">
            <TailwindIcon className="inline" size={16} />
            Tailwind CSS.
          </Code>
        </p>
        <p className="text-base mt-4">
          I'm also a <Code>self-taught</Code> developer, I love to learn new
          things and share my knowledge with others. Now, I'm learning{" "}
          <Code className="inline-flex items-center">
            <NextJSIcon className="inline" size={16} />
            Next.js
          </Code>{" "}
          and{" "}
          <Code className="inline-flex items-center">
            <GraphQLIcon className="inline" size={16} />
            GraphQL
          </Code>{" "}
          to improve my skills and build more complex applications.
        </p>
        <p className="text-base mt-4">
          🚀 I'm currently looking for a job as a full-stack developer in a
          company where I can grow, learn new technologies, and make a positive
          impact 🌍. I'm eager to bring creativity 🎨, problem-solving skills
          🧠, and passion ❤️ to a dynamic team. Let's build something amazing
          together! 💡
        </p>
      </div>
      <div className="flex-1 m-auto">
        <Image
          src={naguib}
          alt="Naguib profile picture"
          className="w-full h-auto rounded-full max-w-sm"
        />
      </div>
    </Section>
  );
};
