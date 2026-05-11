import { Open_Sans, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";

const openSans = Open_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Ekim's Portfolio",
  description: "Software Engineer - Come check my stuff out :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${caveat.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-stone-950 bg-stone-100 h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-1 min-h-0 overflow-y-auto">
              {children}
            </div>
            {/*<Footer />*/}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
