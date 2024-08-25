import { Inter, Playball } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ekim's Portfolio",
  description: "Software Engineer - Come check my stuff out :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Navbar />*/}
        {children}
        <Footer />
      </body>
    </html>
  );
}
