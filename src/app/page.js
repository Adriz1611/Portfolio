'use client';

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import ThemeToggle from "@/components/themetoggle";

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black dark:bg-white">
      <ThemeToggle /> {/* Add the toggle button */}
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer flex-1 flex-col items-center justify-center text-4xl shadow-2xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-1 flex-col items-center justify-center text-4xl shadow-2xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </main>
  );
}
