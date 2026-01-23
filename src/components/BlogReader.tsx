import { useEffect, useState } from "react";
import MarkdownRenderer from "../hooks/MarkdownRenderer";

type BlogReaderProps = {
    readonly contentPath: string
    onClose: () => void
}

export default function BlogReader({ contentPath, onClose }: BlogReaderProps) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [onClose])

    useEffect(() => {
        setLoading(true);
        setError("");

        fetch(contentPath)
        .then(res => {
            if (!res.ok) throw new Error("Failed to load blog content");
            return res.text();
        })
        .then(setContent)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, [contentPath])

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur" onClick={onClose} role="presentation" aria-label="close modal">
            <div className="max-w-6xl mx-auto h-full overflow-y-auto px-6 py-20 scrollbar-dark" onClick={(e) => e.stopPropagation} role="dialog" aria-modal="true" aria-labelledby="blog-title">
                <button onClick={onClose} className="fixed top-6 right-6 text-gray-400 hover:text-white" aria-label="close bloge reader">
                    ✕ Close
                </button>

                <article className="prose prose-invert max-w-none" id="blog-title">
                    <MarkdownRenderer content={content}/>
                </article>
            </div>
        </div>
    );
}
