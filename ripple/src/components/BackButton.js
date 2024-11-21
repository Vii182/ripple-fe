"use client";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="bg-transparent">
      <button onClick={() => router.back()}>
        {" "}
        <ArrowBigLeft className="w-10 h-10 ml-5 mt-3 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-orange-600" />
      </button>
    </div>
  );
}
