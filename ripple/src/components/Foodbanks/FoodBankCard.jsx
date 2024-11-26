import { useState } from "react";
import { MapPinIcon } from "lucide-react";

export default function FoodBankCard({ foodBank }) {
    const [needs, setNeeds] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFetch = () => {
        fetch(foodBank.urls.self)
            .then((response) => response.json())
            .then((data) => {
                setNeeds(data.need?.needs || "No specific needs listed.");
                setIsExpanded(!isExpanded);
            })
            .catch((err) => {
                console.error("Error fetching needs:", err);
                setNeeds("Unable to fetch needs.");
            });
    };

    const openGoogleMaps = () => {
        const exactAddress = encodeURIComponent(
            `${foodBank.name} ${foodBank.address}`
        );
        const [lat, lng] = foodBank.lat_lng?.split(",") || [];
        const mapsUrl =
            lat && lng
                ? `https://www.google.com/maps/@${lat},${lng},17z`
                : `https://www.google.com/maps/search/${exactAddress}`;
        window.open(mapsUrl, "_blank");
    };

    return (
        <div className="container mx-auto px-4">
            <div className="h-full bg-gray-50 dark:bg-border-dark rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto mt-3 flex flex-col hover:animate-gradient-shimmer">
                <div className="p-4 flex flex-col gap-2 font-Quicksand">
                    <h2 className="text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark">
                        {foodBank.name}
                    </h2>
                    <div
                        onClick={openGoogleMaps}
                        className="flex items-center gap-2 text-lg font-bold text-blue-500 dark:text-accent-dark hover:underline cursor-pointer"
                    >
                        <MapPinIcon size={25} className="mt-3" />
                        <span>{foodBank.address}</span>
                    </div>
                    <p className="text-md text-textSecondary-light dark:text-textSecondary-dark">
                        Phone: {foodBank.phone || "Not available"}
                    </p>
                    <button
                        onClick={handleFetch}
                        className="text-black dark:text-accent-dark hover:underline text-left text-lg font-semibold"
                    >
                        {isExpanded ? "Hide" : "Items this foodbank needs:"}
                    </button>
                    {isExpanded && needs && (
                        <div className="mt-2">
                            <h3 className="font-semibold text-lg mb-2 text-red-500 dark:text-accent-dark">
                                Food Bank Needs:
                            </h3>
                            <ul className="list-disc pl-4 text-md font-bold">
                                {needs.split("\n").map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-md text-textPrimary-light dark:text-textPrimary-dark"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
