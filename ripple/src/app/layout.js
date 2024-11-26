import { UserProvider } from "@/context/UserContext";
import Header from "../components/Misc/Header";
import BackButton from "@/components/BackButton";
import "./globals.css";
import { LocationProvider } from "@/context/LocationContext";
import ScrollToTop from "@/components/Misc/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-900 dark:text-gray-200 bg-white text-gray-800">
      <body>
        <LocationProvider>
          <UserProvider>
            <ScrollToTop />
            <Header />
            <div className="bg-gradient-to-b from-white via-lime-500 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
              <div className="h-2 bg-gradient-to-r from-white to-lime-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-xl"></div>
              <BackButton />
              {children}
            </div>
          </UserProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
