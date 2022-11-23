import BlogList from './BlogList';
import useFetch from '../hooks/useFetch'

const Home = () => {
    const { data: blogs, isLoading, err} = useFetch('http://localhost:8000/blogs')
    // const deleteBlog = (blogId) => {
    //     const newBlogList = blogs.filter(blog =>  blog.id !== blogId)
    //     setBlogs(newBlogList)
    // }

    return (
        <div className='home'>
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            {/* <Bloglist deleteBlog={deleteBlog} blogs={blogs.filter(blog => {return blog.author === 'tom'})} title="tom's blogs"/> */}
            {isLoading && <div>Loading...</div>}
            {err && <div>{err}</div>}
        </div>
    );
}
 
export default Home;

