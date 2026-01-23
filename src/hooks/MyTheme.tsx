import { createContext, useEffect, useState, ReactNode, useContext } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const localStorageTheme = localStorage.getItem("theme");
        console.log("localStore:", localStorageTheme);
        if ( localStorageTheme === "dark" || localStorageTheme === "light") return localStorageTheme as Theme;
        return document.documentElement.classList.contains('dark') ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.add("transition-colors", "duration-1000");
        localStorage.setItem("theme", theme);
        console.log("Theme updated to:", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
