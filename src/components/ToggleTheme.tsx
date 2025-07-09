import { useState, useEffect } from "react";

const ToggleTheme = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      const themePref = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return themePref ? "dark" : "light";
    });

    useEffect(() => {
        // console.log("Toggling theme:", theme);
        // const storedTheme = localStorage.getItem("theme");
        // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // const initialTheme = storedTheme || (prefersDark ? "dark" : "light")
        // setTheme(initialTheme)
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      // const newTheme = theme === "light" ? "dark" : "light";
      // setTheme(newTheme)
      setTheme(prev => (prev === "light" ? "dark" : "light"));
      // localStorage.setItem("theme", newTheme);
      // document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:scale-105 transition"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;