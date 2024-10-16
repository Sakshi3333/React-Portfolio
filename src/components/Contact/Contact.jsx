import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";
export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>
                Feel free to reach out!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}> 
                <img src={getImageUrl("contact/emailIcon.png")} alt ="Email Icon" />
                <a href="mailto:shindesakshi3000@gmail.com">shindesakshi3000@gmail.com</a>
            </li>
            <li className={styles.link}> 
                <img src={getImageUrl("contact/linkedinIcon.png")} alt ="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/sakshishinde3/.com">linkedin.com/SakshiShinde3</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt ="Github Icon" />
                <a href="https://github.com/Sakshi3333">github.com/Sakshi3333</a>
            </li>
        </ul>
    </footer>;
};