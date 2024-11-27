"use client";
import { useState, useEffect, useContext } from "react";
import { LocationContext } from "@/context/LocationContext";
import { UserContext } from "@/context/UserContext";
import ItemForm from "@/components/Items/ItemForm";
import { postItem } from "../functions/api";
import Link from "next/link";

const PostItemPage = () => {
    const { user } = useContext(UserContext);
    const { location, error: locationError } = useContext(LocationContext);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = (FormData) => {
        if (!user) {
            setError("You must be logged in to post an item!");
            setMessage("");
            return;
        }

        if (!location) {
            setError("Location data not available. Please allow location.");
            setMessage("");
            return;
        }

        const formattedLocation = `POINT(${location.longitude} ${location.latitude})`;

        const itemData = {
            ...FormData,
            user_id: user.user_id,
            date_listed: new Date().toISOString(),
            date_of_expire: FormData.date_of_expire || null,
            location: formattedLocation,
        };

        postItem(itemData)
            .then((response) => {
                setMessage("Item Posted Successfully!");
                setError("");
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to post item. Please try again.");
                setMessage("");
            });
    };

    if (!user) {
        return (
            <section className="flex items-center text-textPrimary-light dark:text-textPrimary-dark font-Quicksand justify-center h-screen bg-transparent px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-10">
                        Please login or sign up to donate an item
                    </h2>
                    <p className="text-3xl mb-10">
                        Sign up now to give back to the community
                    </p>
                    <div className="mt-4 text-5xl">
                        <Link href="/login">
                            <p className="text-orange-500 text-3xl dark:text-lime-500 font-bold hover:underline mb-2">
                                Login
                            </p>
                        </Link>{" "}
                        |{" "}
                        <Link href="/signup">
                            <p className="text-orange-500 text-3xl dark:text-lime-500 font-bold hover:underline mt-2">
                                Sign Up
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen">
            <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-3xl font-Quicksand font-bold mb-6 text-center text-textPrimary-light dark:text-textPrimary-dark">
                    DONATE AN ITEM
                </h2>
                <ItemForm onSubmit={handleFormSubmit} user={user} />
                {locationError && (
                    <p className="text-red-500 mt-4">{locationError}</p>
                )}
                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </section>
    );
};

export default PostItemPage;
