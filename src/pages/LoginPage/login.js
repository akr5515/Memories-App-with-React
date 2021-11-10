import React,{useEffect,useRef} from "react";
import { useHistory } from "react-router-dom";

//for redux
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import { getAllUser } from "../../Api/api";
import useHttp from "../../hooks/use-http";

import './login.scss';
import { userActions } from "../../store/username";

const LoginPage=()=>{
    const dispatch=useDispatch();

    let loginStatus=false;
    const history=useHistory();
    const {sendRequest, status, data: loadedUsers,  error}=useHttp(
        getAllUser,
        true
    )
    useEffect(()=>{
        sendRequest();
    },[]);

    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    function submitFormHandler(event){
        event.preventDefault();
        let chk=false;
        let realPass="";
        let realUser="";
        const enteredEmail= emailInputRef.current.value;
        const enteredPassword= passwordInputRef.current.value;
        if(loadedUsers){
            for(let user of loadedUsers){
                // console.log(user.useremail);
                if(user.useremail===enteredEmail){
                    chk=true;
                    realPass=user.userpassword;
                    realUser=user.username;
                    break;
                }
            }
        }

        console.log(realUser);
        if(chk){
            console.log("Email matched "+realPass);
            if(enteredPassword===realPass){
                console.log("login success");

                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('username', `${realUser}`);
                dispatch(authActions.login());
                dispatch(userActions.setUser(realUser));
                history.push('/home');
            }else{
                alert("Password don't match")
                console.log("password dont match")
            }
        }else{
            alert("Email does not exist. Please Register First")
            console.log("NOOOOOOOO");
        }

        //sendRequest({username: enteredName,useremail: enteredEmail,userpassword:enteredPassword})
    }
    // function gotoHome(){
    //     console.log("called")
    //     return( <Redirect to="/home"/>)
    // }
    console.log(loginStatus);

    return(
        <div className="login">
            <div>
                <h1>This is Login page</h1>
            </div>
            

            <form onSubmit={submitFormHandler} className='login-form'>
                <div>
                <label htmlFor='email'><h3>E-mail</h3></label>
                <input type='email' ref={emailInputRef}/>
                </div>
                <div>
                <label htmlFor='password'><h3>Password</h3></label>
                <input type='password' ref={passwordInputRef} />
                </div>
                
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;