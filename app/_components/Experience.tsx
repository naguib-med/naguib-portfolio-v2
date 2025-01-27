"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Image, { StaticImageData } from "next/image";
import { Section } from "./Section";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/app/constants";

interface ExperienceCardProps {
    title: string;
    company: string;
    type: string;
    date: string;
    description: string[];
    icon: string | StaticImageData;
    languages?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, type, date, description, icon, languages }) => {
    return (
        <VerticalTimelineElement
            visible
            contentStyle={{
                background: "hsl(var(--accent) / 0.2)",
                color: "hsl(var(--foreground))",
                borderRadius: "12px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                border: "1px solid hsl(var(--accent))",
            }}
            contentArrowStyle={{ borderRight: "7px solid hsl(var(--accent))" }}
            date={date}
            iconStyle={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}
            icon={
                <motion.div whileHover={{ scale: 1.1, rotate: 10 }}>
                    <Image
                        width={100}
                        height={100}
                        src={icon}
                        alt={`${company} logo`}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                        loading="lazy"
                    />
                </motion.div>
            }
        >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-primary">
                {title}
            </h3>
            <p className="text-sm font-semibold text-secondary">{type}</p>
            <h4 className="vertical-timeline-element-subtitle text-lg text-accent">{company}</h4>
            <div className="text-sm mt-3 text-foreground">
                <ul className="list-disc pl-5">
                    {description.map((desc, index) => (
                        <li key={index} className="mb-2">{desc}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-5">
                {languages && (
                    <div className="flex flex-wrap mt-5 gap-y-2">
                        {languages.map((language, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded-lg text-sm mr-2 bg-muted text-muted-foreground"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </VerticalTimelineElement>
    );
};

export default function Experience() {
    return (
        <Section className="flex flex-col items-center justify-center">
            <p className="text-primary font-caption">Ce que j&apos;ai fait jusqu&apos;à présent</p>
            <h2 className="text-5xl font-bold font-caption text-primary">
                Expériences professionnel
            </h2>

            <div className="mt-20 w-full">
                <VerticalTimeline layout="2-columns">
                    {experiences.map((experience, index) => (
                        <ExperienceCard {...experience} key={index} />
                    ))}
                </VerticalTimeline>
            </div>
        </Section>
    );
};