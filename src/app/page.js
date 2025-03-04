"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import  {motion}  from "framer-motion";

export default function HeroSection() {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-evenly md:justify-around min-h-screen bg-black text-white p-10`}>
      {/* Left Content Section */}
      <div className="text-center md:text-left bg-transparen">
        <h1 className={`${styles.margin} text-4xl font-bold`}>Hello!</h1>
        <h2 className={`${styles.margin} text-5xl font-extrabold mt-2`}>
          I am <span className="text-green-400">Divyesh</span>
        </h2>
        <h3 className={`${styles.margin} text-3xl text-green-400 mt-2`}>Web Developer</h3>

        {/* Social Icons */}
        <div className={`${styles.margin} flex justify-center md:justify-start space-x-8 mt-4 gap-x-8`}>
          <Link href="https://www.linkedin.com/in/divyesh-voriya-810a52227" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-round.svg" alt="Linked-In" className="shadow-lg transition duration-300 hover:bg-gray-800 rounded-full hover:shadow-gray-500 py-6 mt-9 hover:scale-110  px-6"
                width={43} height={43}
              />
          </Link>
          <Link href="https://github.com/DV09developer" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="Linked-In" className="shadow-lg transition duration-300 hover:bg-gray-800 rounded-full hover:shadow-gray-500 py-6 mt-9 hover:scale-110  px-6"
                width={43} height={43}
              />
          </Link>
        </div>

        {/* Connect Me Button */}
        <motion.div
          className={`${styles.margin} ${styles.pading} inline-block mt-6 bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-lg transition duration-300 hover:bg-red-600 hover:shadow-red-500`}
          whileHover={{ scale: 1.1 }}
        >
          Connect Me
        </motion.div>
      </div>
      

      {/* Right Profile Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <motion.img
          src="/DivyeshPhoto.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-[9px_9px_9px_rgba(226,226,226,0.3)] hover:shadow-[35px_35px_20px_rgba(226,226,226,0.3)]"
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </div>
  );
}
