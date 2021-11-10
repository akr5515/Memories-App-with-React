import { Link } from 'react-router-dom';

import './BlogList.scss';

const BlogList = ({ blogs }) => {
    console.log(blogs);
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h4>posted by:{blog.user}</h4>
                    <p>{blog.title}</p>
                    <hr/>
                    <Link className='btn' to={`/others/${blog.id}`}>
                        <h3>View Content</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;