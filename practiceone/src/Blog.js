import { useState } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {title:'my new website', body:'lorem is coming fomr the vai i n hawwaai', author: 'Aginga', id:1},
        {title:'welcome home', body:'lorem is coming fomr the vai i n hawwaai', author: 'Madiang', id:2},
        {title:'developers ytools', body:'lorem is coming fomr the vai i n hawwaai', author: 'Brian', id:3}

    ]);

    return(
        <div className="blog">
        {blogs.map( (blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written {blog.author }</p>
            </div>
        )

        )}

        </div>
    )
}

export default Blog;
