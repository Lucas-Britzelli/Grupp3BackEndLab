const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    userName: String,
    content: String,
    comments: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', blogSchema)
