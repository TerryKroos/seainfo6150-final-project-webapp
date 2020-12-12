import React from 'react';
import styles from "./SideArticleItem.module.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const SideArticleItem = (props)=>{

    const history = useHistory();
    const handleSubmit = () => {
        history.push('/article', {params: props.article})
    }
    return(
      <div className={styles.container} onClick={handleSubmit}>
         <img className={styles.img}src={props.article.image} alt="article img"/>
         <div className={styles.articletext}>
           <Router>
           <Link className={styles.link}>
            {props.article.heading }</Link>
           </Router>
            
         </div>
      </div>
      )
}

export default SideArticleItem;