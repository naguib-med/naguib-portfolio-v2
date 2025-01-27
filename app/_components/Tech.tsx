"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { NextJSIcon } from "./icons/NextJSIcon";
import { SpringIcon } from "./icons/SpringIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { MongoIcon } from "./icons/MongoIcon";
import { PostgresIcon } from "./icons/PostgresIcon";
import { MySQLIcon } from "./icons/MySQLIcon";

const skills = [
    { name: "React", icon: <ReactIcon className="inline" size={50} />, category: "Frontend" },
    { name: "JavaScript", icon: <JavaScriptIcon className="inline" size={50} />, category: "Language" },
    { name: "TypeScript", icon: <TypeScriptIcon className="inline" size={50} />, category: "Language" },
    { name: "Tailwind CSS", icon: <TailwindIcon className="inline" size={50} />, category: "Frontend" },
    { name: "Node.js", icon: <NodeIcon className="inline" size={50} />, category: "Backend" },
    { name: "Spring Boot", icon: <SpringIcon className="inline" size={50} />, category: "Backend" },
    { name: "Next.js", icon: <NextJSIcon className="inline" size={50} />, category: "Frontend" },
    { name: "MongoDB", icon: <MongoIcon className="inline" size={50} />, category: "Database" },
    { name: "PostgreSQL", icon: <PostgresIcon className="inline" size={50} />, category: "Database" },
    { name: "MySQL", icon: <MySQLIcon className="inline" size={50} />, category: "Database" }
];

export default function Tech() {
    const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

    return (
        <Section className="relative min-h-screen py-20">
            {/* Header Section */}
            <div className="relative z-10 pb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[hsl(var(--primary))] font-caption mb-4 tracking-wider">
                        Ce que J&apos;utilise au quotidien
                    </p>
                    <h2 className="text-6xl font-bold font-caption bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
                        Technologies
                    </h2>
                </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 relative z-10 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                        onMouseEnter={() => setSelectedSkill(index)}
                        onMouseLeave={() => setSelectedSkill(null)}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                        <div className="relative h-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-[hsl(var(--primary))]">
                            <motion.div className="flex flex-col items-center space-y-4">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-30 rounded-full blur-lg transition-opacity duration-500" />
                                    {skill.icon}
                                </motion.div>

                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-[hsl(var(--card-foreground))]">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {skill.category}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: selectedSkill === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

