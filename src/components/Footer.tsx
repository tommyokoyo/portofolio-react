import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="mt-auto py-4 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-y-0 sm:space-x-2">
                <span>© {new Date().getFullYear()} Okoyo.dev</span>
                <span className="flex items-center space-x-2">
                    <span>• Built with</span>
                    <FaReact className="text-blue-500" title="react"/>
                    <SiTailwindcss className="text-teal-600" title="Tailwind css"/>
                </span>
            </div>
        </footer>
    );
};

export default Footer;