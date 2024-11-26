"use client";
import ItemsList from "@/components/Items/ItemsList";
import SortingDropdown from "@/components/Items/SortingDropdown";
import { useState } from "react";
import Link from "next/link";
import CategoriesIconBar from "@/components/Home/CategoriesIconBar";


export default function ItemsPage() {
  const [sortBy, setSortBy] = useState("date_listed");
  const [order, setOrder] = useState("desc");
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);

  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  if (sortBy === "distance") {
    navigator.geolocation.getCurrentPosition((position) => {
      setLong(position.coords.longitude);
      setLat(position.coords.latitude);
    });
  }

  return (
    <section>
    <main className="bg-transparent font-Quicksand min-h-screen lg:pt-8">
      <div className="mb-4 flex justify-center">
        <CategoriesIconBar />
      </div>
      <div className="flex flex-col justify-between items-center mb-8 px-4">
        <h1 className="lg:mt-4 lg:ml-10 text-4xl lg:text-5xl font-bold text-textPrimary-light dark:text-textPrimary-dark font-Quicksand text-center">
          ITEMS FOR GIVEAWAY
        </h1>
        <div className="flex items-center justify-center mt-4">
          <SortingDropdown
            onSort={handleSortChange}
            sorted={sortBy}
            order={order}
          />
        </div>
      </div>

      <div className="px-4 mt-8">
        <ItemsList sorted={sortBy} order={order} lat={lat} long={long} />
      </div>
    </main>
  </section>
  );
}
