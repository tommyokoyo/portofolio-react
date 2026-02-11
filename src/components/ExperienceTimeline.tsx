const experience = [
  {
    period: "Jan 2024 – Present",
    company: "Eclectics International Ltd",
    roles: ["Information Security Analyst"],
    duration: "2 yrs",
    responsibilities: [
      "Conducted black-box and authenticated web application penetration tests uncovering critical access control and logic vulnerabilities",
      "Performed dynamic and static security testing on iOS and Android applications",
      "Executed internal network and server assessments to identify misconfigurations and lateral movement paths",
      "Developed custom Frida instrumentation scripts to analyze and bypass mobile application protections",
      "Designed and deployed intentionally vulnerable APIs and labs to simulate real-world attack scenarios",
      "Led secure coding training sessions to improve developer awareness of application security risks"
]
  },
  {
    period: "April 2022 – Dec 2023",
    company: "Eclectics International Ltd",
    roles: ["Junior Infomation Security Analyst"],
    duration: "1 yr 9 mos",
    responsibilities: [
      "Conducted wireless security assessments to detect rogue access points and misconfigured networks",
      "Performed web application penetration testing",
      "Performed network and server vulnerability assessments using automated and manual techniques",
      "Executed mobile application security testing on iOS and Android platforms"
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
