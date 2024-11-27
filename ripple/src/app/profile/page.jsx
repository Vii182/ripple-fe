"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { deleteItem, getItems } from "../functions/api";
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
            getUserbyUsername(user.username)
                .then((fetchedUser) => {
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
    const handleDelete = (event) => {
        deleteItem(event.target.value).then((data) => {
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
        });
    };
    if (loading) {
        return (
            <section className="min-h-screen bg-transparent">
                <Loading />
            </section>
        );
    }

    if (!user) {
        return (
            <section className="flex items-center text-textPrimary-light dark:text-textPrimary-dark font-Quicksand justify-center h-screen bg-transparent px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        YOU ARE NOT LOGGED IN
                    </h2>
                    <p className="text-3xl">
                        Please login or sign up to view your profile
                    </p>
                    <div className="mt-4 text-5xl">
                        <Link href="/login">
                            <p className="text-orange-500 text-3xl dark:text-lime-500 font-bold hover:underline mb-2">
                                Login
                            </p>
                        </Link>{" "}
                        |{" "}
                        <Link href="/signup">
                            <p className="text-orange-500 text-3xl dark:text-lime-500 font-bold hover:underline mt-2">
                                Sign Up
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4">
            <div className="max-w-4xl w-full p-12 bg-white dark:bg-border-dark rounded-lg shadow-lg mb-5">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-Quicksand font-bold text-lime-500 mb-6 text-center">
                    {user.username.toUpperCase()}&apos;S PROFILE
                </h2>
                <div className="flex flex-col items-center mb-6 font-Quicksand">
                    {userData?.avatar_url && (
                        <img
                            src={userData.avatar_url}
                            alt={`${userData.username}'s Avatar`}
                            className="w-32 h-32 rounded-full mb-4"
                        />
                    )}
                    <h2 className="font-bold text-3xl mb-5 mt-2 text-textPrimary-light dark:text-textPrimary-dark">
                        USER DETAILS
                    </h2>
                    <div className="bg-transparent border rounded-lg p-6 w-full text-center">
                        <h2 className="text-xl md:text-2xl  lg:text-4xl text-textSecondary-light dark:text-textSecondary-dark">
                            Name: {userData?.name || user.username}
                        </h2>
                        {userData?.area && (
                            <p className="text-xl md:text-2xl md:mt-2 lg:text-4xl text-textSecondary-light dark:text-textSecondary-dark">
                                Location: {userData.area}
                            </p>
                        )}
                        {userData?.username && (
                            <p className="text-xl md:text-2xl md:mt-2 lg:text-4xl md:text-2xl lg:text-4xlxl text-textSecondary-light dark:text-textSecondary-dark">
                                Username: {userData.username}
                            </p>
                        )}
                        {userData?.area && (
                            <p className="text-xl md:text-2xl md:mt-2 lg:text-4xl text-textSecondary-light dark:text-textSecondary-dark">
                                Location: {userData.area}
                            </p>
                        )}
                        {userData?.email && userData?.email.length < 15 && (
                            <p className="text-xl md:text-2xl md:mt-2 lg:text-4xl text-textSecondary-light dark:text-textSecondary-dark">
                                Email: {userData.email}
                            </p>
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
                                    {" "}
                                    <div className="justify-between">
                                        <Link
                                            href={`/items/${item.item_id}`}
                                            passHref
                                        >
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
                                        <div>
                                            <button
                                                className=" px-4 py-2 rounded-lg bg-red-500 text-textPrimary-dark disabled:opacity-50 
                  hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 mx-auto"
                                                onClick={handleDelete}
                                                value={item.item_id}
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-1xl text-center text-orange-500 dark:text-lime-500 font-Quicksand font-bold">
                            You haven&apos;t posted any items yet.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
