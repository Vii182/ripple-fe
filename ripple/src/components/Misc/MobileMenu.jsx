"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const linkStyles = "block text-base font-medium text-black hover:text-orange-500"

  return (
    <div className="relative lg:hidden ">
      <button
        onClick ={toggleMenu}
        className="text-black text-3xl focus:outline-none lg:hidden"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 bg-white bg-opacity-85 rounded-lg shadow-lg w-48" style={{
            top: "100%",
            zIndex: 1000,
          }}>
          <div className="space-y-4">
            <Link href="/" className={linkStyles}
            onClick={closeMenu}>
              HOME
            </Link>
            <Link
              href="/items"
              className={linkStyles}
              onClick={closeMenu}
            >
              ITEMS
            </Link>
            <Link
              href="/list-an-item"
              className={linkStyles}
              onClick={closeMenu}
            >
              LIST AN ITEM
            </Link>
            <Link
              href="/foodbanks"
              className={linkStyles}
              onClick={closeMenu}
            >
              FOODBANKS
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
