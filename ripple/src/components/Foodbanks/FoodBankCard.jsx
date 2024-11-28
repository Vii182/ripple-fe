import { useState } from "react";
import { MapPinIcon, Earth, Phone, Mail, ShoppingBasket } from "lucide-react";

export default function FoodBankCard({ foodBank }) {
    const [needs, setNeeds] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFetch = () => {
        fetch(foodBank.urls.self)
            .then((response) => response.json())
            .then((data) => {
                setNeeds(data.need.needs);
                setIsExpanded(!isExpanded);
            })
            .catch((err) => {
                console.error("Error fetching needs:", err);
                setNeeds("Unable to fetch needs.");
            });
    };

    const openGoogleMaps = () => {
        const exactAddress = encodeURIComponent(
            foodBank.name + " " + foodBank.address
        );
        const [lat, lng] = foodBank.lat_lng.split(",");
        window.open(
            `https://www.google.com/maps/search/${exactAddress}/@${lat},${lng},17z`,
            "_blank"
        );
    };

    const openWebsite = () => {
        window.open(foodBank.urls.homepage, "_blank");
    };

    const openEmail = () => {
        window.location.href = `mailto:${foodBank.email}`;
    };

    return (
        <div className="container mx-auto px-4">
            <div className="h-full bg-gray-50 hover:bg-gray-200 dark:bg-border-dark dark:hover:bg-slate-700 rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform mx-auto mt-3 flex flex-col">
                <div className="p-4 flex flex-col gap-2 font-Quicksand">
                    <h2 className="text-base sm:text-xl font-semibold text-textPrimary-light dark:text-textPrimary-dark">
                        {foodBank.name}
                    </h2>

                    <div
                        onClick={openGoogleMaps}
                        className="flex items-center gap-2 text-sm sm:text-lg font-bold text-blue-500 dark:text-accent-dark hover:underline cursor-pointer mt-3"
                    >
                        <MapPinIcon size={25} className="flex-shrink-0 h-6" />
                        <span className="break-words">{foodBank.address}</span>
                    </div>

                    {foodBank.urls.homepage && (
                        <div
                            onClick={openWebsite}
                            className="flex items-center gap-2 text-sm sm:text-lg font-normal text-blue-700 dark:text-accent-dark hover:underline cursor-pointer mt-3"
                        >
                            <Earth size={25} className="flex-shrink-0 h-6" />
                            <span className="break-words">Visit Website</span>
                        </div>
                    )}

                    {foodBank.email && (
                        <div
                            onClick={openEmail}
                            className="flex items-center gap-2 text-sm sm:text-lg font-normal text-purple-500 dark:text-accent-dark hover:underline cursor-pointer mt-3"
                        >
                            <Mail size={25} className="flex-shrink-0 h-6" />
                            <span className="break-words">
                                {foodBank.email}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-2 text-sm sm:text-lg font-normal text-black dark:text-white cursor-auto mt-3">
                        <Phone size={25} className="flex-shrink-0 h-6" />
                        <span className="break-words">
                            Phone: {foodBank.phone || "Not available"}
                        </span>
                    </div>

                    <button
                        onClick={handleFetch}
                        className="flex items-center gap-2 text-lime-500 dark:text-lime-500 hover:underline text-left text-base sm:text-xl font-semibold mt-3"
                    >
                        <ShoppingBasket
                            size={25}
                            className="flex-shrink-0 h-6"
                        />
                        <span>
                            {isExpanded ? "Hide" : "Items this foodbank needs:"}
                        </span>
                    </button>

                    {isExpanded && needs && (
                        <div className="mt-2">
                            <h3 className="font-semibold text-base sm:text-lg mb-2 text-red-500 dark:text-lime-500">
                                Food Bank Needs:
                            </h3>
                            <ul className="list-disc pl-4">
                                {needs.split("\n").map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-md font-bold sm:text-md text-textPrimary-light dark:text-white"
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
