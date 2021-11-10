import { useRef, useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../Api/api';
// import LoadingSpinner from '../UI/LoadingSpinner';
import './NewCommentForm.scss';
import { useSelector } from 'react-redux';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const user=useSelector(state=>state.user.username);

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;
    console.log(enteredText);
    if(enteredText){
      sendRequest({ commentData: { text: enteredText,user:user  }, quoteId: props.quoteId});
    }else{
      alert("Please enter something in comment box")
    }
    commentTextRef.current.value="";
    
  };

  return (
    <form className="form" onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          Loading...
        </div>
      )}
      <div className="control" onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className="actions">
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
