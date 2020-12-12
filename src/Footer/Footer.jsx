import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
    return(
        <footer>
           <ul>
            
              <li>
                 <Router>
                 <Link to="/about" className={styles.link}>
                 About</Link>
                 </Router>
                 
              </li>
              <li>
              <Router>
                 <Link to="/subscribe" className={styles.link}>
                 Subscribe</Link>
                 </Router>
              </li>
              <li>
              <Router>
                 <Link to="/privacy" className={styles.link}>
                 Privacy</Link>
                 </Router>
              </li>
           </ul>
        </footer>
        );
}

export default Footer;