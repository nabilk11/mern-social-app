import React from 'react';
import './register.css';

export default function Register() {
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
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login to Existing Account</button>
                </div>

            </div>
        </div>
        
    </div>
  )
}
