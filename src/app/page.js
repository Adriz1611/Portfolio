"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Critical path components - loaded immediately
import WordPullUp from "@/components/magic-ui/word-pull-up";

// Deferred components - loaded after initial render
const InteractiveHoverButton = dynamic(
  () => import("@/components/magic-ui/interactive-hover-button"),
  { ssr: true },
);

const RainbowButton = dynamic(
  () =>
    import("@/components/magic-ui/rainbow-button").then(
      (mod) => mod.RainbowButton,
    ),
  { ssr: true },
);

const Terminal = dynamic(
  () =>
    import("@/components/magic-ui/terminal").then((mod) => ({
      default: mod.Terminal,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-md h-32 bg-muted/20 rounded-lg animate-pulse" />
    ),
  },
);

const TypingAnimation = dynamic(
  () =>
    import("@/components/magic-ui/terminal").then((mod) => ({
      default: mod.TypingAnimation,
    })),
  { ssr: false },
);

const AnimatedSpan = dynamic(
  () =>
    import("@/components/magic-ui/terminal").then((mod) => ({
      default: mod.AnimatedSpan,
    })),
  { ssr: false },
);

const ScrollVelocityContainer = dynamic(
  () =>
    import("@/components/magic-ui/scroll-based-velocity").then((mod) => ({
      default: mod.ScrollVelocityContainer,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-24 bg-muted/10 animate-pulse" />,
  },
);

const ScrollVelocityRow = dynamic(
  () =>
    import("@/components/magic-ui/scroll-based-velocity").then((mod) => ({
      default: mod.ScrollVelocityRow,
    })),
  { ssr: false },
);

// Lazy load heavy components
const Particles = dynamic(() => import("@/components/magic-ui/particles"), {
  ssr: false,
  loading: () => null,
});

const BorderBeam = dynamic(
  () =>
    import("@/components/magic-ui/border-beam").then((mod) => ({
      default: mod.BorderBeam,
    })),
  { ssr: false, loading: () => null },
);

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
      {mounted && (
        <Particles
          className="absolute inset-0 z-0"
          quantity={80}
          ease={80}
          color="#ffffff"
          staticity={50}
        />
      )}

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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A generalist who codes. Full Stack • DevOps • Generative AI
          </p>
        </div>

        {/* Terminal Preview */}
        <div className="w-full max-w-md">
          <Terminal>
            <TypingAnimation duration={50}>$ ls ~/projects</TypingAnimation>
            <AnimatedSpan className="text-green-500">
              building cool stuff ✓
            </AnimatedSpan>
            <TypingAnimation duration={50}>$ git status</TypingAnimation>
            <AnimatedSpan className="text-blue-400">
              ready to ship something amazing
            </AnimatedSpan>
          </Terminal>
        </div>

        {/* Scrolling Tech Stack */}
        <div className="w-full pt-8">
          <ScrollVelocityContainer className="text-2xl md:text-3xl font-bold">
            <ScrollVelocityRow baseVelocity={15} direction={1}>
              <span className="mx-8 text-muted-foreground/60">React.js</span>
              <span className="mx-8 text-muted-foreground/60">Next.js</span>
              <span className="mx-8 text-muted-foreground/60">Docker</span>
              <span className="mx-8 text-muted-foreground/60">Kubernetes</span>
              <span className="mx-8 text-muted-foreground/60">AWS</span>
              <span className="mx-8 text-muted-foreground/60">Node.js</span>
              <span className="mx-8 text-muted-foreground/60">Python</span>
              <span className="mx-8 text-muted-foreground/60">TypeScript</span>
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={15} direction={-1}>
              <span className="mx-8 text-muted-foreground/60">PostgreSQL</span>
              <span className="mx-8 text-muted-foreground/60">MongoDB</span>
              <span className="mx-8 text-muted-foreground/60">Redis</span>
              <span className="mx-8 text-muted-foreground/60">
                GitHub Actions
              </span>
              <span className="mx-8 text-muted-foreground/60">Jenkins</span>
              <span className="mx-8 text-muted-foreground/60">Linux</span>
              <span className="mx-8 text-muted-foreground/60">Terraform</span>
              <span className="mx-8 text-muted-foreground/60">OpenAI</span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
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
