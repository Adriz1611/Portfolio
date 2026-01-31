"use client";

import React, { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import BlurFade from "../magic-ui/blur-fade";
import { Highlighter } from "../magic-ui/highlighter";
import { Badge } from "../shadcn-ui/badge";
import { Sparkles, Code2, Award } from "lucide-react";

// Lazy load heavy icon cloud component
const IconCloud = dynamic(() => import("../magic-ui/icon-cloud"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

// Static data moved outside component to prevent recreation
const skillsData = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "C/C++"],
  },
  {
    title: "Web Technologies & Frameworks",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "GraphQL",
      "REST",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, RDS, S3)",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Postman", "WebStorm", "IntelliJ", "VScode"],
  },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Operating Systems", items: ["Ubuntu", "Fedora", "Linux"] },
  {
    title: "Areas of Interest",
    items: [
      "Full Stack Development",
      "Cloud Computing",
      "Data Science",
      "Machine Learning",
    ],
  },
];

const slugs = [
  "typescript",
  "javascript",
  "python",
  "cplusplus",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "graphql",
  "postgresql",
  "mongodb",
  "mysql",
  "docker",
  "kubernetes",
  "git",
  "github",
  "postman",
  "visualstudiocode",
  "intellijidea",
  "tailwindcss",
  "ubuntu",
  "fedora",
  "amazonwebservices",
  "googlecloud",
  "microsoftazure",
];

// Memoized skill card component
const SkillCard = memo(function SkillCard({ group, idx, isLastSingle }) {
  return (
    <div
      className={`rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 flex flex-col gap-3 hover:border-border hover:bg-card/50 transition-colors
        ${isLastSingle ? "lg:col-start-2" : ""} 
      `}
      style={{ animationDelay: `${idx * 60}ms` }}
    >
      <h3 className="text-base md:text-lg font-semibold text-foreground tracking-wide text-center">
        {group.title}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
        {group.items.join(", ")}
      </p>
    </div>
  );
});

const Skill = ({ showTitle = true, transparent = false }) => {
  // Memoize filtered skills
  const visibleSkills = useMemo(
    () => skillsData.filter((g) => g.items.length > 0),
    [],
  );
  return (
    <div
      className={`${transparent ? "" : "min-h-screen bg-gradient-to-br from-background via-background to-muted/20"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        {showTitle && (
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium text-muted-foreground">
                About Me
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 tracking-tight">
              Adrij Bhadra
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate Full Stack Developer crafting exceptional digital
              experiences
            </p>
          </div>
        )}

        {/* About Section */}
        <BlurFade delay={0.2} inView>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                >
                  <Award className="w-4 h-4 mr-2" />
                  CGPA: 8.89/10
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  4th Year B.Tech
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  SRM IST
                </Badge>
              </div>

              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Currently pursuing my{" "}
                  <Highlighter
                    action="underline"
                    color="#3b82f6"
                    strokeWidth={2.5}
                    isView
                  >
                    <span className="text-foreground font-semibold">
                      B.Tech in Computer Science and Business Systems
                    </span>
                  </Highlighter>{" "}
                  at SRM Institute of Science and Technology, New Delhi. I'm
                  driven by creating{" "}
                  <Highlighter action="highlight" color="#a78bfa40" isView>
                    <span className="text-foreground">
                      innovative solutions
                    </span>
                  </Highlighter>{" "}
                  that solve real-world problems.
                </p>

                <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-border/50">
                  <p className="text-base leading-relaxed text-muted-foreground text-center">
                    Passionate about building{" "}
                    <span className="text-foreground font-semibold">
                      scalable web applications
                    </span>{" "}
                    and{" "}
                    <span className="text-foreground font-semibold">
                      cloud infrastructure
                    </span>
                    . Always exploring new technologies and pushing boundaries
                    in modern development.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Skills Section (Rewritten) */}
        <section
          className="animate-fade-in-up"
          aria-labelledby="skills-heading"
        >
          <div className="text-center mb-14">
            <h2
              id="skills-heading"
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground"
            >
              Skills
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSkills.map((group, idx) => {
              const isLastSingle =
                visibleSkills.length % 3 === 1 &&
                idx === visibleSkills.length - 1;

              return (
                <SkillCard
                  key={group.title}
                  group={group}
                  idx={idx}
                  isLastSingle={isLastSingle}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default memo(Skill);
