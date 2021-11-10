import React from "react";
import { Fragment } from "react";
import PostItem from "../postItem/postItem";

const PostList=(props)=>{
    console.log(1);
    return(
        <div>
            <h1>Heloo</h1>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <hr/>
                </div>
    ) 
}

export default PostList;