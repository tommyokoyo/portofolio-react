import Footer from "../components/Footer";
import About from "../components/About";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";
import ProjectCard from "../components/ProjectCard"
import { projects } from "../content/Projects";
import PageWrapper from "../components/PageWrapper";

const ProjectsPage = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-gray-900 font-mono">
            <Navbar />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-200">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project}/>
                    ))}
                </div>
            </div>
            <ToggleTheme />
            <Footer />
        </div>
        </PageWrapper>
    );
};

export default ProjectsPage;