import { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-gray-800 dark:text-white mb-1 lg:mb-0" aria-label="Toggle dark mode" title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <CgDarkMode size={24} />
    </button>
  );
};

export default DarkModeToggle;
