import Header from "../components/Misc/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="h-2 bg-gradient-to-r from-accent2 via-accent3 to-accent2 shadow-lg"></div>
        {children}
      </body>
    </html>
  );
}
