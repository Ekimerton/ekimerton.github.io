import { Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Ekim's Portfolio",
  description: "Software Engineer - Come check my stuff out :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-neutral-950 bg-neutral-100 h-full">
            {<Navbar />}
            {children}
            {/*<Footer />*/}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
