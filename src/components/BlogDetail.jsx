// components/BlogDetail.jsx
import { useParams } from 'react-router-dom';
import useFetch from './func/useFetch';
import './css/BlogDetail.css';
import { useNavigate } from 'react-router-dom';
const BlogDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`http://localhost:3000/api/blogs/${id}`);
    const {title, context} = data || {};
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to delete the blog');
            }
        } catch (err) {
            console.error('Error deleting blog:', err);
        }
    }
    
    return(
        <div className="blog-detail">
            {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {data === undefined && <div>Blog not found</div>}
            {data && (
                <>
                    <h1>{title}</h1>
                    <p>{context}</p>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    )
}

export default BlogDetail