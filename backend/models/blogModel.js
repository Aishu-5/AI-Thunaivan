const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // domain: {
    //     type: String,
    //     required:true  
    // },
    author: {
        type: String,
        required: true
    },
    thumbnail: {
        data: Buffer,
        contentType: String,
        required: false
    },
    likes: {
        type: Number
    },
    body: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)