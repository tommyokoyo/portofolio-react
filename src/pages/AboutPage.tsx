import { Header } from "../components/Header";
import Hero from "../components/Hero";
import { SideBar } from "../components/SideBar";
import ToggleTheme from "../components/ToggleTheme";

interface AboutPageProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    sideBarOpen: boolean,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

const AboutPage: React.FC<AboutPageProps> = ({ activeTab, setActiveTab, sideBarOpen, setSideBarOpen }) => {
    return (
        <div className="border min-h-screen p-3 overflow-hidden scroll-auto">
            <Header activeTab={activeTab} setSideBarOpen={setSideBarOpen} setActiveTab={setActiveTab} />
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
            </div>
            <Hero />
            <ToggleTheme />
        </div>
    );
};

export default AboutPage;