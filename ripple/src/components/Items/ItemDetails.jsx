import Maps from "../Misc/Maps";
import ReserveItem from "./ReserveItem";

const ItemDetails = ({ item, errorCode }) => {
  if (errorCode) {
    return <p>Error!</p>;
  }
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <section className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex-1 bg-gray-50 dark:bg-border-dark rounded-2xl shadow-lg border-8 border-gray-100 dark:border-gray-900 p-6">
          <div className="flex items-center justify-center">
            <img
              src={item?.image_url}
              alt={item?.item_name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4 text-center">
              {item.item_name}
            </h2>
            <p className="text-xl text-textPrimary-light dark:text-textPrimary-dark mb-4 text-center">
              {item.description}
            </p>
            <p className="text-xl text-textPrimary-light dark:text-textPrimary-dark mb-2 text-center">
              Collection Point: {item.collection_point}
            </p>
            <p className="text-lg text-center">
              {item.category_id === 8 ? (
                <span className="text-red-600">
                  Expiry Date:{" "}
                  {new Date(item.date_of_expire).toLocaleDateString()}
                </span>
              ) : (
                <span className="text-lime-500">No Expiry</span>
              )}
            </p>
            <p className="text-lg text-textPrimary-light dark:text-textPrimary-dark font-bold mb-2 text-center mt-5">
              Date Listed: {new Date(item.date_listed).toLocaleDateString()}
            </p>
            <p className="text-md mt-5 text-center">
              {item.reserve_status === "Available" ? (
                <span className="text-lime-500">● Available</span>
              ) : (
                <span className="text-red-600">● Reserved</span>
              )}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl text-textPrimary-light dark:text-textPrimary-dark font-bold text-center mb-4">
              Location Map
            </h3>
            <div className="h-64 md:h-96">
              <Maps item={item} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex-1">
            <ReserveItem item={item} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ItemDetails;
