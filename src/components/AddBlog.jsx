// components/AddBlog.jsx
import './css/AddBlog.css';
const AddBlog = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const content = event.target.content.value;

        // Here you would typically send the data to your server
        console.log('Blog Title:', title);
        console.log('Blog Content:', content);

        // Reset the form after submission
        event.target.reset();
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