import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import { ProjectsCard } from "../components/ProjectsCard";

const projects = [
  {
    title: "Cloud Breach Simulation",
    subtitle: "AWS Red Team Lab",
    description: "Simulated cloud lateral movement using IAM misconfigurations and role chaining.",
    tags: ["AWS", "IAM", "Red Team"],
    link: "https://github.com/you/cloud-breach-lab",
    image: "/assets/android.jpg",
    size: "lg",
  },
  {
    title: "API Exploitation Framework",
    subtitle: "Automated IDOR + Auth Bypass",
    description: "Tooling to discover broken object level auth and API token flaws.",
    tags: ["API", "IDOR", "Web"],
    link: "https://github.com/you/api-exploit",
    image: "/assets/cloud_computing_.png",
    size: "md",
  },
  {
    title: "Malware C2 Emulator",
    subtitle: "Red Team Infrastructure",
    description: "Built a modular C2 framework to test EDR evasion and beaconing.",
    tags: ["Malware", "C2", "EDR"],
    link: "https://github.com/you/c2-emulator",
    image: "/assets/cloud_computing.png",
    size: "md",
  },
  {
    title: "API Exploitation Framework",
    subtitle: "Automated IDOR + Auth Bypass",
    description: "Tooling to discover broken object level auth and API token flaws.",
    tags: ["API", "IDOR", "Web"],
    link: "https://github.com/you/api-exploit",
    image: "/assets/cloud_computing_.png",
    size: "md",
  },
  {
    title: "Malware C2 Emulator",
    subtitle: "Red Team Infrastructure",
    description: "Built a modular C2 framework to test EDR evasion and beaconing.",
    tags: ["Malware", "C2", "EDR"],
    link: "https://github.com/you/c2-emulator",
    image: "/assets/cloud_computing.png",
    size: "md",
  },
  {
    title: "Malware C2 Emulator",
    subtitle: "Red Team Infrastructure",
    description: "Built a modular C2 framework to test EDR evasion and beaconing.",
    tags: ["Malware", "C2", "EDR"],
    link: "https://github.com/you/c2-emulator",
    image: "/assets/cloud_computing.png",
    size: "lg",
  }
];

export default function ProjectsGrid() {
  return (
    <PageWrapper>
    <Navbar />
    <section className="max-w-7xl mx-auto px-7 py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
        {projects.map((project, cardKey) => {
          const span =
            project.size === "xl" ? "md:col-span-3" :
            project.size === "lg" ? "md:col-span-2" :
            "md:col-span-1";

          return (
            <div key={cardKey} className={span}>
              <ProjectsCard project={project} />
            </div>
          );
        })}

      </div>
    </section>
    </PageWrapper>
  )
}
