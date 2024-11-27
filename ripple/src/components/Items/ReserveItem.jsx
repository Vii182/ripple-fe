'use client';
import { useContext,useState } from "react";
import { UserContext } from "@/context/UserContext";
import { reserveItem } from "@/app/functions/api";

const ReserveItem = ( {item} ) => {
  let [ newItem, setNewItem]=useState(item);
  const { user } = useContext(UserContext);
  const handleReserve=()=>{
   reserveItem(item,user.user_id).then((data)=>{
      setNewItem(data.item);
   })
  }
  return (
    <div className="bg-gray-50 dark:bg-border-dark border-8 border-gray-100 dark:border-gray-800 shadow-lg mx-2 rounded-2xl p-6 flex-grow">
      <h1 className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4 text-center">
        Reserve Item
      </h1>
      {newItem.reserve_status ? (
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
            onClick={handleReserve}
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
