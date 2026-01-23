import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";

type Props = {
    readonly content: string
}

export default function MarkdownRenderer({ content }: Props) {
    return (
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        // className="prose prose-invert max-w-none"
        >
            {content}
        </ReactMarkdown>
    );
}