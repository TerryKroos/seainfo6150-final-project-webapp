import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav>
           <ul>
              <li >The Sports Blog</li>
              <li>
                  <Router>
                  <Link className={styles.link} to="/">
                 HOME</Link>
                  </Router>
              </li>
              <li>
              <Router>
                  <Link className={styles.link} to="/nba">
                      NBA
                 </Link>
                  </Router>
              </li>
              <li>
              <Router>
                  <Link className={styles.link} to="/nfl">
                 NFL</Link>
                  </Router>
              </li>
              <li>
              <Router>
                  <Link className={styles.link} to="/nhl">
                 NHL</Link>
                  </Router>
              </li>
              <li>
              <Router>
                  <Link className={styles.link} to="/mbl">
                 MBL</Link>
                  </Router>
              </li>
              <li>
              <Router>
                  <Link className={styles.link} to="/soccer">
                 SOCCER</Link>
                  </Router>
              </li>
           </ul>
        </nav>
        )
}

export default NavBar;