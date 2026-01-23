import useCanHover from "../hooks/CanHover"
import { useState } from "react";

const skills = [
  {
    title: "Offensive Security",
    subtitle: "Offensive Security",
    size: "md",
    items: ["Web Exploitation", "Red Teaming", "Exploit Development"]
  },
  {
    title: "Cloud & Infra",
    subtitle: "Cloud & Infra",
    size: "md",
    items: ["AWS", "IAM", "Network Segmentation"]
  },
  {
    title: "Blue Team",
    subtitle: "Blue Team",
    size: "md",
    items: ["SIEM", "Threat Hunting", "Incident Response"]
  },
  {
    title: "Malware & RE",
    subtitle: "Malware & RE",
    size: "md",
    items: ["Static Analysis", "Dynamic Analysis", "C2 Research"]
  },
  {
    title: "Web Security",
    subtitle: "Web Security",
    size: "md",
    items: ["IDOR", "Auth Bypass", "API Abuse"]
  },
  {
    title: "DevSecOps",
    subtitle: "DevSecOps",
    size: "md",
    items: ["CI/CD Security", "Secrets", "Container Hardening"]
  }
]

export default function SkillsGrid() {
  const canHover = useCanHover();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-7 py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-7 auto-rows-auto border border-white"> */}
        {skills.map((skill, index) => {
          const isOpen = open === index;

          const classgroup = isOpen ? "border-cyan-500" : "border-gray-800 hover:border-cyan-400" // control the box here

          const mobileClasses = isOpen ? "opacity-0 -translate-y-4" : "";

          const frontClasses = canHover 
            ? "group-hover:opacity-0 group-hover:translate-y-4" 
            : mobileClasses;

          const backClasses = canHover
                    ? "opacity-0 scale-95 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                    : isOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          
          const cardSpan = skill.size === "xl" ? "md:col-span-3" : skill.size === "lg" ? "md:col-span-2" : "md-col-span-1"

          return (
            <div 
            key={skill.title}
            onClick={() => !canHover && setOpen(isOpen ? null : index)}
            className={`group relative rounded-xl border bg-gray-900 p-6 transition ${classgroup} ${cardSpan} min-h-[110px]`}
            >
              {/*front*/}
              <div
                className={`transition-all duration-300 ${frontClasses}`}
              >
                <h3 className="text-cyan-400 font-semibold">{skill.title}</h3>
                <p className="text-gray-400">{skill.subtitle}</p>
              </div>

              {/*back*/}
              <div
                className={`
                  absolute left-0 top-full mt-4 w-[120%]
                  rounded-xl bg-gray-950 border border-cyan-500
                  shadow-2xl z-50
                  transition-all duration-300 origin-top
                  ${backClasses}
                `}>
                <div className="p-5 max-h-[260px] overflow-y-auto">
                  <h4 className="text-cyan-400 font-semibold mb-3">
                    {skill.title}
                  </h4>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {skill.items.map(x => <li key={x}>• {x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}