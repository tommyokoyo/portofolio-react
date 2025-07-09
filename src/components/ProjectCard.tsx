import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectProps {
    title: string;
    description:string;
    tech: string[]
    github?: string;
    demo?: string;
    image?: string;
}

const ProjectCard = ({ title, description, tech, github, demo, image }: ProjectProps) => {
    return (
        <div className="bg-zinc-50 dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition hover:shadow-2xl w-full max-w-md mx-auto">
            {image && <img src={image} alt={title} className="mx-auto w-32 h-32 object-cover"/>}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
                <p className="mt-2 text-gray-700 text-sm dark:text-gray-300">{description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-blue-600 dark:text-blue-400">
                    {tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">{t}</span>
                    ))}
                </div>
                <div className="mt-4 flex space-x-4">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-blue-600">
                            <FaGithub size={20}/>
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-blue-600">
                            <FiExternalLink size={20}/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;