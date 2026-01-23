import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return document.documentElement.classList.contains('dark') ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // document.documentElement.classList.add("transition-colors", "duration-1000");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme: () => setTheme(prev => (prev === "light" ? "dark" : "light")) };
}
