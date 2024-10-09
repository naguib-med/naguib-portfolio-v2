"use client";
/** @jsxImportSource @emotion/react */
import { Section } from "./Section";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJSIcon } from "./icons/NextJSIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React from "react";

const ParticleBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, hsla(var(--accent), 0.05), transparent 60%);
    pointer-events: none;
    opacity: 0.3;
    z-index: 0;
`;

const skillVariants = {
    hover: {
        scale: 1.1,
        transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
};

const skills = [
    { name: "React", icon: <ReactIcon className="inline" size={50} /> },
    { name: "TypeScript", icon: <TypeScriptIcon className="inline" size={50} /> },
    { name: "Tailwind CSS", icon: <TailwindIcon className="inline" size={50} /> },
    { name: "Next.js", icon: <NextJSIcon className="inline" size={50} /> },
    { name: "GraphQL", icon: <GraphQLIcon className="inline" size={50} /> },
];

export const Tech = () => {
    return (
        <Section
            className="relative flex flex-col items-center py-20 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--popover))] overflow-hidden">
            <p className="text-primary font-caption">What I use everyday</p>
            <h2 className="text-5xl font-bold font-caption text-primary">
                Technologies I use.
            </h2>
            <ParticleBackground/>

            <motion.div
                className="absolute top-10 left-10 w-24 h-24 bg-[hsl(var(--primary))] opacity-50 rounded-full"
                animate={{y: [0, -30, 0], scale: [1, 1.2, 1]}}
                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-[hsl(var(--secondary))] opacity-50 rounded-full"
                animate={{y: [0, 40, 0], scale: [1, 1.2, 1]}}
                transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
            />
            <motion.div
                className="absolute top-1/4 left-1/3 w-20 h-20 bg-[hsl(var(--accent))] opacity-50 rounded-full"
                animate={{x: [-20, 20, -20], scale: [1, 1.2, 1]}}
                transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
            />

                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 relative z-10 mt-20">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={skillVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] transition-transform duration-500"
                        >
                            <motion.div
                                whileHover={{rotate: 360}}
                                transition={{duration: 1}}
                                className="mb-6 relative"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-xl opacity-70"
                                ></div>
                                {skill.icon}
                            </motion.div>

                            <span className="text-xl font-bold text-[hsl(var(--card-foreground))]">
                            {skill.name}
                        </span>
                        </motion.div>
                    ))}
                </div>
        </Section>
);
};

export default Tech;
