"use client"
import { useState, useEffect, useContext } from "react";
import { LocationContext } from "@/context/LocationContext";
import ItemForm from "@/components/Items/ItemForm";


const PostItemPage = () => {
    return (
        <section className="min-h-screen">
            <div>
                <ItemForm />
            </div>
        </section>
    )
}

export default PostItemPage;