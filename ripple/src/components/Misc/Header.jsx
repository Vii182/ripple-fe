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
                    <h1 className="font-Quicksand text-4xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
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
