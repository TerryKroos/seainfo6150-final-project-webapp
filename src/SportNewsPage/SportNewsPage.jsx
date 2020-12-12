import React from 'react'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ArticleListOther from "../ArticleListOther/ArticleListOther.jsx";


const SportNewsPage = (props) => {
    return (
       <div >
        <NavBar/>
        <ArticleListOther articles={props.articles}/>
        <Footer/>
       </div>
    );
}

export default SportNewsPage;