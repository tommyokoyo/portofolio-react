import AboutHero from "../components/AboutHero";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";
import WhatIDo from "../components/WhatIDo";

interface AboutPageProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: boolean,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

const AboutPage: React.FC<AboutPageProps> = ({ activeTab, setActiveTab, sideBarOpen, setSideBarOpen }) => {
    return (
        <div className="border">
            <AboutHero />
            <WhatIDo />
            <SkillsGrid />
            <ExperienceTimeline />
        </div>
    );
};

export default AboutPage;