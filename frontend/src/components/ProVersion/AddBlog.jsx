import React from 'react'
import { Link } from 'react-router-dom'

const AddBlog = () => {
    return (
        <div>
            <h1 className='font-bold text-indigo-600 text-4xl pb-5'>Add Blogs</h1>
            <p className='text-2xl mb-4'>
                People are Curious. Not all blogs are companies trying to sell something. In fact, even the blogs that are companies selling products often have a good mix of non-business related topics as well (if they're doing it right!) Many people surf the web and read blogs to fulfill their own curiosity.
            </p>
            <Link to='/proweguide/addBlog'>
                <button className='bg-indigo-300 rounded-full p-3'>Add your blog!</button>
            </Link>
        </div>
    )
}

export default AddBlog