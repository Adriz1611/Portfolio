"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/magic-ui/scroll-progress";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import BlurFade from "@/components/magic-ui/blur-fade";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/magic-ui/terminal";
import { Highlighter } from "@/components/magic-ui/highlighter";

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
          quantity={60}
          staticity={60}
          ease={80}
          color={particleColor}
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

          {/* About Me Section */}
          <BlurFade delay={0.7} inView>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="p-6 md:p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">👋</span>
                  <span>Who Am I?</span>
                </h3>

                {/* Terminal Showcase */}
                <div className="mb-6 flex justify-center">
                  <Terminal className="max-w-full">
                    <TypingAnimation duration={40}>$ whoami</TypingAnimation>
                    <AnimatedSpan className="text-green-500">
                      adriz - terminal native • homelab enthusiast
                    </AnimatedSpan>
                    <TypingAnimation duration={40}>
                      $ cat ~/setup.txt
                    </TypingAnimation>
                    <AnimatedSpan className="text-blue-400">
                      Ubuntu Server (24x7) + Raspberry Pi Zero 2W
                    </AnimatedSpan>
                    <TypingAnimation duration={40}>
                      $ docker ps | wc -l
                    </TypingAnimation>
                    <AnimatedSpan className="text-purple-400">
                      12 containers running ✓
                    </AnimatedSpan>
                    <TypingAnimation duration={40}>
                      $ echo $PASSION
                    </TypingAnimation>
                    <AnimatedSpan className="text-yellow-400">
                      Full Stack • DevOps • Generative AI • Problem Solving
                    </AnimatedSpan>
                  </Terminal>
                </div>

                <div className="space-y-4 text-left text-muted-foreground">
                  <p className="leading-relaxed">
                    I'm a{" "}
                    <Highlighter
                      action="underline"
                      color="#fbbf24"
                      strokeWidth={2.5}
                      isView
                    >
                      <span className="text-foreground font-semibold">
                        generalist at heart
                      </span>
                    </Highlighter>{" "}
                    - someone who thrives on understanding the full stack,
                    DevOps pipelines, and AI systems. I don't just write code; I
                    love the{" "}
                    <Highlighter action="highlight" color="#60a5fa40" isView>
                      <span className="text-foreground">entire ecosystem</span>
                    </Highlighter>
                    : from spinning up servers to training models.
                  </p>
                  <p className="leading-relaxed">
                    🏠{" "}
                    <strong className="text-foreground">
                      Homelab Enthusiast:
                    </strong>{" "}
                    I run an{" "}
                    <Highlighter
                      action="box"
                      color="#34d399"
                      strokeWidth={2.5}
                      isView
                    >
                      <span className="text-foreground font-semibold">
                        Ubuntu server and a Raspberry Pi Zero 2W 24x7
                      </span>
                    </Highlighter>{" "}
                    at home, constantly experimenting with self-hosted services,
                    automation, and infrastructure.
                  </p>
                  <p className="leading-relaxed">
                    💻{" "}
                    <strong className="text-foreground">
                      Terminal Native:
                    </strong>{" "}
                    Ubuntu is my daily driver, and I'm{" "}
                    <Highlighter action="highlight" color="#a78bfa40" isView>
                      <span className="text-foreground">
                        most comfortable with a terminal open
                      </span>
                    </Highlighter>
                    . Bash scripts, Docker containers, systemd services - this
                    is where I feel at home.
                  </p>
                  <p className="leading-relaxed">
                    🤝{" "}
                    <strong className="text-foreground">Problem Solver:</strong>{" "}
                    I genuinely enjoy helping people tackle the{" "}
                    <Highlighter
                      action="circle"
                      color="#f87171"
                      strokeWidth={2.5}
                      isView
                    >
                      <span className="text-foreground font-semibold">
                        messy, headache-inducing problems
                      </span>
                    </Highlighter>
                    . The kind where you have 20 browser tabs open and Stack
                    Overflow isn't helping - yeah, those.
                  </p>
                  <p className="leading-relaxed italic text-sm border-l-2 border-primary pl-4 mt-4">
                    "Jack of all trades is master of none, but oftentimes better
                    than a master of one."
                    <br />
                    <span className="text-xs text-muted-foreground/60 not-italic">
                      — I remind myself of this when imposter syndrome kicks in.
                    </span>
                  </p>
                </div>
              </div>
            </div>
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
