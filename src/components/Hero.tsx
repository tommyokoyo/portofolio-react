import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="flex flex-col items-center px-4  text-center justify-center transition-colors pt-16">
            <img
                src="https://img.freepik.com/premium-photo/3d-profile-avatar-with-solid-background_725549-75.jpg?w=996"
                alt="profile_photo"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#f9f5f0] dark:border-gray-700 shadow-lg"
            />
            <p className="mt-6 text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">Hello Friend 👋, I'm Okoyo.</p>
            <p className="mt-3 text-sm sm:text-md font-semibold text-gray-600 dark:text-gray-300">and I love exploring the world of technology.</p>
            <div className="flex mt-3 space-x-6 text-gray-500 dark:text-gray-300">
                <a href="mailto:okoyotommy@gmail.com">
                    <FaEnvelope size={20} className="hover:text-blue-500 transition"/>
                </a>
                <a href="https://www.linkedin.com/in/okoyotommy/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} className="hover:text-blue-500 transition"/>
                </a>
                <a href="https://github.com/tommyokoyo" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} className="hover:text-blue-500 transition"/>
                </a>
                <a href="https://x.com/__okoyo" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} className="hover:text-blue-500 transition"/>
                </a>
            </div>
        </section>
    );
};

export default Hero;