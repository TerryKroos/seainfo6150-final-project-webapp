import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import AboutItem from '../AboutItem/AboutItem.jsx';
import AboutImage from '../AboutImage/AboutImage.jsx';
import styles from './About.module.css';


const aboutItems = [
    {
        name:"Terence Nwachi",
        role: "Software Engineer",
        slug: 1
    },
    {
        name:"Tony Stark",
        role: "Iron Man",
        slug: 2
    },
    {
        name:"Steve Rodgers",
        role: "Captain America",
        slug: 3
    },
    {
        name:"Bruce Banner",
        role: "The Hulk",
        slug: 4
    },
    {
        name:"Peter Parker",
        role: "Spiderman",
        slug: 5
    },
    {
        name:"Danny Rand",
        role: "Iron Fist",
        slug: 6
    },
]

const About = () => {
    return(
<div>
   <NavBar/>
   <AboutImage/>
   <div>
      <div>
         <p className={styles.paragraph}>Chattanooga has been called the "Dynamo of Dixie" and has a rich history of entrepreneurship and philanthropy. Chattanooga is on a roll with the recent string of billion dollar investments in the area by multi-national companies such as Alstom, Volkswagen, Wacker and Amazon. Coupled with the rich technological environment including the computational Simulation Center at UTC and the EPB powered citywide gigabit fiber network, Chattanooga is poised for growth. The only missing piece was a formalized network of capital and mentors to encourage, support and sustain the next wave of entrepreneurs. The Chattanooga Renaissance Fund seeks to fill that need.
            Each member of CRF brings a level of expertise and experience invaluable to the longevity and growth of the fund.
         </p>
         <ul className={styles.container}>
            {aboutItems.map((item) => (
            <AboutItem name={item.name} role={item.role} key={item.slug} />
            ))}
         </ul>
      </div>
   </div>
   <Footer/>
</div>

    )
}

export default About;
