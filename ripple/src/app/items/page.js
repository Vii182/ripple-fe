"use client";
import ItemsList from "@/components/Items/ItemsList";
import SortingDropdown from "@/components/Items/SortingDropdown";
import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    "category_id": 1,
    "category_name": "electronics",
    "description": "Devices and gadgets including phones, laptops, and   accessories.",
    "image_url": "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg"
    },
    {
    "category_id": 2,
    "category_name": "home",
    "description": "Essentials for home improvement, kitchenware, and furniture.",
    "image_url": "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg"
    },
    {
    "category_id": 3,
    "category_name": "fashion",
    "description": "Trendy clothing, shoes, and accessories for all genders and ages.",
    "image_url": "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg"
    },
    {
    "category_id": 4,
    "category_name": "sports",
    "description": "Equipment and gear for sports, fitness, and outdoor activities.",
    "image_url": "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg"
    },
    {
    "category_id": 5,
    "category_name": "books",
    "description": "A wide range of books, notebooks, and office supplies.",
    "image_url": "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg"
    },
    {
    "category_id": 6,
    "category_name": "toys",
    "description": "Fun and educational toys and games for kids and adults.",
    "image_url": "https://images.pexels.com/photos/3661222/pexels-photo-3661222.jpeg"
    },
    {
    "category_id": 7,
    "category_name": "health",
    "description": "Products for personal care, wellness, and cosmetics.",
    "image_url": "https://images.pexels.com/photos/7143283/pexels-photo-7143283.jpeg"
    },
    {
    "category_id": 8,
    "category_name": "groceries",
    "description": "Daily essentials including fresh produce, snacks, and beverages.",
    "image_url": "https://images.pexels.com/photos/6590933/pexels-photo-6590933.jpeg"
    },
    {
    "category_id": 9,
    "category_name": "automotive",
    "description": "Car accessories, tools, and automotive maintenance products.",
    "image_url": "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg"
    },
    {
    "category_id": 10,
    "category_name": "pets",
    "description": "Food, toys, and care products for your furry friends.",
    "image_url": "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg"
    },
    {
    "category_id": 11,
    "category_name": "shoes",
    "description": "get a shoe for your feet",
    "image_url": "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg"
    }
]

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
        <div className="relative">
          <h1 className="lg:mt-4 lg:ml-10 text-4xl font-bold text-textPrimary-light dark:text-textPrimary-dark font-Quicksand text-center lg:absolute left-0">
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
        {/* <div className="flex flex-wrap gap-4 px-4 my-6">
          {categories.map((category) => (
            <Link
              key={category.category_id}
              href={`/categories/${category.category_name}`}
            >
              <div className="w-40 h-40 p-4 border rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg dark:bg-gray-800">
                <img
                  src={category.image_url}
                  alt={category.category_name}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{category.category_name}</h2>
              </div>
            </Link>
          ))}
        </div> */}
        <div className="px-4">
          <ItemsList sorted={sortBy} order={order} lat={lat} long={long} />
        </div>
      </main>
    </section>
  );
}
