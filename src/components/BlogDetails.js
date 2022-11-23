import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DNE from "./DNE";

const BlogDetails = () => {
    const { id } = useParams()
    const { data:blog, err, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className='blog-details'>
            {isLoading && <div>Loading...</div>}
            {err && <DNE />}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writen by: {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            {!err && <button onClick={handleClick}>Delete Blog</button>}
        </div>
    );
}
 
export default BlogDetails
