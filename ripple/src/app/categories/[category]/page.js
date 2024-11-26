"use client";
import ItemsList from "@/components/Items/ItemsList";
import SortingDropdown from "@/components/Items/SortingDropdown";
import { useState, useEffect } from "react";

const categories = [
    { category_id: 1, category_name: "Electronics" },
    { category_id: 2, category_name: "Home" },
    { category_id: 3, category_name: "Fashion" },
    { category_id: 4, category_name: "Sports" },
    { category_id: 5, category_name: "Books" },
    { category_id: 6, category_name: "Toys" },
    { category_id: 7, category_name: "Health" },
    { category_id: 8, category_name: "Groceries" },
    { category_id: 9, category_name: "Automotive" },
    { category_id: 10, category_name: "Pets" },
    { category_id: 11, category_name: "Shoes" },
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
                    <ItemsList
                        category={category}
                        sorted={sortBy}
                        order={order}
                    />
                </div>
            </main>
        </section>
    );
}
