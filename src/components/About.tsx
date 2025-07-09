import { aboutData } from "../content/aboutData";
import { skillsData } from "../content/skillsData";

const About = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

            {/* Intro */}
            <p className="mb-10 text-center text-lg">{aboutData.intro}</p>

            {/* skills */}
            {/* <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <ul className="grid grid-col-2 sm:grid-col-3 gap-4 list-disc list-inside">
                    {aboutData.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </div> */}

            {/* skills */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Skills
                </h2>
                <div className="space-y-6">
                    {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="font-semibold text-lg mb-1">{category}</h3>
                        <ul className="list-disc list-inside ml-2">
                        <li>{items.join(', ')}</li>
                        </ul>
                    </div>
                    ))}
                </div>
            </div>

             {/* tech stack */}
            {/* <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4"> Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                    {aboutData.techStack.map((tech, i) => (
                        <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div> */}

            {/* experience */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                {aboutData.experience.map((job, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="font-bold">{job.role}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>

            {/* education */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <h3 className="font-bold">{aboutData.education.degree}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {aboutData.education.school}, {aboutData.education.period}
                </p>
            </div>
        </section>
    );
};

export default About;