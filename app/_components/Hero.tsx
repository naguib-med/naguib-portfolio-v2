"use client";

import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import naguib from "./images/naguib.jpg";
import france from "./images/flag_of_france.png";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";
import { TypeScriptIcon } from "@/app/_components/icons/TypeScriptIcon";
import { TailwindIcon } from "@/app/_components/icons/TailwindIcon";
import { NodeIcon } from "@/app/_components/icons/NodeIcon";
import { SpringIcon } from "@/app/_components/icons/SpringIcon";
import { DockerIcon } from "@/app/_components/icons/DockerIcon";
import { TerraformIcon } from "@/app/_components/icons/TerraformIcon";
import { AwsIcon } from "@/app/_components/icons/AwsIcon";


const ANIMATION_DURATION = 0.8;
const ANIMATION_DELAYS = {
    TITLE: 0,
    DESCRIPTION: 0.2,
    TECH_STACK: 0.3,
    JOB_SEARCH: 0.4,
    CV_BUTTON: 0.6
};

interface CodeProps extends ComponentPropsWithoutRef<"code"> {
    icon?: React.ReactNode;
    text: string;
}

const Code = ({ icon, text, className, ...props }: CodeProps) => {
    return (
        <motion.code
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "bg-accent/20 font-mono border group hover:bg-accent/40 transition-all duration-300",
                "border-accent px-2 py-[0.3rem] rounded-xl text-primary",
                "inline-flex items-center gap-2 hover:shadow-lg hover:shadow-accent/20",
                className
            )}
            {...props as HTMLMotionProps<"code">}
        >
            {icon}
            {text}
        </motion.code>
    );
};

const TechStack = () => (
    <div className="space-y-2 text-base">
        <p>
            Je suis un Ingénieur fullstack basé en{" "}
            <Code
                icon={<Image src={france} alt="Drapeau de la France" width={24} height={24} className="group-hover:rotate-12 transition-transform" />}
                text="France"
            />
        </p>

        <p className="flex flex-wrap gap-2 items-center">
            Je développe des applications web sécurisées en utilisant
            {[
                { Icon: ReactIcon, text: "React", hoverAnimation: "rotate-180" },
                { Icon: TypeScriptIcon, text: "TypeScript", hoverAnimation: "scale-110" },
                { Icon: TailwindIcon, text: "Tailwind CSS", hoverAnimation: "rotate-12" },
                { Icon: NodeIcon, text: "Node.js", hoverAnimation: "-rotate-12" },
                { Icon: SpringIcon, text: "Spring Boot", hoverAnimation: "scale-110" }
            ].map(({ Icon, text, hoverAnimation }) => (
                <Code
                    key={text}
                    icon={<Icon className={`inline group-hover:${hoverAnimation} transition-transform duration-500`} size={24} />}
                    text={text}
                />
            ))}
        </p>

        <p className="flex flex-wrap gap-2 items-center">
            Actuellement, je me spécialise dans la{" "}
            <Code text="sécurité des applications" /> et je me forme en
            {[
                { Icon: DockerIcon, text: "Docker", hoverAnimation: "translate-x-1" },
                { Icon: TerraformIcon, text: "Terraform", hoverAnimation: "rotate-45" },
                { Icon: AwsIcon, text: "AWS", hoverAnimation: "scale-110" }
            ].map(({ Icon, text, hoverAnimation }) => (
                <Code
                    key={text}
                    icon={<Icon className={`inline group-hover:${hoverAnimation} transition-transform`} size={24} />}
                    text={text}
                />
            ))} et d&apos;autres technologies
            pour améliorer mes compétences en <Code text="DevSecOps" />
        </p>
    </div>
);

export default function Hero() {
    const { scrollY } = useScroll();
    const profileScale = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <Section className="relative flex max-md:flex-col items-start gap-12 md:flex-row md:items-center min-h-screen py-20">
            {/* Main Content */}
            <div className="flex-[2] flex flex-col gap-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl font-bold font-caption bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                        Hey, je suis Naguib.
                    </h1>
                    <h2 className="text-2xl font-caption text-foreground/90">
                        Ingénieur Fullstack orienté sécurité
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.TECH_STACK }}
                >
                    <TechStack />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.JOB_SEARCH }}
                    className="mt-4 p-6 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm"
                >
                    <p className="text-xl font-bold flex items-center gap-3">
                        <span className="animate-bounce">🚀</span>
                        <span>
                            À la recherche d&apos;un{" "}
                            <span className="text-primary">poste d&apos;ingénieur fullstack</span>
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAYS.CV_BUTTON }}
                    className="mt-2"
                >
                    <motion.a
                        href="/cv_ingenieur_fullstack_naguib.pdf"
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
                style={{ scale: profileScale }}
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