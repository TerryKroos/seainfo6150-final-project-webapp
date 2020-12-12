import React from 'react';
import styles from "./ArticleItemOther.module.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const ArticleItemOther = (props)=>{
    
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/article', {params: props.article})
    }
    return(
        <div className={styles.container} onClick={handleSubmit}>
           <div className={styles.imagediv}>
              <img className ={styles.image}src={props.article.image} alt="article img"/>
           </div>
           <div className={styles.articletext}>
               <Router>
              <Link className={styles.link}>
              {props.article.heading}</Link>
              </Router>
              <time datetime="2018-11-22">{props.article.date}</time>
           </div>
        </div>
        );
}

export default ArticleItemOther;