import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
    return(
        <footer>
           <ul>
            
              <li>
                 <Link to="/about" className={styles.link}>
                 About</Link>
                 
              </li>
              <li>
                 <Link to="/subscribe" className={styles.link}>
                 Subscribe</Link>
              </li>
              <li>
                 <Link to="/privacy" className={styles.link}>
                 Privacy</Link>
              </li>
           </ul>
        </footer>
        );
}

export default Footer;