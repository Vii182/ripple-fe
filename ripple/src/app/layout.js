import { UserProvider } from "@/context/UserContext";
import Header from "../components/Misc/Header";
import BackButton from "@/components/BackButton";
import "./globals.css";
import { LocationProvider } from "@/context/LocationContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocationProvider>
          <UserProvider>
            <Header />
            <div className="bg-gradient-to-b from-white via-lime-500 to-white">
              <div className="h-2 bg-gradient-to-r from-bg-dark via-bg-light to-accent2 shadow-lg"></div>
              <BackButton />
              {children}
            </div>
          </UserProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
