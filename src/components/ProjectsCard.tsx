import useCanHover from "../hooks/CanHover";
import { useState } from "react";

type ProjectCardProps = {
        readonly title: string;
        readonly subtitle: string;
        readonly description: string;
        readonly tags: string[];
        readonly link: string;
        readonly image: string;
}
export function ProjectsCard({ project }: { project: ProjectCardProps }) {
    const canHover = useCanHover();
    const [open, setOpen] = useState(false);

    const floatingClasses = canHover ? "opacity-0 group-hover:opacity-100" : open ? "opacity-100" : "opacity-0"

    return (
        <div
        onClick={() => !canHover && setOpen(v => !v)}
        className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 cursor-pointer min-h-[200px]"
        >
            {/* Backgound Image */}
            <img
                src={project.image}
                alt="sample project image"
                className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"/>

            {/* Card content */}
            <div className="relative p-6 h-full flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map(t => (
                        <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-400"
                        >{t}</span>
                    ))}
                </div>
            </div>

            {/* Floating Overlay */}
            <div
                className={`absolute inset-0 z-10 bg-gray-950/95 backdrop-blur p-6 flex flex-col justify-beween
                    transition-all duration-300 ${floatingClasses}`}
            >
                <div>
                    <h4 className="text-lg text-cyan-400 font-semibold">{project.title}</h4>
                    <p className="text-gray-300 text-sm mt-3">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-cyan-500 text-black hover:bg-cyan-400 transition"
                    >view project</a>
                </div>
            </div>
        </div>
    );
}