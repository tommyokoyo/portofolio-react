import { useTheme } from "../hooks/MyTheme";

const ToggleTheme = () => {
    const {theme, toggleTheme } = useTheme();

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