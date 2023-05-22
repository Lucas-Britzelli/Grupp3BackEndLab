const mongoose = require('mongoose')
const Blog = require('./models/blogModel')
const connection = 'mongodb+srv://Lucas:LuTFQVwWh2U9Dcer@grupp3labcluster.wa4jd6z.mongodb.net/'

module.exports = () => {
    return mongoose.connect(connection)
}
async function GetAll(){
    Blog.find().then(data => res.send(data)).catch(err => console.log(err))
}

module.exports = GetAll
