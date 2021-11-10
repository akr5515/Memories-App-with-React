import './CommentItem.scss';

const CommentItem = (props) => {
  return (
    <li className="item">
      <h4>Comment by {props.user}</h4>
      <p>{props.text}</p>
      
    </li>
  );
};

export default CommentItem;
