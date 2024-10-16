import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className ={styles.container}>
            <div className = {styles.content}>
                <h1 className={styles.title}>Hi, I'am Sakshi</h1>
                <p className={styles.description}> I am fullstack developer with 1 years of experience with 
                    Angular and React. Reach out if you'd like to learn more!
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