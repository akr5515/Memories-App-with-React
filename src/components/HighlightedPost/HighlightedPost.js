import classes from './HighlightedPost.scss';

const HighlightedPost = (props) => {
  return (
    <figure className={classes.quote}>
      <h1>{props.title}</h1>
      <figcaption>{props.content}</figcaption>
    </figure>
  );
};

export default HighlightedPost;
