import Navbar from "./Navbar";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Header = () => {
    return (
        <header className="flex flex-row sm:flex-row items-center justify-between h-24 bg-gray-100 px-5 dark:bg-bg-dark shadow-lg">
            <div>
                <Link href="/" className="text-decoration-none">
                    <h1 className="font-Quicksand text-black text-4xl font-bold bg-gradient-to-r from-lime-300 via-lime-500 to-lime-300 dark:from-lime-200 dark:via-lime-500 dark:to-lime-200 bg-[length:200%_auto] bg-clip-text text-textPrimary-light dark:text-textPrimary-dark hover:text-transparent dark:hover:text-transparent hover:animate-text-gradient dark:hover:animate-text-gradient transition-colors duration-300">
                        RIPPLE
                    </h1>
                </Link>
            </div>
            <div>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
