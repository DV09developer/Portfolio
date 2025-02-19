import Link from 'next/link';
import '@/app/globals.css';
import styles from "./myself.module.css";
// import style from "../page.module.css";

export default function page() {
  return (
    <div className={` ${styles.myself}`}>
      <div className={`rounded-2xl w-3/4  ${styles.div}`}>
        <h2 className={`text-center text-3xl font-bold px-16 ${styles.padding}`} >Education</h2>

        <div className="1012 flex justify-around">

          <div className={`std ${styles.div}`}>
            <h3 className="text-blue-600/75 dark:text-sky-400/75 text-xl font-italic">10th Standard</h3>
            <h5>72.5%</h5>
            {/* <p>I complete my 10th standard in 2018 with an 72.5%</p> */}
          </div>

          <div className={`std ${styles.div}`}>
            <h3 className='text-blue-600/75 dark:text-sky-400/75 text-xl font-italic'>12th Standard</h3>
            <h5>67.57%</h5>
            {/* <p>I complete my 12th standard in 2020 with an 67.5%</p> */}
          </div>
        </div>

        <div className={`rounded-2xl justify-center ${styles.div} ${styles.paddingbottom}`}>
          <h3 className='text-blue-600/75 dark:text-sky-400/75 text-xl font-italic text-center'>Bachlor Of Engineering in Computer Engineering</h3>
          <h5 className='text-center'>6.91 CGPA</h5>
          <h5 className='text-center'>S.V.I.T. ,Vasad from Gujrat Technological University</h5>
          {/* <p>I complete my Computer Engineering in 2024 with an 6.91 CGPA and 7.11 CPI</p>  */}
        </div>
      </div>

      <div className={`rounded-2xl w-3/4 ${styles.div}`}>
        <h2 className={`text-center text-3xl font-bold px-16 ${styles.padding}`}>Skills</h2> 
        {/* <h3>Tech-Stack</h3> */}
        <ul className={`flex justify-center flex-wrap gap-x-8 gap-y-8 ${styles.padding}`}>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
              <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                  NEXT.js
                  </span>
                <img className='w-[90px]' src="nextjs-svgrepo-com.svg" alt="" />
              </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
            <Link href="https://vuejs.org/guide/introduction" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                VUE.js
                </span>
              <img  src="vue-9-logo-svgrepo-com.svg" alt="" width={90} />
            </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
              <Link href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                Java-Script
                </span>
              <img src="javascript-svgrepo-com.svg" alt="" width={90} />
              </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
            <Link href="https://html.com/" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                HTML
              </span>
              <img src="html-5-svgrepo-com.svg" alt="" width={90} />
            </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                CSS
                </span>
              <img src="css-3-svgrepo-com.svg" alt="" width={90} />
              </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
              <Link href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                PHP
                </span>
              <img src="php-svgrepo-com.svg" alt="" width={90} />
              </Link>
            </li>


            <li className={`bg-[#505050] group relative transition-transform duration-500 ease-in-out hover:bg-[#b1b1b1] hover:scale-110  hover:shadow-red-500 p-2 rounded-lg ${styles.pading}`}>
              <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <span className="absolute opacity-0 group-hover:opacity-100 text-white text-sm bg-gray-800 p-1 rounded -top-6 left-1/2 transform -translate-x-1/2">
                Python
                </span>
              <img src="python-svgrepo-com.svg" alt="" width={90} />
              </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}
