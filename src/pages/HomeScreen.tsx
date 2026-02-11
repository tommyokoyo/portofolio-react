import Hero from "../components/Hero";
import ToggleTheme from "../components/ToggleTheme";
import { motion } from "framer-motion"

interface HomeScreenProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: boolean,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

const HomeScreen: React.FC = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut' }}
        className="min-h-screen bg-slate-50/90 dark:bg-slate-900">
            <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/25 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px]" />
            </div>
            <Hero />
            <ToggleTheme />
        </motion.div>
    );
};

export default HomeScreen;