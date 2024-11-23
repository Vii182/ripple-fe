const ItemCard = ({ item }) => {
  return (
    <div className="min-h-[420px] bg-gray-50 dark:bg-border-dark rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto">
      <div className="h-[300px] md:h-[300px] w-full">
        <img
          src={item.image_url}
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 font-Quicksand">
        <h2 className="text-lg text-textPrimary-light dark:text-textPrimary-dark font-semibold truncate">
          {item.item_name}
        </h2>
        <p className="text-md text-textPrimary-light dark:text-textPrimary-dark line-clamp-2">{item.description}</p>
        <p className="text-md text-textPrimary-light dark:text-textSecondary-dark">
          Collection: {item.collection_point}
        </p>
        <p className="text-md text-textPrimary-light dark:text-textPrimary-dark">
          {item.category_id === 8 ? (
            <span className="text-red-600">Expiry Date: {new Date(item.date_of_expire).toLocaleDateString()}</span>
          ) : (
            <span className="text-lime-500">No Expiry</span>
          )}
        </p>
        <p className="text-md text-textPrimary-light dark:text-textPrimary-dark font-semibold mb-2">
            Date Listed: {new Date(item.date_listed).toLocaleDateString()}
          </p>
        <p className="text-sm text-accent2">
          {item.reserve_status === "Available" ? (
            <span className="text-red-600">● Reserved</span>
          ) : (
            <span className="text-green-600">● Available</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
