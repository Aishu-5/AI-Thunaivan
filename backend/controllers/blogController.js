const Blog = require('../models/blogModel')
const mongoose = require('mongoose');

//get all Blogs
const getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({ createdAt: -1 })
    res.status(200).json(blogs)
}

//get single Blog
const getBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ mssg: 'No such blog' })
    }
    const blog = await Blog.findById(id)
    if (!blog) {
        return res.status(404).json({ mssg: 'No such blog' })
    }
    return res.status(200).json(blog)
}


//post a new Blog
const createBlog = async (req, res) => {

    const { title, author, likes, body } = req.body;
    //ADD DOC TO DB
    try {
        const blog = await Blog.create({ title, author, likes, body })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = {
    createBlog, getBlog, getBlogs
}