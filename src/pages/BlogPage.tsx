import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";
import { blogPosts } from "../content/BlogPost";
import PageWrapper from "../components/PageWrapper";

const BlogPage = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-gray-900 font-mono">
            <Navbar />
            <section className="p-6 md:p-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">My Blog ✍️</h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogPostCard key={post.slug} {...post} />
                    ))}
                </div>
            </section>
            <ToggleTheme />
            <Footer />
        </div>
        </PageWrapper>
    );
};

export default BlogPage;