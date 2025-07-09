import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";


const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/blog/${slug}.md`)
        .then(res => {
            if (!res.ok) throw new Error("Not Found");
            return res.text();
        })
        .then(setContent)
        .catch(() => setContent('# Not Found'))
    }, [slug]);

    return (
       <PageWrapper>
         <div className="flex flex-col min-h-screen bg-amber-50 dark:bg-gray-900 font-mono">
            <ToggleTheme />
            <main className="flex-grow px-6 py-10 max-w-5xl mx-auto w-full">
                <button onClick={() => navigate(-1)} className="mb-6 inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400">← Back</button>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </main>
            <Footer />
        </div>
       </PageWrapper>
    );
};

export default BlogPost;