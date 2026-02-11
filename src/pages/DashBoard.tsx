import { useState } from "react"
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import HomeScreen from "./HomeScreen";
import { motion } from "framer-motion";
import AboutPage from "./AboutPage";
import { AboutScreen } from "./AboutScreen";

interface SideBarProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: string,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

export const DashBoard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    const renderContent = () => {
        switch (activeTab) {
            case "Home":
                return <HomeScreen />
            case "About":
                return <AboutScreen />
            default:
                return (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut' }}
                    className="flex flex-col items-center justify-center h-full text-slate-400 animate-in fade-in bg-slate-50/90 dark:bg-slate-900">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl">🚧</span>
                        </div>
                        <p className="text-lg font-medium">Section is under construction</p>
                    </motion.div>
                )
        }
    }

    return (
        <div className="min-h-screen flex">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <main className="flex-1 flex flex-col h-screen relative">
                <Header activeTab={activeTab} setSideBarOpen={setSideBarOpen} setActiveTab={setActiveTab} />
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {renderContent()}
                </div>
            </main>
        </div>
    )
}