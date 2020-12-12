import React from 'react';
import styles from "./ArticleItem.module.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const ArticleItem = (props)=>{

    const history = useHistory();
    const handleSubmit = () => {
        history.push('/article', {params: props.article})
    }
    return(
        <div className={styles.container} onClick={() =>
           {handleSubmit()}}>
           <img src={props.article.image} alt="article img"/>
           <div className={styles.articletext}>
              <time datetime="2018-11-22">{props.article.date}</time>
              <Link className={styles.link}>
              {props.article.heading}</Link>
           </div>
        </div>
        );
}

export default ArticleItem;