"use client";
import { getItemById } from "../../functions/api";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const SingleItem = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    setErrorCode(null);
    getItemById(item_id)
      .then((fetchedItem) => {
        console.log(fetchedItem);
        setItem(fetchedItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        if (error.response && error.response.status === 404) {
          setErrorCode(404);
        } else if (error.response && error.response.status === 400) {
          setErrorCode(400);
        } else setErrorCode(500);
        setLoading(false);
      });
  }, [item_id]);

  if (errorCode) {
    return <p>Error!</p>;
  }

  if (loading) {
    return (
      <p className="text-4xl font-semibold px-4 flex justify-start mt-10">
        Loading...
      </p>
    );
  }

  return (
    <section className="font-Quicksand flex items-center justify-center bg-white px-4">
      <main className="mb-10 mt-3 w-full max-w-4xl rounded-2xl overflow-hidden">
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
              {new Date(item.date_of_expire).toLocaleDateString() ||
                "no expiry"}
            </p>
            <p className="text-accent2 mb-2">
              Date Listed: {new Date(item.date_listed).toLocaleDateString()}
            </p>
            <p className="text-accent2">Available: {item.reserve_status}</p>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center mt-5 bg-gray-50 border-8 border-gray-100 shadow-lg mx-2 rounded-2xl px-4 px-y">
            <h1>Reserve Item:</h1>
            <p>Please reserve your item here</p>
        </div>
      </main>
    </section>
  );
};

export default SingleItem;
