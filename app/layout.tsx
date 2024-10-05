import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";

const AnekTelugu = Anek_Telugu({subsets: ["latin"], variable: "--font-caption"});

export const metadata: Metadata = {
  title: "Naguib MM | Full-stack developer",
  description: "Full-stack developer using React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          GeistSans.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
