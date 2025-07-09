import { motion } from "framer-motion";
import { children, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../hooks/MyTheme";

const pagevariants = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0 },
};

const PageTransition = {
    duration: 0.4   ,
    ease: "easeInOut"
};

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
     const location = useLocation();
    const { theme } = useTheme();

    return (
        <motion.div
        key={`${location.pathname}-${theme}`}
        variants={pagevariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={PageTransition}
        className="min-h-screen bg-gray-100 dark:bg-gray-900"
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;