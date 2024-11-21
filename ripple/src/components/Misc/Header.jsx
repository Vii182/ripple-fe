import Navbar from "./Navbar";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
  })

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between h-24 bg-gray-100 px-5 shadow-lg">
            <div>
                <h1 className="font-Quicksand text-3xl text-black indent-2 mt-5 sm:mt-0 rounded-2xl font-bold">RIPPLE</h1>
            </div>
            <div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;