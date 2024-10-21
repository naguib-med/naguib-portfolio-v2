"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import {fadeIn} from "@/app/helpers/motion";
import {projects} from "@/app/constants";
import {Tilt} from "react-tilt";
import Image, { StaticImageData } from "next/image";
import {GithubIcon} from "@/app/_components/icons/GithubIcon";
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
                className="bg-card p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        width={360}
                        height={230}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className="absolute inset-0 flex justify-end m-3">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="cursor-pointer bg-[#333] w-10 h-10 rounded-full flex justify-center items-center"
                        >
                            <GithubIcon className="text-primary" size={20} />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className="text-2xl font-bold text-white mt-5 overflow-hidden line-clamp-2">{name}</h3>
                    <p className="text-primary mt-2 h-[100px] overflow-hidden line-clamp-5">{description}</p>
                    <div className="flex flex-wrap mt-5">
                        {tags.map((tag, index) => (
                            <span key={index}
                                  className="px-2 py-1 rounded-md text-sm mr-2"
                                  style={{ color: tag.color}}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    <motion.div
                        className="relative mt-5 group"
                        whileHover={{ scale: 1.1, rotateY: 15 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Neon Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Glowing Particle Effect */}
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                        </div>

                        <button
                            onClick={() => window.open(live_link, "_blank")}
                            className="relative z-10 w-full py-3 text-lg font-semibold text-white bg-black bg-opacity-50 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out flex items-center justify-center gap-3 hover:bg-opacity-75"
                        >
                            <Globe className="text-white" size={24} />
                            <span className="tracking-wide">
                                Voir le site
                            </span>
                        </button>
                    </motion.div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default function Works() {
    return (
        <Section className="flex flex-col items-center">
            <p className="text-primary font-caption">
                Quelques projets que j&apos;ai réalisés
            </p>
            <h2 className="text-5xl font-bold font-caption text-primary">
                Portfolio
            </h2>
            <div className="w-full flex flex-col items-center justify-center mt-4">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                          className="mt-3 text-primary text-[17px] max-w-3xl leading-[30px] text-center justify-center">
                    Quelques projets sur lesquels j&apos;ai travaillé. J&apos;ai travaillé sur une variété de projets d&apos;applications web.
                    J&apos;ai de l&apos;expérience avec une variété de technologies et je suis toujours à la recherche d&apos;en apprendre davantage.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
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