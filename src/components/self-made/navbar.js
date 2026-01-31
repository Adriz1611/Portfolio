"use client";
import React, { useState, memo, useCallback } from "react";
import Link from "next/link";

const Navbar = memo(function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-10 h-10 flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated Background Rings */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            {/* Logo Content - Terminal/Code Style */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <span className="text-white font-mono font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {isHovered ? "<>" : "$_"}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300">
              Adriz
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              vibe coder who understands the code
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
});

export default Navbar;
