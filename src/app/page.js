"use client";

import { useTheme } from "next-themes";
//import ThemeToggle from "@/components/self-made/themetoggle";
import Particles from "@/components/magic-ui/particles";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import InteractiveHoverButton from "@/components/magic-ui/interactive-hover-button";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { AppWindow } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-white dark:bg-black overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        refresh
        color={theme === "dark" ? "#ffffff" : "#000000"}
      />

      <div className="max-w-full max-h-full">
        <BorderBeam size={400} duration={12} delay={9} />
      </div>



      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center gap-4 lg:h-[250px] lg:flex-row">
        <WordPullUp className="text-4xl">This is Adrij!</WordPullUp>
        <Link href="/portfolio">
          <InteractiveHoverButton text="Continue" className="w-40 border-4" />
        </Link>
      </div>
    </main>
  );
}
