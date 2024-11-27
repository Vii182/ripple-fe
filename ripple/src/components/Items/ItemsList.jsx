"use client";
import { useEffect, useState } from "react";
import { getItems } from "@/app/functions/api";
import Link from "next/link";
import ItemCard from "./ItemCard";
import Loading from "../Misc/Loading";

const ItemsList = ({
  category = null,
  sorted = "date_listed",
  order = "desc",
  lat = null,
  long = null,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErrorCode(null);
    getItems(category, sorted, order, long, lat)
      .then((itemsData) => {
        setItems(itemsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Items:", error);
        if (error.response && error.response.status === 404) {
          setErrorCode(404);
        } else if (error.response && error.response.status === 400) {
          setErrorCode(400);
        } else setErrorCode(500);
        setLoading(false);
      });
  }, [category, sorted, order]);

  if (errorCode) {
    return <p>Error!</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {items.map((item) => {
          return (
            <Link
              href={`/items/${item.item_id}`}
              key={item.item_id}
              passHref
              className="hover:opacity-90"
            >
              <ItemCard key={item.item_id} item={item} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsList;
