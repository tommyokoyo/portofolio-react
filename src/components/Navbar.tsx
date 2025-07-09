import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsmobileMenuOpen(prev => !prev)
    };

    return (
        <nav className="font-mono font-medium relative z-50">
            <div className="flex items-center justify-end px-4 py-6">

                <ul className="hidden md:flex space-x-10 pr-5 text-gray-800 dark:text-gray-300">
                    <li ><Link to="/" className="hover:text-blue-500 cursor-pointer">Home</Link></li>
                    <li ><Link to="/about" className="hover:text-blue-500 cursor-pointer">About</Link></li>
                    <li ><Link to="/blog" className="hover:text-blue-500 cursor-pointer">Blog</Link></li>
                    <li ><Link to="/projects" className="hover:text-blue-500 cursor-pointer">Projects</Link></li>
                </ul>
                
                <button className="md:hidden px-3 text-2xl text-gray-700 dark:text-white" onClick={toggleMobileMenu}>
                        ☰
                </button>
            </div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div>
                    <button onClick={toggleMobileMenu} className="text-2xl text-gray-600 dark:text-gray-300">✕</button>
                </div>
                <ul className="md:hidden mt-4 space-y-4 text-gray-700 dark:text-gray-200">
                    <li className="hover:text-blue-500 cursor-pointer">About</li>
                    <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                    <li className="hover:text-blue-500 cursor-pointer">Projects</li>                       
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;