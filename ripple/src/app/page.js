"use client"
import { getItems, getFoodBanks } from "./functions/api";
import { useEffect, useState } from "react";
import FeaturedItems from "@/components/Home/FeaturedItems";

export default function Home() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [Foodbanks, setFoodBanks] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    getItems()
      .then((FetchedItems) => setFeaturedItems(FetchedItems))
      .catch((err) => console.error("Error Fetching Featured Items - HOME", err))
      .finally(() => setLoadingItems(false));
  });

  return (
    <section className="bg-transparent min-h-screen">
      <header className="text-center py-8 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
          Welcome to Ripple
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
          Connect, Donate, and Support Communities in Need.
        </p>
        <div  className="flex-grow border-t border-white mx-4 opacity-50 mt-5"></div>
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
    </section>
  );
}
