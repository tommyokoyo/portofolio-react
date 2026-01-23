import AboutHero from "../components/AboutHero"
import ExperienceTimeline from "../components/ExperienceTimeline"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageWrapper from "../components/PageWrapper"
import SkillsGrid from "../components/SkillsGrid"
import ToggleTheme from "../components/ToggleTheme"
import WhatIDo from "../components/WhatIDo"

export default function AboutMe() {
    return (
        <PageWrapper>
            <ToggleTheme />
            <Navbar />
            <AboutHero />
            <WhatIDo />
            <SkillsGrid />
            <ExperienceTimeline />
            <Footer />
        </PageWrapper>
    )
};