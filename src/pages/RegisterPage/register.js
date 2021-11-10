import React, { useRef } from "react";

import useHttp from "../../hooks/use-http";
import { createUser } from "../../Api/api";
import { useHistory } from "react-router";

//redux
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import './register.scss';
import { userActions } from "../../store/username";
const RegisterPage=()=>{
    const {sendRequest,status}=useHttp(createUser);
    const history= useHistory();
    const dispatch= useDispatch();
    
    const nameInputRef=useRef();
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    function submitFormHandler(event){
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const enteredEmail= emailInputRef.current.value;
        const enteredPassword= passwordInputRef.current.value;

        sendRequest({username: enteredName,useremail: enteredEmail,userpassword:enteredPassword});
        localStorage.setItem('username', `${enteredName}`);
        localStorage.setItem('isLoggedIn', '1');
        dispatch(authActions.login());
        dispatch(userActions.setUser(enteredName));
        history.push('/profile');
    }
    return(
        <div className="register">
            <h1>This is Register page</h1>

            <form onSubmit={submitFormHandler} className="register-form">
                <div>
                    <label htmlFor='text'><h3>Name</h3></label>
                    <input type='text' ref={nameInputRef}/>

                </div>
                <div>
                    <label htmlFor='email'><h3>E-mail</h3></label>
                    <input type='email' ref={emailInputRef}/>
                
                </div>
                <div>
                <label htmlFor='password'><h3>Password</h3></label>
                <input type='password' ref={passwordInputRef} />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;