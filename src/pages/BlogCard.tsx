import { useState } from "react"
import useCanHover from "../hooks/CanHover"

type BlogData = {
  readonly slug: string
  readonly title: string
  readonly excerpt: string
  readonly tags: string[]
  readonly image: string
  readonly date: string
  readonly readingTime: string
}

type BlogCardProps = {
    readonly blog: BlogData
    onRead: () => void
}

export default function BlogCard({ blog, onRead }: BlogCardProps) {
    const canHover = useCanHover();
    const [open, setOpen] = useState(false);

    const hoverClasses = canHover ? 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0' : open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

    return (
        <div
        onClick={() => !canHover ? setOpen(true): onRead()}
        className="group relative overflow-hidden rounded-md border border-gray-800 bg-gray-900 cursor-pointer min-h-[190px] md:min-h-[200px]"
        >
            {/* Background image */}
            <img
                src={blog.image}
                alt="Blog cover"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-500"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"/>

            {/* front */}
            <div className="relative p-6 h-full flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
            
                <div className="flex gap-3 text-xs text-gray-400 mt-2">
                    <span>{blog.date}</span>
                    <span> • </span>
                    <span>{blog.readingTime}</span>
                </div>
            </div>

            {/* Hover */}
            <div className={`absolute inset-x-0 bottom-0 z-10 p-5 bg-gray-950/95 backdrop-blur border-t border-gray-800 transition-all duration-300 ${hoverClasses}`}>
                <h4 className="text-cyan-400 font-semibold">About this blog</h4>

                <p className="text-gray-300 text-sm mt-3">{blog.excerpt}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="mt-6 text-cyan-400 hover:underline" onClick={(e) => {
                    e.stopPropagation();
                    onRead();
                }}>
                    Read →
                </button>
            </div>
        </div>
    );
}
