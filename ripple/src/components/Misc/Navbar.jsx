import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="mb-2 sm:mb-0 font-Michroma text-text flex items-center space-x-4">
            <Link href="/" className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">
            HOME
            </Link>
            <Link href="/items" className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">
            ITEMS
            </Link>
            <Link href="/foodbanks" className="text-xs sm:text-sm transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">
            FOODBANKS
            </Link>
        </nav>
    )
}

export default Navbar;