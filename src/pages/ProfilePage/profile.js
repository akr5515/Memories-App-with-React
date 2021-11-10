import React,{useRef} from "react";

import useHttp from "../../hooks/use-http";
import { createPost } from "../../Api/api";

import { useSelector } from "react-redux";
import './profile.scss';

const ProfilePage=()=>{

    const {sendRequest,status}=useHttp(createPost);
    const user=useSelector(state=>state.user.username)

    console.log(user);

    const titleInputRef=useRef();
    const textInputRef=useRef();

    function submitFormHandler(event){
        event.preventDefault();
        const enteredTitle=titleInputRef.current.value;
        const enteredText=textInputRef.current.value;

        sendRequest({title:enteredTitle, content:enteredText,user: user})
        titleInputRef.current.value="";
        textInputRef.current.value="";
    }

    return(
        <div className="div-top">
            <h1>Hello, {user}.<br/> Share your memory here</h1>
            <form onSubmit={submitFormHandler} className='form'>
                <div className='list'>
                    <label htmlFor='text'>Title</label>
                    <input type="text" ref={titleInputRef}/> <br/>
                </div>

                <div className='list list2'> 
                    <label htmlFor='text'>Content</label>
                    <textarea type="text" ref={textInputRef}/> <br/>
                </div>
                
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default ProfilePage;