import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const ReserveItem = ({ reserveStatus }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-50 dark:bg-border-dark border-8 border-gray-100 dark:border-gray-800 shadow-lg mx-2 rounded-2xl p-6 flex-grow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Reserve Item
      </h1>
      {reserveStatus ? (
        <button
          className="w-full py-2 px-4 bg-gray-400 text-white rounded-lg cursor-not-allowed"
          disabled
        >
          Reserved
        </button>
      ) : (
        <div>
          <button
            className={`w-full py-2 px-4 ${
              user ? "bg-lime-500" : "bg-gray-300"
            } text-white rounded-lg`}
            disabled={!user}
          >
            {user ? "Reserve" : "Please log in to reserve"}
          </button>
          {!user && (
            <p className="text-sm text-gray-500 mt-2">
              Please log in to reserve this item.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReserveItem;
