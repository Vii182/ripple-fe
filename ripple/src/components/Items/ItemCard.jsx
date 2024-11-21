const ItemCard = ({ item }) => {
    return (
        <div className="min-h-[420px] bg-gray-50 rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto"> 
        <div className="min-h-[200px] md:h-[200px] w-full">
          <img 
            src={item.image_url} 
            loading="eager" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg text-black font-semibold text-text truncate">{item.item_name}</h2>
          <p className="text-sm text-accent3 line-clamp-2">{item.description}</p>
          <p className="text-sm text-accent2">Collection: {item.collection_point}</p>
          <p className="text-sm text-accent2">Expiry: {new Date(item.date_of_expire).toLocaleDateString() || "no expiry"}</p>
          <p className="text-sm text-accent2">
            {item.reserve_status === 'Available' ? 
              <span className="text-green-600">● Available</span> : 
              <span className="text-red-600">● Reserved</span>
            }
          </p>
        </div>
      </div>
    );
  };
  
  export default ItemCard;