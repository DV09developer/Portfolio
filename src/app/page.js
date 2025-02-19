"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// export default function Home() {
//   return (
//     <main className={styles.home}>
//       {/* <ul className={styles.navlist}>
//         <li>Home</li>
//         <li>My Self</li>
//         <li>Services</li>
//         <li>Expertice</li>
//       </ul> */}
//       <div className={styles.left}>
//         <div className={styles.centerleft}>
//         <p className={styles.intro}>Hello!</p>
//           <h2 className={styles.intro}>I am</h2>  
//           <h2 className={styles.name}> Divyesh</h2>
//         <h3 className={styles.designation}>Web Developer</h3>
//         <ul className={styles.linklist}>
//           <li>
//             <Link href="https://www.linkedin.com/in/divyesh-voriya-810a52227" target="_blank" rel="noopener noreferrer">
//               <img src="/linkedin-round.svg" alt="Linked-In" 
//                 width={43} height={43}
//               />
//             </Link>
//           </li>
//           <li>
//             <a href="https://github.com/DV09developer" target="_blank" rel="noopener noreferrer">
//               <img src="github.png" alt="" width={40} height={40}/>
//             </a>
//           </li>
//           {/* <li>Githhub</li> */}
//         </ul>
//         <button className={styles.connect}>
//           <Link rel="stylesheet" href="" >
//             Connect Me
//           </Link>
//         </button>
//         </div>
//       </div>


//       <div className={styles.right}>
//         <img src="/DivyeshPhoto.jpg" alt="My-Photo" 
//           className={styles.photo}
//           // height={450}
//           width={450} 
//         />
//       </div>
//     </main>
//     // <main className={styles.main}>
//     //   <div className={styles.description}>
//     //     <p>
//     //       Get started by editing&nbsp;
//     //       <code className={styles.code}>src/app/page.js</code>
//     //     </p>
//     //     <div>
//     //       <a
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         By{" "}
//     //         <Image
//     //           src="/vercel.svg"
//     //           alt="Vercel Logo"
//     //           className={styles.vercelLogo}
//     //           width={100}
//     //           height={24}
//     //           priority
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>

//     //   <div className={styles.center}>
//     //     <Image
//     //       className={styles.logo}
//     //       src="/next.svg"
//     //       alt="Next.js Logo"
//     //       width={180}
//     //       height={37}
//     //       priority
//     //     />
//     //   </div>

//     //   <div className={styles.grid}>
//     //     <a
//     //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2>
//     //         Docs <span>-&gt;</span>
//     //       </h2>
//     //       <p>Find in-depth information about Next.js features and API.</p>
//     //     </a>

//     //     <a
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2>
//     //         Learn <span>-&gt;</span>
//     //       </h2>
//     //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2>
//     //         Templates <span>-&gt;</span>
//     //       </h2>
//     //       <p>Explore starter templates for Next.js.</p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className={styles.card}
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2>
//     //         Deploy <span>-&gt;</span>
//     //       </h2>
//     //       <p>
//     //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//     //       </p>
//     //     </a>
//     //   </div>
//     // </main>
//   );
// }

import  {motion}  from "framer-motion";

export default function HeroSection() {
  return (
    <div className={`flex bg-transparent flex-col md:flex-row items-center justify-around min-h-screen bg-black text-white p-10`}>
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
          {/* <a href="#" className="text-blue-400 text-3xl hover:text-blue-500">🔗</a> */}
          {/* <a href="#" className="text-gray-400 text-3xl hover:text-gray-500">🐙</a> */}
        </div>

        {/* Connect Me Button */}
        <motion.div
          // href="#"
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
          // alt="Divyesh Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-[9px_9px_9px_rgba(226,226,226,0.3)] hover:shadow-[35px_35px_20px_rgba(226,226,226,0.3)]"
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </div>
  );
}
