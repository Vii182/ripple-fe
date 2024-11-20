import { UserProvider } from "@/context/UserContext";
import Header from "../components/Misc/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
  <UserProvider>
    <html lang="en">
      
        <body>
        <Header />
        <div className="h-2 bg-gradient-to-r from-bg-dark via-bg-light to-accent2 shadow-lg"></div>
        {children}
      </body>
      
    </html>
    </UserProvider>
  );
}
