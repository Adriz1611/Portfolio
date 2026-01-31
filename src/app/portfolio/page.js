import dynamic from "next/dynamic";
import ScrollProgress from "@/components/magic-ui/scroll-progress";

// Dynamic imports for code splitting
const Skill = dynamic(() => import("@/components/self-made/skill"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const WorkExperiencePage = dynamic(
  () => import("@/components/self-made/workexperience"),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

const Contact = dynamic(() => import("@/components/self-made/contact"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const page = () => {
  return (
    <div>
      <ScrollProgress classname="top-0 z-20" />
      <Skill />
      <WorkExperiencePage />
      <Contact />
    </div>
  );
};

export default page;
