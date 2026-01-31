"use client";

import React, { useEffect, useState, memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import { NeonGradientCard } from "@/components/magic-ui/neon-gradient-card";
import { useTheme } from "next-themes";
import { ArrowUpRight, Sparkles, Trophy, Users, Code2 } from "lucide-react";

// Static data moved outside component
const experiences = [
  {
    logoUrl: "https://www.altere.in/_next/image?url=%2Fnav-log.png&w=256&q=75",
    altText: "Altere",
    title: "Altere",
    subtitle: "Frontend Developer · Freelancing Remote",
    href: "https://www.altere.in/",
    badges: [
      "Next.js",
      "TailwindCSS",
      "GSAP",
      "SEO",
      "Performance Optimization",
    ],
    period: "Oct 2024 – Nov 2024",
    description:
      "Enhanced digital platform performance using Next.js with optimizations for improved loading speeds and SEO visibility. Developed responsive UI with Tailwind CSS and created engaging GSAP animations for improved user interaction and visual storytelling.",
  },
  {
    logoUrl:
      "https://cfstatic.give.do/daa061c6-3ca7-4aba-8fbe-e6987aaacb88.png",
    altText: "Changespark",
    title: "Changespark Foundation",
    subtitle: "Full-Stack Developer · Internship Remote",
    href: "https://changespark.in/",
    badges: [
      "Next.js",
      "Supabase",
      "Responsive Design",
      "Admin Panel",
      "Agile",
    ],
    period: "Jul 2024 – Aug 2024",
    description:
      "Built dynamic blog system using Next.js and Supabase with intuitive admin panel for independent content management. Designed mobile-optimized responsive UI ensuring accessibility for diverse user base and community outreach.",
  },
];

const projects = [
  {
    logoUrl: "/fullstack.png",
    altText: "CodeQuest",
    title: "CodeQuest",
    subtitle: "Multifaceted Placement Portal",
    href: "#",
    badges: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Judge0",
      "PostgreSQL",
      "Whisper AI",
    ],
    period: "Jun 2025 – Present",
    description:
      "Developed AI-driven interview platform with automated screening, Whisper-Fast AI transcription, and real-time feedback generation for placement preparation. Built scalable Node.js backend architecture handling multiple concurrent sessions with Judge0 API integration for coding exercises. Implemented dynamic performance tracking and evaluation capabilities with comprehensive candidate assessment tools.",
  },
  {
    logoUrl: "/fullstack.png",
    altText: "CI/CD Pipeline",
    title: "GitHub Actions Production CI/CD Pipeline",
    subtitle: "DevOps & Cloud Infrastructure",
    href: "#",
    badges: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "SonarQube",
      "Trivy",
    ],
    period: "2024",
    description:
      "Designed comprehensive CI/CD pipeline with automated compilation, security scanning using Gitleaks/Trivy, and SonarQube quality analysis. Implemented containerized Docker Hub workflow with multi-stage building and automated Kubernetes deployment to AWS EKS. Integrated security-first approach with vulnerability scanning and quality gate validation before production deployment.",
  },
  {
    logoUrl: "/fullstack.png",
    altText: "Triage Assistant",
    title: "Smart Symptom Log & Triage Assistant",
    subtitle: "AI-Powered Healthcare Solution",
    href: "#",
    badges: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini AI",
      "Docker",
    ],
    period: "2024",
    description:
      "Engineered hybrid diagnostic system integrating Google Gemini AI with deterministic heuristics to extract structured JSON insights and confidence intervals for real-time medical triage. Designed scalable PostgreSQL schema using Prisma ORM to aggregate longitudinal health data, enabling detection of long-term patterns and worsening trends. Constructed multi-layered triage algorithm weighing vital signs against emergency combinations to automate urgency classification and clinical decision support.",
  },
  {
    logoUrl: "https://gameessentials.in/logo.svg",
    altText: "Gameessentials",
    title: "Gameessentials",
    subtitle: "Full-Stack E-commerce Application",
    href: "https://gameessentials.in/",
    badges: ["Next.js", "Supabase", "PhonePe", "Cashfree", "E-commerce"],
    period: "Dec 2024 – May 2025",
    description:
      "Built a full-stack e-commerce platform with Next.js and Supabase, integrating PhonePe and Cashfree payments with confirmation checks and delivery status tracking. Implemented structured product management with categories, tags, and inventory control for efficient organization and search. Developed a robust cart and order processing system, supporting seamless checkout and order fulfillment workflow. Designed customer management and discount/coupon features to enhance user engagement and drive sales.",
  },
];

const certifications = [
  {
    logoUrl: "/fullstack.png",
    altText: "NPTEL",
    title: "Cloud Computing and Distributed Systems",
    subtitle: "NPTEL · NPTEL25CS12S448000355",
    href: "#",
    badges: ["Cloud Computing", "Distributed Systems", "Data Engineering"],
    period: "Apr 2025",
    description:
      "Comprehensive certification covering cloud computing fundamentals, distributed system architectures, and modern cloud practices.",
  },
  {
    logoUrl: "/fullstack.png",
    altText: "CDAC",
    title: "Bootcamp on Big Data and Data Science",
    subtitle: "CDAC Noida · FSP/BCMP/C-DAC/NOI/B01/2501/1604/332745",
    href: "#",
    badges: ["Big Data", "Data Science", "Analytics", "Decision Science"],
    period: "Feb 2025",
    description:
      "Intensive bootcamp covering big data technologies, data science methodologies, statistical analysis, and practical applications in real-world scenarios.",
  },
  {
    logoUrl: "/fullstack.png",
    altText: "Cisco",
    title: "JavaScript Essentials 1",
    subtitle: "Cisco Networking Academy program",
    href: "#",
    badges: ["JavaScript", "Programming", "Web Development"],
    period: "Feb 2024",
    description:
      "Foundational JavaScript programming certification covering essential concepts and practical programming skills.",
  },
];

const leadershipSkills = [
  { label: "Leadership", icon: Trophy },
  { label: "Web Dev", icon: Code2 },
  { label: "Community", icon: Users },
  { label: "Mentoring", icon: Sparkles },
];

// Memoized card components
const ProjectCard = memo(function ProjectCard({ project, index }) {
  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.badges.map((badge, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-200 text-xs font-medium px-3 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            {project.description}
          </p>

          <div className="flex justify-end">
            <Link
              href={project.href}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-200 group/link"
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                View Project
              </span>
              <ArrowUpRight
                size={16}
                className="text-blue-600 dark:text-blue-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
});

const ExperienceCard = memo(function ExperienceCard({ experience, index }) {
  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
        <div className="p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <Avatar className="size-16 border-2 border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
                <AvatarImage
                  src={experience.logoUrl}
                  alt={experience.altText}
                  className="object-contain p-2"
                />
                <AvatarFallback className="text-lg font-semibold text-primary">
                  {experience.altText[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                {experience.title}
              </h3>
              <p className="text-muted-foreground font-medium mb-2">
                {experience.subtitle}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {experience.period}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {experience.badges.map((badge, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 text-xs font-medium px-3 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            {experience.description}
          </p>

          <div className="flex justify-end">
            <Link
              href={experience.href}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/30 transition-all duration-200 group/link"
            >
              <span className="text-sm font-medium text-primary">
                View Project
              </span>
              <ArrowUpRight
                size={16}
                className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
});

const CertificationCard = memo(function CertificationCard({ cert, index }) {
  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <Avatar className="size-12 border-2 border-border/50 bg-background/50 backdrop-blur-sm shadow-md">
                <AvatarImage
                  src={cert.logoUrl}
                  alt={cert.altText}
                  className="object-contain p-1"
                />
                <AvatarFallback className="text-sm font-semibold text-primary">
                  {cert.altText[0]}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-background"></div>
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1 leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-1">
                {cert.subtitle}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  {cert.period}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {cert.badges.map((badge, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20 transition-colors duration-200 text-xs font-medium px-2 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed text-xs">
            {cert.description}
          </p>
        </div>
      </Card>
    </div>
  );
});

function WorkExperiencePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize neon colors to prevent recalculation
  const neonColors = useMemo(
    () => ({
      firstColor: mounted && resolvedTheme === "dark" ? "#00FFF1" : "#0EA5E9",
      secondColor: mounted && resolvedTheme === "dark" ? "#ff00aa" : "#8B5CF6",
    }),
    [mounted, resolvedTheme],
  );

  return (
    <>
      <div className="bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-medium text-muted-foreground">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions crafted with cutting-edge technologies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-muted/20 via-background to-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-2xl">💼</span>
              <span className="text-sm font-medium text-muted-foreground">
                Professional Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Work Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions across diverse projects and
              organizations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-background via-muted/10 to-background py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-medium text-muted-foreground">
                Recognition
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Achievement
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership & Recognition
            </h2>
          </div>

          {/* Featured Leadership Card */}
          <div className="flex justify-center animate-fade-in-up">
            <NeonGradientCard
              className="w-full max-w-6xl"
              borderRadius={24}
              borderSize={3}
              neonColors={neonColors}
            >
              <div className="relative flex flex-col lg:flex-row min-h-[380px] overflow-hidden rounded-[21px]">
                {/* Image Section - Large and Immersive */}
                <div className="relative w-full lg:w-1/2 min-h-[240px] lg:min-h-full overflow-hidden group">
                  {/* Gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />

                  {/* Main Image */}
                  <Image
                    src="/adriz.png"
                    alt="Adrij Bhadra - Web Development Lead at GDG"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={false}
                    className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Floating badge on image */}
                  <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-semibold text-sm">
                        Lead Developer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative w-full lg:w-1/2 p-5 md:p-7 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    {/* Title Section */}
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                        Web Development
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                          Lead
                        </span>
                      </h3>
                      <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                        GDG Club SRMIST Delhi
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-lg">📅</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Duration
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          Aug 2024 – May 2025
                        </p>
                      </div>
                    </div>

                    {/* Skills/Tags with icons */}
                    <div className="flex flex-wrap gap-2">
                      {leadershipSkills.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default group/badge"
                        >
                          <item.icon className="w-4 h-4 text-primary group-hover/badge:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-foreground">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      Leading web development initiatives and mentoring students
                      in modern web technologies. Organizing workshops,
                      hackathons, and technical events for the developer
                      community.
                    </p>

                    {/* Stats row */}
                    <div className="flex justify-center pt-4 border-t border-border/50">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">5+</p>
                        <p className="text-xs text-muted-foreground">
                          Events Organized
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NeonGradientCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(WorkExperiencePage);
