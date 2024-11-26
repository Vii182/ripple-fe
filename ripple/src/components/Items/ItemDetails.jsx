import ReserveItem from "./ReserveItem";

const ItemDetails = ({ item, errorCode }) => {
  if (errorCode) {
    return <p>Error!</p>;
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-border-dark rounded-2xl shadow-lg border-8 border-gray-100 dark:border-gray-800 mx-2">
        <div className="flex items-center justify-center mx-2">
          <img
            src={item?.image_url}
            alt={item?.item_name}
            className="w-full h-full sm:w-full sm:h-[500px] object-cover rounded-lg mt-2"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4 text-center">
            {item.item_name}
          </h2>
          <p className="text-xl text-textPrimary-light dark:text-textPrimary-dark mb-4 text-center">{item.description}</p>
          <p className="text-xl text-textPrimary-light dark:text-textPrimary-dark mb-2 text-center">
            Collection Point: {item.collection_point}
          </p>
          <p className="text-lg text-textPrimary-light dark:text-textPrimary-dark text-center">
          {item.category_id === 8 ? (
            <span className="text-red-600">Expiry Date: {new Date(item.date_of_expire).toLocaleDateString()}</span>
          ) : (
            <span className="text-lime-500">No Expiry</span>
          )}
        </p>
          <p className="text-lg text-textPrimary-light dark:text-textPrimary-dark font-bold mb-2 text-center mt-5">
            Date Listed: {new Date(item.date_listed).toLocaleDateString()}
          </p>
          <p className="text-md mt-5">
          {item.reserve_status === "Available" ? (
            <span className="text-red-600">● Reserved</span>
          ) : (
            <span className="text-lime-500">● Available</span>
          )}
        </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ReserveItem item={item} />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
