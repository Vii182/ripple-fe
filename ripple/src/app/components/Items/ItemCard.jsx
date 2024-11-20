const ItemCard = ({ item }) => {
    return (
        <div className="min-h-[420px] max-w-lg mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden mb-4">
            <img src={item.image_url} loading="eager" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-text">{item.item_name}</h2>
                <p className="text-accent3">UserID: {item.user_id}</p>
                <p className="text-accent3">{item.description}</p>
                <p className="text-accent2">Collection Point: {item.collection_point}</p>
                <p className="text-accent2">Expiry Date(if any): {new Date(item.date_of_expire).toLocaleDateString() || "no expiry"}</p>
                <p className="text-accent2">Date Listed: {new Date(item.date_listed).toLocaleDateString()}</p>
                <p className="text-accent2">Available: {item.reserve_status}</p>
            </div>
        </div>
    );
};

export default ItemCard;