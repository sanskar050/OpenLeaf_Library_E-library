import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

function submitLogin() {
  alert("Coming Soon...")
}

function Login() {

  return (
    <div className="loginForm">

      <h1>Login</h1>
      <input type="email" name="" id="" placeholder='Email' />
      <input type="password" name="" id="" placeholder='Password' />
      
      <div className="login_buttons">
        <NavLink to="/password-reset">Forget Password?</NavLink>
        <button onClick={submitLogin} type='submit'>Submit</button>
      </div>

      <div className="newAccount">
        Don't have any account? <NavLink to="/register">Create a new account</NavLink>
      </div>

    </div>
  )
}

export default Login