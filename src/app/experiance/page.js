import React from 'react'
import styles from "../page.module.css";

export default function page() {
  return (
    <div className={`${styles.projects} w-9/10 `}>
      <h2>Projects</h2>
      <div className={styles.projs}>
        <h3 className={styles.head}>Food Recipies</h3>
        <a href="https://vue-project-foodknowledge.vercel.app/" target="_blank" alt="" className="flex flex-col md:flex-row">
          <img src="food.png" alt="Photo" width={500} className={styles.imgs}/>
          <div className={`md:w-1/2 ${styles.projDetail}`}>
            <p className={styles.words}>
              The project is a collection of food recipies that can be used to produce meals.
              It has the taste of the different areas of the world. This project is developed by the latest technology.
              <br /> 
              <b> Vue Js - a Java-Script Framework</b> is used for the development of the project.
              This projects has features like search the recipies by name and the First letter of recipies will be in line to find the meal easily.
            </p>
          </div>
        </a>
      </div>

      <div className={styles.projs}>
        <h3 className={styles.head}>My Portfolio</h3>
        <a href="https://portfolio-omega-three-79.vercel.app" className="flex flex-col-reverse  md:flex-row">
        <div className={`md:w-1/2 ${styles.projDetail}`}>

          <p className={styles.words}>
            A modern, portfolio website showcasing my skills, projects, and experience. Built with <b>Next.js - A React Framework</b>, it offers seamless navigation, a sleek dark mode, and an engaging, interactive UI—crafted to effectively showcase my web development skills.
          </p>
          <p className={styles.words}>
            Tech Stack: Next.js, Tailwind CSS
          </p>
        </div>
        <img src="portfolio.png" alt="" width={500} className={styles.imgs}/>
        </a>
      </div>
    </div>
  )
}
