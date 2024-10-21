import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/app/_components/Header"));
const Hero = dynamic(() => import("@/app/_components/Hero"));
const Experience = dynamic(() => import("@/app/_components/Experience"));
const Tech = dynamic(() => import("@/app/_components/Tech"));
const Works = dynamic(() => import("@/app/_components/Works"));
const Contact = dynamic(() => import("@/app/_components/Contact"));
import { Spacing } from "@/app/_components/Spacing";
import Education from "@/app/_components/Education";


export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
        <Experience />
        <Spacing size="md"/>
        <Education />
        <Spacing size="md"/>
        <Tech />
        <Spacing size="md"/>
        <Works />
        <Spacing size="md"/>
        <Contact />
        <Spacing size="md"/>
    </main>
  );
}
