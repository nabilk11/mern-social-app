import React, { useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
// useRef hook to prevent rerendering
    const email = useRef()
    const password = useRef()
// useContext hook for auth
    const { isFetching, error, dispatch } = useContext(AuthContext)    

const handleLogin = (e) => {
    e.preventDefault()
    loginCall({email: email.current.value, password: password.current.value}, dispatch)
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
                    <button className="loginButton">
                        {isFetching ? <CircularProgress 
                        color='white' size={"34px"} /> 
                        : "Login"}
                        </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress color='white' size={"34px"}/> : "Create an Account"}</button>
                </form>

            </div>
        </div>
        
    </div>
  )
}
