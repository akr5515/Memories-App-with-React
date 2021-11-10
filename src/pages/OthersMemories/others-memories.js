import React,{useEffect} from "react";
import { Fragment } from "react";
import { getAllPost } from "../../Api/api";
import PostList from "../../components/postList/postList";
import useHttp from '../../hooks/use-http';

import Card from "../../UI/Card/Card";
import BlogList from "../../components/List-item/BlogList";
const OthersMemories=()=>{
    const {sendRequest, status, data: loadedPosts,  error}=useHttp(
        getAllPost,
        true
    )
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if (status === 'pending') {
    return (
      <div className='centered'>
        <p>Loading...</p>
      </div>
    );
  }

    if(error){
        return <p>{error}</p>
    }
    if (status === 'completed' && (!loadedPosts || loadedPosts.length === 0)) {
    return <p>No posts found</p>
  }

    console.log(loadedPosts[0]);

    return(
    <Card >
      <div className="others">
      <h1>Posts added by All</h1>
      {loadedPosts && <BlogList blogs={loadedPosts} />}
      </div>
    </Card>
    )
}

export default OthersMemories;