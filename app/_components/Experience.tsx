"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Image, { StaticImageData } from "next/image";
import bifora from "./images/company/bifora.jpg";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import saba_logo from "./images/company/saba_logo.jpg";

interface ExperienceCardProps {
    title: string;
    company: string;
    type: string;
    date: string;
    description: string;
    icon: string | StaticImageData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, type, date, description, icon }) => {
    return (
        <VerticalTimelineElement
            visible
            contentStyle={{
                background: "linear-gradient(135deg, #1d1836 0%, #3c3b4d 100%)",
                color: "#fff"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={date}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
                <div className="relative group">
                    <Image
                        width={100}
                        height={100}
                        src={icon}
                        alt={`${company} logo`}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    />
                </div>
            }
        >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {title}
            </h3>
            <p className="text-sm font-bold">{type}</p>
            <h4 className="text-lg font-bold">{company}</h4>
            <p className="text-base">{description}</p>
        </VerticalTimelineElement>
    );
};

const experiences = [
    {
        title: "Multi-skilled employee",
        company: "Saba Africa Bank",
        type: "CDI",
        date: "April 2020 - August 2020",
        description: "Frontend development of a web application for the management of the bank's financial products.",
        icon: saba_logo
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Internship",
        date: "2023 - 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: bifora
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Work-study",
        date: "2023 - 2024",
        description: "Développement d'une application web de gestion de Comptes Rendus d'Activités (CRA) pour les consultants de l'entreprise.",
        icon: bifora
    },
];

export const Experience: React.FC = () => {
    return (
        <section className="flex flex-col items-center">
            <p className="text-primary font-caption">What I have done so far</p>
            <h2 className="text-5xl font-bold font-caption text-primary">Work Experience.</h2>

            <div className="mt-20 w-full">
                <VerticalTimeline layout="2-columns">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};
