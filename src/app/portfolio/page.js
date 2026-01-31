"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/magic-ui/scroll-progress";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import BlurFade from "@/components/magic-ui/blur-fade";

// Lazy load heavy components with skeleton loading states
const Particles = dynamic(() => import("@/components/magic-ui/particles"), {
  ssr: false,
  loading: () => null,
});

const Skill = dynamic(() => import("@/components/self-made/skill"), {
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const WorkExperiencePage = dynamic(
  () => import("@/components/self-made/workexperience"),
  {
    loading: () => (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  },
);

const Contact = dynamic(() => import("@/components/self-made/contact"), {
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function PortfolioPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const particleColor = useMemo(
    () => (mounted && resolvedTheme === "dark" ? "#ffffff" : "#000000"),
    [mounted, resolvedTheme],
  );

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Particles */}
      {mounted && (
        <Particles
          className="absolute inset-0 z-0 opacity-30"
          quantity={100}
          staticity={50}
          ease={80}
          color={particleColor}
          refresh
        />
      )}

      {/* Scroll Progress Bar */}
      <ScrollProgress className="top-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <BlurFade delay={0.25} inView>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground mb-4 backdrop-blur-sm">
              <span>🚀</span>
              <span>My Journey</span>
            </div>
          </BlurFade>

          <div className="flex justify-center items-center">
            <WordPullUp className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Portfolio & Skills
            </WordPullUp>
          </div>

          <BlurFade delay={0.5} inView>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive look at my technical expertise, professional
              experience, and the projects that define my journey as a
              developer.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 space-y-16 pb-8">
        <BlurFade delay={0.2} inView inViewMargin="-50px">
          <section id="skills" className="relative">
            <Skill showTitle={false} transparent={true} />
          </section>
        </BlurFade>

        <BlurFade delay={0.2} inView inViewMargin="-50px">
          <section id="experience" className="relative">
            <WorkExperiencePage />
          </section>
        </BlurFade>

        <BlurFade delay={0.2} inView inViewMargin="-50px">
          <section id="contact" className="relative">
            <Contact />
          </section>
        </BlurFade>
      </div>
    </main>
  );
}
