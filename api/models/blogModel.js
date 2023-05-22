const mongoose = require('mongoose')

const BlogPostsSchema = new mongoose.Schema({
    userName: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: Number
})


module.exports = mongoose.model('Blog', BlogPostsSchema)
