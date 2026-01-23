import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import { ProjectsCard } from "../components/ProjectsCard";

const projects = [
  {
    title: "Daraja offline Simulator",
    subtitle: "AWS Red Team Lab",
    description: "This project is a replica of the M-Pesa Daraja APIs but designed to run in an offline environment.",
    tags: ["Spring", "Java"],
    link: "https://github.com/tommyokoyo/MpesaSimulatorDemo",
    image: "/assets/android.jpg",
    size: "md",
  },
  {
    title: "Insecure API",
    subtitle: "Vulnerable API for learning",
    description: "The Insecure API is a project designed to showcase common coding mistakes that can lead to logical errors and vulnerabilities in APIs..",
    tags: ["Spring", "Java"],
    link: "https://github.com/tommyokoyo/Insecure-API",
    image: "/assets/cloud_computing_.png",
    size: "md",
  },
  {
    title: "Frida Android Hooks",
    subtitle: "Dynamic Analysis Scripts",
    description: "A repo for dynamic analysis of Android applications using Frida.",
    tags: ["Javascript", "Android", "Frida"],
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
    size: "md",
  }
];

export default function ProjectsGrid() {
  return (
    <PageWrapper>
      <div className='min-h-screen bg-stone-50 dark:bg-gray-900 font-mono'>
        <Navbar />  
        <section className="max-w-7xl mx-auto px-7 py-17 mb-7">
          <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
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
        <Footer />
      </div>
    </PageWrapper>
  )
}
