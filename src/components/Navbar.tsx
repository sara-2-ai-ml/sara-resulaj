"use client";

import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the intersecting section is the hero, we are in a dark section.
            // Otherwise, we are in a light section.
            if (entry.target.id === "hero") {
              setIsLightSection(false);
            } else {
              setIsLightSection(true);
            }
          }
        });
      },
      {
        // Trigger intersection when the section is at the top of the viewport where the navbar is.
        // The navbar is about 80px tall.
        rootMargin: "-40px 0px -90% 0px", 
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const textColor = isLightSection ? "text-[#0a0a0a]" : "text-[#ffffff]";
  const borderBottom = isLightSection ? "border-b border-[#0a0a0a]/10" : "border-b border-white/[0.08]";
  const pillHover = isLightSection ? "hover:bg-[#0a0a0a]/5" : "hover:bg-white/5";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 text-sm font-medium transition-colors duration-500 bg-transparent ${textColor} ${borderBottom}`}>
      <div className="flex-1">
        <span className="tracking-tighter text-xl font-black uppercase">
          Sara <span className={isLightSection ? "text-[#0a0a0a]/40" : "text-white/40"}>&bull;</span> Resulaj
        </span>
      </div>
      
      {/* Pill Navigation */}
      <nav className="hidden md:flex items-center gap-2 rounded-full px-1 py-1 transition-colors duration-500">
        <Magnetic><a href="#about" className={`px-6 py-2 transition-colors duration-300 rounded-full ${pillHover}`}>About</a></Magnetic>
        <Magnetic><a href="#projects" className={`px-6 py-2 transition-colors duration-300 rounded-full ${pillHover}`}>Work</a></Magnetic>
      </nav>
      
      <div className="flex-1 flex justify-end gap-6 uppercase tracking-wider font-semibold">
        <Magnetic><a href="mailto:sararesulaj40@gmail.com" className="hover:opacity-70 transition-opacity duration-300">Email</a></Magnetic>
        <Magnetic><a href="www.linkedin.com/in/sara-r-90878820b" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">in</a></Magnetic>
        <Magnetic><a href="https://github.com/sara-2-ai-ml" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">gh</a></Magnetic>
      </div>
    </header>
  );
}
