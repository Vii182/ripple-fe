"use client"
import ItemsList from "@/components/Items/ItemsList";
import { useState, useEffect, use } from "react";
import SortingDropdown from "@/components/Items/SortingDropdown";
import { useSearchParams } from "next/navigation";

const CategoryPage = ({ params }) => {
    const { category } = use(params);
    
    const [sortBy, setSortBy] = useState("date_listed");
    const [order, setOrder] = useState("desc");
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);
  
    const handleSortChange = (newSortBy, newOrder) => {
      setSortBy(newSortBy);
      setOrder(newOrder);
    };

    useEffect(() => {
        if (sortBy === "distance") {
          navigator.geolocation.getCurrentPosition((position) => {
            setLong(position.coords.longitude);
            setLat(position.coords.latitude);
          });
        }
      }, [sortBy]);

      return (
        <section>
          <main className="bg-transparent font-Quicksand min-h-screen lg:pt-8">
            <div className="flex flex-col justify-between items-center mb-8 px-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-textPrimary-light dark:text-textPrimary-dark font-Quicksand text-center">
              ITEMS IN {category.toUpperCase()}
              </h1>
              <div className="flex items-center justify-center mt-4">
                <SortingDropdown
                  onSort={handleSortChange}
                  sorted={sortBy}
                  order={order}
                />
              </div>
            </div>
            <div className="px-4">
              <ItemsList category={category} sorted={sortBy} order={order} lat={lat} long={long} />
            </div>
          </main>
        </section>
      );
};

export default CategoryPage;
