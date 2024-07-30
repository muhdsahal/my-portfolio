import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sahalshalu830@gmail.com">Connect Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/muhammed-sahal-p-81a880214/">Connect Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/muhdsahal/">Follow Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/wslogo.gif")} alt="WhatsApp icon" />
          <a href="https://wa.me/919946840416">Connect Whatsapp</a>
        </li>
      </ul>
    </footer>
  );
};
