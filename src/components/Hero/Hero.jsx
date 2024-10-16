import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className ={styles.container}>
            <div className = {styles.content}>
                <h1 className={styles.title}>Hi, I'am Sakshi</h1>
                <p className={styles.description}>I am a passionate software developer skilled in C++, Java, C#, ASP.NET Core, Python,
                MySQL,and Angular. I excel at troubleshooting and delivering high-quality software, 
                with a strong work ethic and the ability to quickly master new technologies.
                </p>
                <a href="mailto:shindesakshi3000@gmail.com" 
                className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} 
            alt= "Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className = {styles.bottomBlur}/>

    </section>
};