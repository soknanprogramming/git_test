import './css/Home.css'
import BlogList from './BlogList'
import useFetch from './func/useFetch'
const Home = () => {
    const { data, loading, error } = useFetch('http://localhost:3000/api/blogs')
    // console.log(`Home->data`)
    // console.log(data)
    // console.log(`Home->error`)
    // console.log(error)
    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {data && data.map((blog) => (
                <BlogList blog={blog} key={blog._id}/>)
            )}
        </div>
    )
}

export default Home