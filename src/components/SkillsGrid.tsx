import useCanHover from "../hooks/CanHover"
import { useState } from "react";

const skills = [
  {
    title: "Offensive Security",
    subtitle: "Adversarial Thinking",
    size: "md",
    items: ["Web Exploitation (Logical Flows)", "Auth & Access Control Testing", "Cloud Misconfiguration Abuse"]
  },
  {
    title: "Cloud & Infrastructure",
    subtitle: "AWS & System Design",
    size: "md",
    items: ["AWS Architecture", "IAM Design & Least Priviledge", "Network Segmentation", "Secure Backend Hosting"]
  },
  {
    title: "Blue Team",
    subtitle: "Detection Engineering",
    size: "md",
    items: ["Log Architecture", "Threat Modeling", "Incident Response Playbooks"]
  },
  {
    title: "System Architecture",
    subtitle: "Design & Extensibility",
    size: "md",
    items: ["Core Entity Modelling", "Plugin Systems", "Scalable Backedn Design", "Domain Modelling"]
  },
  {
    title: "Web Security",
    subtitle: "Application Layer",
    size: "md",
    items: ["Broken Access Control", "IDOR & Priviledge Escalation", "API Abuse & Rate Logic", "Session Security"]
  },
  {
    title: "DevSecOps",
    subtitle: "Secure Delivery",
    size: "md",
    items: ["CI/CD Hardening", "Secrets Managment", "Container Security", "Infrastructure as Code"]
  }
]

export default function SkillsGrid() {
  const canHover = useCanHover();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-5 py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
      <div className="p-2 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-7 auto-rows-auto border border-white"> */}
        {skills.map((skill, index) => {
          const isOpen = open === index;

          const classgroup = isOpen ? "border-cyan-500" : "border-gray-800 hover:border-cyan-400" // control the box here

          const mobileClasses = isOpen ? "opacity-0 -translate-y-4" : "";

          const frontClasses = canHover 
            ? "group-hover:opacity-0 group-hover:-translate-y-4" 
            : mobileClasses;

          const backClasses = canHover
                    ? "opacity-0 translate-y-20 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                    : isOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-0 pointer-events-none"
          
          const cardSpan = skill.size === "xl" ? "md:col-span-3" : skill.size === "lg" ? "md:col-span-2" : "md-col-span-1"

          return (
            <div 
            key={skill.title}
            onClick={() => !canHover && setOpen(isOpen ? null : index)}
            className={`group relative rounded-xl border bg-gray-900 p-6 transition ${classgroup} ${cardSpan} min-h-[110px]`}
            >
              {/*front*/}
              <div
                className={`transition-all duration-400 ${frontClasses}`}
              >
                <h3 className="text-cyan-400 font-semibold">{skill.title}</h3>
                <p className="text-gray-400">{skill.subtitle}</p>

                <ul className="space-y-0 opacity-0 translate-y-4 text-gray-300 text-sm">
                    {skill.items.map(x => <li key={x}>• {x}</li>)}
                </ul>
              </div>

              {/*back*/}
              <div
                className={`
                  absolute left-0 top-0 w-[100%]
                  rounded-xl bg-gray-950
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