import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../hooks/MyTheme";

const pagevariants = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0 },
};

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    const location = useLocation();
    const { theme } = useTheme();

    console.log("PageWrapper rendered with theme:", theme);
    
    return (
        <motion.div
        key={`${location.pathname}-${theme}`}
        variants={pagevariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="min-h-screen "
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
