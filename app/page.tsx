import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import {Experience} from "@/app/_components/Experience";

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
    </main>
  );
}
