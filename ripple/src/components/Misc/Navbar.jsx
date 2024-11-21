"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import MobileMenu from "./MobileMenu";
import { IoHomeOutline } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const handleQuickLogout = () => {
    logout();
    redirect("/");
  };

  const linkStyles = "text-lg sm:text-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500";

  return (
    <nav className="mb-2 sm:mb-0 font-Quicksand text-black flex items-center space-x-6">
      <div className="hidden lg:flex items-center space-x-4">
      <Link href="/" className={linkStyles}>
        HOME
      </Link>
      <IoHomeOutline className="text-black mx-2" />
      <Link href="/items" className={linkStyles}>
        ITEMS
      </Link>
      <IoBagHandleOutline className="text-black mx-2" />
      <Link href="/list-an-item" className={linkStyles}>
        LIST AN ITEM
      </Link>
      <IoHeartCircleOutline className="text-black mx-2" />
      <Link href="/foodbanks" className={linkStyles}>
        FOODBANKS
      </Link>
      <SiFoodpanda className="text-black mx-2" />
      {user ? (
        <>
          <span className="text-lg sm:text-xl text-orange-400 font-bold">
             {user.username.toUpperCase()}
          </span>
          <button
            onClick={handleQuickLogout}
            className="text-lg text-red-500 sm:text-xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            LOGOUT
          </button>
        </>
      ) : (
        <Link href="/login" className={linkStyles}>
          LOGIN
        </Link>
      )}
    </div>
    <MobileMenu user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;