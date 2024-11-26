import FoodBankCard from "./FoodBankCard";

export default function FoodBankList({ foodBanks }) {
    if (!foodBanks || foodBanks.length === 0) {
        return (
            <div className="text-center text-xl font-bold text-red-500 dark:text-textPrimary-dark">
                No foodbanks found matching your search criteria. Please try
                again.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto px-4 min-h-[180px]">
            {foodBanks.map((bank) => (
                <FoodBankCard key={bank.slug} foodBank={bank} />
            ))}
        </div>
    );
}
