import React from 'react';
import ArticleItemOther from "../ArticleItemOther/ArticleItemOther.jsx";
import styles from "./ArticleListOther.module.css";


const ArticleListOther = (props) => {
  
    return (
      <div className={styles.container}>
        <ul className={styles.articles}>
          {props.articles.map((article) => (
            <ArticleItemOther article={article} key={article.slug} />
          ))}
        </ul>
        </div>
    );
  };

  export default ArticleListOther;