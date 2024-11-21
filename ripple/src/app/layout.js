import { UserProvider } from "@/context/UserContext";
import Header from "../components/Misc/Header";
import BackButton from "@/components/BackButton";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header />
          <BackButton />
          <div className="h-2 bg-gradient-to-r from-bg-dark via-bg-light to-accent2 shadow-lg"></div>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
