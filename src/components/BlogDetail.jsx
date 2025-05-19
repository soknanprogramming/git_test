import { useParams } from 'react-router-dom';
const BlogDetail = () => {
    const { id } = useParams();
    
    return(
        <div>
            <h1>id is {id}</h1>
        </div>
    )
}

export default BlogDetail