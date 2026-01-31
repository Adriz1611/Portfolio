import React from "react";
import ThemeToggle from "./themetoggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center text-sm">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm mr-3 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
            AB
          </div>
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-200"
          >
            Full Stack Developer
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
