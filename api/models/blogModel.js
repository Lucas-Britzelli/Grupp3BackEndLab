const mongoose = require('mongoose');

const kommentarerSchema = new mongoose.Schema({
  postId: {
    type: ObjectId,
    required: true
  },
  userId: {
    type: ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Kommentarer = mongoose.model('Kommentar', kommentarerSchema);


const postsSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Posts = mongoose.model('Post', postsSchema);




const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Users = mongoose.model('User', UserSchema);

module.exports = Users, Kommentarer, Posts;
