// components/BlogDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/BlogDetail.css';
const BlogDetail = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const {title, context} = data || {};
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs/${id}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)})
        .catch(err => console.log(err))
        }, [id])
    
    return(
        <div className="blog-detail">
            {data === null && <div>Loading...</div>}
            {data === undefined && <div>Blog not found</div>}
            {data && (
                <>
                    <h1>{title}</h1>
                    <p>{context}</p>
                </>
            )}
        </div>
    )
}

export default BlogDetail