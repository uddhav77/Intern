import React, { useEffect, useState } from 'react'
import Nav from './Component/Nav'


const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  const [errors, setErrors] = useState({})
  const [formSubmit, setFormSubmit] = useState(false)

  const handleInput=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log(formData)
  }
  
  const handleForm=(e)=>{
    e.preventDefault();
    setErrors(validateForm(formData));
    setFormSubmit(true);
  }

    const registerdata={
    firstName:formData.firstName,
    lastName:formData.lastName,
    email:formData.email,
    password:formData.password,
    Confirmpassword:formData.confirmPassword
  };
  
  
  useEffect(()=>{
    fetch ("https://rest-api-bjno.onrender.com/register" ,{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(registerdata),
    })
    .then(res=>res.json())
    .then(data =>{ 
      console.log(data)
  
    })
    console.log(errors);
    if(Object.keys(errors).length === 0  && formSubmit){
      console.log(formData);
    }
  },[errors]);

  const validateForm= () =>{
    let err = {};
    
    if(formData.firstName === ''){
      err.firstName = 'First Name Missing!'
    }
    if(formData.lastName === ''){
      err.lastName = 'Last Name Missing!'
    }
    if(formData.email === ''){
      err.email = 'Email Required!'
    }
    if(formData.password === ''){
      err.password = 'Password Required!'
    }
    else if(formData.password.length<= 4){
      err.password = 'Password length must be atleast 4!'
    }
    if(formData.confirmPassword === ''){
      err.confirmPassword = 'Password Required!'
    }
    else if(formData.confirmPassword.length<= 4){
      err.password = 'Password length must be atleast 4!'
    }
    else if(formData.confirmPassword !== formData.password){
      err.confirmPassword = 'Password and confirm password does not match'
    }

    // setErrors({...err})

    return err;
  }
  
  {useEffect(()=>{
  if(Object.keys(errors).length === 0 && formSubmit ){ 
  alert("Registred successfully!!!!!")
  }
 },[errors])}

  return (
    <>
     <Nav/>
    
    <div className='mainB'>
      <form onSubmit={handleForm}>
        <div className='containerA1'>
          <h1>
            LetsChat
          </h1>
          <p>Create your new account</p>
        </div>

        <div className='containerB1'>
          
          <div className='contBA1'>
          <input name='firstName' type="text" placeholder='First Name' className='firstname'
          onChange={handleInput} value={formData.firstName}
            />  

            <span style={{color:'red' }}>{errors.firstName}</span> 

          <input name='lastName' type="text" placeholder='Last Name' className='lastname'
          onChange={handleInput} value={formData.lastName}
            /> 

            <span style={{color:'red' }}>{errors.lastName}</span>

          </div>

          <input name='email' type="email" placeholder='Email' className='email1'
          onChange={handleInput} value={formData.email}
            /> <br />
            <span style={{color:'red' }}>{errors.email}</span> <br />
           
          <input name='password' type="password" placeholder='New Password' className='password1'
          onChange={handleInput} value={formData.password}
           /> <br />
            <span style={{color:'red' }}>{errors.password}</span> <br />

          <input name='confirmPassword' type="password" placeholder='Confirm Password' className='password2' 
          onChange={handleInput} value={formData.confirmPassword}
           /> <br />
           <span style={{color:'red' }}>{errors.confirmPassword}</span> <br />

        
        </div>

        <div className='containerC1'>
  
        <button >Register Now</button>
       
        </div>

      </form>
    </div>

  </>    
    
  )
}

export default Register
