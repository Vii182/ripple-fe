import { useState } from "react";

export default function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by location..."
            className="w-4/5 sm:w-full text-black max-w-md p-3 mb-6 rounded-lg border border-gray-300 dark:border-gray-600"
        />
    );
}
