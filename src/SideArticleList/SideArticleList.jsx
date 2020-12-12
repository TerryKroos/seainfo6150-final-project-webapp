import React from 'react';
import SideArticleItem from "../SideArticleItem/SideArticleItem.jsx";
import styles from "./SideArticleList.module.css";

const SideArticleList = (props) => {
  
    return (
      <div>
        <ul className={styles.container}>
            
            {props.articles.map((article) => (
              <SideArticleItem article={article} key={article.slug} />
            ))}
          </ul>
      </div>
    );
  };

  export default SideArticleList;