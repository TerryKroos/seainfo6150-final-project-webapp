import React from 'react';
import ArticleItem from "../ArticleItem/ArticleItem";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
    
    return (
      <div>
        <ul className={styles.container}>
          {props.articles.map((article) => (
            <ArticleItem article={article} key={article.slug} />
          ))}
        </ul>
      </div>
    );
  };

  export default ArticleList;