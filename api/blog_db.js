const { MongoClient, ObjectId } = require('mongodb')

const connectionStr =
    'mongodb+srv://Lucas:LuTFQVwWh2U9Dcer@grupp3labcluster.wa4jd6z.mongodb.net/'
const client = new MongoClient(connectionStr)
const db = client.db('Blogg')
const collection = db.collection('BloggPosts')
const Blog = require('./models/blogModel')
client.connect()
async function GetAll() {
    let data = await collection.find().toArray()
    return data
}

async function addPost(data) {
    const blog = new Blog(data)
    const result = await collection.insertOne(blog)
    return result
}

async function deleteOne(_id) {
    let result = await collection.deleteOne({ _id: new ObjectId(_id) })
    return result
}
async function updateOne(_id, data) {
    if (!(_id && data)) {
        throw 'You can not update a blog without an id or data'
    }

    return await collection.updateOne(
        { _id: new ObjectId(_id) },
        {
            $set: data
        }
    )
}

module.exports = { GetAll, addPost, updateOne, deleteOne }
