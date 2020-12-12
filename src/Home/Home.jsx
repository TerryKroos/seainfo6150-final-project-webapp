import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ArticleList from "../ArticleList/ArticleList";
import styles from "./Home.module.css";

const articles = [
    { heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 1,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 2,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 3,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 4,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 5,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 6,
},{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
author: "Danny Rand",
date: "November 20th 2020",
slug: 7,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 8,
},
{ heading:"Ronaldo Scores Brace As Juventus defeat Cagliari",
      author: "Danny Rand",
      date: "November 20th 2020",
      slug: 9,
}

]

const Home = (props) => {
    return (
        <div className={styles.container}>
           <NavBar></NavBar>
           <ArticleList articles={props.articles}/>
           <Footer></Footer>
        </div>
    )
}

export default Home;
