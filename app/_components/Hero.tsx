"use client";

import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import naguib from "./images/naguib.jpg";
import france from "./images/flag_of_france.png";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { SpringIcon } from "@/app/_components/icons/SpringIcon";
import { NodeIcon } from "@/app/_components/icons/NodeIcon";
import { DockerIcon } from "@/app/_components/icons/DockerIcon";
import { TerraformIcon } from "@/app/_components/icons/TerraformIcon";
import { AwsIcon } from "@/app/_components/icons/AwsIcon";


const Code = ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    return (
        <motion.code
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "bg-accent/20 font-mono border group hover:bg-accent/40 transition-all duration-300 border-accent px-2 py-[0.3rem] rounded-xl text-primary inline-flex items-center gap-2 hover:shadow-lg hover:shadow-accent/20",
                className
            )}
            {...props as HTMLMotionProps<"code">} // Cast des props pour correspondre au type attendu
        />
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const profileScale = useTransform(scrollY, [0, 300], [1, 0.8]);
    const profileOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <Section className="relative flex max-md:flex-col items-start gap-12 md:flex-row md:items-center min-h-screen py-20">
            {/* Main Content */}
            <div className="flex-[2] flex flex-col gap-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl font-bold font-caption bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                        Hey, je suis Naguib.
                    </h1>
                    <h2 className="text-2xl font-caption text-foreground/90">
                        Développeur Fullstack orienté sécurité
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-2 text-base"
                >
                    <p>
                        Je suis un développeur fullstack basé en{" "}
                        <Code>
                            <Image src={france} alt="Drapeau de la France" width={24} height={24} className="group-hover:rotate-12 transition-transform" />
                            France
                        </Code>
                    </p>

                    <p className="flex flex-wrap gap-2 items-center">
                        Je développe des applications web sécurisées en utilisant
                        <Code>
                            <ReactIcon className="inline group-hover:rotate-180 transition-transform duration-500" size={24} />
                            React
                        </Code>
                        <Code>
                            <TypeScriptIcon className="inline group-hover:scale-110 transition-transform" size={24} />
                            TypeScript
                        </Code>
                        <Code>
                            <TailwindIcon className="inline group-hover:rotate-12 transition-transform" size={24} />
                            Tailwind CSS
                        </Code>
                        <Code>
                            <NodeIcon className="inline group-hover:-rotate-12 transition-transform" size={24} />
                            Node.js
                        </Code>
                        <Code>
                            <SpringIcon className="inline group-hover:scale-110 transition-transform" size={24} />
                            Spring Boot
                        </Code>
                    </p>

                    <p className="flex flex-wrap gap-2 items-center">
                        Actuellement, je me spécialise dans la{" "}
                        <Code>sécurité des applications</Code> et j&apos;explore
                        <Code>
                            <DockerIcon className="inline group-hover:translate-x-1 transition-transform" size={24} />
                            Docker
                        </Code>
                        <Code>
                            <TerraformIcon className="inline group-hover:rotate-45 transition-transform" size={24} />
                            Terraform
                        </Code>
                        <Code>
                            <AwsIcon className="inline group-hover:scale-110 transition-transform" size={24} />
                            AWS
                        </Code>
                        pour améliorer mes compétences en <Code>DevSecOps</Code>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 p-6 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm"
                >
                    <p className="text-xl font-bold flex items-center gap-3">
                        <span className="animate-bounce">🚀</span>
                        <span>À la recherche d&apos;un{" "}
                            <span className="text-primary">poste de développeur fullstack</span>
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-2"
                >
                    <motion.a
                        href="/CV_Naguib.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                        Télécharger mon CV
                    </motion.a>
                </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
                style={{ scale: profileScale, opacity: profileOpacity }}
                className="flex-1 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-80 h-80 md:w-96 md:h-96 mx-auto"
                >
                    {/* Rotating Border */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Image Container */}
                    <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-background">
                        <Image
                            src={naguib}
                            alt="Photo de profil de Naguib"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
}