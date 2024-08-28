import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
export default function BlogView({ blog }) {
    return (
        <div className='relative bg-blue-200 p-5 m-10 border-y-4 border-x-4 border-blue-900 text-black items-center rounded-lg'>
            <p className='text-3xl text-black font-bold'>{blog.title}</p>
            <p className='text-xl'>-By {blog.author}</p>
            <div className='flex space-x-1'>
                <div className='h-8 w-8'><HeartIcon /></div>
                <p className='font-semibold'>{blog.likes} likes</p>
            </div>
            <p className='font-semibold'>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
            <p>{blog.body}</p>
            <button className='p-3 m-3 bg-blue-400 rounded-md cursor-pointer border border-black'>Read More</button>

        </div>
    )
}
