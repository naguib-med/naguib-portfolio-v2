"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { fadeIn } from "@/app/helpers/motion";
import { projects } from "@/app/constants";
import { Tilt } from "react-tilt";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { Globe } from "lucide-react";
import React from "react";

interface ProjectCardProps {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string | StaticImageData;
    source_code_link: string;
    live_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link, live_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="relative group"
            >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

                <div className="relative bg-background p-6 rounded-2xl sm:w-[360px] w-full">
                    {/* Image Section */}
                    <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                        <Image
                            src={image}
                            width={360}
                            height={230}
                            alt='project_image'
                            className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
                        />

                        {/* Overlay with Links */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.open(source_code_link, "_blank")}
                                className="p-3 rounded-full bg-accent/20 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <GithubIcon size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.open(live_link, "_blank")}
                                className="p-3 rounded-full bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Globe size={20} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='mt-5 space-y-4'>
                        <h3 className="text-2xl font-bold text-primary">{name}</h3>
                        <p className="text-muted-foreground line-clamp-3">{description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/50"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default function Works() {
    return (
        <Section className="flex flex-col items-center">
            <div className="text-center space-y-4 mb-16">
                <p className="text-primary font-caption">Quelques projets que j&apos;ai réalisés</p>
                <h2 className="text-5xl font-bold font-caption bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Portfolio
                </h2>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
                >
                    Quelques projets sur lesquels j&apos;ai travaillé. J&apos;ai travaillé sur une variété de projets d&apos;applications web.
                    J&apos;ai de l&apos;expérience avec une variété de technologies et je suis toujours à la recherche d&apos;en apprendre davantage.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </Section>
    );
};