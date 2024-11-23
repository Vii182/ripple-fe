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
          <h1 className="font-Quicksand text-3xl text-black dark:text-textPrimary-dark indent-2 sm:mt-0 rounded-2xl font-bold">
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
