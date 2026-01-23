import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import ToggleTheme from "../components/ToggleTheme";

const HomePage = () => {
    return (
        <PageWrapper>
            <div className='flex flex-col min-h-screen bg-stone-50 dark:bg-gray-900 font-mono'>
                <Navbar />
                <Hero />
                <ToggleTheme />
                <Footer />
            </div>
        </PageWrapper>
    );
};

export default HomePage;
