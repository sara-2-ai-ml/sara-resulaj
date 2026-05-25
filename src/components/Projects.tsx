"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Magnetic from "./Magnetic";

const PROJECTS = [
  {
    title: "Earthquake Damage Detection",
    description: "YOLOv11 instance segmentation trained on 2,500+ manually annotated Maxar satellite images — Mask mAP50 0.808, Recall 0.753, inference <10ms. Built for real-time disaster response after the 2023 Türkiye earthquake.",
    link: "",
    github: "https://github.com/sara-2-ai-ml/earthquake-building-detection",
    image: "/earthquake website phtoo.png",
    tags: ["YOLO", "PYTHON", "FASTAPI", "REACT", "ROBOFLOW"]
  },
  {
    title: "ARCHON.",
    description: "An autonomous multi-agent AI platform that finds B2B leads, researches companies, and sends hyper-personalized cold emails — with Human-in-the-Loop approval before sending.",
    link: "https://archon-ai-sales-agent-gzbd.vercel.app",
    github: "https://github.com/sara-2-ai-ml/archon-ai-sales-agent",
    image: "/archon.png",
    tags: ["NEXT.JS", "CLAUDE API", "TAVILY", "FIRECRAWL", "RESEND", "PRISMA"]
  },
  {
    title: "cfoai.",
    description: "A financial AI assistant that ingests financial documents, answers questions with citations, simulates market reactions through 6 AI investor personas, and exports full insights.",
    link: "https://cfoai-iqb7.vercel.app",
    github: "https://github.com/sara-2-ai-ml/cfoai",
    image: "/cfoai.png",
    tags: ["NEXT.JS", "CLAUDE API", "RAG", "CHROMADB", "OPENAI"]
  },
  {
    title: "BTC Predictions",
    description: "Multi-agent AI system combining a GRU deep learning model (99.7% accuracy), NLP sentiment analysis, and technical indicators — synthesized by Claude into real-time BUY/SELL/HOLD signals.",
    link: "https://neural-btc-sj2z.vercel.app/",
    github: "https://github.com/sara-2-ai-ml/NeuralBTC",
    image: "/btc_landingpage.png",
    tags: ["PYTHON", "FASTAPI", "NEXT.JS", "PYTORCH", "CLAUDE API"]
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );

          const imgLink = item.querySelector("a");
          if (imgLink) {
            gsap.to(imgLink, {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative py-32 px-6 md:px-12 flex flex-col items-center min-h-[80vh] bg-[#FFF8F5]">

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mb-20">
        <h2 className="text-[8vw] md:text-[6vw] font-bold leading-[1.1] tracking-tight text-[#1a0a06]">
          Selected &amp; <br /> Recent Work
        </h2>
        <p className="mt-4 text-[#6b4c3b] font-medium max-w-lg mx-auto opacity-80">
          Creating high-end AI applications built to perform and innovate.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="flex flex-col gap-6"
            >
              {/* Full Width Image Link */}
              <a
                href={project.link || "#"}
                target={project.link && project.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group relative w-full block transition-transform duration-500 overflow-hidden ${project.link && project.link !== "#" ? "hover:-translate-y-2 cursor-pointer" : "cursor-default"}`}
                onClick={(e) => {
                  if (!project.link || project.link === "#") e.preventDefault();
                }}
              >
                {project.link && project.link !== "#" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                )}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={900}
                    className={`w-full h-auto object-contain transition-transform duration-700 border border-[rgba(26,10,6,0.08)] rounded-lg ${project.link && project.link !== "#" ? "group-hover:scale-[1.02]" : ""}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
              </a>

              {/* Content Area */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-bold text-[#1a0a06]">{project.title}</h3>
                <p className="text-[#6b4c3b] text-base leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-transparent border border-[rgba(26,10,6,0.12)] text-[#6b4c3b] text-xs font-bold uppercase tracking-wider rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 pt-4 border-t border-[rgba(26,10,6,0.06)] flex flex-wrap items-center gap-6">
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#1a0a06] border-b border-[rgba(26,10,6,0.15)] hover:border-[#1a0a06] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      View Code
                    </a>
                  </Magnetic>
                  
                  {project.link && project.link !== "#" && (
                    <Magnetic>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-1.5 text-sm font-bold tracking-wider uppercase text-[#1a0a06] border-b border-[rgba(26,10,6,0.15)] hover:border-[#1a0a06] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                        Live Demo
                      </a>
                    </Magnetic>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
