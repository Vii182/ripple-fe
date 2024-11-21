"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white text-3xl focus:outline-none lg:hidden"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg w-48" style={{
            top: "100%",
            zIndex: 1000,
          }}>
          <div className="space-y-4">
            <Link href="/" className="block text-sm text-black hover:text-orange-500">
              HOME
            </Link>
            <Link
              href="/items"
              className="block text-sm text-black hover:text-orange-500"
            >
              ITEMS
            </Link>
            <Link
              href="/list-an-item"
              className="block text-sm text-black hover:text-orange-500"
            >
              LIST AN ITEM
            </Link>
            <Link
              href="/foodbanks"
              className="block text-sm text-black hover:text-orange-500"
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
