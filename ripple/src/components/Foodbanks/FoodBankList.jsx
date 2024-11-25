import FoodBankCard from "./FoodBankCard";

export default function FoodBankList({ foodBanks }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodBanks.map((bank) => (
                <FoodBankCard key={bank.slug} foodBank={bank} />
            ))}
        </div>
    );
}
