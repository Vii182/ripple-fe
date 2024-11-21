import { UserProvider } from "@/context/UserContext";
import Header from "../components/Misc/Header";
import BackButton from "@/components/BackButton";
import "./globals.css";
import { LocationProvider } from "@/context/LocationContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white via-white to-lime-500">
        <LocationProvider>
        <UserProvider>
          <Header />
          <div className="h-2 bg-gradient-to-r from-bg-dark via-bg-light to-accent2 shadow-lg"></div>
          <BackButton />
          {children}
        </UserProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
