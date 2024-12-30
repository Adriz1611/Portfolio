import React from "react";
import { MagicCard } from "../magic-ui/magic-card";
import IconCloud from "../magic-ui/icon-cloud";

const skillsData = [
  { title: "Languages", skills: "Javascript, C++" },
  { title: "Backend", skills: "Node, Express, NestJS" },
  { title: "Databases", skills: "MongoDB, MySQL, PostgreSQL" },
  { title: "BAAS", skills: "Firebase, Supabase" },
  { title: "Tools", skills: "Git, Postman, Figma, Apollo GraphQL" },
  { title: "Styling", skills: "Tailwind, NextUI, Shadcn" },
];

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "graphql",
  "supabase",
  "tailwindcss",
];

const Skill = () => {
  return (
    <div className="p-6 min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <span className="mr-2">👋</span> About Me
        </h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed animate-fade-in">
            Hey there! I'm{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">
              Adrij Bhadra
            </span>
            , a frontend wizard turning coffee into code and design challenges
            into digital masterpieces. From New Delhi, India, I'm on a mission
            to create web experiences that leave users speechless. 🚀
          </p>
          <p className="text-lg leading-relaxed">
            Currently pursuing my{" "}
            <span className="font-bold">B.Tech in Computer Science</span>, I've
            already made waves by{" "}
            <span className="text-purple-600 dark:text-purple-400">
              boosting page speeds by 40%
            </span>{" "}
            and crafting animations that keep users glued to their screens at
            places like <span className="font-bold">Altere</span> and{" "}
            <span className="font-bold">Changespark Foundation</span>.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            When I'm not architecting lightning-fast interfaces, you'll find me
            leading development teams and turning complex challenges into
            elegant solutions. Ready to create something extraordinary? Let's
            build the future together! ✨
          </p>
        </div>
        <div>
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="p-6 bg-white dark:bg-black mt-10">
          <div className="max-w-4xl mx-auto shadow-md rounded-lg p-6 bg-white dark:bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skill, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer flex-col items-center justify-center p-4 text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-black dark:text-white font-light ">
                    {skill.skills}
                  </p>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
