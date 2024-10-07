import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import {Status} from "@/app/_components/Status";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />

        <Spacing size="md"/>    
    </main>
  );
}
