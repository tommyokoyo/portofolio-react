import Footer from "../components/Footer";
import About from "../components/About";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";
import PageWrapper from "../components/PageWrapper";

const AboutPage = () => {
    return (
        <PageWrapper>
            <ToggleTheme />
            <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-gray-900 font-mono">
            <Navbar />
            <About />
            <Footer />
        </div>
        </PageWrapper>
    );
};

export default AboutPage;