"use client";
import { useState, useEffect } from "react";
import Search from "@/components/Foodbanks/Search";
import Loading from "@/components/Misc/Loading";
import { getFoodBanks } from "../functions/api";
import FoodBankList from "@/components/Foodbanks/FoodBankList";

export default function FoodbanksPage() {
    const [foodBanks, setFoodBanks] = useState([]);
    const [filteredBanks, setFilteredBanks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;

    useEffect(() => {
        getFoodBanks()
            .then((data) => {
                setFoodBanks(data);
                setFilteredBanks(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = foodBanks.filter(
            (bank) =>
                bank.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bank.postcode.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBanks(filtered);
        setCurrentPage(1);
    };

    const currentFoodBanks = filteredBanks.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(filteredBanks.length / itemsPerPage);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen mt-10">
                <Loading />
            </div>
        );
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <section>
            <main className="bg-transparent flex min-h-screen items-center justify-center flex-1 flex-col flex-grow font-Quicksand">
                <h1 className="text-4xl text-textPrimary-light dark:text-textPrimary-dark mb-6">
                    Local Food banks
                </h1>
                <h2 className="text-2xl text-textPrimary-light dark:text-textPrimary-dark mb-6">
                    Food banks that you can help or use!
                </h2>
                <Search onSearch={handleSearch} />
                <FoodBankList foodBanks={currentFoodBanks} />
                <div className="flex justify-center gap-2 mt-10 mb-10">
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage - 1),
                                window.scrollTo(0, 0);
                        }}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-button-light dark:bg-button-dark text-textPrimary-light dark:text-textPrimary-dark disabled:opacity-50 hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-textPrimary-light dark:text-textPrimary-dark">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1),
                                window.scrollTo(0, 0);
                        }}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-button-light dark:bg-button-dark text-textPrimary-light dark:text-textPrimary-dark disabled:opacity-50 hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto"
                    >
                        Next
                    </button>
                </div>
            </main>
        </section>
    );
}
