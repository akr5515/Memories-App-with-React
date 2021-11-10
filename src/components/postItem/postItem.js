import React from "react";

const PostItem=(props)=>{
    console.log(props);
    return(
        <div>
            <l1>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </l1>
        </div>
    ) 
}

export default PostItem;