"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();

    const scrollProgress = useSpring(
        useTransform(scrollY, [0, document.body.scrollHeight], [0, 1]),
        { stiffness: 100, damping: 30, restDelta: 0.001 }
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary/30">
            {/* Animated background */}
            <div className="fixed inset-0">
                <div className="absolute inset-0 cyber-grid" />

                {/* Interactive glow */}
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full glow opacity-30"
                    style={{
                        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                        x: mousePosition.x - 200,
                        y: mousePosition.y - 200,
                    }}
                    transition={{ type: "spring", mass: 1, stiffness: 30, damping: 30 }}
                />

                {/* Ambient orbs */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-[450px] h-[450px] rounded-full glow opacity-10"
                    style={{
                        background: "hsl(var(--accent))",
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -right-40 bottom-0 w-[1000px] h-[1000px] rounded-full glow opacity-20"
                    style={{
                        background: "hsl(var(--secondary))",
                    }}
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full glow opacity-20"
                    style={{
                        background: "hsl(var(--accent))",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(60)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                            background: `hsl(var(${["--primary", "--secondary", "--accent"][Math.floor(Math.random() * 3)]
                                }))`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -Math.random() * 200 - 50],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
                style={{ scaleX: scrollProgress }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;