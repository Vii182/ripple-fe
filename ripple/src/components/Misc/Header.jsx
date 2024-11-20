import Navbar from "./Navbar";
import { Michroma } from 'next/font/google';

const michroma = Michroma({
    subsets: ['latin'],
    weight: ['400'],
  })

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between h-24 bg-gray-100 px-5 shadow-lg">
            <div>
                <h1 className="font-Michroma text-3xl indent-2 mt-5 sm:mt-0 rounded-2xl font-bold">RIPPLE</h1>
            </div>
            <div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;