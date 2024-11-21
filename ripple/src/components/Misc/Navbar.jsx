"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  const handleQuickLogout = () => {
    logout();
    redirect("/");
  };

  return (
    <nav className="mb-2 sm:mb-0 font-Michroma text-text flex items-center space-x-4">
      <div className="hidden lg:flex items-center space-x-4">
      <Link
        href="/"
        className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        HOME
      </Link>
      <Link
        href="/items"
        className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        ITEMS
      </Link>
      <Link
        href="/list-an-item"
        className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        LIST AN ITEM
      </Link>
      <Link
        href="/foodbanks"
        className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        FOODBANKS
      </Link>
      {user ? (
        <>
          <span className="text-orange-400">Hello, {user.username}</span>
          <button
            onClick={handleQuickLogout}
            className="text-sm sm:text-base transition-transform transform hover:scale-110 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          LOGIN
        </Link>
      )}
    </div>
    <MobileMenu />
    </nav>
  );
};

export default Navbar;
