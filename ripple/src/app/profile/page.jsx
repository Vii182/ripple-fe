"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { getItems } from "../functions/api";
import Link from "next/link";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (user) {
      getItems()
        .then((allitems) => {
          const filteredItems = allitems.filter(
            (item) => item.user_id === user.user_id
          );
          setUserItems(filteredItems);
        })
        .catch((error) => {
          console.error("Error fetching users items.", error);
        });
    }
  }, [user]);

  if (!user) {
    return (
      <section className="flex items-center justify-center h-screen bg-transparent px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You're not logged in</h2>
          <p>Please login or sign up to view your profile.</p>
          <div className="mt-4">
            <Link href="/login">
              <p className="text-lime-500 font-bold hover:underline">Login</p>
            </Link>{" "}
            |{" "}
            <Link href="/signup">
              <p className="text-lime-500 font-bold hover:underline">Sign Up</p>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-transparent px-4">
      <div className="max-w-4xl w-full p-12 bg-white dark:bg-border-dark rounded-lg shadow-lg">
        <h2 className="text-4xl font-Quicksand font-bold text-lime-500 mb-6 text-center">
          {user.username}'s Profile
        </h2>
        <div className="mb-6">
          <h3 className="text-2xl text-textPrimary-light dark:text-textPrimary-dark font-Quicksand font-bold mb-4 text-center">
            YOUR ITEMS
          </h3>
          {userItems.length > 0 ? (
            <ul>
              {userItems.map((item) => (
                <li
                  key={item.item_id}
                  className="flex items-center border p-2 rounded-lg mb-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Link href={`/items/${item.item_id}`} passHref>
                    <div className="flex items-center">
                      <img
                        src={item.image_url}
                        alt={item.item_name}
                        className="max-w-40 max-h-40 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-textPrimary-light dark:text-textPrimary-dark">
                          {item.item_name}
                        </h4>
                        <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven’t posted any items yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
