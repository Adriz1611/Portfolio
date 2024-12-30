import React from "react";
import Skill from "@/components/self-made/skill";
import WorkExperiencePage from "@/components/self-made/workexperience";
import ScrollProgress from "@/components/magic-ui/scroll-progress";
import Contact from "@/components/self-made/contact";

const page = () => {
  return (
    <div>
      <ScrollProgress classname="top-0 z-20"/>
      <Skill />
      <WorkExperiencePage />
      <Contact />
    </div>
  );
};

export default page;
