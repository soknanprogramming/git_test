import './css/BlogList.css';

const BlogList = ({title, context}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            <p>{context}</p>
        </div>
    )
}

export default BlogList;