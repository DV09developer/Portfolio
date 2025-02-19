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
          <ul className={`bg-black ${styles.navlist}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="myself">My Self</Link></li>
            <li><Link href="experiance">Experiance</Link></li>
          </ul>
        </main>
        {/* <div className="absolute top-1/2 left-1/2 -z-1 transform -translate-x-1/2 -translate-y-1/2"> */}
          {/* <img src="MovingPhoto.png" alt="Rotating"  width={171} className={`${styles.trident}`}/> */}
        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
