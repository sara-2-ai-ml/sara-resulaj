"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
        <div className="flex flex-col items-start gap-8 mb-24">
          <h2 className="text-[#ffffff] text-5xl md:text-8xl font-black uppercase tracking-tighter transition-colors duration-500 cursor-pointer">
            Let&apos;s Talk.
          </h2>
          <p className="text-[#a3a3a3] text-xl max-w-xl">
            Interested in collaborating on AI agents, machine learning systems, or innovative web experiences?
          </p>
          <a href="mailto:sararesulaj40@gmail.com" className="group flex items-center text-2xl font-bold text-[#ffffff] mt-8 border-b border-white/30 hover:border-white transition-colors pb-1 w-fit">
            sararesulaj40@gmail.com
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[#a3a3a3] text-sm uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Sara Resulaj. All Rights Reserved.
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest font-semibold text-[#a3a3a3]">
            <a href="mailto:sararesulaj40@gmail.com" className="hover:text-[#ffffff] transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/sara-resulaj-90878820b" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffffff] transition-colors">LinkedIn</a>
            <a href="https://github.com/sara-2-ai-ml" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffffff] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
