const Hero = () => {
    return (
        <section className="flex flex-col items-center px-4  text-center justify-center transition-colors pt-16">
            <img
                src="https://www.okoyo.dev/images/me.jpg"
                alt="profile_photo"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#f9f5f0] dark:border-gray-700 shadow-lg"
            />
            <p className="mt-6 text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">Hello friend 👋, I'm Okoyo.</p>
            <p className="mt-3 text-sm sm:text-md font-semibold text-gray-600 dark:text-gray-300">and I love exploring the world of technology.</p>
        </section>
    );
};

export default Hero;