import React from 'react'

const Register = (props) => {

//   if(password1.value !== password2.value){
//     alert('Password and Confirm Password must be same')
//     return;
//   }   
  return (
    <div>
    <div className='mainB'>
      <form >
        <div className='containerA1'>
          <h1>
            LetsChat
          </h1>
          <p>Login to your account</p>
        </div>

        <div className='cointainerB1'>
          <input name='name' type="text" placeholder='Full Name' className='username'
            required/> <br />
          <input name='email' type="email" placeholder='Email' className='email1'
            required/> <br />
           
          <input name='password1' type="password" placeholder='New Password' className='password1' 
           required/> <br />
          <input name='password2' type="password" placeholder='Confirm Password' className='password2' 
           required/>

        
        </div>

        <div className='containerC1'>
        <button type='submit' onClick={()=> props.onFormSwitch('login')}>Register</button>
        </div>

      </form>
    </div>
  </div>
      
    
  )
}

export default Register
