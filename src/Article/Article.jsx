import React from 'react';
import styles from './Article.module.css';
import SideArticleList from '../SideArticleList/SideArticleList.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import Ronaldo from '../images/ronaldo.jpg';
import { useLocation } from "react-router-dom";

const theArticle = {
    author: "Terence Nwachi",
    headline: "Juventus miserable draw with Benevento",
    article: "Of the problems Juventus have had to work through in this early phase of the season, one of the more serious ones has been an inability to break down an opponent that has sat back to defend. Tuesday’s game against Ferencvaros was a prime example of these struggles, and, in Juve’s first league game since last weekend’s commanding performance against Cagliari, Juve again struggled to break down a determined defense — this time newly-promoted Benevento — despite having the vast majority of the possession. After breaking ahead after 20 minutes on a brilliantly worked goal, Juve gave up an equalizing goal with the last kick of the first half, then completely lost the plot in the second, producing next to nothing despite largely hemming Benevento back. Unlike midweek, when Andrea Pirlo’s changes made enough of a difference to eventually provide a last-second winner, this time the players who came off the bench couldn’t make much of an impact. That was exacerbated by the decision — which, to be fair, was a valid one at the time it was made — to leave Cristiano Ronaldo at home for rest. The result was a maddening progression of unthreatening passes made over and over as the clock ticked down, and this time there wasn’t a stoppage time hero to salvage the points. The 1-1 draw was a microcosm of all of Juve’s troubles: the inability to break down opponents, the inability to get results away from home, and the inability to take advantage of an opportunity to draw closer to the teams ahead of them in the standings."
    
}

const Article  = (props)  => {
   
    const location = useLocation();
    const myparam = location.state.params;
    return (
        <div className={styles.container}>
           <NavBar></NavBar>
           <div className={styles.articlecontainer}>
              <div className={styles.article}>
                 <h1 className={styles.header}>{myparam.heading}</h1>
                 <img className={styles.image} alt="article img" src={myparam.image} text={myparam.heading}></img>
                 <p>
                    By <strong>{myparam.author}</strong> | 
                    <date>{myparam.date}</date>
                 </p>
                 <p>
                    {theArticle.article}
                 </p>
                 <p>
                    {theArticle.article}
                 </p>
                 <p>
                    {theArticle.article}
                 </p>
              </div>
              <div className={styles.sidediv}>
                 <SideArticleList articles={props.articles.slice(0,3)}/>
              </div>
           </div>
           <Footer></Footer>
        </div>
        );
}

export default Article;