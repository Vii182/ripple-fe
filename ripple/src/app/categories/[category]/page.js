"use client"
import ItemsList from "@/components/Items/ItemsList"
import SortingDropdown from "@/components/Items/SortingDropdown"
import { useState, useEffect } from "react"

const categories = [
  { category_id: 1, category_name: "electronics" },
  { category_id: 2, category_name: "home" },
  { category_id: 3, category_name: "fashion" },
  { category_id: 4, category_name: "sports" },
  { category_id: 5, category_name: "books" },
  { category_id: 6, category_name: "toys" },
  { category_id: 7, category_name: "health" },
  { category_id: 8, category_name: "groceries" },
  { category_id: 9, category_name: "automotive" },
  { category_id: 10, category_name: "pets" },
  { category_id: 11, category_name: "shoes" },
];

export default function CategoryPage({ params }) {
    const [sortBy, setSortBy] = useState("date_listed");
    const [order, setOrder] = useState("desc");
    const [category, setCategory] = useState(null);
    

    useEffect(() => {
      
      const matchedCategory = categories.find(
        (cat) => cat.category_name === category
      );
      if (matchedCategory) {
        setCategoryId(matchedCategory.category_id);
      }
    }, [category]);

    const handleSortChange = (newSortBy, newOrder) => {
        setSortBy(newSortBy);
        setOrder(newOrder);
    };

    return (
        <section>
          <main className="bg-transparent font-Quicksand min-h-screen lg:pt-8">
            <div className="relative">
              <h1 className="lg:mt-4 lg:ml-10 text-4xl font-bold text-textPrimary-light dark:text-textPrimary-dark font-Quicksand text-center lg:absolute left-0">
                {category} Items for Giveaway
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
              <ItemsList category={category} sorted={sortBy} order={order} />
            </div>
          </main>
        </section>
      );
}