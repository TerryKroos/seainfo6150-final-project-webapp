import React, { useState }from 'react';
import styles from './Subscribe.module.css';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
const Subscribe = () => {
  
  
  const [values, setValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    telephone: '',
    gender: '',
    favSport: '',
    country: '',
  });

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleMiddleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      middleName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleTelephoneInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      telephone: event.target.value,
    }));
  };
  const handleSportChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      favSport: event.target.value,
    }));
  };

  const handleCountryChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      country: event.target.value,
    }));
  };
  const handleGenderChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      gender: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
  }
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  const emailErrorMessage = (email) => {
     if(!email){
       return "Please enter an email address";
     }
     else if(!validateEmail(email)){
       return "Please enter a valid email address";
     }
  }

  const validatePhone = (phone) =>{
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (regex.test(phone));
  }

  const phoneErrorMessage = (phone) => {
    if(!phone){
      return "Please enter a phone number";
    }
    else if(!validatePhone(phone)){
      return "Please enter a valid phone number";
    }
 }




  if(!valid){
    return (
      <div>
         <NavBar/>
         <div className={styles.flexcontainer}>
            <div className={styles.numberandemail}>
               <h1>Subscribe To Our NewsLetter</h1>
               <p><strong>Call: </strong>+1 333 333 333</p>
               <p><strong>Email: </strong>sportsblog@something.com</p>
            </div>
            <div>
               <form onSubmit={handleSubmit}>
                  <input className={styles.textInput} type="text"  name="firstName" placeholder="First Name" value={values.firstName} onChange={handleFirstNameInputChange} required/>
                  {submitted && !values.firstName && 
                  <span className={styles.error}>Please enter a first name</span>
                  }
                  <input className={styles.textInput} type="text"  name="middleName" placeholder="Middle Name" value={values.middleName} onChange={handleMiddleNameInputChange}></input>
                  <input className={styles.textInput} type="text" name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleLastNameInputChange} required></input>
                  {submitted && !values.lastName && 
                  <span className={styles.error}>Please enter a last name</span>
                  }
                  <input className={styles.textInput} type="email" name="email" placeholder="E-mail"
                     value={values.email} onChange={handleEmailInputChange} pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required></input>
                  {submitted && !validateEmail(values.email) && 
                  <span className={styles.error}>{emailErrorMessage(values.email)}</span>
                  }
                  <input className={styles.textInput} type="tel" id="phone" name="phone" placeholder="Telephone Number" value={values.telephone} onChange={handleTelephoneInputChange}></input>
                  {submitted && !validatePhone(values.phone) && 
                  <span className={styles.error}>{phoneErrorMessage(values.phone)}</span>
                  }
                  <div>
                     <label className={styles.genderlabel}>Gender</label>
                     <div className={styles.radiocontainer}>
                        <label for="Male">
                        <input className={styles.radio} type="radio" name="gender" value={"Male"} checked={values.gender === "Male"} onChange={handleGenderChange}/>
                        Male
                        </label>  
                        <label for="Female">
                        <input className={styles.radio} type="radio" name="gender" value={"Female"} checked={values.gender === "Female"} onChange={handleGenderChange}/>
                        Female
                        </label> 
                        <label for="Other">
                        <input className={styles.radio} type="radio" name="gender"  value={"Other"} checked={values.gender === "Other"} onChange={handleGenderChange}/>
                        Other
                        </label> 
                     </div>
                     {submitted && !values.gender && 
                     <p className={styles.error}>Please choose a gender</p>
                     }
                  </div>
                  <select name="country" className={styles.select} onChange={handleCountryChange} value={values.Country} >
                     <option >Country:</option>
                     <option name="country" value={"Australia"}  >Australia</option>
                     <option name="country" value={"Canada"} >Canada</option>
                     <option name="country" value={"USA"} >USA</option>
                  </select>
                  {submitted && !values.country && 
                  <p className={styles.error}>Please choose a country</p>
                  }
                  <select name="favSport" className={styles.select} onChange={handleSportChange} value={values.favSport} >
                     <option name="favSport" value="0">Favorite Sport:</option>
                     <option name="favSport" value={"BasketBall"}>BasketBall</option>
                     <option name="favSport" value={"Football"}>Football</option>
                     <option name="favSport" value={"Hockey"}>Hockey</option>
                     <option name="favSport" value={"Baseball"}>Baseball</option>
                     <option name="favSport" value={"Soccer"}>Soccer</option>
                  </select>
                  {submitted && !values.favSport && 
                  <p className={styles.error}>Please choose a sport</p>
                  }
                  <div className={styles.buttondiv}>
                     <button onClick={handleSubmit}>SUBMIT</button>
                  </div>
               </form>
            </div>
         </div>
         <Footer/>
      </div>
      );  
  }
  return(
    <div>
       <NavBar/>
       <div className={styles.container}>
          <p>Thank you {values.firstName } {values.lastName} for your subscription. Please check your email {values.email} for next steps.</p>
       </div>
       <Footer/>
    </div>
    );
  }

    

export default Subscribe;