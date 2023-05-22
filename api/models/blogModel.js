const mongoose = require('mongoose');

const BlogPostsSchema = new mongoose.Schema({
  userName: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  Comments: Number
});

const BlogPosts = mongoose.model('BlogPosts', BlogPostsSchema);

module.exports = BlogPosts;
