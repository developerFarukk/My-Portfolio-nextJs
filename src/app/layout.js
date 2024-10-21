import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Sheard/Navbar";
import Footer from "@/components/Sheard/Footer";
import MouseCursor from "@/components/Sheard/MouseCursor/MouseCursor";
import MouseCursorTwo from "@/components/Sheard/MouseCursor/MouseCursorTwo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OMAR FARUK",
  description: "Generated My Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar></Navbar>
          {children}
          <MouseCursor />
          <MouseCursorTwo />
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
