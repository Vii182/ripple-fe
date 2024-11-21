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

  const linkStyles = "text-lg sm:text-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600";

  return (
    <nav className="mb-2 sm:mb-0 font-Quicksand text-black flex items-center space-x-6">
      <Link href="/" className={linkStyles}>
        HOME
      </Link>
      <Link href="/items" className={linkStyles}>
        ITEMS
      </Link>
      <Link href="/foodbanks" className={linkStyles}>
        FOODBANKS
      </Link>
      {user ? (
        <>
          <span className="text-lg sm:text-xl text-orange-400 font-bold">
            Hello, {user.username}
          </span>
          <button
            onClick={handleQuickLogout}
            className="text-lg sm:text-xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className={linkStyles}>
          LOGIN
        </Link>
      )}
    </div>
    <MobileMenu />
    </nav>
  );
};

export default Navbar;