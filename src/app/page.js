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

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-background overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        refresh
        color={particleColor}
      />

      {/* Subtle border beam */}
      <div className="max-w-full max-h-full">
        <BorderBeam size={400} duration={12} delay={9} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-6 text-center">
        {/* Hero text */}
        <div className="space-y-6">
          <WordPullUp className="text-4xl md:text-6xl font-bold text-foreground">
            This is Adrij!
          </WordPullUp>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer crafting exceptional digital experiences
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link href="/portfolio">
            <InteractiveHoverButton
              text="Continue"
              className="w-40 border-2 hover:scale-105 transition-transform duration-200"
            />
          </Link>
          <Link target="_blank" href="/Adrijresume.pdf">
            <RainbowButton className="w-40 border-2 hover:scale-105 transition-transform duration-200">
              Resume
            </RainbowButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
