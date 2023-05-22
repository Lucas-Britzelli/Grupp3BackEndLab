const mongoose = require('mongoose')
const { MongoClient, ObjectId } = require('mongodb')

const connectionStr =
    'mongodb+srv://Lucas:LuTFQVwWh2U9Dcer@grupp3labcluster.wa4jd6z.mongodb.net/'
const client = new MongoClient(connectionStr)
const db = client.db('Blogg')
const collection = db.collection('BloggPosts')
const Blog = require('./models/blogModel')

async function GetAll() {
    let data = await collection.find().toArray()
    return data
}

async function addPost(data) {
    const Blogpost = new Blog(data)
    const result = await collection.insertOne(Blogpost)
    return result
}

module.exports = {GetAll, addPost}
