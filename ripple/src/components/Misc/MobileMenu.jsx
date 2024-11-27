"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const MobileMenu = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleQuickLogout = () => {
    logout();
    router.push("/");
    closeMenu();
  };

  return (
    <div className="relative lg:hidden ">
      <button
        onClick={toggleMenu}
        className="text-black dark:text-textPrimary-dark text-3xl focus:outline-none lg:hidden"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 p-4 bg-white dark:bg-border-dark text-textPrimary-light dark:text-textPrimary-dark dark: bg-opacity-85 dark:bg-opacity-85 rounded-lg shadow-lg w-48"
          style={{
            top: "100%",
            zIndex: 1000,
          }}
        >
          <div className="space-y-4">
            <Link href="/" className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500" onClick={closeMenu}>
              HOME
            </Link>
            <Link href="/items" className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500" onClick={closeMenu}>
              ITEMS
            </Link>
            <Link
              href="/donate"
              className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500"
              onClick={closeMenu}
            >
              DONATE
            </Link>
            <Link href="/foodbanks" className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500" onClick={closeMenu}>
              FOODBANKS
            </Link>
            <Link href="/profile" className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500" onClick={closeMenu}>
              PROFILE
            </Link>
            {user ? (
              <>
                <span className="block text-base font-medium text-orange-500 dark:text-lime-500">
                  {user.username.toUpperCase()}
                </span>
                <button
                  onClick={handleQuickLogout}
                  className="block text-base font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link href="/login" className="block text-base font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-orange-500 dark:hover:text-lime-500" onClick={closeMenu}>
                LOGIN
              </Link>
            )}
            <DarkModeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
