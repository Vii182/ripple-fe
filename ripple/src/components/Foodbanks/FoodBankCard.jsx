import { useState } from "react";
export default function FoodBankCard({ foodBank }) {
    const [needs, setNeeds] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFetch = () => {
        Promise.all(
            foodBanks.map((bank) =>
                fetch(bank.urls.self).then((res) => res.json())
            )
        )
            .then((data) => {
                setNeeds(data.map((d) => d.need.needs));
                setIsExpanded(!isExpanded);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="container mx-auto px-4">
            <div className="min-h-[220px] bg-gray-50 dark:bg-border-dark rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto mt-5 cursor-not-allowed ">
                <div className="p-4 flex flex-col gap-2 font-Quicksand">
                    <h2 className="text-lg text-black font-semibold">
                        {foodBank.name}
                    </h2>
                    <p className="text-md text-black">{foodBank.address}</p>
                    <p className="text-md text-black">
                        Phone: {foodBank.phone}
                    </p>
                    <button
                        onClick={handleFetch}
                        className="text-accent2 hover:underline text-black text-left text-lg font-semibold"
                    >
                        {isExpanded ? "Hide" : "View Available Items"}
                    </button>
                    {isExpanded && needs && (
                        <div className="mt-2">
                            <h3 className="font-semibold mb-2 text-green-500">
                                Available Items:
                            </h3>
                            <ul className="list-disc pl-4">
                                {needs.split("\n").map((item, i) => (
                                    <li key={i} className="text-md text-black">
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
