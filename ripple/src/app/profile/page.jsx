"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { getItems } from "../functions/api";
import Link from "next/link";
import { getUserbyUsername } from "../functions/api";
import Loading from "@/components/Misc/Loading";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userItems, setUserItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.username) {
        getUserbyUsername(user.username).then((fetchedUser) => {
            setUserData(fetchedUser);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error Fetching user data", error);
            setLoading(false);
        });
    } else setLoading(false);
  }, [user?.username]);

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

  if (loading) {
    return (
        <Loading className="min-h-screen"/>
    )
  }

  if (!user) {
    return (
      <section className="flex items-center text-textPrimary-light dark:text-textPrimary-dark font-Quicksand justify-center h-screen bg-transparent px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You're not logged in</h2>
          <p>Please login or sign up to view your profile.</p>
          <div className="mt-4">
            <Link href="/login">
              <p className="text-orange-500 dark:text-lime-500 font-bold hover:underline">Login</p>
            </Link>{" "}
            |{" "}
            <Link href="/signup">
              <p className="text-orange-500 dark:text-lime-500 font-bold hover:underline">Sign Up</p>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4">
      <div className="max-w-4xl w-full p-12 bg-white dark:bg-border-dark rounded-lg shadow-lg mb-5">
        <h2 className="text-5xl font-Quicksand font-bold text-lime-500 mb-6 text-center">
          {user.username}'s Profile
        </h2>
        <div className="flex flex-col items-center mb-6">
          {userData?.avatar_url && (
            <img
              src={userData.avatar_url}
              alt={`${userData.username}'s Avatar`}
              className="w-32 h-32 rounded-full mb-4"
            />
          )}
          <h2 className="font-Quicksand font-bold text-3xl mb-5 text-textPrimary-light dark:text-textPrimary-dark">USER DETAILS</h2>
          <div className="bg-transparent border rounded-lg p-6 w-full text-center">
          <h2 className="text-2xl w-fu font-Quicksand font-semibold text-textSecondary-light dark:text-textSecondary-dark">
            Name: {userData?.name || user.username}
          </h2>
          {userData?.area && (
            <p className="text-2xl text-textSecondary-light dark:text-textSecondary-dark">Location: {userData.area}</p>
          )}
          {userData?.username && (
            <p className="font-semibold text-2xl text-textSecondary-light dark:text-textSecondary-dark">Username: {userData.username}</p>
          )}
          {userData?.area && (
            <p className="text-2xl text-textSecondary-light dark:text-textSecondary-dark">Location: {userData.area}</p>
          )}
          {userData?.email && userData?.email.length < 25 && (
            <p className="font-semibold text-2xl text-textSecondary-light dark:text-textSecondary-dark">Email: {userData.email}</p>
          )}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl text-textPrimary-light dark:text-textPrimary-dark font-Quicksand font-bold mb-4 text-center">
            YOUR CURRENTLY LISTED ITEMS:
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
            <p className="text-1xl text-center text-orange-500 dark:text-lime-500">You haven’t posted any items yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
