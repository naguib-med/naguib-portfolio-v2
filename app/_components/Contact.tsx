"use client";

import { Section } from "@/app/_components/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/app/_components/icons/LinkedInIcon";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { XIcon } from "@/app/_components/icons/XIcon";
import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: <LinkedInIcon size={20} className="text-primary" />,
        url: "https://www.linkedin.com/in/naguib-mohamed-mahamoud-3baa96177/"
    },
    {
        name: "X",
        icon: <XIcon size={20} className="text-primary" />,
        url: "https://x.com/NaguibMoma"
    },
    {
        name: "GitHub",
        icon: <GithubIcon size={20} className="text-primary" />,
        url: "https://github.com/naguib-med"
    }
];

export default function Contact() {
    return (
        <Section className="py-20" id="contact">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-primary mb-8">
                        Connectons-nous
                    </h2>

                    <div className="space-y-6">
                        <p className="text-foreground">
                            Si vous souhaitez me contacter, veuillez m&apos;envoyer un e-mail à{" "}
                            <a
                                href="mailto:moma.naguib@gmail.com"
                                className="text-primary hover:underline font-medium"
                            >
                                moma.naguib@gmail.com
                            </a>
                        </p>

                        <div className="space-y-4">
                            <p className="text-foreground">
                                Ou vous pouvez me joindre sur:
                            </p>
                            <div className="flex gap-4 justify-center">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={cn(
                                            buttonVariants({ variant: "outline" }),
                                            "p-2 hover:bg-accent/10"
                                        )}
                                        aria-label={`${social.name} Profile`}
                                    >
                                        {social.icon}
                                        <span className="sr-only">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}