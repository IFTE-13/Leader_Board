import React from 'react';
import fakeBlog from '../Data/fakeBlog';
import BProcess from './BProcess';

const Blog = () => {
    return (
        <>
            <h2 className="text-center">FROM YOU</h2>
            <div className="d-flex justify-content-around">
                <div className="row container">
                    {
                        fakeBlog.map(blog => <BProcess blog={blog}></BProcess>)
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;