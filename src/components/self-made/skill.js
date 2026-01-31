import React from "react";
import IconCloud from "../magic-ui/icon-cloud";

// User-specified categories only
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

const Skill = () => {
  // Filter out empty categories once
  const visibleSkills = skillsData.filter((g) => g.items.length > 0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
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

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 animate-fade-in-up">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-8 text-foreground/80">
                Currently in my{" "}
                <span className="font-semibold text-foreground">
                  4th year of B.Tech in Computer Science and Business Systems
                </span>{" "}
                at SRM Institute of Science and Technology, New Delhi. I'm
                passionate about creating solutions that solve real-world
                problems and building tools that make a difference. Maintaining
                a CGPA of 8.89/10.
              </p>
              <p className="text-lg leading-8 text-foreground/80">
                My expertise spans across{" "}
                <span className="font-semibold text-foreground">
                  Full Stack Development
                </span>
                ,
                <span className="font-semibold text-foreground">
                  {" "}
                  Cloud Computing & DevOps
                </span>
                , and
                <span className="font-semibold text-foreground">
                  {" "}
                  Data Science
                </span>
                . I specialize in building scalable applications using modern
                technologies like Next.js, React, and cloud platforms including
                AWS, Azure, and GCP.
              </p>
              <p className="text-lg leading-8 text-foreground/80">
                I'm proficient with containerization technologies like{" "}
                <span className="font-semibold text-foreground">
                  Docker and Kubernetes
                </span>
                , and have experience implementing{" "}
                <span className="font-semibold text-foreground">
                  CI/CD pipelines
                </span>{" "}
                for seamless deployments.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>

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
                <div
                  key={group.title}
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
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;
