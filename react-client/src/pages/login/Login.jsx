import React, { useRef } from 'react';
import './login.css';

export default function Login() {
// useRef hook to prevent rerendering
    const email = useRef()
    const password = useRef()

const handleLogin = (e) => {
    e.preventDefault()
    console.log("clicked")
}

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">nabBook.</h3>
                <span className="loginDesc">
                    Connect with friends, and make new ones, with nabBook.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleLogin} >
                    <input type='email' placeholder="Email" 
                    className="loginInput" ref={email} required />
                    <input type="password" placeholder="Password" 
                    className="loginInput" ref={password} required />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>

            </div>
        </div>
        
    </div>
  )
}
