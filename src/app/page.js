"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import InteractiveHoverButton from "@/components/magic-ui/interactive-hover-button";
import { RainbowButton } from "@/components/magic-ui/rainbow-button";
import Link from "next/link";

// Lazy load heavy components
const Particles = dynamic(() => import("@/components/magic-ui/particles"), {
  ssr: false,
  loading: () => null,
});

const BorderBeam = dynamic(
  () => import("@/components/magic-ui/border-beam").then((mod) => ({ default: mod.BorderBeam })),
  { ssr: false, loading: () => null }
);

export default function Page() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Memoize particle color to prevent recalculation
  const particleColor = useMemo(
    () => (mounted && resolvedTheme === "dark" ? "#ffffff" : "#000000"),
    [mounted, resolvedTheme]
  );

  if (!mounted) {
    // Return minimal skeleton to prevent layout shift
    return (
      <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-background overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="h-16 w-64 bg-muted/20 rounded animate-pulse mx-auto" />
            <div className="h-6 w-96 bg-muted/20 rounded animate-pulse mx-auto" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen min-w-full bg-background overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
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
          <Link target="_blank" href="/Adrij_resume.pdf">
            <RainbowButton className="w-40 border-2 hover:scale-105 transition-transform duration-200">
              Resume
            </RainbowButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
