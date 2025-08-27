import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { SovereignTechIntro } from "@/components/main/sovereign-tech/intro";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <SovereignTechIntro />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
