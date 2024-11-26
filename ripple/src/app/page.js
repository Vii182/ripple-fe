"use client";
import { getItems, getFoodBanks } from "./functions/api";
import { useEffect, useState } from "react";
import FeaturedItems from "@/components/Home/FeaturedItems";
import giving from "../../public/giving.jpg";

export default function Home() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [Foodbanks, setFoodBanks] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => setIsOpen(!isOpen);

  useEffect(() => {
    getItems()
      .then((FetchedItems) => {
        setFeaturedItems(FetchedItems.slice(0, 10));
      })
      .catch((err) =>
        console.error("Error Fetching Featured Items - HOME", err)
      )
      .finally(() => setLoadingItems(false));
  });

  return (
    <section className="bg-transparent min-h-screen font-Quicksand">
      <header className="text-center py-8 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
          WELCOME TO RIPPLE
        </h1>
        <div className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-4">
      <p className="text-center">
        <span className="font-semibold text-primary-500">
          Welcome to Ripple, the platform designed to connect people, empower communities, and make a positive impact.
        </span>
        <br /> 
      </p>
      <div className="text-center mt-4">
        <button 
          onClick={toggleContent} 
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isOpen ? "Read Less" : "Read More"}
        </button>
      </div>
      {isOpen && (
        <p className="text-center mt-4">
         By participating in the Ripple community, you can donate items you no longer need, give back to those in your area, and help support others through a network of sharing. Whether you have household goods, clothing, or food to offer, Ripple makes it easy to get involved and make a difference. Join us today, and start contributing to a more sustainable and caring world. Every donation matters!
        </p>
      )}
    </div>
        <div className="flex-grow border-t border-white mx-4 opacity-50 mt-5"></div>
      </header>
      <main className="flex items-center justify-center flex-1 flex-col flex-grow px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold font-Quicksand text-textPrimary-light dark:text-textPrimary-dark text-center mb-6 px-4 break-words max-w-full">
          CHECK OUT THE LATEST ITEMS FROM THE COMMUNITY
        </h2>
        {loadingItems ? (
          <p className="text-center text-gray-500">Loading featured items...</p>
        ) : (
          <FeaturedItems items={featuredItems} />
        )}
      </main>
      <div className="flex-grow border-t border-white mx-4 px-4 opacity-50 mt-5"></div>
    </section>
  );
}
