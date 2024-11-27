import { Quicksand } from "next/font/google";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Footer = () => {
    return (
        <footer className=" h-full bg-gray-100 px-5 dark:bg-bg-dark ">
            <div className="margin-leftcontainer flex flex-col py-5 lg:flex-row justify-between items-center mx-auto font-bold text-textPrimary-light dark:text-textPrimary-dark">
                <div className="text-center hidden lg:block">
                    <p>&#169;404Squad</p>
                    <Link href={"https://www.givefood.org.uk/"}>
                        <u>Food bank data API</u>
                    </Link>
                </div>
                <div className="flex space-x-4 mt-4  md:mt-0 lg:mr-4 items-center">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/items" className="hover:underline">
                        Items
                    </Link>
                    <Link href="/foodbanks" className="hover:underline">
                        Food banks
                    </Link>
                    <Link href="/profile" className="hover:underline">
                        Profile
                    </Link>
                </div>
                <div className="flex  space-x-4 mt-4  md:mt-0">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className="hover:scale-110"
                    >
                        {" "}
                        <FaFacebookSquare size={25} />{" "}
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="hover:scale-110"
                    >
                        {" "}
                        <FaInstagram size={25} />{" "}
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="hover:scale-110"
                    >
                        {" "}
                        <FaXTwitter size={25} />
                    </a>
                </div>
                <div className="text-center  lg:hidden  mt-4">
                    <p>&#169;404Squad</p>
                    <Link href={"https://www.givefood.org.uk/"}>
                        <u>Food bank data API</u>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
