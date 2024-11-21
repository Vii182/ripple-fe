"use client"
import { useState, useEffect, useContext } from "react";
import { LocationContext } from "@/context/LocationContext";
import ItemForm from "@/components/Items/ItemForm";


const PostItemPage = () => {
    return (
        <section>
            <div>
                <ItemForm />
            </div>
        </section>
    )
}

export default PostItemPage;