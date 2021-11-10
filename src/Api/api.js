const FIREBASE_DOMAIN='https://react-http-89e14-default-rtdb.firebaseio.com/';

export const createUser=async (userData)=>{
    const response= await fetch(`${FIREBASE_DOMAIN}/users.json`,{
        method: 'POST',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type': 'application/json',
        }
    });

    const data= await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not create user.')
    }

    return null;
}

export const createPost= async (postData) => {
    const response= await fetch(`${FIREBASE_DOMAIN}/posts.json`,{
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{
            'Content-Type': 'application/json',
        }
    });

    const data=await response.json();
    if(!response.ok){
        throw new Error(data.message|| 'Could not create post.')
    }

    return null;
}

export const getAllPost= async ()=>{
    const response= await fetch(`${FIREBASE_DOMAIN}/posts.json`);
    const data= await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch posts');
    }

    const transformedPosts=[];

    for(const key in data){
        const postObj={
            id: key,
            ...data[key],
        };

        transformedPosts.push(postObj);
    }
    return transformedPosts;
}

export const getAllUser= async ()=>{
    const response= await fetch(`${FIREBASE_DOMAIN}/users.json`);
    const data= await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch posts');
    }

    const transformedPosts=[];

    for(const key in data){
        const postObj={
            id: key,
            ...data[key],
        };

        transformedPosts.push(postObj);
    }
    return transformedPosts;
}

//comments part

export async function getSinglePost(postId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/posts/${postId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: postId,
    ...data,
  };

  return loadedQuote;
}


export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
