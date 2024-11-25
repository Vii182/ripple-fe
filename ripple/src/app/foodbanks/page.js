"use client";
import { useState, useEffect } from "react";
import FoodBankList from "@/components/Foodbanks/FoodBankList";
import { getFoodBanks } from "../functions/api";
import Loading from "@/components/Misc/Loading";

export default function FoodbanksPage() {
    const [foodBanks, setFoodBanks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFoodBanks()
            .then((data) => {
                setFoodBanks(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

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
                <h1 className="text-4xl text-black">Local Foodbanks</h1>
                <FoodBankList foodBanks={foodBanks} />
            </main>
        </section>
    );
}
