import { Link } from 'react-router-dom';

interface BlogPostCardProps {
    title: string;
    description: string;
    slug: string;
    image?: string;
}

const BlogPostCard = ({title, description, slug, image}: BlogPostCardProps) => {
    return (
        <Link to={`/blog/${slug}`} 
        className='relative block rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-105 h-64 w-full max-w-sm'>
            <div className='absolute inset-0 bg-cover bg-center' style={{background: `url(${image})`}}>
                <div className='absolute inset-0 bg-black/50 dark:bg-black/60 backdrop-brightness-55 dark:backdrop-brightness-35'></div>
            </div>
            <div className=' relative z-10 p-6 h-full flex flex-col justify-end'>
                <h2 className='text-xl font-bold text-gray-100 dark:text-gray-300'>{title}</h2>
                <p className='text-sm text-gray-100 mt-2'>{description}</p>
            </div>
        </Link>
    );
};

export default BlogPostCard;