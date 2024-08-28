// import { set } from 'date-fns'
import React, { useState } from 'react'

export const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    // const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog = { title, author, body }
        const response = await fetch('/blogs/addblog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (response.ok) {
            setTitle("")
            setAuthor("")
            setBody("")
        }
        // setError(null)
        if (response.ok) {
            console.log("New blog added", json)
        }

        // }

    }

    return (
        <div className='relative'>
            <img
                className='h-screen w-full'
                src='https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='bg' />
            <div className=''>
                <form
                    className='absolute left-0 top-0 bottom-0 text-gray-300 font-serif'
                    onSubmit={handleSubmit}>
                    <h1 className='text-6xl mt-10 ml-10 font-semibold '>Add a new Blog</h1>
                    <div className='flex flex-col'>
                        <label className='form-label'>Title of your blog</label>
                        <input
                            className='form-input'
                            placeholder="Add title of your blog"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />

                        <label className='form-label'>Author Name</label>
                        <input
                            className='form-input'
                            placeholder='Add your name'
                            type="text"
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                        />

                        <label className='form-label'>Content of your blog</label>
                        <textarea
                            className='form-input'
                            placeholder='Content of your blog'
                            rows={6}
                            type="text"
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                        />
                        <button className='form-button '>Add my Blog</button>
                        <a className='form-button text-center bg-gray-200' href='/blogs'>See all blogs</a>
                    </div>

                </form>
            </div>


        </div>


    )
}

