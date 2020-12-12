import React from 'react';
import styles from "./AboutItem.module.css";
import ronaldo from "../images/ronaldo.jpg";


const AboutItem = (props)=>{
    return(
      <div className={styles.container}>
         <img src={ronaldo} alt="ronaldopic"/>
         <div className={styles.abouttext}>
            <h4>{props.name}</h4>
            <p className={styles.paragraph}>{props.role}</p>
         </div>
      </div>
      )
}

export default AboutItem;