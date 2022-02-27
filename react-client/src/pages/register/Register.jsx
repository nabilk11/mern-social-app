import React, { useRef } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
// useRef hook to prevent rerendering
const username = useRef();
const email = useRef();
const password = useRef();
const passwordConfirm = useRef();
// useNavigate to direct user after signup
const navigate = useNavigate();

const handleRegister = async (e) => {
e.preventDefault()
if (passwordConfirm.current.value !== password.current.value) {
    password.current.setCustomValidity("Passwords do not match!")
} else {
    const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
    }
    try {
        await axios.post("/auth/register", user)
        navigate("/login")

    } catch (err) {
       console.log(err) 
    }
}
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
                <form className="loginBox" onSubmit={handleRegister} >
                    <input placeholder="Username" className="loginInput" ref={username} required />
                    <input placeholder="Email" className="loginInput" ref={email} type="email" required />
                    <input placeholder="Password" className="loginInput" ref={password} minLength={6} type="password" required />
                    <input placeholder="Confirm Password" className="loginInput" ref={passwordConfirm} minLength={6} type="password" required />
                    <button className="loginButton" type='submit' >Sign Up</button>
                    <button className="loginRegisterButton">Login to Existing Account</button>
                </form>

            </div>
        </div>
        
    </div>
  )
}
