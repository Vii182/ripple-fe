"use client"
import { getItemById } from "../../functions/api";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const SingleItem = () => {
    const { item_id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorCode, setErrorCode] = useState(null);

    useEffect(() => {
        setErrorCode(null);
        getItemById(item_id).then((fetchedItem) => {
            console.log(fetchedItem)
            setItem(fetchedItem);
            setLoading(false);
        }).catch((error) => {
            console.error("Error fetching item:", error);
            if (error.response && error.response.status === 404) {
                setErrorCode(404);
            } else if (error.response && error.response.status === 400) {
                setErrorCode(400);
            } else setErrorCode(500);
            setLoading(false);
        });
    }, [item_id]);

    if (errorCode) {
        return <p>Error!</p>
    }

    if (loading) {
        return <p className="text-4xl font-semibold px-4 flex justify-start mt-10">Loading...</p>
    }

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
            <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden lg:flex lg:items-stretch">
                <div className="lg:w:1/2 flex items-center justify-center bg-gray-50">
                    <img src={item?.image_url} alt={item?.item_name} className="w-full h-full sm:w-full sm:h-[500px] object-cover rounded-lg" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">{item.item_name}</h2>
                <p className="text-accent3 mb-2">User ID: {item.user_id}</p>
                <p className="text-accent3 mb-4">{item.description}</p>
                <p className="text-accent2 mb-2">Collection Point: {item.collection_point}</p>
                <p className="text-accent2 mb-2">Expiry Date(if any): {new Date(item.date_of_expire).toLocaleDateString() || "no expiry"}</p>
                <p className="text-accent2 mb-2">Date Listed: {new Date(item.date_listed).toLocaleDateString()}</p>
                <p className="text-accent2">Available: {item.reserve_status}</p>
            </div>
            </main>
        </section>
    )
}

export default SingleItem;