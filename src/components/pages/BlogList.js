import React from "react";
import blogs from '../assets/data';

const BlogList = () => {
    return (
        <div>
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-post">
                        <h2>{blog.title}</h2>
                        <div className="blog-content">
                            {blog.body}
                        </div>
                        <div className="blog-date">
                            {blog.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;


