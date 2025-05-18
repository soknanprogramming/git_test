import './css/Home.css'
import BlogList from './BlogList'
const Home = () => {
    return (
        <div className="home">
            <BlogList title="All Blogs!" context="Welcome to the blog" />
            <BlogList title="My Blog!" context="Welcome to my blog" />
        </div>
    )
}

export default Home;