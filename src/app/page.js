"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "@/components/self-made/themetoggle";
import Particles from "@/components/magic-ui/particles";
import TypingAnimation from "@/components/magic-ui/typing-animation";
import InteractiveHoverButton from "@/components/magic-ui/interactive-hover-button";
import { BorderBeam } from "@/components/magic-ui/border-beam";


import Link from "next/link";

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-white dark:bg-black overflow-hidden">
      {/* Particles component with proper boundary control */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        refresh
        color={theme === "dark" ? "#ffffff" : "#000000"}
      />



      {/* BorderBeam container with controlled dimensions */}
      <div className="max-w-full max-h-full">
        <BorderBeam size={700} duration={12} delay={9} />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Typing Animation and Button */}
      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center gap-4 lg:h-[250px] lg:flex-row">
        <TypingAnimation>Hi This is Adrij !</TypingAnimation>
        <Link href="/portfolio">
          <InteractiveHoverButton text="Continue" className="w-40 border-4" />
        </Link>
      </div>
    </main>
  );
}
