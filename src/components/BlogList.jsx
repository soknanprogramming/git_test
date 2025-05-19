import './css/BlogList.css';
import { Link } from 'react-router-dom';

const BlogList = ({blog}) => {
    const { title, context} = blog;
    return (
        <Link to={`/detail/${blog._id}` } className="blog-list">
            <div className="blog-list">
                <h1>{title}</h1>
                <p>{context}</p>
            </div>
        </Link>
    )
}

export default BlogList;