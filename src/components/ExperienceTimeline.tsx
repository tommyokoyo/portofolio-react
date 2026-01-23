const experience = [
  {
    period: "Jan 2023 – Present",
    company: "FinTech Cloud",
    roles: ["Senior Security Engineer", "Cloud Security Lead"],
    duration: "1 yr 10 mos",
    responsibilities: [
      "Secured AWS workloads across 50+ accounts",
      "Built SIEM detections and threat models",
      "Led red team simulations",
      "Designed IAM least-privilege framework"
    ]
  },
  {
    period: "Mar 2021 – Dec 2022",
    company: "CyberSec Labs",
    roles: ["Penetration Tester"],
    duration: "1 yr 9 mos",
    responsibilities: [
      "Web, API, and infrastructure exploitation",
      "Red team tooling development",
      "Client reporting and remediation guidance"
    ]
  },
  {
    period: "Jul 2019 – Feb 2021",
    company: "SOC Operations",
    roles: ["SOC Analyst", "Threat Hunter"],
    duration: "1 yr 8 mos",
    responsibilities: [
      "Incident response and alert triage",
      "Threat hunting across EDR and SIEM",
      "Malware triage and IOC creation"
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-16">
        Experience
      </h2>

      <div className="relative border-l border-gray-800 pl-10 space-y-16">
        {experience.map((item, i) => (
          <div key={i} className="relative">
            {/* Dot */}
            <div className="absolute -left-[47px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            {/* Time */}
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-cyan-400 font-mono">
                {item.period}
              </span>
              <span className="text-gray-500">
                {item.duration}
              </span>
            </div>

            {/* Company */}
            <h3 className="text-white text-lg font-semibold">
              {item.company}
            </h3>

            {/* Roles */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.roles.map(role => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Responsibilities */}
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              {item.responsibilities.map((r, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
