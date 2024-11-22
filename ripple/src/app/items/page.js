"use client";
import ItemsList from "@/components/Items/ItemsList";
import SortingDropdown from "@/components/Items/SortingDropdown";
import { useState } from "react";

export default function ItemsPage() {
  const [sortBy, setSortBy] = useState("date_listed");
  const [order, setOrder] = useState("desc");

  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  return (
    <section>
      <main className="bg-transparent font-Quicksand min-h-screen pt-8">
        <div className="relative">
          <h1 className="lg:mt-4 lg:ml-10 text-3xl font-bold text-black font-Quicksand text-center lg:absolute left-0">
            ITEMS FOR GIVEAWAY
          </h1>
          <div className="flex items-center justify-center lg:absolute right-0 mr-5">
            <SortingDropdown
              onSort={handleSortChange}
              sorted={sortBy}
              order={order}
            />
          </div>
        </div>

        <div className="px-4">
          <ItemsList sorted={sortBy} order={order} />
        </div>
      </main>
    </section>
  );
}
