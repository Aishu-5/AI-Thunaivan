const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel')

const { createBlog, getBlog, getBlogs } = require('../controllers/blogController')

// {BLOGS}
//Get all blogs
router.get('/', getBlogs)
//Get single blog
router.get('/:id', getBlog)
//post a new workout
router.post('/addblog', createBlog)


module.exports = router;
