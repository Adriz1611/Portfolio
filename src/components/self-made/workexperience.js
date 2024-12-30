"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn-ui/avatar";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card } from "@/components/shadcn-ui/card";
import { ArrowUpRight } from "lucide-react";

const WorkExperience = ({ experiences }) => (
  <div className="p-6 pt-20 max-w-screen bg-white dark:bg-black text-black dark:text-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex">
            <Card className="flex flex-col justify-between p-6 bg-white dark:bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[350px]">
              <div className="flex gap-6">
                <Avatar className="border size-20 shrink-0 bg-gray-50 dark:bg-gray-800 p-2">
                  <AvatarImage
                    src={experience.logoUrl}
                    alt={experience.altText}
                  />
                  <AvatarFallback className="text-lg font-semibold">
                    {experience.altText[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-semibold text-black dark:text-white truncate">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {experience.period}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {experience.description}
              </p>
              <div className="mt-4 flex justify-end">
                <Link href={experience.href} target="_blank" passHref>
                    <ArrowUpRight size={30} />
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function WorkExperiencePage() {
  const experiences = [
    {
      logoUrl: "https://cfstatic.give.do/daa061c6-3ca7-4aba-8fbe-e6987aaacb88.png",
      altText: "Changespark",
      title: "Changespark",
      subtitle: "Full Stack Developer Internship",
      href: "https://changespark.in/",
      badges: ["Supabase", "Tailwindcss", "Next.js"],
      period: "Jul 2024 – Aug 2024",
      description:
        "The Changespark Foundation project involved leading the development of a responsive website using Next.js, Tailwind CSS, and Supabase. Key achievements include improving user interaction by 20%, enhancing mobile accessibility by 15%, and boosting data security by 30%. The project also featured the creation of a user-friendly admin panel, reducing content management time by 40%. Additionally, SEO optimization and server-side rendering enhanced site performance and search rankings, while integrating real-time database management with Supabase increased data handling efficiency by 30%.",
    },
    {
      logoUrl: "https://www.altere.in/_next/image?url=%2Fnav-log.png&w=256&q=75",
      altText: "Altere",
      title: "Altere",
      subtitle: "Frontend Developer",
      href: "https://www.altere.in/",
      badges: ["NextJS", "TailwindCSS", "GSAP"],
      period: "Oct 2024 – Nov 2024",
      description:
        "The Altere project involved creating a high-performance digital platform as a Frontend Developer. Key accomplishments include enhancing page load speed by 40%, improving SEO by 35%, and achieving 95% cross-device compatibility. Using Tailwind CSS and GSAP, the platform featured visually compelling interfaces and engaging animations, increasing user session duration by 50 seconds and reducing abandonment rates. Additionally, integrating Framer Motion and Next.js optimized server-side rendering, improving user engagement by 40%, and streamlining development complexity by 70%. Advanced animation techniques and a custom design system boosted user satisfaction by 35%.",
    },
    {
      logoUrl: "https://gameessentials.in/logo.svg",
      altText: "Game Essentials",
      title: "Game Essentials",
      subtitle: "Full Stack Ecommerce Developer",
      href: "https://gameessentials.in/",
      badges: ["Full Stack", "GraphQL", "Nestjs", "Elastic Search"],
      period: "Nov 2024 - Present",
      description:
        "This is a project in development. we are using Graphql, Nestjs and Elastic Search (Vendure) for the backend and Next.js for the frontend. The project is a full-stack e-commerce platform that includes a custom CMS, user authentication, and a shopping cart. The platform is designed to provide a seamless shopping experience, with advanced search functionality and personalized recommendations. Key achievements include improving page load speed by 40%, enhancing user engagement by 30%, and increasing conversion rates by 25%. The platform also features a user-friendly admin panel, reducing content management time by 40%.",
    },
  ];

  return <WorkExperience experiences={experiences} />;
}
