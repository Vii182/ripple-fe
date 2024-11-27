import giving from "../../../public/giving.jpg";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export default function DecoratedImage() {
    const { user } = useContext(UserContext);
    return (
      <div className="relative mt-1 mb-5 mx-auto w-[90%] max-h-[500px] overflow-hidden rounded-lg shadow-xl">
        <Image
          src={giving}
          alt="Giving back to the community"
          className="responsive w-full h-[300px] object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        {user ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Browse for food banks near you
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-2">
              Find local food banks to access resources and contribute to your community.
            </p>
            <Link href="/foodbanks">
              <p className="mt-4 inline-block bg-lime-500 text-white font-semibold py-2 px-6 rounded hover:bg-lime-600 transition-all">
                Find Food Banks
              </p>
            </Link>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
             Don&apos;t have an account?
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-2">
              Sign up now to start contributing to the community and make a difference!
            </p>
            <Link href="/signup">
              <p className="mt-4 inline-block bg-lime-500 text-white font-semibold py-2 px-6 rounded hover:bg-lime-600 transition-all">
                Sign Up Now
              </p>
            </Link>
          </>
        )}
      </div>
      </div>
    );
  }