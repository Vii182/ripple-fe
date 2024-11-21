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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-gray-800 dark:text-white"
    >
      <CgDarkMode size={24} />
    </button>
  );
};

export default DarkModeToggle;
