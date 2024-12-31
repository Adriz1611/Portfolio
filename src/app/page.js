"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "@/components/magic-ui/particles";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import InteractiveHoverButton from "@/components/magic-ui/interactive-hover-button";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { RainbowButton } from "@/components/magic-ui/rainbow-button";
import Link from "next/link";


export default function Page() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Render nothing until the theme is resolved

  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-white dark:bg-black overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        refresh
        color={particleColor} // Use the resolved theme
      />

      <div className="max-w-full max-h-full">
        <BorderBeam size={400} duration={12} delay={9} />
      </div>

      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center gap-4 lg:h-[250px] lg:flex-row">
        <WordPullUp className="text-4xl">This is Adrij!</WordPullUp>
        <Link href="/portfolio">
          <InteractiveHoverButton text="Continue" className="w-40 border-4" />
        </Link>
        <Link target="_blank" href="/Adrijresume.pdf">
          <RainbowButton className="w-40 border-4 md:fixed md:bottom-4 md:right-4 md:w-auto">
            Resume
          </RainbowButton>
        </Link>
      </div>
    </main>
  );
}
