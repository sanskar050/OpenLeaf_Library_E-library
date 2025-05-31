import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.css'

function checkNewAccCreation() {
  let newEmail = document.querySelector(".newAccEmail").value
  if (!newEmail.includes("@")){
    console.log("Email should contain '@'")
  }
  else {
    createAccount();
  }
}

function createAccount() {
  alert("Coming Soon...")
}

const Register = () => {
  return (
    <div className='register'>

      <h1>Create Your Account</h1>
      <input type="email" className="newAccEmail" id="" placeholder='Email'/>
      <input type="password" name="" id="" placeholder='Password'/>
      <NavLink className="underline" to="/password-suggestion"><div className='passwordSuggestion'>Click For Password Suggestion</div></NavLink>
      <button onClick={checkNewAccCreation} type="submit" className='createAccount'>Create Account</button>
      
      <div>Already have an Account?
        <NavLink to="/login"><span> Log In</span></NavLink>
      </div>

    </div>
  )
}

export default Register