// components/AddBlog.jsx
import './css/AddBlog.css';
const AddBlog = () => {
    return (
        <div className="add-blog-container">
            <h1 className="form-title">Add Blog</h1>
            <form className="add-blog-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
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