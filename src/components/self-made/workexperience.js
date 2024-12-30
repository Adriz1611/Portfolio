"use client"

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn-ui/avatar";
import { Badge } from "@/components/shadcn-ui/badge";
import { Card, CardHeader } from "@/components/shadcn-ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const ResumeCard = ({ logoUrl, altText, title, subtitle, href, badges, period, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link 
      href={href || "#"} 
      className="block transition-all duration-200 hover:translate-x-1"
      onClick={handleClick}
    >
      <Card className="group border-l-4 border-l-transparent hover:border-l-blue-500 transition-all duration-200">
        <div className="flex p-4 gap-4">
          <Avatar className="border size-16 shrink-0 bg-gray-50 dark:bg-gray-800 p-2">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback className="text-lg font-semibold">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-x-4">
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {period}
              </div>
            </div>
            
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {badges.map((badge, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            
            {description && (
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-h-48 mt-4' : 'max-h-0'}
              `}>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            )}
          </div>
          
          <ChevronRightIcon 
            className={`
              size-5 text-muted-foreground transition-transform duration-200
              ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}
            `}
          />
        </div>
      </Card>
    </Link>
  );
};

const WorkExperience = ({ experiences }) => (
  <div className="space-y-4 max-w-3xl mx-auto p-4">
    {experiences.map((experience, index) => (
      <ResumeCard key={index} {...experience} />
    ))}
  </div>
);

// Example usage
export default function WorkExperiencePage() {
  const experiences = [
    {
      logoUrl: "https://give.do/ngos/changespark-foundation",
      altText: "CHangespark",
      title: "CHangespark Foundation",
      subtitle: "Full Stack Developer Internship",
      href: "https://changespark.in/",
      badges: ["Supabase", "Tailwindcss", "Next.js"],
      period: "Jan 2020 - Dec 2022",
      description: "Led the development of multiple high-impact features using React and TypeScript, resulting in a 40% improvement in user engagement. Mentored junior developers and established frontend best practices.",
    },
    {
      logoUrl: "/api/placeholder/100/100",
      altText: "Company B",
      title: "Backend Developer",
      subtitle: "Node.js and Database Management",
      href: "#",
      badges: ["Node.js", "Express", "MongoDB"],
      period: "Jan 2018 - Dec 2019",
      description: "Architected and implemented scalable microservices using Node.js and MongoDB. Reduced API response times by 60% through query optimization and caching strategies.",
    },
    {
      logoUrl: "/api/placeholder/100/100",
      altText: "Freelance",
      title: "Full Stack Developer",
      subtitle: "Independent Consultant",
      href: "#",
      badges: ["Full Stack", "React", "Node.js", "AWS"],
      period: "Jan 2023 - Present",
      description: "Delivered end-to-end web solutions for multiple clients, focusing on performance optimization and responsive design. Implemented CI/CD pipelines and automated testing procedures.",
    }
  ];
  
  return <WorkExperience experiences={experiences} />;
}