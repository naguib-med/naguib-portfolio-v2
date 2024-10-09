"use client";
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
import { motion } from "framer-motion";

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
      <Section className="relative flex max-md:flex-col items-start gap-8 md:flex-row md:items-center ">
        <motion.div
            className="absolute top-10 left-10 w-24 h-24 bg-[hsl(var(--primary))] opacity-30 rounded-full"
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[hsl(var(--secondary))] opacity-30 rounded-full"
            animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="flex-[2] flex flex-col gap-4 z-10">
          <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold font-caption text-primary"
          >
            Hi, I'm Naguib.
          </motion.h2>
          <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl font-caption"
          >
            Software Engineer
          </motion.h3>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="text-base"
          >
            I'm a software engineer junior based in{" "}
            <Code className="inline-flex items-center">
              <Image src={france} alt="France flag" width={16} height={16} />
              France
            </Code>
            . I build web applications using{" "}
            <Code className="inline-flex items-center hover:text-[hsl(var(--primary))]">
              <ReactIcon className="inline" size={16} />
              React
            </Code>
            ,{" "}
            <Code className="inline-flex items-center hover:text-[hsl(var(--primary))]">
              <TypeScriptIcon className="inline" size={16} />
              TypeScript
            </Code>
            , and{" "}
            <Code className="inline-flex items-center hover:text-[hsl(var(--primary))]">
              <TailwindIcon className="inline" size={16} />
              Tailwind CSS.
            </Code>
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6 }}
              className="text-base mt-4"
          >
            I'm also a <Code className="hover:text-[hsl(var(--primary))]">self-taught</Code> developer. Actually, I'm learning{" "}
            <Code className="inline-flex items-center hover:text-[hsl(var(--primary))]">
              <NextJSIcon className="inline" size={16} />
              Next.js
            </Code>{" "}
            and{" "}
            <Code className="inline-flex items-center hover:text-[hsl(var(--primary))]">
              <GraphQLIcon className="inline" size={16} />
              GraphQL
            </Code>{" "}
            to build more complex applications.
          </motion.p>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="text-base mt-4"
          >
            🚀 I'm currently looking for a full-stack developer role where I can grow, learn new technologies, and make a positive impact 🌍. Let's build something amazing together! 💡
          </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex-1 m-auto z-10"
        >
          <Image
              src={naguib}
              alt="Naguib profile picture"
              className="w-full h-auto rounded-full max-w-sm transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </Section>
  );
};

export default Hero;
