import './App.css';
import {React, useState} from 'react';

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [success, setSuccess] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // useEffect(() => {
  //   setValues({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   })
  //   setSuccess(false)
  //   setSubmitted(false)
  // })

  const handleFirstNameInputChange = (event) =>{
    setValues({...values, firstName: event.target.value})
    setSuccess(false)
  }

  const handleLastNameInputChange = (event) =>{
    setValues({...values, lastName: event.target.value})
    setSuccess(false)
  }

  const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(values.firstName && values.lastName && values.email) {
      setSuccess(true)
    }
    setSubmitted(true)
    console.log(values)
    
  }
   
   return (

    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {success ? <div className="success-message">Success! Thank you for registering.</div> : null}
      <input
      onChange={handleFirstNameInputChange}
      value={values.firstName}
      className="form-field" 
      placeholder="First Name"
      name="firstName" />
      {submitted && !values.firstName ? <span>Please enter first name</span> : null}
      
      <input
      onChange={handleLastNameInputChange} 
      value={values.lastName}
      className="form-field" 
      placeholder="Last Name"
      name="lastName"/>
      {submitted && !values.lastName ? <span>Please enter last name</span> : null}
      <input 
      onChange={handleEmailInputChange}
      value={values.email}
      className="form-field" 
      placeholder="Email"
      name="email"/>
      {submitted && !values.email ? <span>Please enter email</span> : null}
      <button 
      className="form-field"
      >Register</button>
      </form>
    </div>
  );
}
