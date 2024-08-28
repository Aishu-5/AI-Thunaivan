import React, { useEffect, useState } from 'react'
import BlogView from './BlogView'

export default function Tech() {
    const [blogs, setBlogs] = useState(null)
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/blogs')
            const json = await response.json()

            if (response.ok) {
                setBlogs(json)
            }
        }
        fetchBlogs();
    }, [])
    return (
        <div className='text-white h-screen'>
            <div className='relative bg-blue-100'>
                {blogs && blogs.map((blog) => (

                    <BlogView key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}
