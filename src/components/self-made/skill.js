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
        <div className="p-6 pt-20 min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold mb-6 flex items-center">
                    <span className="mr-2">👋</span> About Me
                </h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed animate-fade-in text-justify">
                        Hey there! I'm 
                        <span className="font-bold p-2 text-black dark:text-white">
                            Adrij Bhadra
                        </span>
                        , a passionate developer currently in my
                        <span className="font-bold"> 3rd year of B.Tech in Computer Science</span>, living in
                        New Delhi, India.
                    </p>
                    <p className="text-lg leading-relaxed text-justify">
                        I love starting new things and exploring them as I proceed. My
                        journey revolves around creating solutions that solve real-world
                        problems and building tools that can be used by people.
                    </p>
                    <p className="text-lg leading-relaxed text-justify">
                        My interests lie in <span className="font-bold">cloud</span> and
                        <span className="font-bold"> DevOps</span>. I've run various home
                        projects like self-hosted photo and video management systems, home
                        servers, and also dabbled in cybersecurity (script kiddie) and a
                        little bit of blockchain.
                    </p>
                    <p className="text-lg leading-relaxed mb-8 text-justify">
                        However, I found my true calling in developing
                        <span className="text-black dark:text-white"> full-stack applications </span>
                        and studying modern cloud practices. Let's create something
                        extraordinary together! ✨
                    </p>
                </div>
                <div>
                    <IconCloud iconSlugs={slugs} />
                </div>
                <div className="p-6 bg-white dark:bg-black mt-10 rounded-xl shadow-lg">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">
                            Skills
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skillsData.map((skill, index) => (
                                <MagicCard
                                    key={index}
                                    className="cursor-pointer flex-col items-center justify-center p-4 text-center bg-white dark:bg-black rounded-lg h-32"
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                                        {skill.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 font-light">
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
