"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// <<<<< SCROLL COMPONENT (APP) - SCROLLS TO TOP OF THE NEW PAGE WHEN USING LINKS >>>>> ------
const ScrollToTop = () => {
    const location = useRouter();

    // <<<<< SCROLL POSITION >>>>> ------
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

export default ScrollToTop;