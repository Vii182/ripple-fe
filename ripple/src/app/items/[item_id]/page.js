"use client";
import { getItemById } from "../../functions/api";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ItemDetails from "@/components/Items/ItemDetails";
import Loading from "@/components/Misc/Loading";

const SingleItem = () => {
    const { item_id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorCode, setErrorCode] = useState(null);

    useEffect(() => {
        setErrorCode(null);
        setLoading(true);
        getItemById(item_id)
            .then((fetchedItem) => {
                console.log(fetchedItem);
                setItem(fetchedItem);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching item:", error);
                if (error.response && error.response.status === 404) {
                    setErrorCode(404);
                } else if (error.response && error.response.status === 400) {
                    setErrorCode(400);
                } else setErrorCode(500);
                setLoading(false);
            });
    }, [item_id]);

    return (
        <section className="font-Quicksand px-4 bg-transparent min-h-screen flex flex-col items-center">
            {loading ? (
                <div className="mt-10">
                    <Loading />
                </div>
            ) : (
                <main className="flex flex-col md:flex-row gap-6 mb-10 mt-3 w-full max-w-4xl rounded-2xl overflow-hidden">
                    <ItemDetails item={item} errorCode={errorCode} />
                </main>
            )}
        </section>
    );
};

export default SingleItem;
