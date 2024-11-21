import ReserveItem from "./ReserveItem";

const ItemDetails = ({ item, errorCode }) => {
  if (errorCode) {
    return <p>Error!</p>;
  }

  return (
    <>
      <div className="bg-gray-50 rounded-2xl shadow-lg border-8 border-gray-100 mx-2">
        <div className="flex items-center justify-center mx-2">
          <img
            src={item?.image_url}
            alt={item?.item_name}
            className="w-full h-full sm:w-full sm:h-[500px] object-cover rounded-lg border-bg-light mt-2"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {item.item_name}
          </h2>
          <p className="text-accent3 mb-2">User ID: {item.user_id}</p>
          <p className="text-accent3 mb-4">{item.description}</p>
          <p className="text-accent2 mb-2">
            Collection Point: {item.collection_point}
          </p>
          <p className="text-accent2 mb-2">
            Expiry Date(if any):{" "}
            {new Date(item.date_of_expire).toLocaleDateString() || "no expiry"}
          </p>
          <p className="text-accent2 mb-2">
            Date Listed: {new Date(item.date_listed).toLocaleDateString()}
          </p>
          <p className="text-accent2">Available: {item.reserve_status}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ReserveItem reserveStatus={item.reserve_status} />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
