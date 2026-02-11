import AboutHero from "../components/AboutHero"
import ExperienceTimeline from "../components/ExperienceTimeline"
import SkillsGrid from "../components/SkillsGrid"
import WhatIDo from "../components/WhatIDo"
import { motion } from "framer-motion"

interface AboutScreenProps {
    activeTabe: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: boolean,
    setSideBarOpen: (open: boolean) => void

}

export const AboutScreen = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease:"easeInOut" }}
        >
            <AboutHero />
            <WhatIDo />
            <SkillsGrid />
            <ExperienceTimeline />
        </motion.div>
    )
}
