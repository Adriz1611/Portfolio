"use client";

import {
  HomeIcon,
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";
import React, { memo } from "react";
import { buttonVariants } from "@/components/shadcn-ui/button";
import { Separator } from "@/components/shadcn-ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magic-ui/dock";

export const Icons = {
  email: MailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

export const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/portfolio", icon: BriefcaseBusiness, label: "Portfolio" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Adriz1611",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adrijbhadra/",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto:adrijbhadra@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

const Footer = memo(function Footer() {
  return (
    <div className="fixed bottom-10 w-full z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
});

export default Footer;
