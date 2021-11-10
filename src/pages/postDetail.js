import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedPost from '../components/HighlightedPost/HighlightedPost';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSinglePost } from '../Api/api'; 

import './postDetail.scss';

const PostDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { postId } = params;

  //console.log(postId);
  const { sendRequest, status, data: loadedPost, error } = useHttp(
    getSinglePost,
    true
  );

  useEffect(() => {
    sendRequest(postId);
  }, [sendRequest, postId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        Loading....
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }
  // console.log(loadedPost);
  if (!loadedPost.content) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>

      <HighlightedPost content={loadedPost.content} title={loadedPost.title} />
      <Route path={match.path} exact>
        <div >
          <Link to={`${match.url}/comments`} className="first-class">
            <span>Load Comments</span>
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default PostDetail;
