import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './Error.module.css';



const Error = () => {
    return (
        <div>
           <NavBar/>
           <div className={styles.container}>
              <h1>That page doesn't exist!</h1>
              <p>
                 Sorry, the page you were looking for could not be found. Return to Home Page 
                 <Link className={styles.link} to="/">
                 here</Link>
              </p>
           </div>
           <Footer/>
        </div>
        );
}

export default Error
