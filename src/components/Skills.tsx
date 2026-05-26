"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Database, Eye, Network, Scan, Cpu, Image as ImageIcon,
  Link, Library, Brain, Terminal, Sparkles, Search,
  MonitorPlay, LineChart, Zap
} from "lucide-react";

type Skill = {
  name: string;
  iconClass?: string;
  Icon?: React.ElementType;
  iconColor?: string;
};

const CATEGORIES: { name: string; skills: Skill[] }[] = [
  {
    name: "LANGUAGES",
    skills: [
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "SQL", Icon: Database, iconColor: "#336791" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" }
    ]
  },
  {
    name: "ML & DEEP LEARNING",
    skills: [
      { name: "PyTorch", iconClass: "devicon-pytorch-original colored" },
      { name: "TensorFlow/Keras", iconClass: "devicon-tensorflow-original colored" },
      { name: "Scikit-Learn", Icon: Brain, iconColor: "#F7931E" },
      { name: "XGBoost", Icon: Zap, iconColor: "#189AB4" },
      { name: "Pandas", iconClass: "devicon-pandas-plain", iconColor: "#E70488" },
      { name: "NumPy", iconClass: "devicon-numpy-plain", iconColor: "#4DABCF" }
    ]
  },
  {
    name: "COMPUTER VISION",
    skills: [
      { name: "YOLO11/YOLO26", Icon: Eye, iconColor: "#00FFFF" },
      { name: "CNN", Icon: Network, iconColor: "#FF6B6B" },
      { name: "Instance Segmentation", Icon: Scan, iconColor: "#9B59B6" },
      { name: "ONNX", Icon: Cpu, iconColor: "#005CED" },
      { name: "CVAT", Icon: ImageIcon, iconColor: "#F5A623" }
    ]
  },
  {
    name: "GENERATIVE AI",
    skills: [
      { name: "LangChain", Icon: Link, iconColor: "#1C3C3C" },
      { name: "RAG Pipelines", Icon: Brain, iconColor: "#00BCD4" },
      { name: "Prompt Engineering", Icon: Terminal, iconColor: "#8BC34A" },
      { name: "OpenAI API", Icon: Sparkles, iconColor: "#412991" },
      { name: "FAISS", Icon: Search, iconColor: "#1877F2" },
      { name: "Pinecone", Icon: Database, iconColor: "#1DB954" }
    ]
  },
  {
    name: "FRAMEWORKS & BACKEND",
    skills: [
      { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
      { name: "Flask", iconClass: "devicon-flask-original", iconColor: "#FF5733" },
      { name: "Gradio", Icon: MonitorPlay, iconColor: "#FF7C00" },
      { name: "Next.js", iconClass: "devicon-nextjs-original colored" }
    ]
  },
  {
    name: "DATABASES",
    skills: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain", iconColor: "#4479A1" },
      { name: "NoSQL", Icon: Database, iconColor: "#4DB33D" }
    ]
  },
  {
    name: "TOOLS",
    skills: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-plain", iconColor: "#6E40C9" },
      { name: "VS Code", iconClass: "devicon-vscode-plain", iconColor: "#007ACC" },
      { name: "Jupyter", iconClass: "devicon-jupyter-plain", iconColor: "#F37626" },
      { name: "TensorBoard", Icon: LineChart, iconColor: "#FF6F00" }
    ]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Reset the ref array on each render to avoid duplicates
  itemsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for each individual skill item
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-[#FFF8F5] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-[8vw] md:text-[6vw] font-bold leading-[1.1] tracking-tight text-[#1a0a06]">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {CATEGORIES.map((category, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-3">
              <h3 className="text-[#1a0a06] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap items-center gap-y-3">
                {category.skills.map((skill, sIdx) => {
                  const isLast = sIdx === category.skills.length - 1;
                  return (
                    <div
                      key={sIdx}
                      ref={(el) => {
                        if (el) itemsRef.current.push(el);
                      }}
                      className="flex items-center opacity-0" // Initialize with opacity 0 for GSAP
                    >
                      <div className="flex items-center gap-1.5 group cursor-default">
                        {skill.iconClass ? (
                          <i
                            className={`${skill.iconClass} text-[15px] transition-transform group-hover:scale-110`}
                            style={skill.iconColor ? { color: skill.iconColor } : undefined}
                          ></i>
                        ) : skill.Icon ? (
                          <skill.Icon
                            className="w-[15px] h-[15px] transition-transform group-hover:scale-110"
                            strokeWidth={2.5}
                            color={skill.iconColor || "#8B7355"}
                          />
                        ) : null}
                        <span className="text-[#6b4c3b] text-[15px] font-medium group-hover:text-[#1a0a06] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {!isLast && <span className="text-[rgba(26,10,6,0.06)] mx-[6px] font-bold">·</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
