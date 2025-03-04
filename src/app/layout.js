import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Divyesh Voriya",
  description: "The Good development career is thriving by the innovation and i am at right place at my career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="z-100 fixed top-0 flex justify-center w-full h-[50px] ">
          <ul className={`bg-black md:text-xl text-sm ${styles.navlist}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="myself">My Self</Link></li>
            <li><Link href="experiance">Experiance</Link></li>
          </ul>
        </main>
        {children}
      </body>
    </html>
  );
}
