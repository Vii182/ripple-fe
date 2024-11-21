"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const linkStyles =
    "block text-base font-medium text-black hover:text-orange-500";

  return (
    <div className="relative lg:hidden ">
      <button
        onClick={toggleMenu}
        className="text-black text-3xl focus:outline-none lg:hidden"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 p-4 bg-white bg-opacity-85 rounded-lg shadow-lg w-48"
          style={{
            top: "100%",
            zIndex: 1000,
          }}
        >
          <div className="space-y-4">
            <Link href="/" className={linkStyles} onClick={closeMenu}>
              HOME
            </Link>
            <Link href="/items" className={linkStyles} onClick={closeMenu}>
              ITEMS
            </Link>
            <Link
              href="/list-an-item"
              className={linkStyles}
              onClick={closeMenu}
            >
              LIST AN ITEM
            </Link>
            <Link href="/foodbanks" className={linkStyles} onClick={closeMenu}>
              FOODBANKS
            </Link>
            {user ? (
              <>
                <span className="block text-base font-medium text-orange-500">
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
              <Link href="/login" className={linkStyles} onClick={closeMenu}>
                LOGIN
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;