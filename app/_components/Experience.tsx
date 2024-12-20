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
                background: "linear-gradient(135deg, rgba(29,24,54,0.8) 0%, rgba(60,59,77,0.8) 100%)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
            contentArrowStyle={{borderRight: "7px solid rgba(255,255,255,0.8)"}}
            date={date}
            iconStyle={{background: "#fff", color: "#fff", boxShadow: "0 4px 14px rgba(0,0,0,0.1)"}}
            icon={
                <motion.div whileHover={{scale: 1.1, rotate: 10}}>
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
            <h3 className="vertical-timeline-element-title text-xl font-bold">
                {title}
            </h3>
            <p className="text-sm font-semibold text-secondary-foreground">{type}</p>
            <h4 className="vertical-timeline-element-subtitle text-lg">{company}</h4>
            <div className="text-sm mt-3">
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
                                className="px-2 py-1 rounded-md text-sm mr-2 bg-primary-foreground"
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
