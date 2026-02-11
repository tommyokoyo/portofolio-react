import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { SideBarContent } from "./SideBarContent"
import { X } from "lucide-react"

interface SideBarProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: boolean,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

export const SideBar: React.FC<SideBarProps> = ( { activeTab, setActiveTab, sideBarOpen, setSideBarOpen } ) => {
    return (
        <AnimatePresence>
            {sideBarOpen && (
                <>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSideBarOpen(false)}
                    className="fixed inset-0 bg-black/10 z-40 lg:hidden backdrop-blur-sm">
                        <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 z-50 left-0 w-72 lg:hidden">
                            <SideBarContent activeTab={activeTab} setActiveTab={setActiveTab} setSideBarOpen={setSideBarOpen} />
                            <button
                             onClick={() => setSideBarOpen(false)}
                             className="absolute top-4 bg-slate-900 right-4 p-2 rounded-full shadow-lg text-gray-300">
                                <X className="w-5 h-5"/>
                            </button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}