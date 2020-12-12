import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav>
           <ul>
              <li >The Sports Blog</li>
              <li>
                  
                  <Link className={styles.link} to="/">
                 HOME</Link>
            
              </li>
              <li>
    
                  <Link className={styles.link} to="/nba">
                      NBA
                 </Link>
            
              </li>
              <li>
        
                  <Link className={styles.link} to="/nfl">
                 NFL</Link>
        
              </li>
              <li>
        
                  <Link className={styles.link} to="/nhl">
                 NHL</Link>
            
              </li>
              <li>
        
                  <Link className={styles.link} to="/mbl">
                 MBL</Link>
                
              </li>
              <li>
        
                  <Link className={styles.link} to="/soccer">
                 SOCCER</Link>
        
              </li>
           </ul>
        </nav>
        )
}

export default NavBar;