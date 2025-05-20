// components/AddBlog.jsx
import './css/AddBlog.css';
import { useNavigate } from 'react-router-dom';
const AddBlog = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const context = event.target.context.value;

        const createBlog = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/blogs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, context })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Blog created successfully:', data);
            } catch (error) {
                console.error('Error creating blog:', error);
            }
        }
        createBlog();
        navigate('/');
    };
    return (
        <div className="add-blog-container">
            <h1 className="form-title">Add Blog</h1>
            <form className="add-blog-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="context">Context:</label>
                    <textarea
                        id="context"
                        name="context"
                        required
                        rows="1"
                        onInput={e => {
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Add Blog</button>
            </form>
        </div>
    );
}

export default AddBlog;