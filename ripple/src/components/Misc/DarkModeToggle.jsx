import { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("darkMode") === "true";
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", !darkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="rounded-md text-gray-800 dark:text-white"
            aria-label="Toggle dark mode"
        >
            <CgDarkMode size={28} />
        </button>
    );
};

export default DarkModeToggle;
