"use client";

import React from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import { ArrowUpRight } from "lucide-react";

export default function WorkExperiencePage() {
  const experiences = [
    {
      logoUrl:
        "https://www.altere.in/_next/image?url=%2Fnav-log.png&w=256&q=75",
      altText: "Altere",
      title: "Altere",
      subtitle: "Frontend Developer · Freelancing Remote",
      href: "https://www.altere.in/",
      badges: ["Next.js", "TailwindCSS", "GSAP", "SEO"],
      period: "Oct 2024 – Nov 2024",
      description:
        "Developed high-performance digital platform using Next.js, improving page load speeds and SEO visibility. Designed responsive UI with Tailwind CSS, ensuring cross-device compatibility. Implemented smooth animations with GSAP, enhancing user engagement and reducing page abandonment.",
    },
    {
      logoUrl:
        "https://cfstatic.give.do/daa061c6-3ca7-4aba-8fbe-e6987aaacb88.png",
      altText: "Changespark",
      title: "Changespark Foundation",
      subtitle: "Full-Stack Developer · Internship Remote",
      href: "https://changespark.in/",
      badges: ["Next.js", "Supabase", "Responsive Design", "Admin Panel"],
      period: "Jul 2024 – Aug 2024",
      description:
        "Developed dynamic blog system using Next.js and Supabase, enabling real-time content updates. Engineered admin panel to allow non-technical members to manage website content efficiently. Designed responsive UI, ensuring seamless experience across mobile and desktop devices.",
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
        "AI",
      ],
      period: "Jun 2025 – Present",
      description:
        "Developed and implemented an AI-driven interview platform for tech-based hiring, enhancing candidate evaluation. Integrated Whisper-Fast AI for real-time transcription and feedback generation. Managed backend architecture with Node.js and Express.js for scalable communication between frontend and AI model. Implemented dynamic coding exercises with Judge0 API, enabling real-time performance tracking.",
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
      badges: ["Cloud Computing", "Distributed Systems"],
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
      badges: ["Big Data", "Data Science", "Analytics"],
      period: "Feb 2025",
      description:
        "Intensive bootcamp covering big data technologies, data science methodologies, and practical applications in real-world scenarios.",
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in-up">
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
              <div
                key={index}
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
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background"></div>
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
                      {experience.badges.map((badge, index) => (
                        <Badge
                          key={index}
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
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-muted/20 via-background to-background">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in-up">
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
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative">
                        <Avatar className="size-16 border-2 border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
                          <AvatarImage
                            src={project.logoUrl}
                            alt={project.altText}
                            className="object-contain p-2"
                          />
                          <AvatarFallback className="text-lg font-semibold text-primary">
                            {project.altText[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-background"></div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-2">
                          {project.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            {project.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.badges.map((badge, index) => (
                        <Badge
                          key={index}
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
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-background via-muted/10 to-background py-20">
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
              <div
                key={index}
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
                      {cert.badges.map((badge, index) => (
                        <Badge
                          key={index}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
//int
