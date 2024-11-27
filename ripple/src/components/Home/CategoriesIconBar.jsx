"use client";
import { useState } from "react";
import Link from "next/link";
import { LuCircuitBoard } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { MdSmartToy } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { GiConverseShoe } from "react-icons/gi";

const categories = [
    {
        name: "Electronics",
        icon: <LuCircuitBoard size={42} />,
        slug: "electronics",
    },
    { name: "Home", icon: <IoHomeOutline size={42} />, slug: "home" },
    { name: "Fashion", icon: <GiClothes size={42} />, slug: "fashion" },
    {
        name: "Sports",
        icon: <MdOutlineSportsBaseball size={42} />,
        slug: "sports",
    },
    { name: "Books", icon: <IoBookSharp size={42} />, slug: "books" },
    { name: "Toys", icon: <MdSmartToy size={42} />, slug: "toys" },
    {
        name: "Health",
        icon: <MdOutlineHealthAndSafety size={42} />,
        slug: "health",
    },
    {
        name: "Groceries",
        icon: <PiBowlFoodBold size={42} />,
        slug: "groceries",
    },
    { name: "Automotive", icon: <FaCar size={42} />, slug: "automotive" },
    { name: "Pets", icon: <MdOutlinePets size={42} />, slug: "pets" },
    { name: "Shoes", icon: <GiConverseShoe size={42} />, slug: "shoes" },
];

const CategoriesIconBar = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const handleScroll = (direction) => {
        if (direction === "left" && scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        } else if (
            direction === "right" &&
            scrollIndex < categories.length - 5
        ) {
            setScrollIndex(scrollIndex + 1);
        }
    };

    return (
        <div className="relative flex items-center text-textPrimary-light dark:text-textPrimary-dark justify-center mt-0 w-[90%] mb-5">
            <button
                onClick={() => handleScroll("left")}
                disabled={scrollIndex === 0}
                className="absolute left-0 bg-lime-500 dark:bg-gray-800 text-white p-2 rounded-full hover:bg-lime-700 dark:hover:bg-gray-700 h-12 lg:h-32 lg:w-12"
            >
                &lt;
            </button>
            <div className="flex overflow-hidden w-[90%] lg:w-[60%]">
                <div
                    className="flex space-x-4 transition-transform"
                    style={{ transform: `translateX(-${scrollIndex * 80}px)` }}
                >
                    {categories.map((category) => (
                        <Link
                            href={`/categories/${category.slug}`}
                            key={category.slug}
                        >
                            <div className="flex flex-col items-center cursor-pointer hover:opacity-90">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 text-gray-800 flex items-center justify-center rounded-full bg-gray-200 p-2">
                                    {category.icon}
                                </div>
                                <span className="text-sm mt-2">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <button
                onClick={() => handleScroll("right")}
                disabled={scrollIndex >= categories.length - 5}
                className="absolute right-0 bg-lime-500 dark:bg-gray-800 text-white p-2 rounded-full hover:bg-lime-700 dark:hover:bg-gray-700 h-12 lg:h-32 lg:w-12"
            >
                &gt;
            </button>
        </div>
    );
};

export default CategoriesIconBar;
